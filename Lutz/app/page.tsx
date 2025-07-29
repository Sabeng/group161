"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkles, Heart } from "lucide-react";

interface Perfume {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface Recommendation {
  name: string;
  description: string;
}

const PERFUMES: Perfume[] = [
  {
    id: "1",
    name: "Chanel No. 5",
    description: "Classic floral aldehyde",
    image: "/images/c5.jpg",
  },
  {
    id: "2",
    name: "Dior Sauvage",
    description: "Fresh spicy fragrance",
    image: "/images/savage.jpg",
  },
  {
    id: "3",
    name: "Tom Ford Black Orchid",
    description: "Luxurious dark floral",
    image: "/images/blackorkid.jpg",
  },
  {
    id: "4",
    name: "Creed Aventus",
    description: "Sophisticated fruity scent",
    image: "/images/aventus.jpg",
  },
  {
    id: "5",
    name: "Yves Saint Laurent Black Opium",
    description: "Addictive coffee vanilla",
    image: "/images/Yves.jpg",
  },
  {
    id: "6",
    name: "Maison Margiela Replica Jazz Club",
    description: "Warm smoky ambiance",
    image: "/images/jazzclub.jpg",
  },
  {
    id: "7",
    name: "Hermès Terre d'Hermès",
    description: "Earthy citrus blend",
    image: "/images/hermes.jpg",
  },
  {
    id: "8",
    name: "Viktor & Rolf Flowerbomb",
    description: "Explosive floral bouquet",
    image: "/images/viktor.jpg?",
  },
  {
    id: "9",
    name: "Byredo Gypsy Water",
    description: "Woody aromatic journey",
    image: "/images/Gypsywater.jpg?",
  },
  {
    id: "10",
    name: "Le Labo Santal 33",
    description: "Creamy sandalwood signature",
    image: "/images/santal.jpg?",
  },
];

const SEASONS = [
  { value: "spring", label: "Spring" },
  { value: "summer", label: "Summer" },
  { value: "autumn", label: "Autumn" },
  { value: "winter", label: "Winter" },
];

export default function Home() {
  const [selectedPerfumes, setSelectedPerfumes] = useState<string[]>([]);
  const [selectedSeason, setSelectedSeason] = useState<string>("");
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  const handleLutzla = async () => {
    if (selectedPerfumes.length === 0 || !selectedSeason) {
      setErrorMessage("Please select at least one perfume and a season.");
      return;
    }
    setErrorMessage(null);
    setIsLoading(true);
    setRetryCount(0); // Reset retry count for a new request
    await fetchRecommendations(0);
  };

  const fetchRecommendations = async (currentRetry: number) => {
    try {
      const response = await fetch("/api/recommendations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          likedPerfumes: selectedPerfumes,
          season: selectedSeason,
        }),
      });

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ error: "Unknown error occurred." }));
        let message = errorData.error || "Failed to get recommendations.";

        if (response.status === 429) {
          const retryAfterSeconds =
            errorData.error?.details?.[2]?.retryDelay?.replace("s", "") || 18; // Extract retry delay
          message = `You've exceeded the API quota. Retrying in ${retryAfterSeconds} seconds... (Attempt ${
            currentRetry + 1
          }/${MAX_RETRIES})`;
          setErrorMessage(message);

          if (currentRetry < MAX_RETRIES) {
            const delay =
              Number.parseInt(retryAfterSeconds) * 1000 ||
              1000 * Math.pow(2, currentRetry); // Exponential backoff
            setTimeout(() => fetchRecommendations(currentRetry + 1), delay);
            return; // Exit to prevent further processing until retry
          } else {
            message = `You've exceeded the API quota after multiple retries. Please wait a moment and try again, or check your Google Cloud billing for higher limits.`;
            setErrorMessage(message);
          }
        } else {
          setErrorMessage(message);
        }
        throw new Error(message);
      }

      const data = await response.json();
      setRecommendations(data.recommendations);
      setErrorMessage(null); // Clear error on success
    } catch (error) {
      console.error("Error getting recommendations:", error);
      if (!errorMessage || !errorMessage.includes("Retrying")) {
        // Only set generic error if not already retrying
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      if (
        currentRetry >= MAX_RETRIES ||
        (errorMessage && !errorMessage.includes("Retrying"))
      ) {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Header */}
      <header className="border-b border-rose-100 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-amber-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                Lutz
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Lutz: Your scent defines you.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover your perfect fragrance match based on your preferences and
            the season
          </p>
        </div>

        {/* Selection Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-rose-200 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">
                Find Your Perfect Scent
              </CardTitle>
              <CardDescription>
                Select a perfume you love and your preferred season to get
                personalized recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    <Heart className="w-4 h-4 inline mr-2" />
                    Perfumes You Like (Select multiple)
                  </label>
                  <div className="space-y-2">
                    <Select
                      value=""
                      onValueChange={(value) => {
                        if (value && !selectedPerfumes.includes(value)) {
                          setSelectedPerfumes([...selectedPerfumes, value]);
                        }
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Add perfumes you love" />
                      </SelectTrigger>
                      <SelectContent>
                        {PERFUMES.filter(
                          (perfume) => !selectedPerfumes.includes(perfume.id)
                        ).map((perfume) => (
                          <SelectItem key={perfume.id} value={perfume.id}>
                            <div className="flex items-center space-x-3">
                              <img
                                src={perfume.image || "/placeholder.svg"}
                                alt={perfume.name}
                                className="w-8 h-8 rounded object-cover"
                              />
                              <div>
                                <div className="font-medium">
                                  {perfume.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {perfume.description}
                                </div>
                              </div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {/* Selected perfumes display */}
                    {selectedPerfumes.length > 0 && (
                      <div className="flex flex-wrap gap-2 p-3 bg-rose-50 rounded-lg border border-rose-200">
                        {selectedPerfumes.map((perfumeId) => {
                          const perfume = PERFUMES.find(
                            (p) => p.id === perfumeId
                          );
                          return perfume ? (
                            <div
                              key={perfumeId}
                              className="flex items-center space-x-2 bg-white px-3 py-1 rounded-full border border-rose-300 text-sm"
                            >
                              <img
                                src={perfume.image || "/placeholder.svg"}
                                alt={perfume.name}
                                className="w-5 h-5 rounded object-cover"
                              />
                              <span className="font-medium">
                                {perfume.name}
                              </span>
                              <button
                                onClick={() =>
                                  setSelectedPerfumes(
                                    selectedPerfumes.filter(
                                      (id) => id !== perfumeId
                                    )
                                  )
                                }
                                className="text-rose-500 hover:text-rose-700 ml-1"
                              >
                                ×
                              </button>
                            </div>
                          ) : null;
                        })}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    <Sparkles className="w-4 h-4 inline mr-2" />
                    Season
                  </label>
                  <Select
                    value={selectedSeason}
                    onValueChange={setSelectedSeason}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your season" />
                    </SelectTrigger>
                    <SelectContent>
                      {SEASONS.map((season) => (
                        <SelectItem key={season.value} value={season.value}>
                          {season.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="text-center pt-4">
                <Button
                  onClick={handleLutzla}
                  disabled={
                    isLoading ||
                    selectedPerfumes.length === 0 ||
                    !selectedSeason
                  }
                  className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {isLoading ? "Finding your scent..." : "Let's Lutz"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Error message display */}
        {errorMessage && (
          <div className="max-w-4xl mx-auto mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md text-center">
            {errorMessage}
          </div>
        )}

        {/* Recommendations Section */}
        {recommendations.length > 0 && (
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Your Personalized Recommendations
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {recommendations.map((rec, index) => (
                <Card
                  key={index}
                  className="border-amber-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">
                      {rec.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {rec.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Selected Perfumes Display */}
        {selectedPerfumes.length > 0 && (
          <div className="max-w-2xl mx-auto mt-8">
            <Card className="border-rose-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">
                  Your Selected Perfumes ({selectedPerfumes.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {selectedPerfumes.map((perfumeId) => {
                    const perfume = PERFUMES.find((p) => p.id === perfumeId);
                    return perfume ? (
                      <div
                        key={perfumeId}
                        className="flex items-center space-x-4 p-3 bg-rose-50 rounded-lg"
                      >
                        <img
                          src={perfume.image || "/placeholder.svg"}
                          alt={perfume.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">
                            {perfume.name}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {perfume.description}
                          </p>
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
