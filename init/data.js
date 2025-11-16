const sampleListings = [
  
  {
    title: "Luxury Villa in the Maldives",
    description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
    },
    price: 12000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Cozy Cabin in the Swiss Alps",
    description: "Experience breathtaking mountain views and cozy evenings by the fireplace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519817650390-64a93db511aa?auto=format&fit=crop&w=800&q=60",
    },
    price: 8500,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Wake up to the sound of waves in this serene beachfront property.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Canggu",
    country: "Indonesia",
  },
  {
    title: "Modern Apartment in Tokyo",
    description: "Enjoy city life with stunning skyline views and easy access to Shibuya.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Desert Camp in Dubai",
    description: "Spend nights under the stars in a luxury desert tent with all modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    },
    price: 7000,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Countryside Cottage in England",
    description: "Relax in a charming stone cottage surrounded by green meadows and fresh air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691723518-36a7d90c0b9e?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Ski Chalet in Aspen",
    description: "Perfect for winter adventures and cozy nights by the fire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60",
    },
    price: 9500,
    location: "Aspen",
    country: "USA",
  },
  {
    title: "Jungle Treehouse in Costa Rica",
    description: "Live amidst nature in a peaceful eco-friendly treehouse retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Monteverde",
    country: "Costa Rica",
  },
  {
    title: "Historic Apartment in Paris",
    description: "Stay in a classic Parisian flat near the Eiffel Tower and cafes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60",
    },
    price: 8800,
    location: "Paris",
    country: "France",
  },
  {
    title: "Lakeview Cabin in Canada",
    description: "Escape to a wooden cabin overlooking a tranquil lake.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
    },
    price: 5200,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Tropical Retreat in Thailand",
    description: "Enjoy a private villa surrounded by palm trees and crystal-clear waters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=800&q=60",
    },
    price: 5600,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Mountain Cabin in Nepal",
    description: "Peaceful retreat for trekkers and nature lovers near the Himalayas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470123808288-1e59739a2aa7?auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Pokhara",
    country: "Nepal",
  },
  {
    title: "Luxury Penthouse in New York",
    description: "A sky-high penthouse with breathtaking views of Manhattan.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?auto=format&fit=crop&w=800&q=60",
    },
    price: 20000,
    location: "New York",
    country: "USA",
  },
  {
    title: "Beach House in Goa",
    description: "Enjoy sun, sand, and serenity in this beachfront Goan paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Goa",
    country: "India",
  },
  {
    title: "Igloo Stay in Finland",
    description: "Sleep under the Northern Lights in a glass-roof igloo.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=60",
    },
    price: 9000,
    location: "Lapland",
    country: "Finland",
  },
  {
    title: "Cliffside Villa in Santorini",
    description: "Unmatched views of the blue Aegean Sea from your private terrace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Safari Lodge in Kenya",
    description: "Experience the wild in a luxurious lodge in the heart of nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=60",
    },
    price: 8000,
    location: "Masai Mara",
    country: "Kenya",
  },
  {
    title: "Houseboat in Kerala",
    description: "Float along the backwaters in a beautifully furnished houseboat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1589308078059-332b3b1e3a0e?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Urban Loft in Berlin",
    description: "Chic loft apartment in the heart of Berlin’s art district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Historic Riad in Marrakech",
    description: "Traditional Moroccan riad with a courtyard and pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Marrakech",
    country: "Morocco",
  },
  {
    title: "Lakehouse in Italy",
    description: "Romantic lakefront stay with scenic mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60",
    },
    price: 7200,
    location: "Lake Como",
    country: "Italy",
  },
  {
    title: "Eco Lodge in Bali",
    description: "Sustainable living meets comfort in this jungle eco-lodge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=800&q=60",
    },
    price: 4600,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Castle Stay in Scotland",
    description: "Live like royalty in this restored historic castle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519817650390-64a93db511aa?auto=format&fit=crop&w=800&q=60",
    },
    price: 15000,
    location: "Edinburgh",
    country: "Scotland",
  },
  {
    title: "Mountain View Lodge in Bhutan",
    description: "Serenity and spirituality blend in this Himalayan retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499696010181-9e705b7a7f82?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Thimphu",
    country: "Bhutan",
  },
  {
    title: "Riverside Cabin in Norway",
    description: "Quiet cabin with a view of the fjords and northern lights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512343879784-7f1a19dfbe50?auto=format&fit=crop&w=800&q=60",
    },
    price: 7000,
    location: "Bergen",
    country: "Norway",
  },
  {
    title: "Luxury Apartment in Dubai Marina",
    description: "Modern living with panoramic views of the marina skyline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    },
    price: 11000,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Rustic Barn in Texas",
    description: "Charming countryside barn converted into a cozy retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Austin",
    country: "USA",
  },
  {
    title: "Seaside Cottage in Croatia",
    description: "Relax by the Adriatic Sea with private beach access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519821172141-b5d8b77e89b8?auto=format&fit=crop&w=800&q=60",
    },
    price: 4800,
    location: "Dubrovnik",
    country: "Croatia",
  },
  {
    title: "Penthouse in Singapore",
    description: "Modern penthouse with infinity pool and skyline views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=60",
    },
    price: 14000,
    location: "Singapore",
    country: "Singapore",
  }
  // … add more (total 50)

];

module.exports = { data: sampleListings };
