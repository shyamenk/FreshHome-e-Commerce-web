const data = [
  {
    name: 'Electronics',
    description: 'Pears - Fiorelle',
    price: 94,
    quantity: 58,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 38,
    category: 'Hardinge Inc.'
  },
  {
    name: 'Baby',
    description: 'Tomato Puree',
    price: 62,
    quantity: 89,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 96,
    category: 'Lumentum Holdings Inc.'
  },
  {
    name: 'Kids',
    description: 'Cheese - St. Paulin',
    price: 23,
    quantity: 14,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 28,
    category: 'Blackrock MuniHoldings Quality Fund, Inc.'
  },
  {
    name: 'Health',
    description: 'Pepper - Black, Ground',
    price: 64,
    quantity: 86,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 100,
    category: 'Kewaunee Scientific Corporation'
  },
  {
    name: 'Computers',
    description: 'Tea - English Breakfast',
    price: 21,
    quantity: 5,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 28,
    category: 'SLM Corporation'
  },
  {
    name: 'Shoes',
    description: 'Cake - Lemon Chiffon',
    price: 40,
    quantity: 55,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 41,
    category: 'Invesco High Income Trust II'
  },
  {
    name: 'Garden',
    description: 'Placemat - Scallop, White',
    price: 87,
    quantity: 38,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 9,
    category: 'MACOM Technology Solutions Holdings, Inc.'
  },
  {
    name: 'Shoes',
    description: 'Cheese - Gouda Smoked',
    price: 13,
    quantity: 56,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 91,
    category: 'Cross Timbers Royalty Trust'
  },
  {
    name: 'Shoes',
    description: 'Chicken Breast Halal',
    price: 95,
    quantity: 83,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 74,
    category: 'Geopark Ltd'
  },
  {
    name: 'Toys',
    description: 'Wine - Zonnebloem Pinotage',
    price: 100,
    quantity: 43,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 61,
    category: 'Alphatec Holdings, Inc.'
  },
  {
    name: 'Books',
    description: 'Everfresh Products',
    price: 26,
    quantity: 69,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 58,
    category: 'bluebird bio, Inc.'
  },
  {
    name: 'Clothing',
    description: 'Pike - Frozen Fillet',
    price: 61,
    quantity: 49,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 81,
    category: 'Newell Brands Inc.'
  },
  {
    name: 'Beauty',
    description: 'Fruit Salad Deluxe',
    price: 36,
    quantity: 37,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 66,
    category: 'Ritchie Bros. Auctioneers Incorporated'
  },
  {
    name: 'Movies',
    description: 'Mint - Fresh',
    price: 52,
    quantity: 47,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 65,
    category: 'SenesTech, Inc.'
  },
  {
    name: 'Automotive',
    description: 'Sauce - Salsa',
    price: 74,
    quantity: 4,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 95,
    category: 'Cellular Biomedicine Group, Inc.'
  },
  {
    name: 'Industrial',
    description: 'Huck Towels White',
    price: 99,
    quantity: 4,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 59,
    category: 'Webster Financial Corporation'
  },
  {
    name: 'Automotive',
    description: 'Lemonade - Strawberry, 591 Ml',
    price: 23,
    quantity: 44,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 25,
    category: 'E.I. du Pont de Nemours and Company'
  },
  {
    name: 'Industrial',
    description: 'Chinese Foods - Chicken',
    price: 31,
    quantity: 40,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 78,
    category: 'Pioneer Energy Services Corp.'
  },
  {
    name: 'Music',
    description: 'Syrup - Monin, Amaretta',
    price: 14,
    quantity: 48,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 66,
    category: 'VASCO Data Security International, Inc.'
  },
  {
    name: 'Clothing',
    description: 'Seedlings - Buckwheat, Organic',
    price: 93,
    quantity: 8,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 48,
    category: 'Boyd Gaming Corporation'
  },
  {
    name: 'Computers',
    description: 'Parsnip',
    price: 66,
    quantity: 90,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 6,
    category: 'Hawaiian Electric Industries, Inc.'
  },
  {
    name: 'Health',
    description: 'Cake - Cake Sheet Macaroon',
    price: 2,
    quantity: 100,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 38,
    category: 'Orthofix International N.V.'
  },
  {
    name: 'Electronics',
    description: 'Foie Gras',
    price: 25,
    quantity: 26,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 90,
    category: 'Saratoga Investment Corp'
  },
  {
    name: 'Home',
    description: 'Eggplant - Regular',
    price: 30,
    quantity: 35,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 46,
    category: 'Kitov Pharmaceuticals Holdings Ltd.'
  },
  {
    name: 'Clothing',
    description: 'Spice - Pepper Portions',
    price: 40,
    quantity: 45,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 41,
    category: 'Accenture plc'
  },
  {
    name: 'Clothing',
    description: 'The Pop Shoppe - Lime Rickey',
    price: 44,
    quantity: 28,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 50,
    category: 'Deutsche Bank AG'
  },
  {
    name: 'Baby',
    description: 'Lemon Grass',
    price: 51,
    quantity: 74,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 93,
    category: 'Capital One Financial Corporation'
  },
  {
    name: 'Books',
    description: 'Cleaner - Comet',
    price: 78,
    quantity: 51,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 21,
    category: 'Goldman Sachs Group, Inc. (The)'
  },
  {
    name: 'Movies',
    description: 'Cake - Pancake',
    price: 77,
    quantity: 57,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 50,
    category: 'Stage Stores, Inc.'
  },
  {
    name: 'Games',
    description: 'Chocolate - Pistoles, Lactee, Milk',
    price: 35,
    quantity: 43,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 99,
    category: 'Blackrock Floating Rate Income Strategies Fund Inc'
  },
  {
    name: 'Toys',
    description: 'Juice - Lagoon Mango',
    price: 10,
    quantity: 96,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 61,
    category: 'Western Asset Managed Municipals Fund, Inc.'
  },
  {
    name: 'Grocery',
    description: 'Soup - Knorr, Veg / Beef',
    price: 96,
    quantity: 68,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 65,
    category: 'Build-A-Bear Workshop, Inc.'
  },
  {
    name: 'Kids',
    description: 'Beets - Pickled',
    price: 8,
    quantity: 28,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 42,
    category: 'Alkermes plc'
  },
  {
    name: 'Outdoors',
    description: 'Potatoes - Instant, Mashed',
    price: 49,
    quantity: 54,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 43,
    category: 'Autodesk, Inc.'
  },
  {
    name: 'Shoes',
    description: 'Rice - Wild',
    price: 50,
    quantity: 12,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 41,
    category: 'ClearSign Combustion Corporation'
  },
  {
    name: 'Sports',
    description: 'Bouillion - Fish',
    price: 12,
    quantity: 56,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 69,
    category: 'Hartford Financial Services Group, Inc. (The)'
  },
  {
    name: 'Games',
    description: 'Fudge - Cream Fudge',
    price: 84,
    quantity: 23,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 8,
    category: 'Dupont Fabros Technology, Inc.'
  },
  {
    name: 'Grocery',
    description: 'Beef - Cooked, Corned',
    price: 8,
    quantity: 72,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 71,
    category: 'MV Oil Trust'
  },
  {
    name: 'Games',
    description: 'Cheese - Roquefort Pappillon',
    price: 70,
    quantity: 43,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 6,
    category: 'SunPower Corporation'
  },
  {
    name: 'Industrial',
    description: 'Coffee - Decafenated',
    price: 6,
    quantity: 9,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 36,
    category: 'Donnelley Financial Solutions, Inc.'
  },
  {
    name: 'Clothing',
    description: 'Tea - Vanilla Chai',
    price: 57,
    quantity: 47,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 46,
    category: 'Brookline Bancorp, Inc.'
  },
  {
    name: 'Jewelry',
    description: 'Garam Marsala',
    price: 11,
    quantity: 39,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 61,
    category: 'Hi-Crush Partners LP'
  },
  {
    name: 'Toys',
    description: 'Tea - Herbal Sweet Dreams',
    price: 3,
    quantity: 13,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 64,
    category: 'Popular, Inc.'
  },
  {
    name: 'Kids',
    description: 'Sobe - Tropical Energy',
    price: 93,
    quantity: 23,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 93,
    category: 'Williams Companies, Inc. (The)'
  },
  {
    name: 'Beauty',
    description: 'Strawberries - California',
    price: 33,
    quantity: 94,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 47,
    category: 'Ocean Rig UDW Inc.'
  },
  {
    name: 'Garden',
    description: 'Tomatoes - Heirloom',
    price: 19,
    quantity: 1,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 45,
    category: 'Nuveen California Municipal Value Fund 2'
  },
  {
    name: 'Sports',
    description: 'Cheese - Goat',
    price: 33,
    quantity: 67,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 17,
    category: 'MacroGenics, Inc.'
  },
  {
    name: 'Games',
    description: 'Squash - Pattypan, Yellow',
    price: 9,
    quantity: 31,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 84,
    category: 'Universal Health Services, Inc.'
  },
  {
    name: 'Sports',
    description: 'Plasticknivesblack',
    price: 15,
    quantity: 73,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 49,
    category: 'IXYS Corporation'
  },
  {
    name: 'Books',
    description: 'Seaweed Green Sheets',
    price: 4,
    quantity: 31,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 25,
    category: 'Amplify Snack Brands, inc.'
  },
  {
    name: 'Games',
    description: 'Island Oasis - Banana Daiquiri',
    price: 91,
    quantity: 65,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 34,
    category: 'PowerShares International Dividend Achievers Portfolio'
  },
  {
    name: 'Games',
    description: 'Bread - Mini Hamburger Bun',
    price: 26,
    quantity: 74,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 37,
    category: 'K2M Group Holdings, Inc.'
  },
  {
    name: 'Music',
    description: 'Cake - Cake Sheet Macaroon',
    price: 69,
    quantity: 42,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 67,
    category: 'Griffon Corporation'
  },
  {
    name: 'Computers',
    description: 'Sauerkraut',
    price: 23,
    quantity: 100,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 22,
    category: 'Nationstar Mortgage Holdings Inc.'
  },
  {
    name: 'Sports',
    description: 'Rum - White, Gg White',
    price: 5,
    quantity: 63,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 93,
    category: 'Blackrock MuniYield Michigan Quality Fund, Inc.'
  },
  {
    name: 'Industrial',
    description: 'Wine - Vovray Sec Domaine Huet',
    price: 90,
    quantity: 29,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 60,
    category: 'Motif Bio plc'
  },
  {
    name: 'Music',
    description: 'Wine - Two Oceans Cabernet',
    price: 65,
    quantity: 61,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 45,
    category: 'Onconova Therapeutics, Inc.'
  },
  {
    name: 'Outdoors',
    description: 'Oil - Pumpkinseed',
    price: 62,
    quantity: 33,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 7,
    category: 'Applied Materials, Inc.'
  },
  {
    name: 'Automotive',
    description: 'Island Oasis - Banana Daiquiri',
    price: 47,
    quantity: 26,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 74,
    category: 'EXFO Inc'
  },
  {
    name: 'Jewelry',
    description: 'Cognac - Courvaisier',
    price: 61,
    quantity: 87,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 38,
    category: 'Franco-Nevada Corporation'
  },
  {
    name: 'Games',
    description: 'Sauce - Demi Glace',
    price: 15,
    quantity: 41,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 14,
    category: 'CryoPort, Inc.'
  },
  {
    name: 'Sports',
    description: 'Mayonnaise - Individual Pkg',
    price: 2,
    quantity: 61,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 14,
    category: 'Gabelli Multi-Media Trust Inc. (The)'
  },
  {
    name: 'Automotive',
    description: 'Tortillas - Flour, 10',
    price: 99,
    quantity: 21,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 79,
    category: 'New York REIT, Inc.'
  },
  {
    name: 'Movies',
    description: 'Cheese - Comte',
    price: 79,
    quantity: 6,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 40,
    category: 'Fifth Street Finance Corp.'
  },
  {
    name: 'Baby',
    description: 'Soup - Knorr, Ministrone',
    price: 77,
    quantity: 88,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 69,
    category: 'FIRST REPUBLIC BANK'
  },
  {
    name: 'Grocery',
    description: 'Liqueur - Melon',
    price: 64,
    quantity: 10,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 43,
    category: 'STARWOOD PROPERTY TRUST, INC.'
  },
  {
    name: 'Movies',
    description: 'Cinnamon - Ground',
    price: 59,
    quantity: 77,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 60,
    category: 'ProQR Therapeutics N.V.'
  },
  {
    name: 'Garden',
    description: 'Apple - Custard',
    price: 37,
    quantity: 63,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 54,
    category: 'Corcept Therapeutics Incorporated'
  },
  {
    name: 'Baby',
    description: 'Bread Crumbs - Panko',
    price: 66,
    quantity: 99,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 85,
    category: 'MFC Bancorp Ltd.'
  },
  {
    name: 'Industrial',
    description: 'Ecolab - Orange Frc, Cleaner',
    price: 81,
    quantity: 82,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 100,
    category: 'Fonar Corporation'
  },
  {
    name: 'Industrial',
    description: 'Lamb - Loin Chops',
    price: 51,
    quantity: 94,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 40,
    category: 'Axcelis Technologies, Inc.'
  },
  {
    name: 'Games',
    description: 'Veal - Leg, Provimi - 50 Lb Max',
    price: 76,
    quantity: 9,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 98,
    category: 'Materialise NV'
  },
  {
    name: 'Grocery',
    description: 'Mikes Hard Lemonade',
    price: 1,
    quantity: 8,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 25,
    category: 'MGIC Investment Corporation'
  },
  {
    name: 'Games',
    description: 'Sherry - Dry',
    price: 79,
    quantity: 37,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 68,
    category: 'Ellie Mae, Inc.'
  },
  {
    name: 'Automotive',
    description: 'Mushrooms - Black, Dried',
    price: 64,
    quantity: 79,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 52,
    category: 'Rent-A-Center Inc.'
  },
  {
    name: 'Kids',
    description: 'Beets - Golden',
    price: 7,
    quantity: 83,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 15,
    category: 'Triangle Capital Corporation'
  },
  {
    name: 'Kids',
    description: 'Bread - Roll, Soft White Round',
    price: 4,
    quantity: 10,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 17,
    category: 'Flexsteel Industries, Inc.'
  },
  {
    name: 'Shoes',
    description: 'Pasta - Canelloni, Single Serve',
    price: 51,
    quantity: 30,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 43,
    category: 'Amplify Online Retail ETF'
  },
  {
    name: 'Outdoors',
    description: 'Lemonade - Strawberry, 591 Ml',
    price: 56,
    quantity: 81,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 78,
    category: 'Jagged Peak Energy Inc.'
  },
  {
    name: 'Sports',
    description: 'Ice Cream - Strawberry',
    price: 34,
    quantity: 21,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 97,
    category: 'Lions Gate Entertainment Corporation'
  },
  {
    name: 'Industrial',
    description: 'Apple - Granny Smith',
    price: 31,
    quantity: 14,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 3,
    category: 'Huaneng Power International, Inc.'
  },
  {
    name: 'Tools',
    description: 'Tea - English Breakfast',
    price: 1,
    quantity: 24,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 10,
    category: 'Evogene Ltd.'
  },
  {
    name: 'Home',
    description: 'Flower - Commercial Spider',
    price: 37,
    quantity: 54,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 55,
    category: 'Commvault Systems, Inc.'
  },
  {
    name: 'Industrial',
    description: 'Amaretto',
    price: 3,
    quantity: 3,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 74,
    category: 'Meredith Corporation'
  },
  {
    name: 'Movies',
    description: 'Wine - Casillero Deldiablo',
    price: 49,
    quantity: 22,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 99,
    category: 'Interpublic Group of Companies, Inc. (The)'
  },
  {
    name: 'Music',
    description: 'Flour - Fast / Rapid',
    price: 42,
    quantity: 58,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 1,
    category: 'Scudder Multi-Market Income Trust'
  },
  {
    name: 'Baby',
    description: 'Carroway Seed',
    price: 75,
    quantity: 16,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 96,
    category: 'First Trust Senior Floating Rate 2022 Target Term Fund'
  },
  {
    name: 'Kids',
    description: 'Sprite - 355 Ml',
    price: 5,
    quantity: 66,
    imageURL: 'http://dummyimage.com/x.png/5fa2dd/ffffff',
    discount: 50,
    category: 'Cemex S.A.B. de C.V.'
  },
  {
    name: 'Computers',
    description: 'Lid - 3oz Med Rec',
    price: 55,
    quantity: 54,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 65,
    category: 'Eco-Stim Energy Solutions, Inc.'
  },
  {
    name: 'Clothing',
    description: 'Table Cloth 81x81 Colour',
    price: 98,
    quantity: 55,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 26,
    category: 'NantHealth, Inc.'
  },
  {
    name: 'Industrial',
    description: 'Mustard - Seed',
    price: 3,
    quantity: 53,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 72,
    category: 'SodaStream International Ltd.'
  },
  {
    name: 'Tools',
    description: 'Wine - Vidal Icewine Magnotta',
    price: 40,
    quantity: 90,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 25,
    category: 'Fluidigm Corporation'
  },
  {
    name: 'Outdoors',
    description: 'Veal - Striploin',
    price: 65,
    quantity: 91,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 74,
    category: 'Lamb Weston Holdings, Inc.'
  },
  {
    name: 'Music',
    description: 'Beef - Tenderloin Tails',
    price: 53,
    quantity: 32,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 44,
    category: 'Haynes International, Inc.'
  },
  {
    name: 'Baby',
    description: 'Juice - Apple, 1.36l',
    price: 33,
    quantity: 22,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 95,
    category: 'PowerShares DWA NASDAQ Momentum Portfolio'
  },
  {
    name: 'Jewelry',
    description: 'Mustard - Dijon',
    price: 82,
    quantity: 51,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 47,
    category: 'Cowen Inc.'
  },
  {
    name: 'Clothing',
    description: 'Wasabi Powder',
    price: 100,
    quantity: 51,
    imageURL: 'http://dummyimage.com/x.png/dddddd/000000',
    discount: 58,
    category: 'Validus Holdings, Ltd.'
  },
  {
    name: 'Industrial',
    description: 'Strawberries',
    price: 73,
    quantity: 47,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 94,
    category: 'H&R Block, Inc.'
  },
  {
    name: 'Electronics',
    description: 'Bread Crumbs - Panko',
    price: 24,
    quantity: 41,
    imageURL: 'http://dummyimage.com/x.png/ff4444/ffffff',
    discount: 98,
    category: 'Synthetic Fixed-Income Securities, Inc.'
  },
  {
    name: 'Kids',
    description: 'Dc Hikiage Hira Huba',
    price: 85,
    quantity: 52,
    imageURL: 'http://dummyimage.com/x.png/cc0000/ffffff',
    discount: 68,
    category: 'PBF Energy Inc.'
  }
];

function getRandomURL() {
  const possibleCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let randomURL = 'https://example.com/';
  for (let i = 0; i < 10; i++) {
    const randomCharacter =
      possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
    randomURL += randomCharacter;
  }
  randomURL += '.jpg';
  return randomURL;
}

for (let i = 0; i < data.length; i++) {
  const randomURL = getRandomURL();
  data[i].imageURL = randomURL;
}

console.log(data);
