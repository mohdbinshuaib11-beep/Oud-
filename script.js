/**
 * ATIYAB AL-MADINA PERFUMES (أطياب المدينة للعطور)
 * Pure Vanilla JavaScript E-Commerce Catalogue & WhatsApp Ordering Engine
 * Compatible with GitHub Pages static hosting (Zero build required).
 */

// ==========================================
// 1. EDITABLE BUSINESS CONFIGURATION
// ==========================================
const CONFIG = {
  // WhatsApp Business Number (International format without '+' or spaces, e.g. "96891234567")
  WHATSAPP_NUMBER: "REPLACE_WITH_CLIENT_NUMBER",
  
  // Brand Names
  BRAND_NAME_EN: "Atiyab Al-Madina Perfumes",
  BRAND_NAME_AR: "أطياب المدينة للعطور",
  
  // Business Information (Placeholders ready to update)
  PHONE_DISPLAY: "+968 (Contact on WhatsApp)",
  EMAIL: "info@atiyabalmadina.com",
  INSTAGRAM_URL: "https://instagram.com/atiyab_almadina",
  LOCATION: "Muscat, Sultanate of Oman",
  OPENING_HOURS: "Saturday – Thursday: 10:00 AM – 10:00 PM | Friday: 4:30 PM – 10:30 PM",
  
  // Currency
  CURRENCY: "OMR"
};

// ==========================================
// 2. COMPLETE PRODUCT CATALOGUE (48 ACTUAL PRODUCTS)
// Accurately sourced from the client's official catalogue sheet
// ==========================================
const PRODUCTS = [
  // --- ROW 1: OUD COLLECTION (1 - 10) ---
  {
    id: 1,
    itemNumber: 1,
    name: "Royal Oud",
    arabicName: "رويال عود",
    category: "Oud",
    subtitle: "Pure Cambodian Oud",
    notes: "Woody · Amber · Spicy",
    priceOman: 45.0,
    priceDisplay: "OMR 45.000",
    image: "assets/products/product_01.jpg",
    cardImage: "assets/products/card_01.jpg",
    description: "A prestigious presentation of authentic Cambodian agarwood, boasting deep resinous woods accompanied by golden amber facets and precious warming oriental spices."
  },
  {
    id: 2,
    itemNumber: 2,
    name: "Black Oud",
    arabicName: "بلاك عود",
    category: "Oud",
    subtitle: "A bold and intense oud blend",
    notes: "Woody · Leather · Amber",
    priceOman: 40.0,
    priceDisplay: "OMR 40.000",
    image: "assets/products/product_02.jpg",
    cardImage: "assets/products/card_02.jpg",
    description: "A commanding and robust oud composition intertwining dark woods, supple burnished leather, and glowing amber for an intense, unforgettable trail."
  },
  {
    id: 3,
    itemNumber: 3,
    name: "Sultan Oud",
    arabicName: "سلطان عود",
    category: "Oud",
    subtitle: "Royal oud with oriental spices",
    notes: "Oud · Spicy · Warm",
    priceOman: 42.0,
    priceDisplay: "OMR 42.000",
    image: "assets/products/product_03.jpg",
    cardImage: "assets/products/card_03.jpg",
    description: "Fit for royalty, this majestic blend pairs rich aged agarwood with an opulent bouquet of warming Arabian spices and balsamic oriental resins."
  },
  {
    id: 4,
    itemNumber: 4,
    name: "Desert Oud",
    arabicName: "عود الصحراء",
    category: "Oud",
    subtitle: "Deep and mysterious",
    notes: "Oud · Sandalwood · Musk",
    priceOman: 38.0,
    priceDisplay: "OMR 38.000",
    image: "assets/products/product_04.jpg",
    cardImage: "assets/products/card_04.jpg",
    description: "Evoking the tranquil grandeur of Arabian desert dunes under twilight, featuring smoky agarwood softened by creamy sandalwood and soft musk."
  },
  {
    id: 5,
    itemNumber: 5,
    name: "Oud Al Fajr",
    arabicName: "عود الفجر",
    category: "Oud",
    subtitle: "A new day, a new beginning",
    notes: "Oud · Citrus · Amber",
    priceOman: 36.0,
    priceDisplay: "OMR 36.000",
    image: "assets/products/product_05.jpg",
    cardImage: "assets/products/card_05.jpg",
    description: "Capturing the serene clarity of early dawn with sparkling Mediterranean citrus transitioning smoothly into warm oud and lingering golden amber."
  },
  {
    id: 6,
    itemNumber: 6,
    name: "Midnight Oud",
    arabicName: "ميدنايت عود",
    category: "Oud",
    subtitle: "Rich and captivating",
    notes: "Oud · Rose · Patchouli",
    priceOman: 44.0,
    priceDisplay: "OMR 44.000",
    image: "assets/products/product_06.jpg",
    cardImage: "assets/products/card_06.jpg",
    description: "An alluring evening fragrance uniting velvety Damascus rose petals with rich earth-toned patchouli and deep, seductive agarwood."
  },
  {
    id: 7,
    itemNumber: 7,
    name: "Oud Harmony",
    arabicName: "عود هارموني",
    category: "Oud",
    subtitle: "Balance of tradition and modernity",
    notes: "Oud · Floral · Musk",
    priceOman: 37.0,
    priceDisplay: "OMR 37.000",
    image: "assets/products/product_07.jpg",
    cardImage: "assets/products/card_07.jpg",
    description: "An artful bridge between Gulf perfumery heritage and modern refinement, pairing delicate florals with anchoring oud and gentle white musk."
  },
  {
    id: 8,
    itemNumber: 8,
    name: "Imperial Oud",
    arabicName: "إمبريال عود",
    category: "Oud",
    subtitle: "For true connoisseurs",
    notes: "Oud · Leather · Amber",
    priceOman: 48.0,
    priceDisplay: "OMR 48.000",
    image: "assets/products/product_08.jpg",
    cardImage: "assets/products/card_08.jpg",
    description: "Crafted exclusively for dedicated fragrance connoisseurs, pairing mature agarwood oils with dark saddle leather and deep golden amber."
  },
  {
    id: 9,
    itemNumber: 9,
    name: "White Oud",
    arabicName: "العود الأبيض",
    category: "Oud",
    subtitle: "Soft, elegant and pure",
    notes: "Oud · Floral · Musk",
    priceOman: 39.0,
    priceDisplay: "OMR 39.000",
    image: "assets/products/product_09.jpg",
    cardImage: "assets/products/card_09.jpg",
    description: "A soft, luminous interpretation of oud wrapped in crystalline white floral petals and pristine skin-loving musk."
  },
  {
    id: 10,
    itemNumber: 10,
    name: "Oud Royale",
    arabicName: "عود رويال",
    category: "Oud",
    subtitle: "The king of fragrances",
    notes: "Oud · Amber · Vanilla",
    priceOman: 50.0,
    priceDisplay: "OMR 50.000",
    image: "assets/products/product_10.jpg",
    cardImage: "assets/products/card_10.jpg",
    description: "A pinnacle masterpiece uniting sovereign agarwood with comforting vanilla bean and luminous amber, offering exceptional sillage."
  },

  // --- ROW 2: MUSK & AMBER COLLECTION (11 - 20) ---
  {
    id: 11,
    itemNumber: 11,
    name: "Musk Al Tahara",
    arabicName: "مسك الطهارة",
    category: "Musk",
    subtitle: "Clean and refreshing",
    notes: "Musk · Floral · Powdery",
    priceOman: 32.0,
    priceDisplay: "OMR 32.000",
    image: "assets/products/product_11.jpg",
    cardImage: "assets/products/card_11.jpg",
    description: "The classic symbol of pristine freshness, greeting the skin with silky floral nuances, soft cosmetic powder, and long-lasting white musk."
  },
  {
    id: 12,
    itemNumber: 12,
    name: "White Musk",
    arabicName: "المسك الأبيض",
    category: "Musk",
    subtitle: "Soft, soothing, elegant",
    notes: "Musk · Vanilla · Amber",
    priceOman: 30.0,
    priceDisplay: "OMR 30.000",
    image: "assets/products/product_12.jpg",
    cardImage: "assets/products/card_12.jpg",
    description: "A soothing and gentle scent enveloping the wearer in comforting vanilla pods, airy musk, and whisper-soft amber."
  },
  {
    id: 13,
    itemNumber: 13,
    name: "Musk Rose",
    arabicName: "مسك روز",
    category: "Musk",
    subtitle: "A delicate floral musk",
    notes: "Rose · Musk · Amber",
    priceOman: 34.0,
    priceDisplay: "OMR 34.000",
    image: "assets/products/product_13.jpg",
    cardImage: "assets/products/card_13.jpg",
    description: "An enchanting harmony of dewy Arabian garden roses cushioned by creamy white musk and subtle golden amber."
  },
  {
    id: 14,
    itemNumber: 14,
    name: "Arabian Musk",
    arabicName: "المسك العربي",
    category: "Musk",
    subtitle: "Pure and timeless",
    notes: "Musk · Sandalwood · Amber",
    priceOman: 33.0,
    priceDisplay: "OMR 33.000",
    image: "assets/products/product_14.jpg",
    cardImage: "assets/products/card_14.jpg",
    description: "A timeless Arabian fragrance pairing smooth sandalwood with warm sensual musk and traditional amber for daily elegance."
  },
  {
    id: 15,
    itemNumber: 15,
    name: "Musk Oud",
    arabicName: "مسك عود",
    category: "Musk",
    subtitle: "Fusion of musk and oud",
    notes: "Musk · Oud · Vanilla",
    priceOman: 36.0,
    priceDisplay: "OMR 36.000",
    image: "assets/products/product_15.jpg",
    cardImage: "assets/products/card_15.jpg",
    description: "A seamless fusion balancing the softness of white musk against the grounding depth of natural agarwood and warm vanilla."
  },
  {
    id: 16,
    itemNumber: 16,
    name: "Crystal Musk",
    arabicName: "كريستال مسك",
    category: "Musk",
    subtitle: "Fresh and long lasting",
    notes: "Musk · Citrus · Floral",
    priceOman: 31.0,
    priceDisplay: "OMR 31.000",
    image: "assets/products/product_16.jpg",
    cardImage: "assets/products/card_16.jpg",
    description: "Shimmering with vibrant citrus blossoms and crisp crystalline musk, delivering enduring freshness for warm climates."
  },
  {
    id: 17,
    itemNumber: 17,
    name: "Golden Musk",
    arabicName: "جولدن مسك",
    category: "Musk",
    subtitle: "Warm and sensual",
    notes: "Musk · Amber · Vanilla",
    priceOman: 35.0,
    priceDisplay: "OMR 35.000",
    image: "assets/products/product_17.jpg",
    cardImage: "assets/products/card_17.jpg",
    description: "A radiant and warm fragrance glowing with amber honey, sweet vanilla essence, and intoxicating golden musk."
  },
  {
    id: 18,
    itemNumber: 18,
    name: "Royal Musk",
    arabicName: "رويال مسك",
    category: "Musk",
    subtitle: "A symbol of purity",
    notes: "Musk · Floral · Powdery",
    priceOman: 37.0,
    priceDisplay: "OMR 37.000",
    image: "assets/products/product_18.jpg",
    cardImage: "assets/products/card_18.jpg",
    description: "A regal expression of noble purity, showcasing velvety floral accords, fine cosmetic powdery nuances, and imperial musk."
  },
  {
    id: 19,
    itemNumber: 19,
    name: "Amber Oud",
    arabicName: "عنبر عود",
    category: "Amber",
    subtitle: "Warm and comforting",
    notes: "Amber · Oud · Vanilla",
    priceOman: 36.0,
    priceDisplay: "OMR 36.000",
    image: "assets/products/product_19.jpg",
    cardImage: "assets/products/card_19.jpg",
    description: "A rich and comforting pairing of molten amber resin, noble agarwood, and smooth bourbon vanilla."
  },
  {
    id: 20,
    itemNumber: 20,
    name: "Amber Rose",
    arabicName: "عنبر روز",
    category: "Amber",
    subtitle: "Romantic and rich",
    notes: "Rose · Amber · Musk",
    priceOman: 36.0,
    priceDisplay: "OMR 36.000",
    image: "assets/products/product_20.jpg",
    cardImage: "assets/products/card_20.jpg",
    description: "Romantic crimson rose blossoms steeped in warm balsamic amber and soft cashmere musk."
  },

  // --- ROW 3: AMBER & BAKHOOR COLLECTION (21 - 30) ---
  {
    id: 21,
    itemNumber: 21,
    name: "Amber Gold",
    arabicName: "عنبر جولد",
    category: "Amber",
    subtitle: "Radiant and elegant",
    notes: "Amber · Floral · Woody",
    priceOman: 34.0,
    priceDisplay: "OMR 34.000",
    image: "assets/products/product_21.jpg",
    cardImage: "assets/products/card_21.jpg",
    description: "Sun-drenched and luminous, weaving golden amber warmth with blooming florals and dry cedarwood."
  },
  {
    id: 22,
    itemNumber: 22,
    name: "Amber Night",
    arabicName: "عنبر نايت",
    category: "Amber",
    subtitle: "Deep and seductive",
    notes: "Amber · Oud · Spicy",
    priceOman: 38.0,
    priceDisplay: "OMR 38.000",
    image: "assets/products/product_22.jpg",
    cardImage: "assets/products/card_22.jpg",
    description: "A seductive nocturnal blend of dark smouldering amber, warming oriental spices, and rich oud."
  },
  {
    id: 23,
    itemNumber: 24,
    name: "Pure Amber",
    arabicName: "بيور عنبر",
    category: "Amber",
    subtitle: "Simple yet luxurious",
    notes: "Amber · Vanilla · Musk",
    priceOman: 32.0,
    priceDisplay: "OMR 32.000",
    image: "assets/products/product_23.jpg",
    cardImage: "assets/products/card_23.jpg",
    description: "The essence of natural amber in its purest form, accented gently with creamy vanilla and velvet musk."
  },
  {
    id: 24,
    itemNumber: 25,
    name: "Royal Amber",
    arabicName: "رويال عنبر",
    category: "Amber",
    subtitle: "A regal experience",
    notes: "Amber · Oud · Sandalwood",
    priceOman: 42.0,
    priceDisplay: "OMR 42.000",
    image: "assets/products/product_24.jpg",
    cardImage: "assets/products/card_24.jpg",
    description: "An opulent blend bringing together aged golden amber, rare oud wood, and creamy royal sandalwood."
  },
  {
    id: 25,
    itemNumber: 26,
    name: "Sunlit Amber",
    arabicName: "صن ليت عنبر",
    category: "Amber",
    subtitle: "Bright and uplifting",
    notes: "Amber · Citrus · Floral",
    priceOman: 35.0,
    priceDisplay: "OMR 35.000",
    image: "assets/products/product_25.jpg",
    cardImage: "assets/products/card_25.jpg",
    description: "An uplifting creation capturing the golden sun with vibrant citrus zest, sweet florals, and bright amber."
  },
  {
    id: 26,
    itemNumber: 27,
    name: "Bakhoor Al Oudh",
    arabicName: "بخور العود",
    category: "Bakhoor",
    subtitle: "Traditional and rich",
    notes: "Oud · Incense · Wood",
    priceOman: 28.0,
    priceDisplay: "OMR 28.000",
    image: "assets/products/product_26.jpg",
    cardImage: "assets/products/card_26.jpg",
    description: "Authentic traditional incense chips infused with pure agarwood oil, precious resins, and sacred woods for aromatic home hospitality."
  },
  {
    id: 27,
    itemNumber: 28,
    name: "Bakhoor Rose",
    arabicName: "بخور روز",
    category: "Bakhoor",
    subtitle: "Floral and enchanting",
    notes: "Rose · Oud · Musk",
    priceOman: 26.0,
    priceDisplay: "OMR 26.000",
    image: "assets/products/product_27.jpg",
    cardImage: "assets/products/card_27.jpg",
    description: "Enchanting incense perfumed with sweet Damascus rose petals, subtle oud smoke, and soft white musk."
  },
  {
    id: 28,
    itemNumber: 29,
    name: "Bakhoor Amber",
    arabicName: "بخور عنبر",
    category: "Bakhoor",
    subtitle: "Warm and comforting",
    notes: "Amber · Oud · Smoke",
    priceOman: 27.0,
    priceDisplay: "OMR 27.000",
    image: "assets/products/product_28.jpg",
    cardImage: "assets/products/card_28.jpg",
    description: "Slow-burning fragrant incense releasing comforting waves of golden amber resin, sweet smoke, and precious cedar."
  },
  {
    id: 29,
    itemNumber: 30,
    name: "Bakhoor Royal",
    arabicName: "بخور رويال",
    category: "Bakhoor",
    subtitle: "Majestic and bold",
    notes: "Oud · Amber · Spices",
    priceOman: 30.0,
    priceDisplay: "OMR 30.000",
    image: "assets/products/product_29.jpg",
    cardImage: "assets/products/card_29.jpg",
    description: "A ceremonial royal bakhoor formulation packed with aged agarwood pieces, cardamom, cloves, and ambergris."
  },

  // --- ROW 4: FLORAL & PERFUME COLLECTION (31 - 39) ---
  {
    id: 30,
    itemNumber: 31,
    name: "Floral Oud",
    arabicName: "فلورال عود",
    category: "Perfumes",
    subtitle: "A perfect blend",
    notes: "Floral · Oud · Musk",
    priceOman: 36.0,
    priceDisplay: "OMR 36.000",
    image: "assets/products/product_30.jpg",
    cardImage: "assets/products/card_30.jpg",
    description: "A balanced union of blooming fresh garden florals with rich oud base notes and a velvet musk finish."
  },
  {
    id: 31,
    itemNumber: 32,
    name: "Rose Oud",
    arabicName: "روز عود",
    category: "Perfumes",
    subtitle: "Classic and romantic",
    notes: "Rose · Oud · Amber",
    priceOman: 38.0,
    priceDisplay: "OMR 38.000",
    image: "assets/products/product_31.jpg",
    cardImage: "assets/products/card_31.jpg",
    description: "The classic Arabian signature pairing lush velvet Taif roses with dark smoky agarwood and warm golden amber."
  },
  {
    id: 32,
    itemNumber: 33,
    name: "Jasmine Oud",
    arabicName: "ياسمين عود",
    category: "Perfumes",
    subtitle: "Floral and exotic",
    notes: "Jasmine · Oud · Musk",
    priceOman: 34.0,
    priceDisplay: "OMR 34.000",
    image: "assets/products/product_32.jpg",
    cardImage: "assets/products/card_32.jpg",
    description: "Heady night-blooming Arabian jasmine intertwined with earthy oud and smooth cashmere musk."
  },
  {
    id: 33,
    itemNumber: 34,
    name: "Lavender Oud",
    arabicName: "لافندر عود",
    category: "Perfumes",
    subtitle: "Calm and refreshing",
    notes: "Lavender · Oud · Amber",
    priceOman: 33.0,
    priceDisplay: "OMR 33.000",
    image: "assets/products/product_33.jpg",
    cardImage: "assets/products/card_33.jpg",
    description: "Calming French lavender blossoms grounded by earthy agarwood and golden amber for a tranquil presence."
  },
  {
    id: 34,
    itemNumber: 35,
    name: "Orchid Oud",
    arabicName: "أوركيد عود",
    category: "Perfumes",
    subtitle: "Rare and elegant",
    notes: "Orchid · Oud · Vanilla",
    priceOman: 42.0,
    priceDisplay: "OMR 42.000",
    image: "assets/products/product_34.jpg",
    cardImage: "assets/products/card_34.jpg",
    description: "Exotic nocturnal black orchid petals layered over rich Bourbon vanilla pods and deep agarwood."
  },
  {
    id: 35,
    itemNumber: 36,
    name: "White Flowers",
    arabicName: "الزهور البيضاء",
    category: "Perfumes",
    subtitle: "Fresh and feminine",
    notes: "Floral · Musk · Vanilla",
    priceOman: 32.0,
    priceDisplay: "OMR 32.000",
    image: "assets/products/product_35.jpg",
    cardImage: "assets/products/card_35.jpg",
    description: "A fresh and luminous bouquet of white gardenias and orange blossoms enveloped in sheer vanilla and gentle musk."
  },
  {
    id: 36,
    itemNumber: 37,
    name: "Peach Blossom",
    arabicName: "زهر الخوخ",
    category: "Perfumes",
    subtitle: "Sweet and delicate",
    notes: "Peach · Floral · Musk",
    priceOman: 30.0,
    priceDisplay: "OMR 30.000",
    image: "assets/products/product_36.jpg",
    cardImage: "assets/products/card_36.jpg",
    description: "Delicate spring peach nectar combined with sweet floral blossoms and an airy, comforting musk sillage."
  },
  {
    id: 37,
    itemNumber: 38,
    name: "Oud Blossom",
    arabicName: "عود بلوسوم",
    category: "Perfumes",
    subtitle: "Floral with a woody touch",
    notes: "Floral · Oud · Amber",
    priceOman: 36.0,
    priceDisplay: "OMR 36.000",
    image: "assets/products/product_37.jpg",
    cardImage: "assets/products/card_37.jpg",
    description: "Tender springtime blossoms enriched with a subtle woody oud base and glowing amber undertones."
  },
  {
    id: 38,
    itemNumber: 49,
    name: "Tuberose Oud",
    arabicName: "تيوب روز عود",
    category: "Perfumes",
    subtitle: "Elegant and graceful",
    notes: "Tuberose · Oud · Amber",
    priceOman: 50.0,
    priceDisplay: "OMR 50.000",
    image: "assets/products/product_38.jpg",
    cardImage: "assets/products/card_38.jpg",
    description: "Hypnotic imperial tuberose blossoms crowned with prestigious agarwood and rich amber in a luxury flacon."
  },

  // --- ROW 5: SIGNATURE & WOOD OUD COLLECTION (41 - 50) ---
  {
    id: 39,
    itemNumber: 41,
    name: "Sandal Oud",
    arabicName: "صندل عود",
    category: "Oud",
    subtitle: "Smooth and rich",
    notes: "Sandalwood · Oud · Vanilla",
    priceOman: 36.0,
    priceDisplay: "OMR 36.000",
    image: "assets/products/product_39.jpg",
    cardImage: "assets/products/card_39.jpg",
    description: "Creamy Mysore sandalwood paired seamlessly with natural oud wood and sweet Madagascar vanilla."
  },
  {
    id: 40,
    itemNumber: 42,
    name: "Vetiver Oud",
    arabicName: "فيتيفر عود",
    category: "Oud",
    subtitle: "Earthy and masculine",
    notes: "Vetiver · Oud · Musk",
    priceOman: 34.0,
    priceDisplay: "OMR 34.000",
    image: "assets/products/product_40.jpg",
    cardImage: "assets/products/card_40.jpg",
    description: "Earthy smoky vetiver root interwoven with rugged Cambodian oud and comforting mineral musk."
  },
  {
    id: 41,
    itemNumber: 43,
    name: "Tobacco Oud",
    arabicName: "توباكو عود",
    category: "Oud",
    subtitle: "Strong and charismatic",
    notes: "Tobacco · Oud · Amber",
    priceOman: 40.0,
    priceDisplay: "OMR 40.000",
    image: "assets/products/product_41.jpg",
    cardImage: "assets/products/card_41.jpg",
    description: "A charismatic signature featuring aromatic cured tobacco leaf, smouldering agarwood, and warm amber resin."
  },
  {
    id: 42,
    itemNumber: 44,
    name: "Leather Oud",
    arabicName: "ليذر عود",
    category: "Oud",
    subtitle: "Rugged and refined",
    notes: "Leather · Oud · Vanilla",
    priceOman: 42.0,
    priceDisplay: "OMR 42.000",
    image: "assets/products/product_42.jpg",
    cardImage: "assets/products/card_42.jpg",
    description: "Rugged burnished saddle leather blended with deeply resinous oud wood and a whisper of dark vanilla."
  },
  {
    id: 43,
    itemNumber: 45,
    name: "Spiced Oud",
    arabicName: "سبايسد عود",
    category: "Oud",
    subtitle: "Warm and spicy",
    notes: "Spices · Oud · Amber",
    priceOman: 38.0,
    priceDisplay: "OMR 38.000",
    image: "assets/products/product_43.jpg",
    cardImage: "assets/products/card_43.jpg",
    description: "Warm saffron, cardamom, and black pepper ignited across rich agarwood and molten amber."
  },
  {
    id: 44,
    itemNumber: 46,
    name: "Oud Wood",
    arabicName: "عود وود",
    category: "Oud",
    subtitle: "Deep and woody",
    notes: "Oud · Wood · Musk",
    priceOman: 37.0,
    priceDisplay: "OMR 37.000",
    image: "assets/products/product_44.jpg",
    cardImage: "assets/products/card_44.jpg",
    description: "An authentic tribute to rare woods: aged cedar, Brazilian rosewood, and agarwood anchored in clean musk."
  },
  {
    id: 45,
    itemNumber: 47,
    name: "Oud Noir",
    arabicName: "عود نوار",
    category: "Oud",
    subtitle: "Dark and mysterious",
    notes: "Oud · Leather · Amber",
    priceOman: 46.0,
    priceDisplay: "OMR 46.000",
    image: "assets/products/product_45.jpg",
    cardImage: "assets/products/card_45.jpg",
    description: "A mysterious, nocturnal fragrance emphasizing dense agarwood, dark leather, and balsamic labdanum."
  },
  {
    id: 46,
    itemNumber: 48,
    name: "Oud Intense",
    arabicName: "عود إنتنس",
    category: "Oud",
    subtitle: "Powerful and lasting",
    notes: "Oud · Spices · Amber",
    priceOman: 46.0,
    priceDisplay: "OMR 46.000",
    image: "assets/products/product_46.jpg",
    cardImage: "assets/products/card_46.jpg",
    description: "Concentrated for profound longevity, uniting robust oud oils with precious spices and glowing amber."
  },
  {
    id: 47,
    itemNumber: 49,
    name: "Oud Elixir",
    arabicName: "عود إكسير",
    category: "Oud",
    subtitle: "Pure luxury",
    notes: "Oud · Rose · Vanilla",
    priceOman: 60.0,
    priceDisplay: "OMR 60.000",
    image: "assets/products/product_47.jpg",
    cardImage: "assets/products/card_47.jpg",
    description: "A luxury extrait uniting wild aged agarwood with Damascus rose absolute and Tahitian vanilla bean."
  },
  {
    id: 48,
    itemNumber: 50,
    name: "Signature Oud",
    arabicName: "سيجنتشر عود",
    category: "Oud",
    subtitle: "The ultimate experience",
    notes: "Oud · Amber · Musk",
    priceOman: 60.0,
    priceDisplay: "OMR 60.000",
    image: "assets/products/product_48.jpg",
    cardImage: "assets/products/card_48.jpg",
    description: "The crown jewel of Atiyab Al-Madina, presenting the ultimate convergence of vintage oud, ambergris, and velvet skin musk."
  }
];

// ==========================================
// 3. APPLICATION STATE
// ==========================================
const state = {
  activeCategory: "All",
  searchQuery: "",
  sortBy: "default",
  cart: [],
  quantities: {} // productId -> quantity (default 1)
};

// Initialize quantities
PRODUCTS.forEach(p => {
  state.quantities[p.id] = 1;
});

// Load cart from localStorage if available
try {
  const savedCart = localStorage.getItem("atiyab_cart");
  if (savedCart) {
    state.cart = JSON.parse(savedCart);
  }
} catch (e) {
  console.warn("Storage not available");
}

function saveCart() {
  try {
    localStorage.setItem("atiyab_cart", JSON.stringify(state.cart));
  } catch (e) {}
}

// ==========================================
// 4. WHATSAPP LINK GENERATOR
// ==========================================
function getSingleWhatsAppUrl(product, quantity) {
  const qty = Math.max(1, quantity || 1);
  const total = (product.priceOman * qty).toFixed(3);
  
  const msg = 
`Hello ${CONFIG.BRAND_NAME_EN}!

I would like to enquire about this product from your catalogue:

• Product: ${product.itemNumber}. ${product.name} (${product.arabicName || ''})
• Category: ${product.category}
• Fragrance Notes: ${product.notes}
• Quantity: ${qty}
• Unit Price: ${product.priceDisplay}
• Total Estimate: ${CONFIG.CURRENCY} ${total}

Please confirm availability and the final order details.

Thank you!`;

  return `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function getCartWhatsAppUrl() {
  if (state.cart.length === 0) {
    const text = `Hello ${CONFIG.BRAND_NAME_EN}! I would like to enquire about your fragrance catalogue.`;
    return `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }

  let totalOmr = 0;
  let lines = "";

  state.cart.forEach((item, index) => {
    const lineTotal = item.product.priceOman * item.quantity;
    totalOmr += lineTotal;
    lines += `${index + 1}. ${item.product.name} (x${item.quantity}) - ${item.product.priceDisplay} [Subtotal: ${CONFIG.CURRENCY} ${lineTotal.toFixed(3)}]\n`;
  });

  const totalQty = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  const msg =
`Hello ${CONFIG.BRAND_NAME_EN}!

I would like to place an enquiry for the following selected items:

${lines}
Total Items: ${totalQty}
Estimated Order Total: ${CONFIG.CURRENCY} ${totalOmr.toFixed(3)}

Please confirm stock availability and proceed with my order details.

Thank you!`;

  return `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ==========================================
// 5. DOM ELEMENTS & RENDERING
// ==========================================
const productGrid = document.getElementById("productGrid");
const resultsCount = document.getElementById("resultsCount");
const categoryButtons = document.querySelectorAll(".category-filter-btn");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

// Cart Elements
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartOpenBtn = document.getElementById("cartOpenBtn");
const cartCloseBtn = document.getElementById("cartCloseBtn");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartBadgeCount = document.getElementById("cartBadgeCount");
const cartTotalCount = document.getElementById("cartTotalCount");
const cartWhatsAppBtn = document.getElementById("cartWhatsAppBtn");
const clearCartBtn = document.getElementById("clearCartBtn");

// Quick View Modal Elements
const quickViewModal = document.getElementById("quickViewModal");
const quickViewOverlay = document.getElementById("quickViewOverlay");
const quickViewCloseBtn = document.getElementById("quickViewCloseBtn");
const modalBody = document.getElementById("modalBody");

// Mobile Menu Elements
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenuDrawer = document.getElementById("mobileMenuDrawer");
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
const mobileMenuCloseBtn = document.getElementById("mobileMenuCloseBtn");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

// Render Products
function renderProducts() {
  if (!productGrid) return;

  // Filter
  let filtered = PRODUCTS.filter(p => {
    const matchesCategory =
      state.activeCategory === "All" ||
      p.category.toLowerCase() === state.activeCategory.toLowerCase();

    if (!matchesCategory) return false;

    if (!state.searchQuery) return true;

    const q = state.searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      (p.arabicName && p.arabicName.includes(q)) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.notes.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  });

  // Sort
  if (state.sortBy === "price-low") {
    filtered.sort((a, b) => a.priceOman - b.priceOman);
  } else if (state.sortBy === "price-high") {
    filtered.sort((a, b) => b.priceOman - a.priceOman);
  } else if (state.sortBy === "name-asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // default by id
    filtered.sort((a, b) => a.id - b.id);
  }

  // Update counter
  if (resultsCount) {
    resultsCount.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} fragrances`;
  }

  // Empty state
  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white border border-[#E5A900]/20 rounded-lg p-8 shadow-sm">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#119C9A]/10 flex items-center justify-center text-[#119C9A]">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <h3 class="font-serif text-2xl text-[#171D20] mb-2">No Fragrances Found</h3>
        <p class="text-[#171D20]/70 max-w-md mx-auto text-sm mb-6">We couldn't find any fragrances matching "${state.searchQuery}". Try selecting another category or clearing your search.</p>
        <button id="resetSearchBtn" class="inline-flex items-center gap-2 px-6 py-2.5 bg-[#119C9A] hover:bg-[#087D7C] text-white text-sm font-medium rounded transition-colors shadow">
          View All Fragrances
        </button>
      </div>
    `;
    const resetBtn = document.getElementById("resetSearchBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        state.searchQuery = "";
        state.activeCategory = "All";
        if (searchInput) searchInput.value = "";
        updateCategoryButtonsUI();
        renderProducts();
      });
    }
    return;
  }

  // Render cards
  productGrid.innerHTML = filtered.map(p => {
    const qty = state.quantities[p.id] || 1;
    const whatsappUrl = getSingleWhatsAppUrl(p, qty);

    return `
      <article class="product-card group" data-product-id="${p.id}">
        <!-- Product Image Area (~65% of card height, consistent height, contain, centered with breathing room) -->
        <div 
          class="product-card-image-wrap" 
          onclick="openQuickView(${p.id})" 
          onkeydown="if(event.key==='Enter'||event.key===' ')openQuickView(${p.id})"
          role="button" 
          tabindex="0" 
          aria-label="View details for ${p.name}"
        >
          <span class="absolute top-3 left-3 inline-flex items-center px-2 py-0.5 text-[11px] font-semibold tracking-wider uppercase bg-white/90 text-[#087D7C] border border-[#119C9A]/25 rounded">
            ${p.category}
          </span>
          <span class="absolute top-3 right-3 text-[11px] font-serif text-[#171D20]/60 bg-white/90 px-2 py-0.5 rounded border border-[#EFE8DD]">
            #${p.itemNumber}
          </span>
          
          <img 
            src="${p.image}" 
            alt="${p.name} - ${p.subtitle}" 
            loading="lazy" 
            class="product-card-image"
          />
        </div>

        <!-- Product Details Area -->
        <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-baseline justify-between gap-1 mb-1">
              <h3 class="font-serif text-base sm:text-lg font-semibold text-[#171D20] leading-snug group-hover:text-[#087D7C] transition-colors">
                ${p.name}
              </h3>
              ${p.arabicName ? `<span class="text-xs text-[#087D7C] font-arabic font-normal" dir="rtl">${p.arabicName}</span>` : ''}
            </div>

            <div class="text-[11px] font-medium text-[#E5A900] tracking-wide uppercase mb-2 flex items-start gap-1.5">
              <span class="inline-block w-1.5 h-1.5 rounded-full bg-[#E5A900] shrink-0 mt-1"></span>
              <span class="leading-tight">${p.subtitle}</span>
            </div>

            <p class="text-xs text-[#171D20]/75 line-clamp-2 leading-relaxed mb-4">
              ${p.description}
            </p>
          </div>

          <!-- Price & Full-Width Deep-Teal WhatsApp Button -->
          <div class="pt-3 border-t border-[#EFE8DD] mt-auto">
            <div class="flex items-baseline justify-between mb-3">
              <span class="text-[11px] uppercase tracking-wider text-[#171D20]/60 font-medium">Price</span>
              <span class="font-serif text-base sm:text-lg font-bold text-[#171D20]">
                ${p.priceDisplay}
              </span>
            </div>

            <a 
              href="${whatsappUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-card-whatsapp"
              id="wa-btn-${p.id}"
              aria-label="Order ${p.name} on WhatsApp"
            >
              <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.666-.699c.959.527 1.942.809 2.8.81 3.179 0 5.766-2.587 5.767-5.767.001-3.181-2.586-5.795-5.773-5.795zm3.435 8.169c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.001-.462-1.583-.655-2.612-2.276-2.693-2.385-.079-.107-.648-.864-.648-1.651 0-.785.411-1.173.559-1.332.144-.159.314-.198.42-.198.106 0 .211.002.304.007.098.005.23-.038.358.272.134.324.457 1.115.497 1.196.04.081.066.176.013.283-.053.107-.079.174-.159.267-.079.094-.168.21-.24.282-.08.079-.163.165-.07.324.093.159.414.685.89 1.108.613.545 1.129.714 1.289.794.159.08.252.067.346-.04.093-.108.4-.467.507-.627.106-.16.213-.133.359-.08.146.053.931.439 1.091.519.16.08.267.12.307.187.039.066.039.387-.105.792z"/>
              </svg>
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Quantity Change Handler
window.changeQuantity = function(productId, delta) {
  const current = state.quantities[productId] || 1;
  const next = Math.max(1, current + delta);
  state.quantities[productId] = next;

  // Update counter in DOM
  const counter = document.getElementById(`qty-${productId}`);
  if (counter) counter.textContent = next;

  // Update WhatsApp direct button URL
  const product = PRODUCTS.find(p => p.id === productId);
  const waBtn = document.getElementById(`wa-btn-${productId}`);
  if (product && waBtn) {
    waBtn.href = getSingleWhatsAppUrl(product, next);
  }
};

// ==========================================
// 6. SHOPPING SELECTION / CART FUNCTIONS
// ==========================================
window.addToCart = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const qty = state.quantities[productId] || 1;
  const existingIndex = state.cart.findIndex(item => item.product.id === productId);

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += qty;
  } else {
    state.cart.push({
      product: product,
      quantity: qty
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added ${qty}x ${product.name} to your selection`);
};

window.updateCartItemQty = function(productId, delta) {
  const item = state.cart.find(it => it.product.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(it => it.product.id !== productId);
  }

  saveCart();
  updateCartUI();
};

window.removeCartItem = function(productId) {
  state.cart = state.cart.filter(it => it.product.id !== productId);
  saveCart();
  updateCartUI();
};

function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.cart.reduce((sum, item) => sum + item.product.priceOman * item.quantity, 0);

  if (cartBadgeCount) {
    cartBadgeCount.textContent = totalCount;
    cartBadgeCount.classList.toggle("hidden", totalCount === 0);
  }
  if (cartTotalCount) {
    cartTotalCount.textContent = totalCount;
  }
  if (cartSubtotal) {
    cartSubtotal.textContent = `${CONFIG.CURRENCY} ${totalPrice.toFixed(3)}`;
  }
  if (cartWhatsAppBtn) {
    cartWhatsAppBtn.href = getCartWhatsAppUrl();
    cartWhatsAppBtn.classList.toggle("opacity-50", state.cart.length === 0);
    cartWhatsAppBtn.classList.toggle("pointer-events-none", state.cart.length === 0);
  }

  if (cartItemsContainer) {
    if (state.cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="py-16 text-center text-[#171D20]/60">
          <svg class="w-12 h-12 mx-auto mb-3 opacity-30 text-[#119C9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
          </svg>
          <p class="font-serif text-lg text-[#171D20] mb-1">Your Selection is Empty</p>
          <p class="text-xs">Select your favourite fragrances to enquire via WhatsApp in one click.</p>
        </div>
      `;
    } else {
      cartItemsContainer.innerHTML = state.cart.map(item => {
        const itemTotal = (item.product.priceOman * item.quantity).toFixed(3);
        return `
          <div class="flex items-center gap-3 p-3 bg-white rounded border border-[#E5A900]/20 shadow-2xs">
            <img src="${item.product.image}" alt="${item.product.name}" class="w-14 h-14 object-contain bg-[#FAF8F1] p-1 rounded border border-gray-100" />
            <div class="flex-1 min-w-0">
              <h4 class="font-serif text-sm font-semibold text-[#171D20] truncate">${item.product.name}</h4>
              <p class="text-[11px] text-[#E5A900] truncate">${item.product.subtitle}</p>
              <p class="text-xs font-bold text-[#087D7C] mt-0.5">${CONFIG.CURRENCY} ${itemTotal}</p>
            </div>
            <div class="flex flex-col items-end gap-1.5">
              <button 
                type="button" 
                class="text-[11px] text-red-500 hover:text-red-700 p-0.5"
                onclick="removeCartItem(${item.product.id})"
                aria-label="Remove ${item.product.name}"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
              <div class="flex items-center border border-gray-200 rounded overflow-hidden">
                <button type="button" class="px-1.5 py-0.5 text-xs text-gray-600 hover:bg-gray-100" onclick="updateCartItemQty(${item.product.id}, -1)">−</button>
                <span class="px-1.5 text-xs font-semibold">${item.quantity}</span>
                <button type="button" class="px-1.5 py-0.5 text-xs text-gray-600 hover:bg-gray-100" onclick="updateCartItemQty(${item.product.id}, 1)">+</button>
              </div>
            </div>
          </div>
        `;
      }).join("");
    }
  }
}

function openCartDrawer() {
  if (cartDrawer && cartOverlay) {
    cartDrawer.classList.remove("translate-x-full");
    cartOverlay.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }
}

function closeCartDrawer() {
  if (cartDrawer && cartOverlay) {
    cartDrawer.classList.add("translate-x-full");
    cartOverlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

// ==========================================
// 7. QUICK VIEW MODAL
// ==========================================
window.openQuickView = function(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p || !modalBody || !quickViewModal) return;

  const qty = state.quantities[p.id] || 1;
  const whatsappUrl = getSingleWhatsAppUrl(p, qty);

  modalBody.innerHTML = `
    <div class="grid md:grid-cols-2 gap-6 p-6">
      <!-- Media Gallery -->
      <div class="flex flex-col items-center">
        <div class="w-full bg-[#FAF8F1] border border-[#E5A900]/20 rounded-lg p-6 flex items-center justify-center min-h-[260px] relative">
          <img 
            id="modalMainImage" 
            src="${p.image}" 
            alt="${p.name}" 
            class="max-h-64 max-w-full object-contain drop-shadow-md transition-all duration-300" 
          />
        </div>
        <!-- Toggle views: Bottle vs Original Sheet Card -->
        <div class="flex items-center gap-3 mt-3">
          <button 
            type="button" 
            class="px-3 py-1 text-xs font-medium rounded border border-[#119C9A] bg-[#119C9A] text-white transition-colors"
            id="btnViewBottle"
            onclick="switchModalImage('${p.image}', this)"
          >
            Studio Bottle View
          </button>
          <button 
            type="button" 
            class="px-3 py-1 text-xs font-medium rounded border border-gray-300 text-gray-700 hover:border-[#119C9A] transition-colors"
            id="btnViewCard"
            onclick="switchModalImage('${p.cardImage}', this)"
          >
            Official Card Certificate
          </button>
        </div>
      </div>

      <!-- Info Details -->
      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-1">
            <span class="px-2.5 py-0.5 text-xs font-semibold tracking-wider uppercase bg-[#119C9A]/10 text-[#087D7C] rounded border border-[#119C9A]/20">
              ${p.category} Collection
            </span>
            <span class="text-xs font-serif text-[#171D20]/60">Item #${p.itemNumber}</span>
          </div>

          <h2 class="font-serif text-2xl md:text-3xl font-semibold text-[#171D20] mt-1 mb-0.5">
            ${p.name}
          </h2>
          ${p.arabicName ? `<p class="text-base text-[#087D7C] font-arabic mb-2" dir="rtl">${p.arabicName}</p>` : ''}
          
          <p class="text-xs font-semibold uppercase tracking-wider text-[#E5A900] mb-3">
            ${p.subtitle}
          </p>

          <div class="p-3 bg-[#FAF8F1] rounded border border-[#E5A900]/25 mb-4">
            <div class="text-xs font-semibold text-[#087D7C] mb-1 uppercase tracking-wide">Fragrance Notes:</div>
            <div class="text-sm text-[#171D20] font-medium">${p.notes}</div>
          </div>

          <p class="text-sm text-[#171D20]/80 leading-relaxed mb-6">
            ${p.description}
          </p>
        </div>

        <div class="pt-4 border-t border-gray-200">
          <div class="flex items-center justify-between mb-4">
            <div>
              <span class="text-xs text-[#171D20]/60 uppercase tracking-wider block">Official Price</span>
              <span class="font-serif text-2xl font-bold text-[#171D20]">${p.priceDisplay}</span>
            </div>

            <div class="flex items-center border border-gray-300 rounded overflow-hidden bg-white">
              <button type="button" class="px-3 py-1.5 text-base text-gray-700 hover:bg-gray-100" onclick="changeQuantity(${p.id}, -1)">−</button>
              <span class="px-3 text-sm font-semibold text-[#171D20]" id="modal-qty-${p.id}">${qty}</span>
              <button type="button" class="px-3 py-1.5 text-base text-gray-700 hover:bg-gray-100" onclick="changeQuantity(${p.id}, 1)">+</button>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <a 
              href="${whatsappUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="col-span-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#119C9A] hover:bg-[#087D7C] text-white text-sm font-semibold rounded shadow transition-colors text-center"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.666-.699c.959.527 1.942.809 2.8.81 3.179 0 5.766-2.587 5.767-5.767.001-3.181-2.586-5.795-5.773-5.795zm3.435 8.169c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.001-.462-1.583-.655-2.612-2.276-2.693-2.385-.079-.107-.648-.864-.648-1.651 0-.785.411-1.173.559-1.332.144-.159.314-.198.42-.198.106 0 .211.002.304.007.098.005.23-.038.358.272.134.324.457 1.115.497 1.196.04.081.066.176.013.283-.053.107-.079.174-.159.267-.079.094-.168.21-.24.282-.08.079-.163.165-.07.324.093.159.414.685.89 1.108.613.545 1.129.714 1.289.794.159.08.252.067.346-.04.093-.108.4-.467.507-.627.106-.16.213-.133.359-.08.146.053.931.439 1.091.519.16.08.267.12.307.187.039.066.039.387-.105.792z"/>
              </svg>
              <span>Order on WhatsApp</span>
            </a>

            <button 
              type="button" 
              class="col-span-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 border border-[#119C9A] text-[#119C9A] hover:bg-[#119C9A]/10 text-sm font-semibold rounded transition-colors"
              onclick="addToCart(${p.id}); closeQuickView();"
            >
              + Add to Selection
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  quickViewModal.classList.remove("hidden");
  quickViewOverlay.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
};

window.switchModalImage = function(imgSrc, btn) {
  const img = document.getElementById("modalMainImage");
  if (img) img.src = imgSrc;

  const buttons = btn.parentElement.querySelectorAll("button");
  buttons.forEach(b => {
    b.classList.remove("bg-[#119C9A]", "text-white", "border-[#119C9A]");
    b.classList.add("text-gray-700", "border-gray-300");
  });
  btn.classList.add("bg-[#119C9A]", "text-white", "border-[#119C9A]");
  btn.classList.remove("text-gray-700", "border-gray-300");
};

function closeQuickView() {
  if (quickViewModal && quickViewOverlay) {
    quickViewModal.classList.add("hidden");
    quickViewOverlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

// Toast notification helper
function showToast(message) {
  const existing = document.getElementById("toastNotification");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "toastNotification";
  toast.className = "fixed bottom-5 right-5 z-50 bg-[#171D20] text-white px-5 py-3 rounded-lg shadow-xl border border-[#E5A900]/40 flex items-center gap-3 text-sm animate-fade-in";
  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-[#119C9A]"></span>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);
  setTimeout(() => {
    if (toast.parentElement) {
      toast.classList.add("opacity-0", "transition-opacity", "duration-300");
      setTimeout(() => toast.remove(), 300);
    }
  }, 3000);
}

// ==========================================
// 8. EVENT LISTENERS & INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Initial Product Render & Cart UI
  renderProducts();
  updateCartUI();

  // Category Buttons click
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      state.activeCategory = btn.getAttribute("data-category") || "All";
      updateCategoryButtonsUI();
      renderProducts();
    });
  });

  // Search input
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        state.searchQuery = e.target.value.trim();
        renderProducts();
      }, 150);
    });
  }

  // Sort dropdown
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Cart Drawer open/close
  if (cartOpenBtn) cartOpenBtn.addEventListener("click", openCartDrawer);
  if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCartDrawer);

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      state.cart = [];
      saveCart();
      updateCartUI();
    });
  }

  // Quick View Modal close
  if (quickViewCloseBtn) quickViewCloseBtn.addEventListener("click", closeQuickView);
  if (quickViewOverlay) quickViewOverlay.addEventListener("click", closeQuickView);

  // Mobile Menu
  if (mobileMenuBtn && mobileMenuDrawer && mobileMenuOverlay) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenuDrawer.classList.remove("-translate-x-full");
      mobileMenuOverlay.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
    });

    const closeMobileMenu = () => {
      mobileMenuDrawer.classList.add("-translate-x-full");
      mobileMenuOverlay.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    };

    if (mobileMenuCloseBtn) mobileMenuCloseBtn.addEventListener("click", closeMobileMenu);
    mobileMenuOverlay.addEventListener("click", closeMobileMenu);

    mobileNavLinks.forEach(link => {
      link.addEventListener("click", () => {
        closeMobileMenu();
        const cat = link.getAttribute("data-category");
        if (cat) {
          state.activeCategory = cat;
          updateCategoryButtonsUI();
          renderProducts();
        }
      });
    });
  }

  // Collection card quick filters
  const collectionCards = document.querySelectorAll(".collection-card-btn");
  collectionCards.forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-category");
      if (cat) {
        state.activeCategory = cat;
        updateCategoryButtonsUI();
        renderProducts();
        const shopSection = document.getElementById("shop");
        if (shopSection) {
          shopSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Smooth scroll links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== "#" && document.querySelector(targetId)) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // ESC key to close modal/drawer
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeQuickView();
      closeCartDrawer();
    }
  });

  // Reveal animations on scroll
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-6");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal-on-scroll").forEach(el => {
      el.classList.add("transition-all", "duration-700", "opacity-0", "translate-y-6");
      observer.observe(el);
    });
  }
});

function updateCategoryButtonsUI() {
  const buttons = document.querySelectorAll(".category-filter-btn");
  buttons.forEach(btn => {
    const cat = btn.getAttribute("data-category");
    if (cat === state.activeCategory) {
      btn.classList.add("bg-[#119C9A]", "text-white", "shadow-sm");
      btn.classList.remove("bg-white", "text-[#171D20]", "hover:bg-gray-100");
    } else {
      btn.classList.remove("bg-[#119C9A]", "text-white", "shadow-sm");
      btn.classList.add("bg-white", "text-[#171D20]", "hover:bg-gray-100");
    }
  });
}
