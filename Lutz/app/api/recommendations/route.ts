import { type NextRequest, NextResponse } from "next/server";

// Mock perfume database
const PERFUME_DATABASE = [
  {
    id: "1",
    name: "Chanel No. 5",
    description:
      "Classic floral aldehyde with notes of ylang-ylang, rose, and sandalwood",
    category: "floral",
  },
  {
    id: "2",
    name: "Dior Sauvage",
    description: "Fresh spicy fragrance with bergamot, pepper, and ambroxan",
    category: "fresh",
  },
  {
    id: "3",
    name: "Tom Ford Black Orchid",
    description:
      "Luxurious dark floral with black orchid, chocolate, and patchouli",
    category: "oriental",
  },
  {
    id: "4",
    name: "Creed Aventus",
    description: "Sophisticated fruity scent with pineapple, birch, and musk",
    category: "fruity",
  },
  {
    id: "5",
    name: "Yves Saint Laurent Black Opium",
    description:
      "Addictive coffee vanilla with black coffee, vanilla, and white flowers",
    category: "gourmand",
  },
  {
    id: "6",
    name: "Maison Margiela Replica Jazz Club",
    description: "Warm smoky ambiance with tobacco, rum, and vanilla",
    category: "woody",
  },
  {
    id: "7",
    name: "Hermès Terre d'Hermès",
    description: "Earthy citrus blend with orange, flint, and cedar",
    category: "citrus",
  },
  {
    id: "8",
    name: "Viktor & Rolf Flowerbomb",
    description: "Explosive floral bouquet with jasmine, rose, and patchouli",
    category: "floral",
  },
  {
    id: "9",
    name: "Byredo Gypsy Water",
    description: "Woody aromatic journey with bergamot, juniper, and vanilla",
    category: "woody",
  },
  {
    id: "10",
    name: "Le Labo Santal 33",
    description:
      "Creamy sandalwood signature with sandalwood, cedar, and cardamom",
    category: "woody",
  },
];

// Enhanced AI recommendation function using Gemini Pro API
async function getAIRecommendations(likedPerfumes: string[], season: string) {
  // Find all selected perfumes
  const perfumes = PERFUME_DATABASE.filter((p) => likedPerfumes.includes(p.id));
  if (perfumes.length === 0) {
    throw new Error("No perfumes found");
  }

  // Construct the prompt for Gemini
  const perfumeList = perfumes
    .map((p) => `${p.name} (${p.description})`)
    .join(", ");

  const prompt = `You are a professional perfume consultant. Based on the following information, recommend 3 unique perfumes that would complement the user's taste:

User's liked perfumes: ${perfumeList}
Preferred season: ${season}

Please provide exactly 3 perfume recommendations in the following JSON format:
[
  {
    "name": "Perfume Name",
    "description": "Detailed description explaining why this perfume suits their taste and the season, including key notes and mood"
  }
]

Make sure each recommendation:
- Is different from their current selections
- Suits the ${season} season
- Complements their existing taste profile
- Includes specific fragrance notes and characteristics
- Explains why it's a good match for them

Return only the JSON array, no additional text.`;

  try {
    // Try gemini-1.5-flash first for potentially higher free-tier limits
    const primaryResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    let response = primaryResponse;

    if (!primaryResponse.ok) {
      const errorBody = await primaryResponse
        .json()
        .catch(() => ({ message: "Unknown error" }));
      console.error(
        "Primary Gemini API (flash) error details:",
        JSON.stringify(errorBody, null, 2)
      );

      // If flash fails, try gemini-pro as a fallback
      console.log("Primary model (flash) failed, trying fallback (pro)...");
      const fallbackResponse = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt,
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 1024,
            },
          }),
        }
      );
      response = fallbackResponse; // Use fallback response for further processing
      if (!fallbackResponse.ok) {
        const fallbackErrorBody = await fallbackResponse
          .json()
          .catch(() => ({ message: "Unknown error" }));
        console.error(
          "Fallback Gemini API (pro) error details:",
          JSON.stringify(fallbackErrorBody, null, 2)
        );
        throw new Error(
          `Gemini API error: ${fallbackResponse.status} ${
            fallbackResponse.statusText
          } - ${fallbackErrorBody.error?.message || fallbackErrorBody.message}`
        );
      }
    }

    const data = await response.json();

    if (
      !data.candidates ||
      !data.candidates[0] ||
      !data.candidates[0].content
    ) {
      console.error("Invalid Gemini response:", JSON.stringify(data, null, 2));
      throw new Error("Invalid response format from Gemini API");
    }

    const generatedText = data.candidates[0].content.parts[0].text;

    const cleanedText = generatedText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Parse the JSON response from Gemini
    try {
      const recommendations = JSON.parse(cleanedText);

      // Validate the response format
      if (!Array.isArray(recommendations) || recommendations.length === 0) {
        throw new Error("Invalid recommendations format");
      }

      // Ensure each recommendation has required fields
      const validatedRecommendations = recommendations.map((rec) => ({
        name: rec.name || "Unknown Perfume",
        description: rec.description || "No description available",
      }));

      return validatedRecommendations;
    } catch (parseError) {
      console.error("Failed to parse Gemini response:", parseError);
      console.error("Raw response:", generatedText);
      // Fallback to a simple text-based response if JSON parsing fails
      return [
        {
          name: "AI-Generated Recommendation",
          description: generatedText,
        },
      ];
    }
  } catch (error) {
    console.error("Gemini API call failed:", error);
    throw error; // Re-throw the error to be caught by the POST handler
  }
}

export async function POST(request: NextRequest) {
  try {
    const { likedPerfumes, season } = await request.json();

    if (
      !likedPerfumes ||
      !Array.isArray(likedPerfumes) ||
      likedPerfumes.length === 0 ||
      !season
    ) {
      return NextResponse.json(
        { error: "Missing required parameters or invalid perfume selection" },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY environment variable is not set");
      return NextResponse.json(
        { error: "AI service configuration error" },
        { status: 500 }
      );
    }

    const recommendations = await getAIRecommendations(likedPerfumes, season);

    return NextResponse.json({
      recommendations,
      selectedPerfumes: likedPerfumes,
      selectedSeason: season,
    });
  } catch (error) {
    console.error("Error generating recommendations in POST handler:", error);
    // Check if the error message contains "429" to return the correct status code
    const statusCode =
      error instanceof Error && error.message.includes("429") ? 429 : 500;
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to generate recommendations",
      },
      { status: statusCode }
    );
  }
}
