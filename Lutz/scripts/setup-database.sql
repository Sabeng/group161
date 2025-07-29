-- Create perfumes table
CREATE TABLE IF NOT EXISTS perfumes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(500),
    category VARCHAR(100),
    notes TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample perfume data
INSERT INTO perfumes (name, description, image_url, category, notes) VALUES
('Chanel No. 5', 'Classic floral aldehyde with notes of ylang-ylang, rose, and sandalwood', '/images/chanel-no5.jpg', 'floral', ARRAY['ylang-ylang', 'rose', 'sandalwood', 'aldehydes']),
('Dior Sauvage', 'Fresh spicy fragrance with bergamot, pepper, and ambroxan', '/images/dior-sauvage.jpg', 'fresh', ARRAY['bergamot', 'pepper', 'ambroxan', 'lavender']),
('Tom Ford Black Orchid', 'Luxurious dark floral with black orchid, chocolate, and patchouli', '/images/tf-black-orchid.jpg', 'oriental', ARRAY['black orchid', 'chocolate', 'patchouli', 'vanilla']),
('Creed Aventus', 'Sophisticated fruity scent with pineapple, birch, and musk', '/images/creed-aventus.jpg', 'fruity', ARRAY['pineapple', 'birch', 'musk', 'oakmoss']),
('Yves Saint Laurent Black Opium', 'Addictive coffee vanilla with black coffee, vanilla, and white flowers', '/images/ysl-black-opium.jpg', 'gourmand', ARRAY['coffee', 'vanilla', 'white flowers', 'cedar']),
('Maison Margiela Replica Jazz Club', 'Warm smoky ambiance with tobacco, rum, and vanilla', '/images/mm-jazz-club.jpg', 'woody', ARRAY['tobacco', 'rum', 'vanilla', 'pink pepper']),
('Hermès Terre d''Hermès', 'Earthy citrus blend with orange, flint, and cedar', '/images/hermes-terre.jpg', 'citrus', ARRAY['orange', 'flint', 'cedar', 'benzoin']),
('Viktor & Rolf Flowerbomb', 'Explosive floral bouquet with jasmine, rose, and patchouli', '/images/vr-flowerbomb.jpg', 'floral', ARRAY['jasmine', 'rose', 'patchouli', 'freesia']),
('Byredo Gypsy Water', 'Woody aromatic journey with bergamot, juniper, and vanilla', '/images/byredo-gypsy.jpg', 'woody', ARRAY['bergamot', 'juniper', 'vanilla', 'sandalwood']),
('Le Labo Santal 33', 'Creamy sandalwood signature with sandalwood, cedar, and cardamom', '/images/lelabo-santal33.jpg', 'woody', ARRAY['sandalwood', 'cedar', 'cardamom', 'iris']);

-- Create user preferences table (for future use)
CREATE TABLE IF NOT EXISTS user_preferences (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255),
    liked_perfumes INTEGER[],
    preferred_seasons VARCHAR(50)[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create recommendations history table
CREATE TABLE IF NOT EXISTS recommendations_history (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255),
    liked_perfume_id INTEGER REFERENCES perfumes(id),
    season VARCHAR(50),
    recommendations JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
