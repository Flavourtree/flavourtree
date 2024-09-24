const flavorWheel = {
  Fruity: {
    Berry: [
      "Blackcurrant",
      "Blackberry",
      "Raspberry",
      "Blueberry",
      "Strawberry",
      "Gooseberry",
      "Elderberry",
      "Boysenberry",
      "Mulberry"
    ],
    "Dried Fruit": [
      "Raisin",
      "Prune",
      "Dried Fig",
      "Dried Date"
    ],
    "Other Fruit": [
      "Coconut",
      "Cherry",
      "Pomegranate",
      "Pineapple",
      "Grape",
      "Apple",
      "Peach",
      "Pear",
      "Banana",
      "Kiwi",
      "Passion Fruit",
      "Mango",
      "Papaya",
      "Guava"
    ],
    Citrus: [
      "Grapefruit",
      "Orange",
      "Lemon",
      "Lime",
      "Mandarin",
      "Tangerine",
      "Clementine"
    ]
  },
  "Sour/Fermented": {
    "Sour/Aromatics": [
      "Acetic Acid",
      "Butyric Acid",
      "Isovaleric Acid",
      "Citric Acid",
      "Malic Acid",
      "Lactic Acid",
      "Tartaric Acid"
    ],
    "Alcoholic/Boozy": [
      "Winey",
      "Whiskey",
      "Fermented",
      "Overripe",
      "Beer",
      "Rum"
    ]
  },
  "Green/Vegetative": {
    "Olive Oil": [
      "Olive Oil"
    ],
    Raw: [
      "Raw"
    ],
    "Green Vegetative": [
      "Pea Pod",
      "Fresh",
      "Dark Green",
      "Vegetative",
      "Hay-like",
      "Herb-like",
      "Green Pepper",
      "Grass"
    ],
    Beany: [
      "Beany"
    ]
  },
  Other: {
    Chemical: [
      "Bitter",
      "Salty",
      "Medicinal",
      "Petroleum",
      "Skunky",
      "Rubber",
      "Chlorine",
      "Ammonia"
    ],
    "Papery/Musty": [
      "Stale",
      "Cardboard",
      "Papery",
      "Woody",
      "Moldy/Damp",
      "Musty/Dusty",
      "Musty/Earthy",
      "Animalic",
      "Meaty Brothy",
      "Phenolic",
      "Milky",
      "Yeasty"
    ]
  },
  "Brown Spice": {
    "Brown Spice": [
      "Nutmeg",
      "Anise",
      "Clove",
      "Cinnamon",
      "Allspice",
      "Ginger",
      "Cardamom",
      "Coriander"
    ],
    Nutty: [
      "Peanuts",
      "Hazelnut",
      "Almond",
      "Walnut",
      "Pecan",
      "Cashew",
      "Chestnut"
    ],
    "Brown Sugar": [
      "Molasses",
      "Maple Syrup",
      "Caramelized",
      "Honey",
      "Toffee",
      "Brown Sugar"
    ],
    Vanilla: [
      "Vanilla"
    ],
    Chocolate: [
      "Dark Chocolate",
      "Chocolate",
      "Milk Chocolate",
      "White Chocolate"
    ]
  },
  Sweet: {
    "Nutty/Cocoa": [
      "Nutty/Cocoa"
    ],
    Vanilla: [
      "Vanilla"
    ],
    "Sweet Spice": [
      "Licorice",
      "Fennel",
      "Star Anise"
    ],
    Syrup: [
      "Maple Syrup",
      "Molasses",
      "Golden Syrup"
    ]
  },
  Floral: {
    Floral: [
      "Chamomile",
      "Rose",
      "Jasmine",
      "Lavender",
      "Hibiscus",
      "Elderflower",
      "Orange Blossom",
      "Linden"
    ]
  },
  Spices: {
    Pepper: [
      "Pepper",
      "Black Pepper",
      "White Pepper",
      "Pink Pepper",
      "Green Pepper"
    ],
    Pungent: [
      "Pungent",
      "Mustard",
      "Horseradish",
      "Wasabi"
    ],
    "Herbal Spices": [
      "Thyme",
      "Basil",
      "Oregano",
      "Rosemary",
      "Sage",
      "Parsley",
      "Dill",
      "Mint"
    ]
  },
  Cereal: {
    Grain: [
      "Grain",
      "Barley",
      "Wheat",
      "Oat",
      "Rye",
      "Corn",
      "Rice"
    ],
    Malt: [
      "Malt",
      "Malted Milk",
      "Toasted Malt"
    ]
  },
  Roasted: {
    "Brown Roast": [
      "Brown, Roast"
    ],
    Smoky: [
      "Smoky",
      "Charcoal",
      "Burnt",
      "Tobacco"
    ],
    Acrid: [
      "Acrid"
    ],
    Ashy: [
      "Ashy"
    ],
    "Roasted Nuts": [
      "Roasted Almonds",
      "Roasted Peanuts",
      "Roasted Hazelnuts"
    ]
  },
  "Savory/Umami": {
    "Savory/Umami": [
      "Soy Sauce",
      "Miso",
      "Parmesan Cheese",
      "Mushrooms (e.g., Shiitake, Portobello)",
      "Seaweed",
      "Bouillon",
      "Fish Sauce",
      "Truffle"
    ]
  },
  "Herbal/Tea": {
    "Herbal/Tea": [
      "Green Tea",
      "Black Tea",
      "Matcha",
      "Rooibos",
      "White Tea",
      "Oolong"
    ]
  }
};

const flavorColors = {
  Fruity: "#FF6B6B",
  Berry: "#9B59B6",
  Blackcurrant: "#4A235A",
  Blackberry: "#5B3256",
  Raspberry: "#F64747",
  Blueberry: "#3498DB",
  Strawberry: "#E80D28",
  Gooseberry: "#BADC58",
  Elderberry: "#6C3483",
  Boysenberry: "#8E44AD",
  Mulberry: "#7D3C98",
  "Dried Fruit": "#CD853F",
  Raisin: "#8B4513",
  Prune: "#4A0E0E",
  "Dried Fig": "#A0522D",
  "Dried Date": "#8B4513",
  "Other Fruit": "#FFA07A",
  Coconut: "#FFEFD5",
  Cherry: "#D2042D",
  Pomegranate: "#C0392B",
  Pineapple: "#FFD700",
  Grape: "#6F2DA8",
  Apple: "#8DB600",
  Peach: "#FFDAB9",
  Pear: "#D1E231",
  Banana: "#FFE135",
  Kiwi: "#9ACD32",
  "Passion Fruit": "#FFA500",
  Mango: "#FFD700",
  Papaya: "#FFEFD5",
  Guava: "#FFC0CB",
  Citrus: "#FFA500",
  Grapefruit: "#FF7F50",
  Orange: "#FFA500",
  Lemon: "#FFFACD",
  Lime: "#32CD32",
  Mandarin: "#FF8C00",
  Tangerine: "#F28500",
  Clementine: "#FF7F00",
  "Sour/Fermented": "#BADA55",
  "Sour/Aromatics": "#AFE1AF",
  "Acetic Acid": "#E6E6FA",
  "Butyric Acid": "#F0E68C",
  "Isovaleric Acid": "#FAFAD2",
  "Citric Acid": "#FFF8DC",
  "Malic Acid": "#F0FFF0",
  "Lactic Acid": "#FFFFF0",
  "Tartaric Acid": "#F5F5DC",
  "Alcoholic/Boozy": "#8B4513",
  Winey: "#722F37",
  Whiskey: "#B38B6D",
  Fermented: "#CD853F",
  Overripe: "#9ACD32",
  Beer: "#FFD700",
  Rum: "#964B00",
  "Green/Vegetative": "#228B22",
  "Olive Oil": "#808000",
  Raw: "#7CFC00",
  "Green Vegetative": "#008000",
  "Pea Pod": "#98FB98",
  Fresh: "#00FF7F",
  "Dark Green": "#006400",
  Vegetative: "#32CD32",
  "Hay-like": "#DAA520",
  "Herb-like": "#3CB371",
  "Green Pepper": "#008000",
  Grass: "#7CFC00",
  Beany: "#556B2F",
  Other: "#A9A9A9",
  Chemical: "#778899",
  Bitter: "#8FBC8F",
  Salty: "#B0E0E6",
  Medicinal: "#483D8B",
  Petroleum: "#2F4F4F",
  Skunky: "#9ACD32",
  Rubber: "#708090",
  Chlorine: "#00FFFF",
  Ammonia: "#E6E6FA",
  "Papery/Musty": "#D2B48C",
  Stale: "#BDB76B",
  Cardboard: "#DEB887",
  Papery: "#F4A460",
  Woody: "#DEB887",
  "Moldy/Damp": "#8FBC8F",
  "Musty/Dusty": "#D3D3D3",
  "Musty/Earthy": "#A0522D",
  Animalic: "#8B4513",
  "Meaty Brothy": "#CD5C5C",
  Phenolic: "#BDB76B",
  Milky: "#FFFAF0",
  Yeasty: "#F0E68C",
  "Brown Spice": "#8B4513",
  Nutmeg: "#D2691E",
  Anise: "#4B0082",
  Clove: "#8B4513",
  Cinnamon: "#D2691E",
  Allspice: "#8B4513",
  Ginger: "#B8860B",
  Cardamom: "#9ACD32",
  Coriander: "#ADFF2F",
  Nutty: "#DEB887",
  Peanuts: "#D2691E",
  Hazelnut: "#CD853F",
  Almond: "#FFEBCD",
  Walnut: "#8B4513",
  Pecan: "#D2691E",
  Cashew: "#F4A460",
  Chestnut: "#8B4513",
  "Brown Sugar": "#CD853F",
  Molasses: "#654321",
  "Maple Syrup": "#C04000",
  Caramelized: "#D2691E",
  Honey: "#FFA500",
  Toffee: "#D2691E",
  Vanilla: "#F3E5AB",
  Chocolate: "#D2691E",
  "Dark Chocolate": "#3D1C02",
  "Milk Chocolate": "#7B3F00",
  "White Chocolate": "#FFFDD0",
  Sweet: "#FF69B4",
  "Nutty/Cocoa": "#8B4513",
  "Sweet Spice": "#FF1493",
  Licorice: "#000000",
  Fennel: "#6B8E23",
  "Star Anise": "#301934",
  Syrup: "#FF7F50",
  "Golden Syrup": "#DAA520",
  Floral: "#D1006B",
  Chamomile: "#FFFACD",
  Rose: "#C10032",
  Jasmine: "#F8F8FF",
  Lavender: "#7806AD",
  Hibiscus: "#FF69B4",
  Elderflower: "#FDFFE6",
  "Orange Blossom": "#FFF1D4",
  Linden: "#98FB98",
  Spices: "#7D5548",
  Pepper: "#708090",
  "Black Pepper": "#2F4F4F",
  "White Pepper": "#A9A9A9",
  "Pink Pepper": "#FFB6C1",
  Pungent: "#FF4500",
  Mustard: "#FFDB58",
  Horseradish: "#F0FFF0",
  Wasabi: "#7FFF00",
  "Herbal Spices": "#556B2F",
  Thyme: "#008080",
  Basil: "#00FF7F",
  Oregano: "#808000",
  Rosemary: "#2E8B57",
  Sage: "#9ACD32",
  Parsley: "#006400",
  Dill: "#90EE90",
  Mint: "#98FF98",
  Cereal: "#F4A460",
  Grain: "#DAA520",
  Barley: "#FFE4B5",
  Wheat: "#F5DEB3",
  Oat: "#DEB887",
  Rye: "#8B4513",
  Corn: "#FFD700",
  Rice: "#FFFAF0",
  Malt: "#D2B48C",
  "Malted Milk": "#F4A460",
  "Toasted Malt": "#CD853F",
  Roasted: "#561800",
  "Brown Roast": "#A52A2A",
  Smoky: "#696969",
  Charcoal: "#36454F",
  Burnt: "#8B4513",
  "Tobacco": "#50342B",
  Acrid: "#2F4F4F",
  Ashy: "#A9A9A9",
  "Roasted Nuts": "#D2691E",
  "Roasted Almonds": "#CD853F",
  "Roasted Peanuts": "#8B4513",
  "Roasted Hazelnuts": "#D2691E",
  "Savory/Umami": "#201A18",
  "Soy Sauce": "#3D0C02",
  Miso: "#C4A484",
  "Parmesan Cheese": "#FAFAD2",
  "Mushrooms (e.g., Shiitake, Portobello)": "#8B4513",
  Seaweed: "#2E8B57",
  Bouillon: "#CD853F",
  "Fish Sauce": "#8B4513",
  Truffle: "#4A0E0E",
  "Herbal/Tea": "#008080",
  "Green Tea": "#24562F",
  "Black Tea": "#2A2425",
  Matcha: "#7CFC00",
  Rooibos: "#B22222",
  "White Tea": "#F5F5DC",
  Oolong: "#D2691E"
};

// You can use the flavorWheel and flavorColors objects in your application
