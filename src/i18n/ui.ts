export const languages = {
    en: 'en',
    es: 'es',
    ru: 'ru',
    it: 'it',
    de: 'de',
    fr: "fr",
    pt: "pt"
  };
  
  export const defaultLang = 'en';
  
  export const ui = {
    en:{ 
      nav: { 
        'home':'Home',
        'places': 'Places',
          'about': 'About',
          'services': 'Services',
          'feedback': 'FeedBack',
          matanzas: 'Matanzas',
          habana:"Havana",
          pinar:"Pinar del Río",
          central: "Central Region"
         },
      hero: 
          {'h1':'Cuban ',
            'h12':'52',
            'span':'Classic',
            'p':'Experience reliable, efficient taxi service with professional drivers. We guarantee safe, punctual, and comfortable rides.',
            'button':'Book Now',
          },
        prov:{
          visit:'Visit',
          'h2':'Your Dream Vacation Starts With Us',
          'p':'Discover cultural horizons where ancient traditions meet modern vitality, and every street invites you to become part of the citys living story.',
          places: [
            {
              name:"Pinar del Río",
              slug:'Pinar del Río',
              desc:"Tobacco fields, Viñales Valley, mogotes, Cueva del Indio, San Diego hot springs, Soroa, cigar factories, and colonial charm.",
              img:'/images/Pinar.png',
              href:"/"
          },
         
          {
              name:"Havana",
              slug:'La Habana',
              desc:"Historic Old Havana, Malecón seawall, vintage cars, Morro Castle, lively music, rum, museums, and vibrant culture.",
              img:'/images/Havana.jpg',
              href:"/"
          },
          {
              name:"Matanzas",
              slug:"Matanzas",
              desc:"Varadero Beach, San Severino Castle, Yumurí Valley, Afro-Cuban culture, and colonial heritage.",
              img:'/images/Matanzas.png',
              href:"/"
          },
          {
              name:"Central Region",
              slug:"Región Central",
              desc:"Blends history, traditional music, natural parks  and beautiful beaches.",
              img:'/images/Trinidad.png',
              href:"/"
          },
         ]
        },
        
        aboutComp: {

            'h2':"About Company",
            'pdesc':"We redefine tourism in Cuba by offering experiences through personalized classic car tours that perfectly capture the island's vintage spirit. Combining competitive pricing with authentic Cuban hospitality, we deliver exceptional service that showcases the true essence of our culture.",
            'p':"Let us transform your visit into an extraordinary journey.",
            'secT':"Timely",
            'secP':"On-time pickups and optimized routes.",
            'conT':"Authenticity",
            'conP':"Secret spots only locals know.",
        },

        about2:{
            h2:'We Create Unforgettable Moments For You',
             elementos:[
             {
                num: '1',
                title: 'Easy and Quick Reservation',
                text: 'Book in minutes: send us a WhatsApp message with your preferences.',
                active: false
                },
                {
                num: '2',
                title: 'Customized Trip Tailored to You',
                text: 'Our team will help you design the perfect itinerary based on your preferences.',
                active: false
                },
               {
                num: '3',
                title: 'Enjoy an Exclusive Service',
                text: 'Enjoy first-class service with expert drivers and personalized attention.',
                active: true
                }
              ]
        },
        services: {
                    h2: "Delight In Finest Transport Service With Us",
                    p:"Our team of expert professionals adapts seamlessly to every traveler, designing bespoke experiences that exceed expectations.",
                    serv1h4: 'Excursions',
                    serv1p: 'Discover vibrant cities, villages, and every hidden gem along the way',
                    serv2h4: 'Private Transportation',
                    serv2p: 'Easy booking across our premium vehicles.',
                    serv3h4: 'Transfers',
                    serv3p: 'Ride in comfort, enjoy seamless journeys.',
      
        },
        feedback: {
            h2: 'What Clients Say About Us',
            p:'Find out what our customers have to say about our tours, as they share their unforgettable experiences and rave reviews.',
            coment:'Write us your comment',
          },
        itinerary:[
          {
            title: "One day tour in Havana",
            place: ["Havana", "La Habana"],
            details: [
              "Departure time from the hotel ~8:00 Arrival time at the hotel ~17:00-18:00",
              "It takes 1.5 to 2 hours to reach Havana. On the way, we will make a stop at the highest bridge in Cuba (Bacunayagua), with views of the Valley of Yumurí and the ocean. They can try the most delicious pineapple cocktail in Cuba (for an additional cost).",
              "Stop near the Morro Castle, which offers impressive panoramic views of Havana. (Entry is paid and optional).",
              "Then, we will take a walk along the Malecón from where a two-hour walk through Old Havana will begin. Among the attractions are the Plaza de San Francisco de Asís, a bell tower from the old Franciscan monastery (with a fee), a rum museum with tasting (paid entry), the Cathedral of Our Lady of Kazán, the Plaza of the Cathedral, the Little Wine Cellar, the Palace of Spanish Governors, the Plaza of Arms, the Castle of the Royal Force (paid entry), the Bishop Street, the Hotel Ambos Mundos, the Plaza Vieja, among others.",
              "Visit to the Plaza of the Revolution, a stroll through the center of Havana, where you will find the Capitol, the Havana Grand Theater, the café Floridita (mentioned by Hemingway) and other points of interest.",
              "We leave Havana at 3:00 pm.",
              "The lunch is not included in the price of the excursion (estimated lunch cost is 15-20 $€).",
            ],
          },
          {
            title: "Sunset Tour in Havana",
            place: ["Havana", "La Habana"],
            details: [
              "Pickup at your accommodation or hotel at 10:00 AM in Varadero.",
              "About two hours of travel to La Habana by the north coast.",
              "Stop at the highest bridge in Cuba (Bacunayagua), 112 meters high where you can enjoy the best Pineapple Cocktail in Cuba.",
              "Drive to La Habana.",
              "Stroll through Old Havana, declared a World Heritage Site by UNESCO in 1982.",
              "Visit the Plaza de la Catedral.",
              "Visit the Plaza del Brazo.",
              "Visit the Plaza Vieja.",
              "Visit the Plaza San Francisco de Asís.",
              "Stop at the oldest fort in Cuba, the Morro Castle.",
              "Visit the statue of Christ of Havana.",
              "Hotel Nacional.",
              "Visit the famous Hemingway bar La Bodeguita del Medio and El Floridita.",
              "Lunchtime (prices vary depending on customer choice, not included).",
              "Route by the Malecón and New Havana.",
              "Stop at the Plaza de la Revolución.",
              "Time walking in the city center where you can see the Capitol building, the Havana Grand Theater, and Central Park.",
              "Optional stop at the Rum Museum.",
              "Visit the tobacco shop.",
              "In the evening, we will visit the best places to enjoy sunset, which can be from the Havana Malecón or the Morro Castle.",
              "The route ends at sunset.",
              "Return to Varadero after sunset.",
              "Optional things you can add to this tour: 25USD/EURO for an hour in a classic convertible once in Havana.",
            ],
          },
          {
            title: "Havana Tour + Cannon Shot",
           place: ["Havana", "La Habana"],
            details: [
              "Pickup at your accommodation or hotel at 10:00 am.",
              "Walk through Old Havana, declared a World Heritage Site by UNESCO in 1982. Enjoy free time, and we recommend a visit to the representative arts and crafts market representing the cultural identity of the people.",
              "Visit the Plaza de San Francisco de Asís, full of cobblestones located at the gates of La Habana.",
              "Stop at the Plaza de la Catedral, one of the most beautiful places in Old Havana.",
              "Scale at the recently restored Plaza Vieja, a mandatory stop for history lovers.",
              "Visit the Plaza de Armas, the oldest square in La Habana.",
              "Stop at the Palace of the Captains General, one of the most important architectural works in Cuba.",
              "Short stay at the Hotel Ambos Mundos, an eclectic style building located in Old Havana.",
              "Visit two of the most popular bars in La Habana, La Bodeguita del Medio and El Floridita, to enjoy the most delicious cocktails.",
              "Lunch suggested by the guide in the most spectacular restaurants of La Habana where you can enjoy our typical Cuban food.",
              "Travel in a classic car along the Avenue Malecón enjoying a beautiful view of the Bay of La Habana.",
              "Walk through Modern Havana exclusive visit.",
              "Panoramic journey through the Vedado and Miramar neighborhoods.",
              "Stop at the Plaza de la Revolución, one of the largest in the world and home to one of the most interesting museums in all of Cuba.",
              "Panoramic scale at the corresponding building of the Capitol, one of the most emblematic places in Havana.",
              "Stop at José Martí Central Park, a great attraction for travelers from all over the world, where the history of magnificent buildings and nature combine.",
              "Visit the Great Theatre of La Habana Alicia Alonso, a magnificent building headquarters of the Ballet and the National Opera of Cuba.",
              "Panoramic visit to the Fortress of the Morro, an important fortification built in Cuba in the 16th century.",
              "Panoramic visit to the Christ of La Habana, a monumental sculptural work of about 20 meters in height.",
              "Dinner at the recommended restaurants of La Habana according to your choice. Choose between shrimp or chicken, to savor authentic Cuban cuisine.",
              "At 21:00 hours you can enjoy one of the Cuban traditions: the 'cannon shot of nine' in the guided visit to the Fortress of San Carlos de la Cabaña.",
              "Journey back to your accommodation in a classic car with maximum comfort and safety.",
            ],
          },
          {
            title: "Havana Tour + Tropicana",
            place: ["Havana", "La Habana"],
            details: [
              "Pickup at your accommodation or hotel at 10:30 am.",
              "About two hours of travel to La Habana by the Atlantic coast.",
              "Stop at the highest bridge in Cuba «Bacunayagua» where you can also enjoy the best Pineapple Cocktail in Cuba.",
              "Drive to La Habana.",
              "Stroll through Old Havana, declared a World Heritage Site by UNESCO in 1982.",
              "Visit the Plaza de la Catedral.",
              "Visit the Plaza de Arma.",
              "Visit the Plaza Vieja.",
              "Visit the Plaza San Francisco de Asís.",
              "Stop at the oldest fort in Cuba, the Morro Castle.",
              "Visit the statue of Christ of La Habana.",
              "Visit the famous Hemingway bar La Bodeguita del Medio and El Floridita.",
              "Lunchtime (prices vary depending on customer choice, not included).",
              "The route by the Malecón and New Havana.",
              "Stop at the Plaza de la Revolución.",
              "Time walking towards the center where you can see the Capitol building, the Havana Grand Theater, and Central Park.",
              "Optional stop at the Rum Museum.",
              "Visit the tobacco shop.",
              "Visit to the Tropicana (the guest pays the cover there itself in the cabaret).",
              "After the show, return trip to Varadero.",
            ],
          },
          {
            title: "Zapata Swamp Tour",
            place: "Matanzas",
            details: [
              "Departure from the hotel at 8 am.",
              "We cross the island from north to south. The trip lasts about 2 hours.",
              "On the way, we will pass through the cities of Santa Marta and Cardenas, the town of Jovellanos, where many descendants of African slaves live, a cooperative called Vladimir Ilich Lenin, the village of Australia, sugar cane, banana, citrus, mango and other tropical crops plantations.",
              "First stop at a mini farm with typical Cuban plants and animals. For an additional cost, you can drink sugarcane juice and ride a bull cebú.",
              "Crocodile breeding facility (5 € per person).",
              "Visit to 'Indians': We board motorboats and they take us to an island with some huts and Indian sculptures. This Indian village has a cost of 12 € per person and lasts about 2 hours or more.",
              "Lunch included with 4 types of meat, such as crocodile, crab, lobster, prawns, fish, deer, snails or squids, for 15-20 € per person. Also includes rice with vegetables, salad and drinks.",
              "Caribbean Sea: We will enjoy the Caribbean Sea in the Bay of Pigs, with clear waters especially near the corals.",
              "Snorkeling: Rental of snorkeling equipment by 5 € per hour. You can bring your own equipment. It is recommended to bring breadcrumbs from the hotel to feed the fish and other marine creatures.",
              "Diving: It will cost 25 € for 40 minutes for experienced divers. Beginners pay an additional 10 € for an introductory lesson. The diving area is easy and has sunken ships at 25-30 meters deep.",
              "Cenotes: We will see cenotes or sinkholes in the jungles around the Bay of Pigs, where you can swim. If desired, we can go to the House of the Hummingbird to observe birds ($1).",
              "Optional stop to swim in the sand beach in the village of Playa Larga.",
              "History: We will visit important historical sites related to the Cold War in the Bay of Pigs, where in 1961 a pro-Castro invasion was carried out.",
              "Return to Varadero at 16.00.",
            ],
          },
          {
            title: "Matanzas Tour",
            place: "Matanzas",
            details: [
              "Departure from the hotel at 9:00 am.",
              "Visit to the Bellamar Caves (entry $5): We will explore the impressive Bellamar Caves, a cave system offering unique and spectacular rock formations. We will discover the rich geology and the history of this fascinating place.",
              "Tour of the colonial city center: We will immerse ourselves in the history of Matanzas by exploring its colonial center. We will visit the famous French Pharmacy, an iconic architectural landmark reflecting French influence in the region.",
              "Monserrat Lookout: We will enjoy a panoramic view from the Monserrat Lookout, offering an impressive perspective of the city and its surroundings. A perfect place to capture unforgettable memories.",
              "The Hermitage: We will visit The Hermitage, a sacred place that has been a witness to significant historical events. We will learn more about the cultural and religious significance of this site.",
              "San Severino Castle: We will explore San Severino Castle, a historic fortress that played a crucial role in defending the city. We will discover military architecture and the history surrounding this imposing castle.",
              "Saturn Cave (entry $5): We will conclude our tour by exploring the Saturn Cave, a subterranean cenote with crystal clear waters. Visitors will have the opportunity to swim and enjoy the unique natural beauty of this geological formation.",
              "Return to the hotel around 2:00 pm.",
            ],
          },
          {
            title: "One-day excursion to Varadero from Havana",
            place: "Matanzas",
            details: [
              "Pickup at the hotel or B&B in a classic car at 8:00 am.",
              "Exit towards Varadero along the coast with beautiful landscapes.",
              "Optional stop at Bacunayagua Bridge: We will make a stop at the highest bridge in Cuba with 112 m of height. From this lookout, visitors can enjoy beautiful panoramic views and taste the best Pineapple Cocktail in Cuba.",
              "Journey to Coral Beach to do snorkeling (entries not included, 10 USD per person): We will explore the crystal clear waters of Coral Beach, ideal for practicing snorkeling and enjoying marine life.",
              "Visit to the open cave of Saturn (entries not included, 5 USD per person): We will discover the beauty of the Saturn Cave, a subterranean cenote with crystal clear waters. Visitors will have the opportunity to swim and enjoy the unique natural beauty of this geological formation.",
              "Continuation of the journey to Varadero.",
              "Visit La casa Alcapone in Varadero: We will explore La Casa Alcapone, which offers a glimpse of the history and luxury of the era.",
              "Visit the Varadero market: Immerse yourself in local culture by exploring the Varadero market, where you can find local handicrafts and products.",
              "Visit the Josone Park: Enjoy the natural beauty of the Josone Park, an oasis in the middle of Varadero with exuberant gardens and serene lakes.",
              "Visit the Dupon Mansion: We will explore the elegant Dupon Mansion, a testament to the historical architecture of Varadero.",
              "Free time at the beach: Visitors will have time to relax on the beautiful beaches of Varadero.",
              "The tour concludes around 4:30 pm and returns to La Habana.",
            ],
          },
            {
            title: "Trinidad - Cienfuegos Tour (Optional Nicho)",
            place: ["Central Region", "Región Central"],
            details: [
            "Pickup at your accommodation or hotel at 06:30 am.",
            "Three-hour journey through the countryside to Cienfuegos.",
            "Excursion in the city of Cienfuegos.",
            "Visit to Punta Gorda area, the Palacio del Valle, and the Jagua Hotel.",
            "Optional Stop at El Nicho Waterfall (This has an extra cost of 40 euros to pay for transportation to climb the mountain).",
            "Note: If we visit El Nicho, we will have less time to spend in the other areas.",
            "Travel to Trinidad to enjoy the view of the Caribbean Sea.",
            "Break time for lunch in Trinidad (not included).",
            "Walk through the historic center such as Plaza Mayor, La Canchanchara, museums, etc.",
            "Free time for more walks or visit to the craft market if time permits.",
            "Return to your hotel around 7 pm.",
            "This tour includes a classic car with air conditioning and a tour guide.",
            ],
            },
            {
            title: "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
             place: ["Central Region", "Región Central"],
            details: [
            "The trip can also be done in two days.",
            "Pickup at your accommodation or hotel at 06:00 am.",
            "Three-hour journey through the countryside to Santa Clara.",
            "Stop at the mausoleum of Ernesto Che Guevara and the Revolution Square.",
            "Stop at Parque Vidal and city tour.",
            "Stop at The train.",
            "Optional Stop at El Nicho Waterfall (This has an extra cost of 40 euros to pay for transportation to climb the mountain).",
            "Note: If we visit El Nicho, we will have less time to spend in the other areas. Not available on one-day tour.",
            "Travel to Trinidad to enjoy the view of the Caribbean Sea.",
            "Break time for lunch in Trinidad (not included).",
            "Walk through the historic center such as Plaza Mayor, La Canchanchara, museums, etc.",
            "Free time for more walks or visit to the craft market if time permits.",
            "Departure to Cienfuegos.",
            "Excursion in the city of Cienfuegos.",
            "Visit to Punta Gorda area, the Palacio del Valle, and the Jagua Hotel.",
            "Return to your hotel around 9 pm.",
            ],
            },
            {
            title: "Viñales - Soroa Tour",
            place: "Pinar del Río",
            details: [
            "Pickup at the hotel or accommodation at 8:30 am.",
            "Cross the province of Havana to continue to Soroa.",
            "Visit Soroa where you can enjoy a swim in the waterfall and visit the orchid garden (you must pay admission at both places, 3-5 USD per person).",
            "Note: If you come from Varadero and spend too much time in Soroa, you will not have enough time to enjoy Viñales.",
            "Continuation of the tour to the Viñales Valley.",
            "Stop at the 'Las Jazmines' viewpoint (an excellent place for photography).",
            "Visit the farmer's house to see and learn about Cuban tobacco.",
            "Visit the town of Viñales.",
            "Visit to the Indian Cave (entrance not included, 5 USD per person).",
            "Visit the Mural of Prehistory.",
            "Enjoy a horseback ride (optional, not included, 10-15 USD per person).",
            "Return trip to Havana or Varadero.",
            ],
            },
          {
            title: "City Tour Varadero for Hour",
            place: ["Matanzas"],
            details: [
              "Explore every corner of the city of Varadero in a classic convertible car for time. The price is $40 USD/hour.",
              "House of All",
              "Craft fair",
              "Photographic viewpoint",
              "Josones Park",
              "Varadero Boulevard",
              "Xanadu Mansion",
              "Dolphinarium",
              "Marina Varadero",
            ],
          },
        ],
        itinerarySec:{
          h4:'Itinerary'
        },
        places: [
          {
            id: 1,
            title: "Castle in the Sky",
            description:
              "The Castle in the Sky offers a breathtaking panoramic view of Pinar Del Río. Built in the 19th century as a lookout post, this historic site has been restored for visitors to enjoy its rich history.",
            image: "/images/places/Castillo_Cielo.webp",
            tag: "Pinar Del Río",
            itinerary: ["Tour Viñales - Soroa", "Тур Виньялес - Сороа", "Viñales - Soroa Tour"],
          },
          {
            id: 2,
            title: "Bacunayagua Overlook",
            description:
              "Bacunayagua Overlook, built in the 1960s, is a scenic observation point offering breathtaking panoramic views of the Yumurí Valley. This iconic location also has an interesting history related to the tourist development of the region.",
            image: "/images/places/Mirador_Bacunayagua.webp",
            tag: "Matanzas",
        
            itinerary: [
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",      
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
            ],
          },
        
          {
            id: 5,
            title: "Orchid Garden",
            description:
              "The Orchid Garden in Pinar Del Río is a floral paradise established in the 20th century. With an impressive collection of native and international orchids, this place offers a unique experience for botanical enthusiasts.",
            image: "/images/places/Orquideario.webp",
            tag: "Pinar Del Río",
            itinerary: ["Tour Viñales - Soroa", "Тур Виньялес - Сороа", "Viñales - Soroa Tour"],
          },
          {
            id: 6,
            title: "Indian's Cave",
            description:
              "The Indian's Cave, discovered in the 19th century, is a fascinating cave system with unique geological formations. Over the years, it has been the scene of archaeological discoveries revealing the presence of ancient cultures in the region.",
            image: "/images/places/nuevos_places/Cueva_Indio.webp",
            tag: "Pinar Del Río",
            itinerary: ["Tour Viñales - Soroa", "Тур Виньялес - Сороа", "Viñales - Soroa Tour"],
          },
          {
            id: 7,
            title: "Floridita",
            description:
              "Floridita is a historic bar known for its connection to Ernest Hemingway. Established in the early 19th century, this iconic venue offers a blend of history, traditional cocktails, live music, and a lively atmosphere.",
            image: "/images/places/Floridita.webp",
            tag: "Havana",
        
            itinerary: [
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 8,
            title: "Bodeguita del Medio",
            description:
              "Bodeguita del Medio, established in the 20th century, is a historic bar and restaurant. Renowned for its authentic mojitos, Afro-Cuban music, and vibrant atmosphere, it's a must-visit for those seeking Cuban culture.",
            image: "/images/places/Bodeguita.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 9,
            title: "Knight of Paris",
            description:
              "Knight of Paris is a historic statue in Havana, representing a unique character from the city's past. This landmark offers insights into the local history, nearby squares, urban art, and architectural photography.",
            image: "/images/places/Caballero_Paris.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 10,
            title: "Christ of Havana",
            description:
              "The Christ of Havana is a religious monument offering panoramic views. Built in the mid-20th century, it serves as a symbol of spirituality, providing visitors with serene walks, spiritual events, and insights into Catholic culture.",
            image: "/images/places/Cristo.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 11,
            title: "The Capitol",
            description:
              "The Capitol, an iconic neoclassical building, stands as a political landmark in Havana. Built in the early 20th century, it offers a glimpse into political history, guided tours, cultural events, and panoramic views from its dome.",
            image: "/images/places/Capitolio.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 12,
            title: "Revolution Square",
            description:
              "Revolution Square, located in Havana, is an iconic plaza with revolutionary monuments. Serving as a focal point for public events, it features political art, historical speeches, and a central location for gatherings.",
            image: "/images/places/Plaza_Rev.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 13,
            title: "Varadero",
            description:
              "Varadero is a renowned beach resort town in Matanzas, attracting visitors with its pristine beaches and vibrant nightlife. Established in the early 20th century, it offers water sports, beachfront relaxation, and cultural experiences.",
            image: "/images/places/Varadero.webp",
            tag: "Matanzas",
        
            itinerary: [
              "Jeep Safari",
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
          {
            id: 14,
            title: "Freedom Park",
            description:
              "Freedom Park in Matanzas is a green oasis with a historical past. Established in the 20th century, it serves as a recreational area, featuring green spaces, historical monuments, and cultural events.",
            image: "/images/places/Parque_Libertad.webp",
            tag: "Matanzas",
        
            itinerary: [
              "Excursion de un día a Varadero desde La Habana",
              "Tour por Matanzas",
              "One-day excursion to Varadero from Havana",
              "Matanzas Tour", "Тур по Матансасу",
            ],
          },
          {
            id: 15,
            title: "Bellamar Cave",
            description:
              "Bellamar Cave, discovered in the 19th century, is a captivating cave system with unique geological formations. Over the years, it has been the scene of archaeological discoveries revealing the presence of ancient cultures in the region.",
            image: "/images/places/Bellamar_Cave.webp",
            tag: "Matanzas",
        
            itinerary: ["Matanzas Tour", "Тур по Матансасу", "Tour por Matanzas"],
          },
          {
            id: 16,
            title: "Al Capone's House",
            description:
              "Al Capone's House, built during the 1920s, is a silent witness to the prohibition era. This historic site offers a unique glimpse into the life of the famous gangster and his influence in the Matanzas region during those turbulent years.",
            image: "/images/places/Casa_de_Al.webp",
            tag: "Matanzas",
        
            itinerary: [
              
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
          {
            id: 17,
            title: "Saturn Cave",
            description:
              "Saturn Cave, known for its impressive underground natural pool, has a history dating back to pre-Columbian times. Used by the Taíno indigenous people, the cave has been a sacred site and refuge throughout the centuries.",
            image: "/images/places/Cueva_Saturno.webp",
            tag: "Matanzas",
        
            itinerary: [
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",
              "Jeep Safari",
            ],
          },
          {
            id: 18,
            title: "Guama",
            description:
              "Guama is a reconstructed Taíno village in the Matanzas region. This unique site offers visitors an immersive experience in indigenous culture, with authentic replicas of Taíno dwellings and activities highlighting the rich heritage of the island's natives.",
            image: "/images/places/Guama.webp",
            tag: "Matanzas",
        
            itinerary: ["Tour por la Ciénaga de Zapata", "Zapata Swamp Tour","Экскурсия в Циенага-де-Сапата"],
          },
          {
            id: 19,
            title: "Dupon Mansion",
            description:
              "Dupón Mansion, built in the late 19th century, is an outstanding example of colonial architecture in Matanzas. This majestic residence has witnessed historical and cultural events over the years, now open to the public to share its rich history.",
            image: "/images/places/Mansion_Dupon.webp",
            tag: "Matanzas",
        
            itinerary: [
              
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
          {
            id: 20,
            title: "Soroa",
            description:
              "Soroa, known as the 'rainbow of Cuba,' is famous for its botanical garden and waterfalls. Founded in the 19th century, the area is a natural paradise that has attracted flora and fauna enthusiasts from around the world for generations.",
            image: "/images/places/Pinar_Cascada.webp",
            tag: "Pinar Del Río",
            itinerary: ["Tour Viñales - Soroa", "Тур Виньялес - Сороа", "Viñales - Soroa Tour"],
          },
        
          {
            id: 21,
            title: "Pharmaceutical Museum",
            description:
              "The Pharmaceutical Museum in Matanzas, opened in the early 20th century, is a testament to the development of pharmacology in the region. It exhibits a fascinating collection of antique medical instruments and offers visitors a unique insight into the history of medicine.",
            image: "/images/places/Museo_Farmaceutico.webp",
            tag: "Matanzas",
        
            itinerary: ["Tour por Matanzas", "Matanzas Tour", "Тур по Матансасу"],
          },
          {
            id: 22,
            title: "City of Matanzas",
            description:
              "The City of Matanzas, also known as the 'Athens of Cuba,' has a rich history spanning from colonial times to the present. Its unique architecture, charming squares, and cultural events make this city a must-visit for history and culture enthusiasts.",
            image: "/images/places/plaza_mtz.webp",
            tag: "Matanzas",
        
            itinerary: [
              "Excursion de un día a Varadero desde La Habana",
              "Tour por Matanzas",
              "One-day excursion to Varadero from Havana",
              "Matanzas Tour", "Тур по Матансасу",
            ],
          },
          {
            id: 23,
            title: "The Beatles",
            description:
              "The Beatles in Matanzas is a vibrant tribute to the iconic rock band. This place offers a unique musical experience with exhibitions, themed events, and an atmosphere that transports visitors to the exciting era of Beatlemania.",
            image: "/images/places/the_beatles.webp",
            tag: "Matanzas",
        
            itinerary: [
              
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
          {
            id: 27,
            title: "Royal Force Castle",
            description:
              "Visit the historic Royal Force Castle, a fortress that once protected Havana from pirate attacks. Explore its storied past and enjoy panoramic views of the city.",
            image: "/images/places/nuevos_places/Castillo_Real_Fuerza.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 28,
            title: "Catedral Nuestra Señora de Kazan",
            description:
              "Marvel at the architectural beauty of the Catedral Nuestra Señora de Kazan, a cathedral that showcases a blend of different styles. Discover the religious and cultural significance.",
            image: "/images/places/nuevos_places/Catedral_Senora_Kazan.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "One day tour in Havana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 29,
            title: "Cienfuegos",
            description:
              "Explore the picturesque city of Cienfuegos, known for its French influence and stunning waterfront. Immerse yourself in the local arts, culture, and the welcoming atmosphere.",
            image: "/images/places/nuevos_places/Cienfuegos.webp",
            tag: ["Central Region", "Región Central"],
            itinerary: [
              "Tour Trinidad - Cienfuegos (Opcional Nicho)",  "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Trinidad - Cienfuegos Tour (Optional Nicho)",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 30,
            title: "Crocodile Farm",
            description:
              "Visit the Crocodile Farm and witness these fascinating reptiles in their natural habitat. Learn about crocodile conservation efforts and enjoy a unique wildlife experience.",
            image: "/images/places/nuevos_places/Criadero_Cocodrilos.webp",
            tag: "Matanzas",
        
            itinerary: ["Tour por la Ciénaga de Zapata", "Zapata Swamp Tour","Экскурсия в Циенага-де-Сапата"],
          },
          {
            id: 32,
            title: "Trinity Church",
            description:
              "Visit the Trinity Church, a historic church in Trinidad. Admire its architecture and immerse yourself in the religious and cultural heritage of this charming Cuban town.",
            image: "/images/places/nuevos_places/Iglesia_Trinidad.webp",
            tag: ["Central Region", "Región Central"],
        
            itinerary: [
              "Tour Trinidad - Cienfuegos (Opcional Nicho)",  "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Trinidad - Cienfuegos Tour (Optional Nicho)",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
        
          {
            id: 33,
            title: "Josone Park",
            description:
              "Relax in the lush surroundings of Josone Park, a beautiful park with gardens, lakes, and recreational areas. Enjoy a peaceful escape from the hustle and bustle of daily life.",
            image: "/images/places/nuevos_places/Josone.webp",
            tag: "Matanzas",
            itinerary: [
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
          {
            id: 34,
            title: "Monserrate",
            description:
              "Climb to the top of Monserrate for breathtaking views of the surrounding landscapes. This vantage point offers a unique perspective of the town and its picturesque surroundings.",
            image: "/images/places/nuevos_places/Monserrate.webp",
            tag: "Matanzas",
            itinerary: ["Tour por Matanzas", "Matanzas Tour", "Тур по Матансасу"],
          },
          {
            id: 35,
            title: "Monument to Ernesto Che Guevara",
            description:
              "Pay homage to the iconic revolutionary leader at the Monument to Ernesto Che Guevara. Explore the memorial and gain insights into the life and legacy of Che Guevara.",
            image: "/images/places/nuevos_places/Monumento_Ernesto_Che_Guevara.webp",
            tag: ["Central Region", "Región Central"],
            itinerary: [
              
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 36,
            title: "Monument to the attack of the Armored Train",
            description:
              "Visit the Monument to the attack of the Armored Train, commemorating a historic event during the Cuban Revolution. Learn about the bravery and significance of this pivotal moment.",
            image: "/images/places/nuevos_places/Monumento_Tren_Blindado.webp",
            tag: ["Central Region", "Región Central"],
            itinerary: [
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 37,
            title: "Prehistory Mural",
            description:
              "Marvel at the Prehistory Mural, a colossal outdoor mural depicting the evolutionary history of life on Earth. Explore the vibrant artwork set against a natural backdrop.",
            image: "/images/places/nuevos_places/Mural_Prehistoria.webp",
            tag: "Pinar Del Río",
            itinerary: ["Tour Viñales - Soroa", "Тур Виньялес - Сороа", "Viñales - Soroa Tour"],
          },
          {
            id: 39,
            title: "Rum Museum",
            description:
              "Savor the rich history of Cuban rum at the Rum Museum. Discover the art of rum production, learn about its cultural significance, and enjoy tastings of fine Cuban rums.",
            image: "/images/places/nuevos_places/Museo_Ron.webp",
            tag: ["Havana", "La Habana"],
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
        
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 40,
            title: "Palace of the Spanish Governors",
            description:
              "Step back in time at the Palace of the Spanish Governors, a historic palace showcasing colonial architecture. Explore the rooms and corridors that whisper tales of the past.",
            image: "/images/places/nuevos_places/Palacio_Gobernadores.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
        
          {
            id: 41,
            title: "Valley Palace",
            description:
              "Experience the grandeur of Valley Palace, an architectural gem that blends various styles. Marvel at the intricate details and enjoy panoramic views of the surrounding landscapes.",
            image: "/images/places/nuevos_places/Palacio_Valle.webp",
            tag: ["Central Region", "Región Central"],
        
            itinerary: [
              "Tour Trinidad - Cienfuegos (Opcional Nicho)",  "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Trinidad - Cienfuegos Tour (Optional Nicho)",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 42,
            title: "Playa Larga",
            description:
              "Relax on the pristine shores of Playa Larga, a beautiful beach known for its tranquility and natural beauty. Enjoy sunbathing, swimming, and a peaceful escape by the sea.",
            image: "/images/places/nuevos_places/Playa_Larga.webp",
            tag: "Matanzas",
            itinerary: ["Tour por la Ciénaga de Zapata", "Zapata Swamp Tour","Экскурсия в Циенага-де-Сапата"],
          },
          {
            id: 43,
            title: "Main Square",
            description:
              "Stroll through the historic Main Square, the oldest square in Havana. Immerse yourself in the colonial charm, explore book markets, and enjoy the vibrant atmosphere.",
            image: "/images/places/nuevos_places/Plaza_Armas.webp",
            tag: ["Havana", "La Habana"],
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 45,
            title: "Trinity Square",
            description:
              "Experience the charm of Trinity Square, a historic square in Trinidad. Admire the colonial architecture, explore local shops, and immerse yourself in the cultural richness of the area.",
            image: "/images/places/nuevos_places/Plaza.webp",
            tag: ["Central Region", "Región Central"],
        
            itinerary: [
              "Tour Trinidad - Cienfuegos (Opcional Nicho)",  "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Trinidad - Cienfuegos Tour (Optional Nicho)",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 46,
            title: "San Francisco Square",
            description:
              "Discover the beauty of San Francisco Square, a square surrounded by historic buildings. Enjoy the lively atmosphere, visit the nearby attractions, and soak in the rich history.",
            image: "/images/places/nuevos_places/San_Francisco.webp",
            tag: ["Havana", "La Habana"],
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 47,
            title: "San Severino Fortress",
            description:
              "Explore the imposing San Severino Fortress, a fortress with a storied history. Learn about its role in protecting the town and enjoy panoramic views of the surrounding landscapes.",
            image: "/images/places/nuevos_places/San_Seberino.webp",
            tag: "Matanzas",
            itinerary: ["Tour por Matanzas", "Matanzas Tour", "Тур по Матансасу"],
          },
          {
            id: 48,
            title: "Santa Clara",
            description:
              "Immerse yourself in the vibrant city of Santa Clara, known for its revolutionary history. Explore landmarks, learn about Che Guevara, and experience the lively cultural scene.",
            image: "/images/places/nuevos_places/Santa_Clara.webp",
            tag: ["Central Region", "Región Central"],
        
            itinerary: [
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 49,
            title: "Alicia Alonso National Theater",
            description:
              "Experience the grandeur of Alicia Alonso National Theater, a renowned theater in Havana. Attend performances, admire the architectural beauty, and immerse yourself in the arts and culture.",
            image: "/images/places/nuevos_places/Teatro_Nacional_Alicia_Alonso.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 50,
            title: "Trinidad",
            description:
              "Discover the UNESCO World Heritage site of Trinidad, a town frozen in time. Wander through cobblestone streets, admire colonial architecture, and experience the rich history and culture.",
            image: "/images/places/nuevos_places/Trinidad.webp",
            tag: ["Central Region", "Región Central"],
        
            itinerary: [
              "Tour Trinidad - Cienfuegos (Opcional Nicho)",  "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Trinidad - Cienfuegos Tour (Optional Nicho)",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 51,
            title: "Tropicana",
            description:
              "Experience the vibrant nightlife of Havana at Tropicana, a legendary cabaret. Enjoy dazzling performances, lively music, and the glamour of Cuba's most iconic entertainment venue.",
            image: "/images/places/nuevos_places/Tropicana.webp",
            tag: ["Havana", "La Habana"],
            itinerary: ["Tour por La Habana + Tropicana","Тур по Гаване + Тропикана", "Havana Tour + Tropicana"],
          },
          {
            id: 52,
            title: "Yumuri Valley",
            description:
              "Explore the picturesque Yumuri Valley, a lush valley surrounded by hills and rivers. Enjoy nature walks, capture breathtaking views, and immerse yourself in the tranquility of the landscape.",
            image: "/images/places/nuevos_places/Valle_Yumuri.webp",
            tag: "Matanzas",
            itinerary: ["Tour por Matanzas", "Matanzas Tour", "Тур по Матансасу"],
          },
          {
            id: 53,
            title: "Viñales",
            description:
              "Escape to the scenic beauty of Viñales, a valley surrounded by majestic limestone hills. Discover tobacco farms, explore caves, and enjoy the laid-back atmosphere of rural Cuba.",
            image: "/images/places/nuevos_places/Viñales.webp",
            tag: "Pinar Del Río",
            itinerary: ["Tour Viñales - Soroa", "Тур Виньялес - Сороа", "Viñales - Soroa Tour"],
          },
          {
            id: 54,
            title: "Monserrate View",
            description:
              "Ascend to Monserrate View for panoramic views of Havana. Capture breathtaking cityscapes, enjoy a serene atmosphere, and marvel at the beauty of the Cuban capital from above.",
            image: "/images/places/nuevos_places/Vistas_Monserrate.webp",
            tag: "Matanzas",
            itinerary: ["Tour por Matanzas", "Matanzas Tour", "Тур по Матансасу"],
          },
          {
            id: 55,
            title: "Varadero Dolphinarium",
            description:
              "The Varadero Dolphinarium in Cuba offers exciting shows and interactive activities that allow visitors to interact up-close with dolphins while promoting marine conservation.",
        
            image: "/images/places/nuevos_places/Delfinario_Varadero.webp",
            tag: "Matanzas",
            itinerary: [
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
        
          {
            id: 56,
            title: "Varadero Marina",
            description:
              "Marina Varadero is a marina located in Varadero, Cuba, that offers complete nautical services and accommodation for boats, promoting maritime tourism and recreational boating.",
            image: "/images/places/nuevos_places/Marina_Varadero.webp",
            tag: "Matanzas",
            itinerary: [
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
          {
            id: 57,
            title: "Cannon shot at Morro Cabaña Castle",
            description:
              "Experience the historical Cannon shot ceremony at Morro Cabaña Castle, a nightly ritual that dates back centuries, offering a glimpse into Cuba's rich past.",
            image: "/images/places/nuevos_places/Cañonazo.webp",
            tag: ["Havana", "La Habana"],
            itinerary: ["Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки", "Havana Tour + Cannon Shot"],
          },
        ]
      },

  
        es: {
        nav:{ 
          'home':'Inicio',
          'places': 'Destinos',
          'about': 'Sobre Nosotros',
          'services': 'Servicios',
          'feedback': 'Comentarios',
          matanzas: 'Matanzas',
          habana:"La Habana",
          pinar:"Pinar del Río",
          central: "Región Central"
        },   
        hero:{
            'h1':'Cuban',
            'h12':'52',
            'span':'Classic',
            'p':"Disfrute de un servicio de taxi confiable y eficiente con conductores profesionales. Le garantizamos un viaje seguro, puntual y cómodo."
            ,'button':'Reserva Ahora',
        },
        prov:{
          visit:'Visita',
            'h2':'Tus Vacaciones Soñadas Empiezan con Nosotros',
            'p':'Descubra horizontes culturales donde las tradiciones antiguas se encuentran con la vitalidad moderna, y cada calle le invita a formar parte de la historia viva de la ciudad.',
            places: [
             
                    {
                     name: "Pinar del Río",
                     slug: 'Pinar del Río',
                     desc: "Campos de tabaco, Valle de Viñales, mogotes, Cueva del Indio, aguas termales de San Diego, Soroa, fábricas de tabaco y encanto colonial.",
                     img: '/images/Pinar.png',
                     href: "/"
                     },
                     {
                     name: "La Habana",
                     slug: 'La Habana',
                     desc: "La Habana Vieja histórica, el Malecón, autos clásicos, el Castillo del Morro, música animada, ron, museos y una cultura vibrante.",
                     img: '/images/Havana.jpg',
                     href: "/"
                     },
                     {
                     name: "Matanzas",
                     slug: "Matanzas",
                     desc: "Playa Varadero, Castillo de San Severino, Valle de Yumurí, cultura afrocubana y herencia colonial.",
                     img: '/images/Matanzas.png',
                     href: "/"
                     },
                     {
                     name: "Región Central",
                     slug: "Región Central",
                     desc: "Combina historia, música tradicional, parques naturales y hermosas playas.",
                     img: '/images/Trinidad.png',
                     href: "/"
                     }
           ]
        },
        aboutComp:{
              'h2':"Acerca de la Compañía",
              'pdesc':"Redefinimos el turismo en Cuba ofreciendo experiencias a través de recorridos personalizados en autos clásicos que capturan a la perfección el espíritu vintage de la isla. Combinando precios competitivos con la auténtica hospitalidad cubana, brindamos un servicio excepcional que refleja la verdadera esencia de nuestra cultura.",
              'p':"Permítanos transformar su visita en un viaje extraordinario.",
              'secT':"Puntualidad",
              'secP':"Recogidas puntuales y rutas optimizadas.",
              'conT':"Autenticidad",
              'conP':"Rincones secretos que sólo los locales conocen.", 
        },
        about2:{
              h2:'Creamos Momentos Inolvidables Para Ti',
              elementos:[
                 {
                  num: '1',
                  title: 'Reserva Fácil y Rápida',
                  text: 'Reserva en minutos: escríbenos por WhatsApp con tus preferencias.',
                  active: false
                  },
                 {
                  num: '2',
                  title: 'Viaje Personalizado a tu Medida',
                  text: 'Nuestro equipo te ayudará a diseñar el itinerario perfecto según tus gustos.',
                  active: false
                  },
                 {
                  num: '3',
                  title: 'Disfruta de un Servicio Exclusivo',
                  text: 'Disfruta de un servicio de primera con conductores expertos y atención personalizada.',
                  active: true
                  }
                ]
        },
        services: {
                  h2: "Disfrute Del Mejor Servicio De Transporte",
                  p: "Nuestro equipo de profesionales expertos se adapta perfectamente a cada viajero, diseñando experiencias a medida que superan las expectativas.",
                  serv1h4: 'Excursiones',
                  serv1p: 'Descubra ciudades vibrantes, pueblos y todas las joyas ocultas a lo largo del camino.',
                  serv2h4: 'Transporte Exclusivo',
                  serv2p: 'Reserva fácil en nuestros vehículos exclusivos.',
                  serv3h4: 'Traslado',
                  serv3p: 'Viaja con comodidad y disfruta de viajes sin interrupciones.',
        },
        feedback: {
              h2: 'Lo que dicen los clientes sobre nuestros tours',
              p:'Descubra lo que nuestros clientes tienen que decir sobre nuestros tours, mientras comparten sus experiencias inolvidables y críticas favorables.',
              coment:'Escríbenos tu comentario',
            },

        itinerary:[
          
{
  title: "Tour de un día en La Habana",
  place: ["Havana", "La Habana"],
  details: [
  "Hora de salida desde el hotel ~8:00. Hora de llegada al hotel ~17:00-18:00",
  "El trayecto hasta La Habana dura de 1,5 a 2 horas. En el camino, haremos una parada en el puente más alto de Cuba (Bacunayagua), con vistas al Valle de Yumurí y al océano. Podrán probar el cóctel de piña más delicioso de Cuba (por un costo adicional).",
  "Parada cerca del Castillo del Morro, que ofrece impresionantes vistas panorámicas de La Habana. (La entrada es pagada y opcional).",
  "Luego, daremos un paseo por el Malecón desde donde comenzará una caminata de dos horas por la Habana Vieja. Entre las atracciones se encuentran la Plaza de San Francisco de Asís, una torre de campanario del antiguo monasterio franciscano (con una tarifa), un museo del ron con degustación (entrada pagada), la Catedral de Nuestra Señora de Kazán, la Plaza de la Catedral, la Bodeguita del Medio, el Palacio de los Gobernadores Españoles, la Plaza de Armas, el Castillo de la Real Fuerza (entrada pagada), la Calle Obispo, el Hotel Ambos Mundos, la Plaza Vieja, entre otros.",
  "Visita a la Plaza de la Revolución, un paseo por el centro de La Habana, donde encontrarás el Capitolio, el Gran Teatro de La Habana, el café Floridita (mencionado por Hemingway) y otros puntos de interés.",
  "Salimos de La Habana a las 3:00 pm.",
  "El almuerzo no está incluido en el precio de la excursión (el costo estimado del almuerzo es de 15-20 $€).",
  ],
  },
  {
  title: "Tour al Atardecer en La Habana",
  place: ["Havana", "La Habana"],
  details: [
  "Recogida en su alojamiento u hotel a las 10:00 AM en Varadero.",
  "Aproximadamente dos horas de viaje a La Habana por la costa norte.",
  "Parada en el puente más alto de Cuba (Bacunayagua), de 112 metros de altura, donde podrás disfrutar del mejor cóctel de piña de Cuba.",
  "Traslado a La Habana.",
  "Paseo por La Habana Vieja, declarada Patrimonio de la Humanidad por la UNESCO en 1982.",
  "Visita a la Plaza de la Catedral.",
  "Visita a la Plaza del Brazo.",
  "Visita a la Plaza Vieja.",
  "Visita a la Plaza San Francisco de Asís.",
  "Parada en el castillo más antiguo de Cuba, el Castillo del Morro.",
  "Visita a la estatua del Cristo de La Habana.",
  "Hotel Nacional.",
  "Visita a los famosos bares de Hemingway La Bodeguita del Medio y El Floridita.",
  "Hora del almuerzo (los precios varían según la elección del cliente, no incluido).",
  "Ruta por el Malecón y La Habana Nueva.",
  "Parada en la Plaza de la Revolución.",
  "Tiempo para caminar por el centro de la ciudad donde podrás ver el Capitolio, el Gran Teatro de La Habana y el Parque Central.",
  "Parada opcional en el Museo del Ron.",
  "Visita a la tienda de tabaco.",
  "Por la noche, visitaremos los mejores lugares para disfrutar del atardecer, que pueden ser desde el Malecón de La Habana o el Castillo del Morro.",
  "La ruta termina al atardecer.",
  "Regreso a Varadero después del atardecer.",
  "Cosas opcionales que puedes agregar a este tour: 25 USD/EURO por una hora en un descapotable clásico una vez en La Habana.",
  ],
  },
  {
    "title": "Tour por La Habana + Cañonazo",
    place: ["Havana", "La Habana"],
    "details": [
      "Recogida en su alojamiento u hotel a las 10:00 am.",
      "Paseo por La Habana Vieja, declarada Patrimonio de la Humanidad por la UNESCO en 1982. Disfrute de tiempo libre, y recomendamos una visita al mercado de artesanías representativas de la identidad cultural del pueblo.",
      "Visita a la Plaza de San Francisco de Asís, llena de adoquines ubicada en las puertas de La Habana.",
      "Parada en la Plaza de la Catedral, uno de los lugares más hermosos de La Habana Vieja.",
      "Escala en la Plaza Vieja, recientemente restaurada, una parada obligatoria para los amantes de la historia.",
      "Visita a la Plaza de Armas, la plaza más antigua de La Habana.",
      "Parada en el Palacio de los Capitanes Generales, una de las obras arquitectónicas más importantes de Cuba.",
      "Breve estadía en el Hotel Ambos Mundos, un edificio de estilo ecléctico ubicado en La Habana Vieja.",
      "Visita a dos de los bares más populares de La Habana, La Bodeguita del Medio y El Floridita, para disfrutar de los cócteles más deliciosos.",
      "Almuerzo sugerido por el guía en los restaurantes más espectaculares de La Habana, donde podrá disfrutar de nuestra típica comida cubana.",
      "Viaje en un auto clásico por la Avenida Malecón, disfrutando de una hermosa vista de la Bahía de La Habana.",
      "Paseo por la Habana Moderna, visita exclusiva.",
      "Recorrido panorámico por los barrios de Vedado y Miramar.",
      "Parada en la Plaza de la Revolución, una de las más grandes del mundo y sede de uno de los museos más interesantes de toda Cuba.",
      "Escala panorámica en el edificio correspondiente al Capitolio, uno de los lugares más emblemáticos de La Habana.",
      "Parada en el Parque Central José Martí, una gran atracción para viajeros de todo el mundo, donde la historia de magníficos edificios y la naturaleza se combinan.",
      "Visita al Gran Teatro de La Habana Alicia Alonso, un magnífico edificio sede del Ballet y la Ópera Nacional de Cuba.",
      "Visita panorámica a la Fortaleza del Morro, una importante fortificación construida en Cuba en el siglo XVI.",
      "Visita panorámica al Cristo de La Habana, una obra escultórica monumental de unos 20 metros de altura.",
      "Cena en los restaurantes recomendados de La Habana según su elección. Elija entre camarones o pollo, para saborear la auténtica cocina cubana.",
      "A las 21:00 horas puede disfrutar de una de las tradiciones cubanas: el 'disparo del cañón de las nueve' en la visita guiada a la Fortaleza de San Carlos de la Cabaña.",
      "Viaje de regreso a su alojamiento en un auto clásico con máximo confort y seguridad."
    ]
  },
  {
    "title": "Tour por La Habana + Tropicana",
    place: ["Havana", "La Habana"],
    "details": [
      "Recogida en su alojamiento u hotel a las 10:30 am.",
      "Aproximadamente dos horas de viaje a La Habana por la costa atlántica.",
      "Parada en el puente más alto de Cuba, el «Bacunayagua», donde también puedes disfrutar del mejor Cóctel de Piña de Cuba.",
      "Traslado a La Habana.",
      "Paseo por La Habana Vieja, declarada Patrimonio de la Humanidad por la UNESCO en 1982.",
      "Visita a la Plaza de la Catedral.",
      "Visita a la Plaza de Arma.",
      "Visita a la Plaza Vieja.",
      "Visita a la Plaza San Francisco de Asís.",
      "Parada en el castillo más antiguo de Cuba, el Castillo del Morro.",
      "Visita a la estatua del Cristo de La Habana.",
      "Visita a los famosos bares de Hemingway La Bodeguita del Medio y El Floridita.",
      "Hora del almuerzo (los precios varían según la elección del cliente, no incluido).",
      "Ruta por el Malecón y la Nueva Habana.",
      "Parada en la Plaza de la Revolución.",
      "Tiempo para caminar hacia el centro donde puedes ver el edificio del Capitolio, el Gran Teatro de La Habana y el Parque Central.",
      "Parada opcional en el Museo del Ron.",
      "Visita a la tienda de tabaco.",
      "Visita al Tropicana (el cliente paga la entrada directamente en el cabaret).",
      "Después del espectáculo, viaje de regreso a Varadero."
    ]
  },
  {
    "title": "Tour por la Ciénaga de Zapata",
    place: ["Matanzas"],
    "details": [
      "Salida del hotel a las 8:00 am.",
      "Cruzamos la isla de norte a sur. El viaje dura aproximadamente 2 horas.",
      "En el camino, pasaremos por las ciudades de Santa Marta y Cárdenas, el pueblo de Jovellanos, donde viven muchos descendientes de esclavos africanos, una cooperativa llamada Vladimir Ilich Lenin, el pueblo de Australia, plantaciones de caña de azúcar, plátano, cítricos, mango y otros cultivos tropicales.",
      "Primera parada en una mini finca con plantas y animales típicos cubanos. Por un costo adicional, puede beber jugo de caña de azúcar y montar un toro cebú.",
      "Instalación de cría de cocodrilos (5 € por persona).",
      "Visita a 'Los Indios': Nos embarcamos en lanchas motoras y nos llevan a una isla con algunas chozas y esculturas indias. Este pueblo indio tiene un costo de 12 € por persona y dura aproximadamente 2 horas o más.",
      "Almuerzo incluido con 4 tipos de carne, como cocodrilo, cangrejo, langosta, camarones, pescado, venado, caracoles o calamares, por 15-20 € por persona. También incluye arroz con verduras, ensalada y bebidas.",
      "Mar Caribe: Disfrutaremos del Mar Caribe en la Bahía de Cochinos, con aguas claras especialmente cerca de los corales.",
      "Snorkeling: Alquiler de equipo de snorkel por 5 € por hora. Puede traer su propio equipo. Se recomienda llevar migas de pan del hotel para alimentar a los peces y otras criaturas marinas.",
      "Buceo: Costará 25 € por 40 minutos para buceadores experimentados. Los principiantes pagan 10 € adicionales por una lección introductoria. El área de buceo es fácil y tiene barcos hundidos a 25-30 metros de profundidad.",
      "Cenotes: Veremos cenotes o sumideros en las selvas alrededor de la Bahía de Cochinos, donde se puede nadar. Si se desea, podemos ir a la Casa del Colibrí para observar aves (1 $).",
      "Parada opcional para nadar en la playa de arena en el pueblo de Playa Larga.",
      "Historia: Visitaremos sitios históricos importantes relacionados con la Guerra Fría en la Bahía de Cochinos, donde en 1961 se llevó a cabo una invasión pro-Castro.",
      "Regreso a Varadero a las 16:00.",
    ]
  },
  {
    "title": "Tour por Matanzas",
    "place": "Matanzas",
    "details": [
      "Salida del hotel a las 9:00 am.",
      "Visita a las Cuevas de Bellamar (entrada $5): Exploraremos las impresionantes Cuevas de Bellamar, un sistema de cuevas que ofrece formaciones rocosas únicas y espectaculares. Descubriremos la rica geología y la historia de este lugar fascinante.",
      "Recorrido por el centro colonial de la ciudad: Nos sumergiremos en la historia de Matanzas explorando su centro colonial. Visitaremos la famosa Farmacia Francesa, un hito arquitectónico icónico que refleja la influencia francesa en la región.",
      "Mirador de Monserrat: Disfrutaremos de una vista panorámica desde el Mirador de Monserrat, que ofrece una perspectiva impresionante de la ciudad y sus alrededores. Un lugar perfecto para capturar recuerdos inolvidables.",
      "La Ermita: Visitaremos La Ermita, un lugar sagrado que ha sido testigo de eventos históricos significativos. Aprenderemos más sobre el significado cultural y religioso de este sitio.",
      "Castillo de San Severino: Exploraremos el Castillo de San Severino, una fortaleza histórica que desempeñó un papel crucial en la defensa de la ciudad. Descubriremos la arquitectura militar y la historia que rodea este imponente castillo.",
      "Cueva de Saturno (entrada $5): Concluiremos nuestro recorrido explorando la Cueva de Saturno, un cenote subterráneo con aguas cristalinas. Los visitantes tendrán la oportunidad de nadar y disfrutar de la belleza natural única de esta formación geológica.",
      "Regreso al hotel alrededor de las 2:00 pm.",
    ]
  },
  {
    "title": "Excursión de un día a Varadero desde La Habana",
    "place": "Matanzas",
    "details": [
      "Recogida en el hotel o B&B en un auto clásico a las 8:00 am.",
      "Salida hacia Varadero por la costa con hermosos paisajes.",
      "Parada opcional en el Puente Bacunayagua: Haremos una parada en el puente más alto de Cuba con 112 m de altura. Desde este mirador, los visitantes pueden disfrutar de hermosas vistas panorámicas y degustar el mejor Cóctel de Piña de Cuba.",
      "Viaje a la Playa Coral para hacer snorkel (entradas no incluidas, 10 USD por persona): Exploraremos las aguas cristalinas de la Playa Coral, ideal para practicar snorkel y disfrutar de la vida marina.",
      "Visita a la cueva abierta de Saturno (entradas no incluidas, 5 USD por persona): Descubriremos la belleza de la Cueva de Saturno, un cenote subterráneo con aguas cristalinas. Los visitantes tendrán la oportunidad de nadar y disfrutar de la belleza natural única de esta formación geológica.",
      "Continuación del viaje a Varadero.",
      "Visita a La Casa Alcapone en Varadero: Exploraremos La Casa Alcapone, que ofrece una visión de la historia y el lujo de la época.",
      "Visita al mercado de Varadero: Sumérgete en la cultura local explorando el mercado de Varadero, donde puedes encontrar artesanías y productos locales.",
      "Visita al Parque Josone: Disfruta de la belleza natural del Parque Josone, un oasis en medio de Varadero con exuberantes jardines y lagos serenos.",
      "Visita a la Mansión Dupon: Exploraremos la elegante Mansión Dupon, un testimonio de la arquitectura histórica de Varadero.",
      "Tiempo libre en la playa: Los visitantes tendrán tiempo para relajarse en las hermosas playas de Varadero.",
      "La excursión concluye alrededor de las 4:30 pm y regresa a La Habana.",
    ]
  },
  {
    "title": "Tour Trinidad - Cienfuegos (Opcional Nicho)",
    "place": ["Región Central"],
    "details": [
      "Recogida en su alojamiento u hotel a las 06:30 am.",
      "Viaje de tres horas por el campo hacia Cienfuegos.",
      "Excursión en la ciudad de Cienfuegos.",
      "Visita al área de Punta Gorda, el Palacio del Valle y el Hotel Jagua.",
      "Parada opcional en la cascada El Nicho (Esto tiene un costo adicional de 40 euros para pagar el transporte para subir la montaña).",
      "Nota: Si visitamos El Nicho, tendremos menos tiempo para pasar en las otras áreas.",
      "Viaje a Trinidad para disfrutar de la vista del Mar Caribe.",
      "Tiempo libre para almorzar en Trinidad (no incluido).",
      "Paseo por el centro histórico como la Plaza Mayor, La Canchanchara, museos, etc.",
      "Tiempo libre para más paseos o visita al mercado de artesanías si el tiempo lo permite.",
      "Regreso a su hotel alrededor de las 7 pm.",
      "Este tour incluye un auto clásico con aire acondicionado y un guía turístico."
    ]
  },
  {
    "title": "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
    "place": ["Región Central"],
    "details": [
      "El viaje también se puede hacer en dos días.",
      "Recogida en su alojamiento u hotel a las 06:00 am.",
      "Viaje de tres horas por el campo hacia Santa Clara.",
      "Parada en el mausoleo de Ernesto Che Guevara y la Plaza de la Revolución.",
      "Parada en el Parque Vidal y recorrido por la ciudad.",
      "Parada en El Tren.",
      "Parada opcional en la cascada El Nicho (Esto tiene un costo adicional de 40 euros para pagar el transporte para subir la montaña).",
      "Nota: Si visitamos El Nicho, tendremos menos tiempo para pasar en las otras áreas. No disponible en el tour de un día.",
      "Viaje a Trinidad para disfrutar de la vista del Mar Caribe.",
      "Tiempo libre para almorzar en Trinidad (no incluido).",
      "Paseo por el centro histórico como la Plaza Mayor, La Canchanchara, museos, etc.",
      "Tiempo libre para más paseos o visita al mercado de artesanías si el tiempo lo permite.",
      "Salida hacia Cienfuegos.",
      "Excursión en la ciudad de Cienfuegos.",
      "Visita al área de Punta Gorda, el Palacio del Valle y el Hotel Jagua.",
      "Regreso a su hotel alrededor de las 9 pm."
    ]
  },
  {
    "title": "Tour Viñales - Soroa",
    "place": "Pinar del Río",
    "details": [
      "Recogida en el hotel o alojamiento a las 8:30 am.",
      "Atravesar la provincia de La Habana para continuar hacia Soroa.",
      "Visita a Soroa, donde puedes disfrutar de un baño en la cascada y visitar el jardín de orquídeas (debes pagar la entrada en ambos lugares, 3-5 USD por persona).",
      "Nota: Si vienes desde Varadero y pasas demasiado tiempo en Soroa, no tendrás suficiente tiempo para disfrutar de Viñales.",
      "Continuación del tour al Valle de Viñales.",
      "Parada en el mirador 'Las Jazmines' (un excelente lugar para la fotografía).",
      "Visita a la casa del agricultor para ver y aprender sobre el tabaco cubano.",
      "Visita al pueblo de Viñales.",
      "Visita a la Cueva del Indio (entrada no incluida, 5 USD por persona).",
      "Visita al Mural de la Prehistoria.",
      "Disfrute de un paseo a caballo (opcional, no incluido, 10-15 USD por persona).",
      "Viaje de regreso a La Habana o Varadero."
    ]
  },
  {
    "title": "Recorrido por la ciudad de Varadero por hora",
    "place": ["Matanzas"],
    "details": [
      "Explora cada rincón de la ciudad de Varadero en un auto clásico descapotable por tiempo. El precio es de $40 USD por hora.",
      "Casa del Todo",
      "Feria de artesanías",
      "Mirador fotográfico",
      "Parque Josone",
      "Bulevar de Varadero",
      "Mansión Xanadú",
      "Delfinario",
      "Marina Varadero"
    ]
  }
        ],
        itinerarySec:{
          h4:'Recorrido'
        },
        places: [
          {
            id: 1,
            title: "Castillo en el Cielo",
            description:
            "El Castillo en el Cielo ofrece una impresionante vista panorámica de Pinar Del Río. Construido en el siglo XIX como puesto de vigilancia, este sitio histórico ha sido restaurado para que los visitantes disfruten de su rica historia.",
              image: "/images/places/Castillo_Cielo.webp",
            tag: "Pinar Del Río",
            itinerary: ["Tour Viñales - Soroa", "Тур Виньялес - Сороа", "Viñales - Soroa Tour"],
          },
          {
            id: 2,
            title: "Puente de Bacunayagua",
            description:
            "El Mirador de Bacunayagua, construido en la década de 1960, es un punto de observación escénico que ofrece impresionantes vistas panorámicas del Valle de Yumurí. Este lugar icónico también tiene una interesante historia relacionada con el desarrollo turístico de la región.",
             image: "/images/places/Mirador_Bacunayagua.webp",
            tag: "Matanzas",
        
            itinerary: [
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
            ],
          },
        
          {
            id: 5,
            title: "Orquideario",
            description:
              "El Jardín de Orquídeas de Pinar Del Río es un paraíso floral establecido en el siglo XX. Con una impresionante colección de orquídeas nativas e internacionales, este lugar ofrece una experiencia única para los amantes de la botánica.",
            image: "/images/places/Orquideario.webp",
            tag: "Pinar Del Río",
            itinerary: ["Tour Viñales - Soroa", "Тур Виньялес - Сороа", "Viñales - Soroa Tour"],
          },
          {
            id: 6,
            title: "Cueva del Indio",
            description:
              "La Cueva del Indio, descubierta en el siglo XIX, es un fascinante sistema de cuevas con formaciones geológicas únicas. A lo largo de los años, ha sido escenario de descubrimientos arqueológicos que revelan la presencia de culturas antiguas en la región.",
            image: "/images/places/nuevos_places/Cueva_Indio.webp",
            tag: "Pinar Del Río",
            itinerary: ["Tour Viñales - Soroa", "Тур Виньялес - Сороа", "Viñales - Soroa Tour"],
          },
          {
            id: 7,
            title: "Floridita",
            description:
              "Floridita es un bar histórico conocido por su conexión con Ernest Hemingway. Establecido a principios del siglo XIX, este lugar emblemático ofrece una combinación de historia, cócteles tradicionales, música en vivo y un ambiente animado.",
            image: "/images/places/Floridita.webp",
            tag: "Havana",
        
            itinerary: [
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 8,
            title: "Bodeguita del Medio",
            description:
              "Bodeguita del Medio, fundada en el siglo XX, es un bar y restaurante histórico. Reconocido por sus auténticos mojitos, música afrocubana y su atmósfera vibrante, es una visita obligada para quienes buscan la cultura cubana.",
            image: "/images/places/Bodeguita.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 9,
            title: "Caballero de Paris",
            description:
              "Caballero de Paris es una estatua histórica en La Habana, que representa un personaje único del pasado de la ciudad. Este hito ofrece información sobre la historia local, las plazas cercanas, el arte urbano y la fotografía arquitectónica.",
            image: "/images/places/Caballero_Paris.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 10,
            title: "Cristo de La Habana",
            description:
              "El Cristo de La Habana es un monumento religioso que ofrece vistas panorámicas. Construido a mediados del siglo XX, sirve como símbolo de espiritualidad y ofrece a los visitantes paseos serenos, eventos espirituales y conocimientos sobre la cultura católica.",
            image: "/images/places/Cristo.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 11,
            title: "El Capitolio",
            description:
              "El Capitolio, un edificio neoclásico icónico, se erige como un hito político en La Habana. Construido a principios del siglo XX, ofrece un vistazo a la historia política, visitas guiadas, eventos culturales y vistas panorámicas desde su cúpula.",
            image: "/images/places/Capitolio.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 12,
            title: "Plaza de la Revolución",
            description:
              "La Plaza de la Revolución, ubicada en La Habana, es una plaza icónica con monumentos revolucionarios. Sirve como punto focal para eventos públicos, presenta arte político, discursos históricos y un lugar central para reuniones.",
            image: "/images/places/Plaza_Rev.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 13,
            title: "Varadero",
            description:
              "Varadero es un reconocido balneario en Matanzas, que atrae visitantes con sus playas vírgenes y su vibrante vida nocturna. Establecido a principios del siglo XX, ofrece deportes acuáticos, relajación frente a la playa y experiencias culturales.",
            image: "/images/places/Varadero.webp",
            tag: "Matanzas",
        
            itinerary: [
              "Jeep Safari",
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
          {
            id: 14,
            title: "Parque de la Libertad",
            description:
              "El Parque de la Libertad en Matanzas es un oasis verde con pasado histórico. Establecida en el siglo XX, sirve como área recreativa, con espacios verdes, monumentos históricos y eventos culturales.",
            image: "/images/places/Parque_Libertad.webp",
            tag: "Matanzas",
        
            itinerary: [
              "Excursion de un día a Varadero desde La Habana",
              "Tour por Matanzas",
              "One-day excursion to Varadero from Havana",
              "Matanzas Tour", "Тур по Матансасу",
            ],
          },
          {
            id: 15,
            title: "Cueva de Bellamar",
            description:
              "La Cueva de Bellamar, descubierta en el siglo XIX, es un cautivador sistema de cuevas con formaciones geológicas únicas. A lo largo de los años, ha sido escenario de descubrimientos arqueológicos que revelan la presencia de culturas antiguas en la región.",
            image: "/images/places/Bellamar_Cave.webp",
            tag: "Matanzas",
        
            itinerary: ["Matanzas Tour", "Тур по Матансасу", "Tour por Matanzas"],
          },
          {
            id: 16,
            title: "La Casa de Al Capone",
            description:
              "La Casa de Al Capone, construida durante la década de 1920, es un testigo silencioso de la era de la prohibición. Este sitio histórico ofrece una visión única de la vida del famoso mafioso y su influencia en la región de Matanzas durante esos años turbulentos.",
            image: "/images/places/Casa_de_Al.webp",
            tag: "Matanzas",
        
            itinerary: [
              
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
          {
            id: 17,
            title: "Cueva de Saturno",
            description:
              "La Cueva de Saturno, conocida por su impresionante piscina natural subterránea, tiene una historia que se remonta a la época precolombina. Utilizada por los indígenas taínos, la cueva ha sido un lugar sagrado y refugio a lo largo de los siglos.",
            image: "/images/places/Cueva_Saturno.webp",
            tag: "Matanzas",
        
            itinerary: [
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",
              "Jeep Safari",
            ],
          },
          {
            id: 18,
            title: "Guama",
            description:
              "Guama es un pueblo taíno reconstruido en la región de Matanzas. Este sitio único ofrece a los visitantes una experiencia de inmersión en la cultura indígena, con réplicas auténticas de viviendas taínas y actividades que resaltan el rico patrimonio de los nativos de la isla.",
            image: "/images/places/Guama.webp",
            tag: "Matanzas",
        
            itinerary: ["Tour por la Ciénaga de Zapata", "Zapata Swamp Tour","Экскурсия в Циенага-де-Сапата"],
          },
          {
            id: 19,
            title: "Mansión Dupón",
            description:
              "La Mansión Dupón, construida a finales del siglo XIX, es un destacado ejemplo de la arquitectura colonial en Matanzas. Esta majestuosa residencia ha sido testigo de acontecimientos históricos y culturales a lo largo de los años y ahora está abierta al público para compartir su rica historia.",
            image: "/images/places/Mansion_Dupon.webp",
            tag: "Matanzas",
        
            itinerary: [
              
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
          {
            id: 20,
            title: "Soroa",
            description:
              "Soroa, conocida como el 'arco iris de Cuba', es famosa por su jardín botánico y sus cascadas. Fundada en el siglo XIX, la zona es un paraíso natural que ha atraído a entusiastas de la flora y la fauna de todo el mundo durante generaciones.",
            image: "/images/places/Pinar_Cascada.webp",
            tag: "Pinar Del Río",
            itinerary: ["Tour Viñales - Soroa", "Тур Виньялес - Сороа", "Viñales - Soroa Tour"],
          },
        
          {
            id: 21,
            title: "Museo Farmacéutico",
            description:
              "El Museo Farmacéutico de Matanzas, inaugurado a principios del siglo XX, es testimonio del desarrollo de la farmacología en la región. Exhibe una fascinante colección de instrumentos médicos antiguos y ofrece a los visitantes una visión única de la historia de la medicina.",
            image: "/images/places/Museo_Farmaceutico.webp",
            tag: "Matanzas",
        
            itinerary: ["Tour por Matanzas", "Matanzas Tour", "Тур по Матансасу"],
          },
          {
            id: 22,
            title: "Ciùdad de Matanzas",
            description:
              "La ciudad de Matanzas, también conocida como la 'Atenas de Cuba', tiene una rica historia que abarca desde la época colonial hasta la actualidad. Su arquitectura única, sus encantadoras plazas y sus eventos culturales hacen de esta ciudad una visita obligada para los amantes de la historia y la cultura.",
            image: "/images/places/plaza_mtz.webp",
            tag: "Matanzas",
        
            itinerary: [
              "Excursion de un día a Varadero desde La Habana",
              "Tour por Matanzas",
              "One-day excursion to Varadero from Havana",
              "Matanzas Tour", "Тур по Матансасу",
            ],
          },
          {
            id: 23,
            title: "Los Beatles",
            description:
              "Los Beatles en Matanzas es un vibrante homenaje a la icónica banda de rock. Este lugar ofrece una experiencia musical única con exhibiciones, eventos temáticos y una atmósfera que transporta a los visitantes a la apasionante época de la Beatlemanía.",
            image: "/images/places/the_beatles.webp",
            tag: "Matanzas",
        
            itinerary: [
              
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
          {
            id: 27,
            title: "Castillo de la Real Fuerza",
            description:
              "Visite el histórico Castillo de la Real Fuerza, una fortaleza que alguna vez protegió a La Habana de los ataques piratas. Explore su pasado histórico y disfrute de las vistas panorámicas de la ciudad.",
            image: "/images/places/nuevos_places/Castillo_Real_Fuerza.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 28,
            title: "Catedral Nuestra Señora de Kazan",
            description:
              "Maravíllate ante la belleza arquitectónica de la Catedral Nuestra Señora de Kazán, una catedral que muestra una mezcla de diferentes estilos. Descubra el significado religioso y cultural.",
            image: "/images/places/nuevos_places/Catedral_Senora_Kazan.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "One day tour in Havana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 29,
            title: "Cienfuegos",
            description:
              "Explore la pintoresca ciudad de Cienfuegos, conocida por su influencia francesa y su impresionante paseo marítimo. Sumérgete en las artes, la cultura y el ambiente acogedor locales.",
            image: "/images/places/nuevos_places/Cienfuegos.webp",
            tag: ["Central Region", "Región Central"],
            itinerary: [
              "Tour Trinidad - Cienfuegos (Opcional Nicho)",  "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Trinidad - Cienfuegos Tour (Optional Nicho)",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 30,
            title: "Criadero de Cocodrilos",
            description:
              "Visita el Criadero de Cocodrilos y sé testigo de estos fascinantes reptiles en su hábitat natural. Aprenda sobre los esfuerzos de conservación de cocodrilos y disfrute de una experiencia única de vida silvestre.",
            image: "/images/places/nuevos_places/Criadero_Cocodrilos.webp",
            tag: "Matanzas",
        
            itinerary: ["Tour por la Ciénaga de Zapata", "Zapata Swamp Tour","Экскурсия в Циенага-де-Сапата"],
          },
          {
            id: 32,
            title: "Iglesia Trinidad",
            description:
              "Visite la Iglesia Trinidad, una iglesia histórica en Trinidad. Admira su arquitectura y sumérgete en el patrimonio religioso y cultural de este encantador pueblo cubano.",
            image: "/images/places/nuevos_places/Iglesia_Trinidad.webp",
            tag: ["Central Region", "Región Central"],
        
            itinerary: [
              "Tour Trinidad - Cienfuegos (Opcional Nicho)",  "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Trinidad - Cienfuegos Tour (Optional Nicho)",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
        
          {
            id: 33,
            title: "Parque Josone",
            description:
              "Relájese en el exuberante entorno del Parque Josone, un hermoso parque con jardines, lagos y áreas recreativas. Disfrute de una escapada tranquila del ajetreo y el bullicio de la vida diaria.",
            image: "/images/places/nuevos_places/Josone.webp",
            tag: "Matanzas",
            itinerary: [
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
          {
            id: 34,
            title: "Monserrate",
            description:
              "Sube a la cima de Monserrate para disfrutar de impresionantes vistas de los paisajes circundantes. Este mirador ofrece una perspectiva única de la ciudad y sus pintorescos alrededores.",
            image: "/images/places/nuevos_places/Monserrate.webp",
            tag: "Matanzas",
            itinerary: ["Tour por Matanzas", "Matanzas Tour", "Тур по Матансасу"],
          },
          {
            id: 35,
            title: "Monumento a Ernesto Che Guevara",
            description:
              "Pay homage to the iconic revolutionary leader at the Monumento a Ernesto Che Guevara. Explore the memorial and gain insights into the life and legacy of Che Guevara.",
            image: "/images/places/nuevos_places/Monumento_Ernesto_Che_Guevara.webp",
            tag: ["Central Region", "Región Central"],
            itinerary: [
              
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 36,
            title: "Monumento al ataque del Tren Blindado",
            description:
              "Visite el Monumento al ataque del Tren Blindado, que conmemora un evento histórico durante la Revolución Cubana. Conozca la valentía y la importancia de este momento crucial.",
            image: "/images/places/nuevos_places/Monumento_Tren_Blindado.webp",
            tag: ["Central Region", "Región Central"],
            itinerary: [
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 37,
            title: "Mural de la Prehistoria",
            description:
              "Maravíllate ante el Mural de la Prehistoria, un colosal mural al aire libre que representa la historia evolutiva de la vida en la Tierra. Explore las vibrantes obras de arte en un contexto natural.",
            image: "/images/places/nuevos_places/Mural_Prehistoria.webp",
            tag: "Pinar Del Río",
            itinerary: ["Tour Viñales - Soroa", "Тур Виньялес - Сороа", "Viñales - Soroa Tour"],
          },
          {
            id: 39,
            title: "Museo del Ron",
            description:
              "Saboree la rica historia del ron cubano en el Museo del Ron. Descubra el arte de la producción de ron, aprenda sobre su importancia cultural y disfrute de degustaciones de finos rones cubanos.",
            image: "/images/places/nuevos_places/Museo_Ron.webp",
            tag: ["Havana", "La Habana"],
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
        
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 40,
            title: "Palacio de los Gobernadores Españoles",
            description:
              "Retroceda en el tiempo en el Palacio de los Gobernadores Españoles, un palacio histórico que exhibe la arquitectura colonial. Explora las habitaciones y pasillos que susurran historias del pasado.",
            image: "/images/places/nuevos_places/Palacio_Gobernadores.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
        
          {
            id: 41,
            title: "Palacio del Valle",
            description:
              "Experimente la grandeza del Palacio del Valle, una joya arquitectónica que combina varios estilos. Maravíllate ante los intrincados detalles y disfruta de las vistas panorámicas de los paisajes circundantes.",
            image: "/images/places/nuevos_places/Palacio_Valle.webp",
            tag: ["Central Region", "Región Central"],
        
            itinerary: [
              "Tour Trinidad - Cienfuegos (Opcional Nicho)",  "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Trinidad - Cienfuegos Tour (Optional Nicho)",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 42,
            title: "Playa Larga",
            description:
              "Relájese en las prístinas costas de Playa Larga, una hermosa playa conocida por su tranquilidad y belleza natural. Disfrute tomando el sol, nadando y una escapada tranquila junto al mar.",
            image: "/images/places/nuevos_places/Playa_Larga.webp",
            tag: "Matanzas",
            itinerary: ["Tour por la Ciénaga de Zapata", "Zapata Swamp Tour","Экскурсия в Циенага-де-Сапата"],
          },
          {
            id: 43,
            title: "Plaza de Armas",
            description:
              "Pasee por la histórica Plaza de Armas, la plaza más antigua de La Habana. Sumérgete en el encanto colonial, explora los mercados de libros y disfruta del ambiente vibrante.",
            image: "/images/places/nuevos_places/Plaza_Armas.webp",
            tag: ["Havana", "La Habana"],
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 45,
            title: "Plaza Trinidad",
            description:
              "Experimente el encanto de la Plaza Trinidad, una plaza histórica en Trinidad. Admire la arquitectura colonial, explore las tiendas locales y sumérjase en la riqueza cultural de la zona.",
            image: "/images/places/nuevos_places/Plaza.webp",
            tag: ["Central Region", "Región Central"],
        
            itinerary: [
              "Tour Trinidad - Cienfuegos (Opcional Nicho)",  "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Trinidad - Cienfuegos Tour (Optional Nicho)",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 46,
            title: "Plaza de San Francisco",
            description:
              "Descubre la belleza de la Plaza de San Francisco, una plaza rodeada de edificios históricos. Disfrute del ambiente animado, visite las atracciones cercanas y sumérjase en la rica historia.",
            image: "/images/places/nuevos_places/San_Francisco.webp",
            tag: ["Havana", "La Habana"],
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 47,
            title: "Fortaleza San Severino",
            description:
              "Explora la imponente Fortaleza San Severino, una fortaleza con una gran historia. Conozca su papel en la protección de la ciudad y disfrute de vistas panorámicas de los paisajes circundantes.",
            image: "/images/places/nuevos_places/San_Seberino.webp",
            tag: "Matanzas",
            itinerary: ["Tour por Matanzas", "Matanzas Tour", "Тур по Матансасу"],
          },
          {
            id: 48,
            title: "Santa Clara",
            description:
              "Sumérgete en la vibrante ciudad de Santa Clara, conocida por su historia revolucionaria. Explore lugares emblemáticos, aprenda sobre el Che Guevara y experimente la animada escena cultural.",
            image: "/images/places/nuevos_places/Santa_Clara.webp",
            tag: ["Central Region", "Región Central"],
        
            itinerary: [
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 49,
            title: "Teatro Nacional Alicia Alonso",
            description:
              "Experimente la grandeza del Teatro Nacional Alicia Alonso, un teatro de renombre en La Habana. Asista a espectáculos, admire la belleza arquitectónica y sumérjase en el arte y la cultura.",
            image: "/images/places/nuevos_places/Teatro_Nacional_Alicia_Alonso.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 50,
            title: "Trinidad",
            description:
              "Descubra Trinidad, declarada Patrimonio de la Humanidad por la UNESCO, una ciudad congelada en el tiempo. Pasee por calles adoquinadas, admire la arquitectura colonial y experimente la rica historia y cultura.",
            image: "/images/places/nuevos_places/Trinidad.webp",
            tag: ["Central Region", "Región Central"],
        
            itinerary: [
              "Tour Trinidad - Cienfuegos (Opcional Nicho)",  "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Trinidad - Cienfuegos Tour (Optional Nicho)",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 51,
            title: "Tropicana",
            description:
              "Experimente la vibrante vida nocturna de La Habana en Tropicana, un cabaret legendario. Disfrute de actuaciones deslumbrantes, música en vivo y el glamour del lugar de entretenimiento más emblemático de Cuba.",
            image: "/images/places/nuevos_places/Tropicana.webp",
            tag: ["Havana", "La Habana"],
            itinerary: ["Tour por La Habana + Tropicana","Тур по Гаване + Тропикана", "Havana Tour + Tropicana"],
          },
          {
            id: 52,
            title: "Valle Yumuri",
            description:
              "Explora el pintoresco Valle Yumuri, un exuberante valle rodeado de colinas y ríos. Disfrute de paseos por la naturaleza, capture vistas impresionantes y sumérjase en la tranquilidad del paisaje.",
            image: "/images/places/nuevos_places/Valle_Yumuri.webp",
            tag: "Matanzas",
            itinerary: ["Tour por Matanzas", "Matanzas Tour", "Тур по Матансасу"],
          },
          {
            id: 53,
            title: "Viñales",
            description:
              "Escápese a la belleza escénica de Viñales, un valle rodeado de majestuosas colinas de piedra caliza. Descubra granjas de tabaco, explore cuevas y disfrute del ambiente relajado de la Cuba rural.",
            image: "/images/places/nuevos_places/Viñales.webp",
            tag: "Pinar Del Río",
            itinerary: ["Tour Viñales - Soroa", "Тур Виньялес - Сороа", "Viñales - Soroa Tour"],
          },
          {
            id: 54,
            title: "Vista Monserrate",
            description:
              "Ascienda a Vista Monserrate para disfrutar de vistas panorámicas de La Habana. Capture paisajes urbanos impresionantes, disfrute de una atmósfera serena y maravíllese ante la belleza de la capital cubana desde arriba.",
            image: "/images/places/nuevos_places/Vistas_Monserrate.webp",
            tag: "Matanzas",
            itinerary: ["Tour por Matanzas", "Matanzas Tour", "Тур по Матансасу"],
          },
          {
            id: 55,
            title: "Delfinario Varadero",
            description:
              "El delfinario de Varadero, en Cuba, ofrece espectáculos emocionantes y actividades interactivas que permiten a los visitantes interactuar de cerca con delfines mientras promueve la conservación marina.",
        
            image: "/images/places/nuevos_places/Delfinario_Varadero.webp",
            tag: "Matanzas",
            itinerary: [
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
        
          {
            id: 56,
            title: "Marina de Varadero",
            description:
              "La Marina Varadero es un puerto deportivo ubicado en Varadero, Cuba, que ofrece servicios náuticos completos y alojamiento para embarcaciones, promoviendo el turismo marítimo y la navegación recreativa.",
            image: "/images/places/nuevos_places/Marina_Varadero.webp",
            tag: "Matanzas",
            itinerary: [
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
          {
            id: 57,
            title: "Cañonazo en el Castillo del Morro Cabaña",
            description:
              "Experimente la histórica ceremonia del cañonazo en el Castillo de Morro Cabaña, un ritual nocturno que se remonta a siglos atrás y que ofrece una visión del rico pasado de Cuba.",
            image: "/images/places/nuevos_places/Cañonazo.webp",
            tag: ["Havana", "La Habana"],
            itinerary: ["Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки", "Havana Tour + Cannon Shot"],
          },
        ]              
          },
        
  
    ru: {
      nav:{
        'home':'Начало',
        'places': 'Направления',
        'about': 'О нас',
        'services': 'Услуги',
        'feedback': 'Комментарии',
          matanzas: 'Матансас',
          habana: "Гавана",
          pinar: "Пинар-дель-Рио",
          central: "Центральный регион"
       },
      hero: {
        'h1':'Кубинская',
        'h12':'52',
        'span':'классика',
        'p':"Испытайте надежную, эффективную службу такси с профессиональными водителями. Мы гарантируем безопасные, пунктуальные и комфортные поездки."
        ,'button':'Забронируйте сейчас',
       },
      prov:{
        visit:'Посещать',
          'h2':'Отпуск вашей мечты начинается с нами',
          'p':'Откройте для себя культурные горизонты, где древние традиции встречаются с современной жизнью, а каждая улица приглашает вас стать частью живой истории города.',
          places: [
            {
              name: "Пинар-дель-Рио",
              slug:'Pinar del Río',
              desc: "Табачные поля, долина Виньялес, моготе, Куэва-дель-Индио, горячие источники Сан-Диего, Сороа, сигарные фабрики и колониальное очарование.",
              img: '/images/Pinar.png',
              href: "/"
            },
            {
              name: "Гавана",
              slug:'La Habana',
              desc: "Историческая Старая Гавана, набережная Малекон, старинные автомобили, замок Морро, живая музыка, ром, музеи и яркая культура.",
              img: '/images/Havana.jpg',
              href: "/"
            },
            {
              name: "Матансас",
              slug:"Matanzas",
              desc: "Пляж Варадеро, замок Сан-Северино, долина Юмури, афро-кубинская культура и колониальное наследие.",
              img: '/images/Matanzas.png',
              href: "/"
            },
            {
              name: "Центральный регион",
              slug:"Región Central",
              desc: "Сочетает в себе историю, традиционную музыку, природные парки и прекрасные пляжи.",
              img: '/images/Trinidad.png',
              href: "/"
            }
         ]
        }    ,
      aboutComp:{
            'h2':"О компании",
            'pdesc':"Мы переопределяем туризм на Кубе, предлагая впечатления через персонализированные туры на классических автомобилях, которые идеально передают винтажный дух острова. Сочетая конкурентоспособные цены с подлинным кубинским гостеприимством, мы предоставляем исключительный сервис, демонстрирующий истинную сущность нашей культуры.",
            'p':"Позвольте нам превратить ваш визит в необыкновенное путешествие.",
            'secT':"Своевременный",
            'secP':"Своевременная подача автомобиля и оптимизированные маршруты.",
            'conT':"Подлинность",
            'conP':"Секретные места, известные только местным жителям.",
           },
      about2:{
            h2:'Мы создаем для вас незабываемые моменты',
            elementos:[
              {
                num: '1',
                title: 'Легкое и быстрое бронирование',
                text: 'Забронируйте за считанные минуты: отправьте нам сообщение в WhatsApp с вашими предпочтениями.',
                active: false
              },
               {
                num: '2',
                title: 'Индивидуальная поездка, созданная специально для вас',
                text: 'Наша команда поможет вам разработать идеальный маршрут с учетом ваших предпочтений.',
                active: false
              },
              {
                num: '3',
                title: 'Наслаждайтесь эксклюзивным обслуживанием',
                text: 'Наслаждайтесь первоклассным обслуживанием с опытными водителями и индивидуальным вниманием.',
                active: true
              }
            ]
        },
      services: {
              h2: "Наслаждайтесь лучшим транспортным обслуживанием с нами",
              p: "Наша команда опытных профессионалов легко адаптируется к запросам каждого путешественника, создавая индивидуальные впечатления, превосходящие ожидания.",
              serv1h4: 'Экскурсии',
              serv1p: 'Откройте для себя яркие города, деревни и все скрытые жемчужины на своем пути.',
              serv2h4: 'Частный транспорт',
              serv2p: 'Легкое бронирование среди наших автомобилей премиум-класса.',
              serv3h4: 'Трансферы',
              serv3p: 'Путешествуйте с комфортом, наслаждайтесь плавными поездками.',
              
        },
       feedback: {
               h2: 'Что говорят клиенты о вас',
               p: 'Узнайте, что говорят наши клиенты о наших турах, делясь своими незабываемыми впечатлениями и восторженными отзывами.',
              coment:'Напишите нам ваш отзыв',
              },
       itinerary:[
          
        {
          "title": "Однодневный тур по Гаване",
          place: ["Havana", "La Habana"],
          "details": [
            "Забор из отеля ~8:00. Прибытие в отель ~17:00-18:00",
            "Поездка в Гавану занимает от 1,5 до 2 часов. По пути мы сделаем остановку на самом высоком мосту в Кубе (Бакунаягуа), с видами на долину Юмури и океан. Вы сможете попробовать самый вкусный ананасовый коктейль на Кубе (за дополнительную плату).",
            "Остановка возле замка Морро, который предлагает впечатляющие панорамные виды на Гавану. (Вход платный и по желанию).",
            "Затем мы прогуляемся по Малекону, откуда начнется двухчасовая прогулка по Старой Гаване. Среди достопримечательностей Плаза де Сан-Франциско-де-Асис, колокольня старого францисканского монастыря (с платой), музей рома с дегустацией (платный вход), собор Нашей Леди Казанской, Плаза де ла Катедраль, Бодегита-дель-Медио, Дворец испанских губернаторов, Плаза де Армас, Замок Королевских Войск (платный вход), улица Обиспо, отель Амбос-Мундос, Старая Площадь и многое другое.",
            "Посещение Плаза де ла Революсьон, прогулка по центру Гаваны, где вы найдете Капитолий, Гран Театр Гаваны, кафе Флоридита (упоминаемое Хемингуэем) и другие достопримечательности.",
            "Мы покидаем Гавану в 15:00.",
            "Обед не включен в стоимость экскурсии (предполагаемая стоимость обеда составляет 15-20 $€)."
          ]
        },
        {
          "title": "Тур на закате в Гаване",
          place: ["Havana", "La Habana"],
          "details": [
            "Забор из вашего жилья или отеля в 10:00 утра в Варадеро.",
            "Примерно два часа пути в Ла-Гавану по северному побережью.",
            "Остановка на самом высоком мосту в Кубе (Бакунаягуа) высотой 112 метров, где вы сможете насладиться лучшим ананасовым коктейлем на Кубе.",
            "Трансфер в Гавану.",
            "Прогулка по Старой Гаване, признанной всемирным наследием ЮНЕСКО в 1982 году.",
            "Посещение Плаза де ла Катедраль.",
            "Посещение Плаза дель Бразо.",
            "Посещение Плаза Вьеха.",
            "Посещение Плаза Сан-Франциско-де-Асис.",
            "Остановка у старейшего замка на Кубе, замка Морро.",
            "Посещение статуи Христа в Гаване.",
            "Отель Насьональ.",
            "Посещение известных баров Хемингуэя, Ла Бодегита дель Медио и Эль Флоридита.",
            "Время для обеда (цены варьируются в зависимости от выбора клиента, не включены).",
            "Маршрут по Малекону и Новой Гаване.",
            "Остановка на Плаза де ла Революсьон.",
            "Время для прогулки по центру города, где вы увидите Капитолий, Большой театр Гаваны и Центральный парк.",
            "Опциональная остановка в Музее Рома.",
            "Посещение табачного магазина.",
            "Вечером мы посетим лучшие места для наслаждения закатом, которые могут быть на Малеконе Гаваны или в замке Морро.",
            "Маршрут завершается на закате.",
            "Возвращение в Варадеро после заката.",
            "Опциональные вещи, которые вы можете добавить к этому туру: 25 долларов США/ЕВРО за час в классическом кабриолете по прибытии в Гавану."
          ]
        },
        {
          "title": "Тур по Гаване + Салют из пушки",
          place: ["Havana", "La Habana"],
          "details": [
            "Забор из вашего жилья или отеля в 10:00 утра.",
            "Прогулка по Старой Гаване, признанной ЮНЕСКО всемирным наследием в 1982 году. Наслаждайтесь свободным временем, и мы рекомендуем посетить рынок художественных изделий, отражающих культурную идентичность народа.",
            "Посещение Плаза де Сан-Франциско-де-Асис, выложенной брусчаткой, расположенной у ворот Гаваны.",
            "Остановка на Плаза де ла Катедраль, одном из самых красивых мест Старой Гаваны.",
            "Остановка на Плаза Вьеха, недавно отреставрированной, обязательная остановка для любителей истории.",
            "Посещение Плаза де Армас, самой старой площади в Гаване.",
            "Остановка в Палацио де лос-Капитанес-Хенералес, одном из самых важных архитектурных сооружений Кубы.",
            "Краткая остановка в отеле Амбос-Мундос, здании в эклектическом стиле, расположенном в Старой Гаване.",
            "Посещение двух известных баров Гаваны, Ла Бодегита дель Медио и Эль Флоридита, для наслаждения вкуснейшими коктейлями.",
            "Обед, рекомендуемый гидом, в самых впечатляющих ресторанах Гаваны, где вы сможете насладиться нашей типичной кубинской кухней.",
            "Поездка на классическом автомобиле по Авенида Малекон, наслаждаясь красивым видом на Бухту Гаваны.",
            "Прогулка по Современной Гаване, эксклюзивное посещение.",
            "Панорамная поездка по районам Ведадо и Мирамар.",
            "Остановка на Плаза де ла Революсьон, одной из крупнейших в мире и дома одного из наиболее интересных музеев всей Кубы.",
            "Панорамная остановка на здании Капитолия, одном из самых эмблематичных мест Гаваны.",
            "Остановка на Центральной Парковой площади Хосе Марти, огромной достопримечательности для путешественников со всего мира, где история великолепных зданий и природы сочетается.",
            "Посещение Большого Театра Гаваны Алисии Алонсо, великолепного здания, являющегося домом Балета и Национальной Оперы Кубы.",
            "Панорамное посещение крепости Морро, важного укрепления, построенного на Кубе в XVI веке.",
            "Панорамное посещение статуи Христа в Гаване, монументального скульптурного произведения высотой около 20 метров.",
            "Ужин в рекомендованных ресторанах Гаваны по вашему выбору. Выберите между креветками или курицей, чтобы насладиться подлинной кубинской кухней.",
            "В 21:00 вы можете насладиться одной из кубинских традиций: 'выстрелом из пушки в девять' во время экскурсии в крепость Сан-Карлос-де-ла-Кабанья.",
            "Поездка обратно в ваше жилье на классическом автомобиле с максимальным комфортом и безопасностью."
          ]
        }, 
        {
        "title": "Тур по Гаване + Тропикана",
        place: ["Havana", "La Habana"],
        "details": [
          "Забор из вашего жилья или отеля в 10:30 утра.",
          "Примерно два часа пути до Гаваны по атлантическому побережью.",
          "Остановка на самом высоком мосту в Кубе, «Бакунаягуа», где вы также можете насладиться лучшим ананасовым коктейлем на Кубе.",
          "Трансфер в Гавану.",
          "Прогулка по Старой Гаване, признанной ЮНЕСКО всемирным наследием в 1982 году.",
          "Посещение Плаза де ла Катедраль.",
          "Посещение Плаза де Арма.",
          "Посещение Плаза Вьеха.",
          "Посещение Плаза де Сан-Франциско-де-Асис.",
          "Остановка в самом старом замке на Кубе, замке Эль-Морро.",
          "Посещение статуи Христа в Гаване.",
          "Посещение знаменитых баров Ла Бодегита дель Медио и Эль Флоридита, где пил легендарный писатель Хемингуэй.",
          "Обед (цены варьируются в зависимости от выбора клиента, не включено).",
          "Проехать по Малекону и Новой Гаване.",
          "Остановка на Плаза де ла Революсьон.",
          "Время для прогулки в центр, где можно увидеть здание Капитолия, Великий Театр Гаваны и Центральный Парк.",
          "Опциональная остановка в Музее Рома.",
          "Посещение табачного магазина.",
          "Посещение кабаре Тропикана (вход оплачивается напрямую клиентом).",
          "После представления, возвращение в Варадеро."
        ]
      },
      {
        "title": "Экскурсия в Циенага-де-Сапата",
         place: ["Matanzas"],
        "details": [
          "Отъезд из отеля в 8:00 утра.",
          "Мы пересекаем остров с севера на юг. Путешествие занимает примерно 2 часа.",
          "По пути мы проедем через города Санта-Марта и Карденас, поселок Ховелланос, где живет много потомков африканских рабов, кооператив под названием Владимир Ильич Ленин, поселок Австралия, плантации сахарного тростника, бананов, цитрусовых, манго и других тропических культур.",
          "Первая остановка на мини-ферме с растениями и животными, характерными для Кубы. За дополнительную плату можно выпить сок сахарного тростника и покататься на быке цебу.",
          "Посещение фермы по разведению крокодилов (5 € с человека).",
          "Посещение 'Лос-Индиос': Мы садимся на моторные лодки и отправляемся на остров с несколькими хижинами и индейскими скульптурами. Эта индейская деревня стоит 12 € с человека и длится примерно 2 часа или дольше.",
          "Обед включен, в меню 4 вида мяса: крокодил, краб, лангуст, креветки, рыба, олень, улитки или кальмары, за 15-20 € с человека. Также включены рис с овощами, салат и напитки.",
          "Карибское море: Мы насладимся Карибским морем в заливе Кочинос, с чистой водой, особенно близко к кораллам.",
          "Сноркелинг: Аренда снаряжения для сноркелинга за 5 € в час. Можно принести собственное снаряжение. Рекомендуется принести хлебные крошки из отеля для кормления рыб и других морских обитателей.",
          "Дайвинг: 25 € за 40 минут для опытных дайверов. Новички доплачивают 10 € за вводный урок. Место для дайвинга легкое, с затонувшими кораблями на глубине 25-30 метров.",
          "Ценоты: Мы посмотрим ценоты или водные ямы в джунглях вокруг залива Кочинос, где можно плавать. По желанию мы можем посетить Casa del Colibrí, чтобы наблюдать за птицами (1 $).",
          "Опциональная остановка для купания на песчаном пляже в поселке Плайя-Ларга.",
          "История: Мы посетим важные исторические места, связанные с Холодной войной в заливе Кочинос, где в 1961 году произошла про-кастрошская вторжение.",
          "Возвращение в Варадеро в 16:00."
        ]
      },
      {
        "title": "Тур по Матансасу",
         place: ["Matanzas"],
        "details": [
          "Отъезд из отеля в 9:00 утра.",
          "Посещение Пещер Белламар (вход $5): Мы исследуем впечатляющие Пещеры Белламар, систему пещер, предлагающую уникальные и впечатляющие формации скал. Мы раскроем богатую геологию и историю этого захватывающего места.",
          "Прогулка по колониальному центру города: Мы погрузимся в историю Матансаса, исследуя его колониальный центр. Мы посетим знаменитую Фармацию Французскую, иконический архитектурный памятник, отражающий влияние французской культуры в регионе.",
          "Миратор Монсеррат: Мы насладимся панорамным видом с Миратора Монсеррат, предлагающего впечатляющую перспективу города и его окрестностей. Это идеальное место для создания незабываемых воспоминаний.",
          "Ла Эрмита: Мы посетим Ла Эрмита, священное место, ставшее свидетелем значимых исторических событий. Мы узнаем больше о культурном и религиозном значении этого места.",
          "Замок Сан-Северино: Мы исследуем Замок Сан-Северино, историческую крепость, которая играла ключевую роль в защите города. Мы раскроем архитектуру военного строения и историю, окружающую этот величественный замок.",
          "Пещера Сатурно (вход $5): Завершим наше путешествие, исследуя Пещеру Сатурно, подземный ценот с кристально чистой водой. Посетители получат возможность поплавать и насладиться уникальной природной красотой этой геологической формации.",
          "Возвращение в отель примерно в 14:00."
        ]
      },
      {
        "title": "Однодневная экскурсия в Варадеро из Гаваны",
         place: ["Matanzas"],
        "details": [
          "Подбор из отеля или B&B на классическом автомобиле в 8:00 утра.",
          "Отправление в Варадеро по побережью с прекрасными пейзажами.",
          "Опциональная остановка на мосту Бакунаягуа: Мы сделаем остановку на самом высоком мосту Кубы высотой 112 метров. С этого смотрового пункта посетители могут насладиться прекрасными панорамными видами и попробовать лучший ананасовый коктейль на Кубе.",
          "Поездка на Пляж Коралл для сноркелинга (билеты не включены, 10 долларов США с человека): Мы исследуем кристально чистые воды Пляжа Коралл, идеальные для занятий сноркелингом и наслаждения морской жизнью.",
          "Посещение открытой пещеры Сатурно (билеты не включены, 5 долларов США с человека): Мы раскроем красоту Пещеры Сатурно, подземного ценота с кристально чистой водой. Посетители получат возможность поплавать и насладиться уникальной природной красотой этой геологической формации.",
          "Продолжение путешествия в Варадеро.",
          "Посещение дома Алькапоне в Варадеро: Мы исследуем Дом Алькапоне, предлагающий взгляд на историю и роскошь эпохи.",
          "Посещение рынка Варадеро: Погрузитесь в местную культуру, исследуя рынок Варадеро, где можно найти ремесла и местные продукты.",
          "Посещение Парка Хосоне: Насладитесь красотой природы Парка Хосоне, оазиса среди Варадеро с изысканными садами и спокойными озерами.",
          "Посещение Особняка Дюпон: Мы исследуем элегантный Особняк Дюпон, свидетельство исторической архитектуры Варадеро.",
          "Свободное время на пляже: У посетителей будет время для отдыха на прекрасных пляжах Варадеро.",
          "Экскурсия завершается примерно в 16:30 и возвращение в Гавану."
        ]
      },
      {
        "title": "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
       "place": ["Región Central"],
        "details": [
          "Забор из вашего проживания или отеля в 06:30 утра.",
          "Трехчасовая поездка по сельской местности в Сьенфуэгос.",
          "Экскурсия по городу Сьенфуэгос.",
          "Посещение района Пунта-Горда, дворца дель Валье и отеля Хагуа.",
          "Опциональная остановка у водопада Эль-Ничо (это дополнительно платная услуга в 40 евро за транспортировку до вершины горы).",
          "Примечание: Если мы посещаем Эль-Ничо, у нас будет меньше времени на пребывание в других районах.",
          "Поездка в Тринидад для наслаждения видом на Карибское море.",
          "Свободное время для обеда в Тринидаде (не включено).",
          "Прогулка по историческому центру, такому как Пласа-Майор, Ла-Канчанчара, музеи и т. д.",
          "Свободное время для дополнительных прогулок или посещения рынка сувениров, если время позволяет.",
          "Возвращение в ваш отель примерно в 19:00.",
          "Этот тур включает в себя классический автомобиль с кондиционером и гидом."
        ]
      },
      {
      "title": "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара",
     "place": ["Región Central"],
      "details": [
        "Экскурсия также может быть проведена в течение двух дней.",
        "Забор из вашего проживания или отеля в 06:00 утра.",
        "Трехчасовая поездка по сельской местности в Санта-Клару.",
        "Остановка у мавзолея Эрнесто Че Гевары и на Площади Революции.",
        "Остановка в Парке Видал и прогулка по городу.",
        "Остановка на Поезде.",
        "Опциональная остановка у водопада Эль-Ничо (это дополнительно платная услуга в 40 евро за транспортировку до вершины горы).",
        "Примечание: Если мы посещаем Эль-Ничо, у нас будет меньше времени на пребывание в других районах. Не доступно в однодневной экскурсии.",
        "Поездка в Тринидад для наслаждения видом на Карибское море.",
        "Свободное время для обеда в Тринидаде (не включено).",
        "Прогулка по историческому центру, такому как Пласа-Майор, Ла-Канчанчара, музеи и т. д.",
        "Свободное время для дополнительных прогулок или посещения рынка сувениров, если время позволяет.",
        "Отправление в Сьенфуэгос.",
        "Экскурсия по городу Сьенфуэгос.",
        "Посещение района Пунта-Горда, дворца дель Валье и отеля Хагуа.",
        "Возвращение в ваш отель примерно в 21:00."
      ]
    },
    {
      "title": "Тур Виньялес - Сороа",
       "place": "Pinar del Río",
      "details": [
        "Забор из отеля или жилья в 8:30 утра.",
        "Проезд через провинцию Гавана для продолжения пути в Сороа.",
        "Посещение Сороа, где вы можете насладиться купанием у водопада и посетить орхидейный сад (вход в оба места, 3-5 долларов за человека).",
        "Примечание: Если вы приезжаете из Варадеро и проводите слишком много времени в Сороа, у вас не будет достаточно времени, чтобы насладиться Виньялесом.",
        "Продолжение тура в долину Виньялес.",
        "Остановка на смотровой площадке 'Лас Хасминес' (отличное место для фотографий).",
        "Посещение дома фермера, чтобы увидеть и узнать о кубинском табаке.",
        "Посещение деревни Виньялес.",
        "Посещение пещеры Индио (вход не включен, 5 долларов с человека).",
        "Посещение Мураля Преистории.",
        "Поездка на лошадях (опционально, не включено, 10-15 долларов с человека).",
        "Поездка обратно в Гавану или Варадеро."
      ]
    },
    {
      "title": "Тур по городу Варадеро по часам",
       place: ["Matanzas"],
      "details": [
        "Исследуйте каждый уголок города Варадеро на открытом классическом автомобиле на время. Цена - 40 долларов США в час.",
        "Casa del Todo",
        "Ярмарка ремесел",
        "Фотографическая смотровая площадка",
        "Парк Хосоне",
        "Бульвар Варадеро",
        "Особняк Санаду",
        "Дельфинарий",
        "Марина Варадеро"
      ]
    }
                ],
                itinerarySec:{
                  h4:'Маршрут'
                },
      places: [
          {
            id: 1,
            title: "замок в небе",
            description:
            "Из Небесного замка открывается потрясающий панорамный вид на Пинар-дель-Рио. Это историческое место, построенное в 19 веке как смотровой пост, было восстановлено, чтобы посетители могли насладиться его богатой историей.",
              image: "/images/places/Castillo_Cielo.webp",
            tag: "Pinar Del Río",
            itinerary: ["Tour Viñales - Soroa", "Тур Виньялес - Сороа", "Viñales - Soroa Tour"],
          },
          {
            id: 2,
            title: "Мост Бакунаягуа",
            description:
            "Бакунаягуа Мирадор, построенный в 1960-х годах, представляет собой живописную смотровую площадку, откуда открывается потрясающий панорамный вид на долину Юмури. Это знаковое место также имеет интересную историю, связанную с туристическим развитием региона.",
             image: "/images/places/Mirador_Bacunayagua.webp",
            tag: "Matanzas",
        
            itinerary: [
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
            ],
          },
        
          {
            id: 5,
            title: "орхидарий",
            description:
              "Сад орхидей Пинар-дель-Рио — цветочный рай, созданный в 20 веке. Это место с впечатляющей коллекцией местных и зарубежных орхидей предлагает уникальные впечатления любителям ботаники.",
            image: "/images/places/Orquideario.webp",
            tag: "Pinar Del Río",
            itinerary: ["Tour Viñales - Soroa", "Тур Виньялес - Сороа", "Viñales - Soroa Tour"],
          },
          {
            id: 6,
            title: "Индийская пещера",
            description:
              "Куэва-дель-Индио, открытая в 19 веке, представляет собой увлекательную систему пещер с уникальными геологическими образованиями. На протяжении многих лет здесь совершались археологические открытия, свидетельствующие о присутствии древних культур в регионе.",
            image: "/images/places/nuevos_places/Cueva_Indio.webp",
            tag: "Pinar Del Río",
            itinerary: ["Tour Viñales - Soroa", "Тур Виньялес - Сороа", "Viñales - Soroa Tour"],
          },
          {
            id: 7,
            title: "Флоридита",
            description:
              "Флоридита исторический бар, известный своей связью с Эрнестом Хемингуэем. Это культовое заведение, основанное в начале 19 века, предлагает сочетание истории, традиционных коктейлей, живой музыки и оживленной атмосферы.",
            image: "/images/places/Floridita.webp",
            tag: "Havana",
        
            itinerary: [
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 8,
            title: "Бодегита дель Медио",
            description:
              "Бодегита дель Медио, основанная в 20 веке, представляет собой исторический бар и ресторан. Известный своим аутентичным мохито, афро-кубинской музыкой и яркой атмосферой, он является обязательным местом посещения для тех, кто ищет кубинскую культуру.",
            image: "/images/places/Bodeguita.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 9,
            title: "Рыцарь Парижа",
            description:
              "Кабальеро де Пари — историческая статуя в Гаване, представляющая уникального персонажа из прошлого города. Эта достопримечательность предлагает информацию о местной истории, близлежащих площадях, городском искусстве и архитектурных фотографиях.",
            image: "/images/places/Caballero_Paris.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 10,
            title: "Христос Гаваны",
            description:
              "Христос Гаваны — религиозный памятник, с которого открывается панорамный вид. Построенный в середине 20 века, он служит символом духовности и предлагает посетителям безмятежные прогулки, духовные мероприятия и знакомство с католической культурой.",
            image: "/images/places/Cristo.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 11,
            title: "Капитолий",
            description:
              "Капитолий, культовое неоклассическое здание, является политической достопримечательностью Гаваны. Построенный в начале 20-го века, он предлагает взглянуть на политическую историю, экскурсии, культурные мероприятия и панорамные виды со своего купола.",
            image: "/images/places/Capitolio.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 12,
            title: "Площадь Революции",
            description:
              "Площадь Революции, расположенная в Гаване, — культовая площадь с революционными памятниками. Он служит центром общественных мероприятий, демонстрируя политическое искусство, исторические речи и центральное место встреч.",
            image: "/images/places/Plaza_Rev.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 13,
            title: "Варадеро",
            description:
              "Варадеро — известный морской курорт в Матансасе, привлекающий посетителей своими нетронутыми пляжами и бурной ночной жизнью. Основанный в начале 20 века, он предлагает водные виды спорта, пляжный отдых и культурные впечатления.",
            image: "/images/places/Varadero.webp",
            tag: "Matanzas",
        
            itinerary: [
              "Jeep Safari",
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
          {
            id: 14,
            title: "Либерти Парк",
            description:
              "Парк Свободы в Матансасе — зеленый оазис с историческим прошлым. Основанный в 20 веке, он служит зоной отдыха с зелеными насаждениями, историческими памятниками и культурными мероприятиями.",
            image: "/images/places/Parque_Libertad.webp",
            tag: "Matanzas",
        
            itinerary: [
              "Excursion de un día a Varadero desde La Habana",
              "Tour por Matanzas",
              "One-day excursion to Varadero from Havana",
              "Matanzas Tour", "Тур по Матансасу",
            ],
          },
          {
            id: 15,
            title: "Пещера Белламар",
            description:
              "Пещера Белламар, открытая в 19 веке, представляет собой очаровательную систему пещер с уникальными геологическими образованиями. На протяжении многих лет здесь совершались археологические открытия, свидетельствующие о присутствии древних культур в регионе.",
            image: "/images/places/Bellamar_Cave.webp",
            tag: "Matanzas",
        
            itinerary: ["Matanzas Tour", "Тур по Матансасу", "Tour por Matanzas"],
          },
          {
            id: 16,
            title: "Дом Аль Капоне",
            description:
              "Дом Аль Капоне, построенный в 1920-х годах, является молчаливым свидетелем эпохи сухого закона. Это историческое место предлагает уникальное представление о жизни знаменитого бандита и его влиянии на регион Матансас в те неспокойные годы.",
            image: "/images/places/Casa_de_Al.webp",
            tag: "Matanzas",
        
            itinerary: [
              
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
          {
            id: 17,
            title: "Пещера Сатурна",
            description:
              "Пещера Сатурна, известная своим впечатляющим природным подземным бассейном, имеет историю, восходящую к доколумбовым временам. Пещера, используемая коренным народом таино, на протяжении веков была священным местом и убежищем.",
            image: "/images/places/Cueva_Saturno.webp",
            tag: "Matanzas",
        
            itinerary: [
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",
              "Jeep Safari",
            ],
          },
          {
            id: 18,
            title: "Гуама",
            description:
              "Гуама — реконструированный город Таино в регионе Матансас. Это уникальное место предлагает посетителям погрузиться в культуру коренных народов с подлинными копиями домов Таино и мероприятиями, которые подчеркивают богатое наследие коренных жителей острова.",
            image: "/images/places/Guama.webp",
            tag: "Matanzas",
        
            itinerary: ["Tour por la Ciénaga de Zapata", "Zapata Swamp Tour","Экскурсия в Циенага-де-Сапата"],
          },
          {
            id: 19,
            title: "Особняк Дюпон",
            description:
              "Особняк Дюпон, построенный в конце 19 века, является выдающимся примером колониальной архитектуры Матансаса. Эта величественная резиденция на протяжении многих лет была свидетелем исторических и культурных событий и теперь открыта для публики, чтобы поделиться своей богатой историей.",
            image: "/images/places/Mansion_Dupon.webp",
            tag: "Matanzas",
        
            itinerary: [
              
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
          {
            id: 20,
            title: "Сороа",
            description:
              "Сороа, известный как «радуга Кубы», славится своим ботаническим садом и водопадами. Основанный в 19 веке, этот район представляет собой природный рай, который на протяжении поколений привлекает любителей флоры и фауны со всего мира.",
            image: "/images/places/Pinar_Cascada.webp",
            tag: "Pinar Del Río",
            itinerary: ["Tour Viñales - Soroa", "Тур Виньялес - Сороа", "Viñales - Soroa Tour"],
          },
        
          {
            id: 21,
            title: "Фармацевтический музей",
            description:
              "Фармацевтический музей Матансаса, открытый в начале 20 века, является свидетельством развития фармакологии в регионе. Он демонстрирует увлекательную коллекцию древних медицинских инструментов и предлагает посетителям уникальное представление об истории медицины.",
            image: "/images/places/Museo_Farmaceutico.webp",
            tag: "Matanzas",
        
            itinerary: ["Tour por Matanzas", "Matanzas Tour", "Тур по Матансасу"],
          },
          {
            id: 22,
            title: "Город Матансас",
            description:
              "Город Матансас, также известный как «Кубинские Афины», имеет богатую историю, которая простирается от колониальных времен до наших дней. Его уникальная архитектура, очаровательные площади и культурные мероприятия делают этот город обязательным для посещения любителями истории и культуры.",
            image: "/images/places/plaza_mtz.webp",
            tag: "Matanzas",
        
            itinerary: [
              "Excursion de un día a Varadero desde La Habana",
              "Tour por Matanzas",
              "One-day excursion to Varadero from Havana",
              "Matanzas Tour", "Тур по Матансасу",
            ],
          },
          {
            id: 23,
            title: "Битлз",
            description:
              "Битлз в Матансасе — это яркая дань уважения культовой рок-группе. Это место предлагает уникальный музыкальный опыт с выставками, тематическими мероприятиями и атмосферой, которая переносит посетителей в захватывающую эпоху битломании.",
            image: "/images/places/the_beatles.webp",
            tag: "Matanzas",
        
            itinerary: [
              
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
          {
            id: 27,
            title: "Замок Королевской Силы",
            description:
              "Посетите исторический Кастильо-де-ла-Реаль-Фуэрса, крепость, которая когда-то защищала Гавану от нападений пиратов. Исследуйте его историческое прошлое и насладитесь панорамным видом на город.",
            image: "/images/places/nuevos_places/Castillo_Real_Fuerza.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 28,
            title: "Собор Казанской Божией Матери.",
            description:
              "Поразитесь архитектурной красоте собора Казанской Божией Матери, собора, сочетающего в себе различные стили. Откройте для себя религиозное и культурное значение.",
            image: "/images/places/nuevos_places/Catedral_Senora_Kazan.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "One day tour in Havana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 29,
            title: "Сотня пожаров",
            description:
              "Исследуйте живописный город Сьенфуэгос, известный своим французским влиянием и потрясающим променадом. Погрузитесь в местное искусство, культуру и гостеприимную атмосферу.",
            image: "/images/places/nuevos_places/Cienfuegos.webp",
            tag: ["Central Region", "Región Central"],
            itinerary: [
              "Tour Trinidad - Cienfuegos (Opcional Nicho)",  "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Trinidad - Cienfuegos Tour (Optional Nicho)",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 30,
            title: "Крокодиловая ферма",
            description:
              "Посетите крокодиловую ферму и станьте свидетелем этих удивительных рептилий в их естественной среде обитания. Узнайте об усилиях по сохранению крокодилов и насладитесь уникальным опытом дикой природы.",
            image: "/images/places/nuevos_places/Criadero_Cocodrilos.webp",
            tag: "Matanzas",
        
            itinerary: ["Tour por la Ciénaga de Zapata", "Zapata Swamp Tour","Экскурсия в Циенага-де-Сапата"],
          },
          {
            id: 32,
            title: "Троицкая церковь",
            description:
              "Посетите Иглесию Тринидад, историческую церковь в Тринидаде. Полюбуйтесь его архитектурой и погрузитесь в религиозное и культурное наследие этого очаровательного кубинского города.",
            image: "/images/places/nuevos_places/Iglesia_Trinidad.webp",
            tag: ["Central Region", "Región Central"],
        
            itinerary: [
              "Tour Trinidad - Cienfuegos (Opcional Nicho)",  "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Trinidad - Cienfuegos Tour (Optional Nicho)",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
        
          {
            id: 33,
            title: "Джосоне Парк",
            description:
              "Отдохните в пышной местности парка Джосоне, красивого парка с садами, озерами и зонами отдыха. Наслаждайтесь спокойным отдыхом от шума и суеты повседневной жизни.",
            image: "/images/places/nuevos_places/Josone.webp",
            tag: "Matanzas",
            itinerary: [
              "Excursión de un día a Varadero desde La Habana",
              "One-day excursion to Varadero from Havana",
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
          {
            id: 34,
            title: "Монсеррат",
            description:
              "Поднимитесь на вершину Монсеррата, чтобы полюбоваться потрясающим видом на окружающие пейзажи. С этой смотровой площадки открывается уникальный вид на город и его живописные окрестности.",
            image: "/images/places/nuevos_places/Monserrate.webp",
            tag: "Matanzas",
            itinerary: ["Tour por Matanzas", "Matanzas Tour", "Тур по Матансасу"],
          },
          {
            id: 35,
            title: "Памятник Эрнесто Че Геваре",
            description:
              "Отдайте дань уважения культовому революционному лидеру у памятника Эрнесто Че Геваре. Исследуйте мемориал и получите представление о жизни и наследии Че Гевары.",
            image: "/images/places/nuevos_places/Monumento_Ernesto_Che_Guevara.webp",
            tag: ["Central Region", "Región Central"],
            itinerary: [
              
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 36,
            title: "Памятник атаке бронепоезда",
            description:
              "Посетите памятник атаке бронепоезда, посвященный историческому событию во время кубинской революции. Узнайте всю храбрость и важность этого решающего момента.",
            image: "/images/places/nuevos_places/Monumento_Tren_Blindado.webp",
            tag: ["Central Region", "Región Central"],
            itinerary: [
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 37,
            title: "Предыстория Фреска",
            description:
              "Полюбуйтесь фреской «Доисторическая история», колоссальной фреской под открытым небом, изображающей эволюционную историю жизни на Земле. Исследуйте яркие произведения искусства в естественном контексте.",
            image: "/images/places/nuevos_places/Mural_Prehistoria.webp",
            tag: "Pinar Del Río",
            itinerary: ["Tour Viñales - Soroa", "Тур Виньялес - Сороа", "Viñales - Soroa Tour"],
          },
          {
            id: 39,
            title: "Музей рома",
            description:
              "Насладитесь богатой историей кубинского рома в Музее рома. Откройте для себя искусство производства рома, узнайте о его культурном значении и насладитесь дегустацией прекрасного кубинского рома.",
            image: "/images/places/nuevos_places/Museo_Ron.webp",
            tag: ["Havana", "La Habana"],
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
        
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 40,
            title: "Дворец испанских губернаторов",
            description:
              "Вернитесь во времени во Дворец испанских губернаторов, исторический дворец, демонстрирующий колониальную архитектуру. Исследуйте комнаты и коридоры, которые рассказывают истории прошлого.",
            image: "/images/places/nuevos_places/Palacio_Gobernadores.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
        
          {
            id: 41,
            title: "Вэлли Палас",
            description:
              "Ощутите величие Паласио-дель-Валле, архитектурной жемчужины, сочетающей в себе несколько стилей. Полюбуйтесь замысловатыми деталями и насладитесь панорамным видом на окружающие пейзажи.",
            image: "/images/places/nuevos_places/Palacio_Valle.webp",
            tag: ["Central Region", "Región Central"],
        
            itinerary: [
              "Tour Trinidad - Cienfuegos (Opcional Nicho)",  "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Trinidad - Cienfuegos Tour (Optional Nicho)",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 42,
            title: "Длинный пляж",
            description:
              "Отдохните на нетронутых берегах Плайя-Ларга, прекрасного пляжа, известного своим спокойствием и природной красотой. Наслаждайтесь загоранием, купанием и спокойным отдыхом на море.",
            image: "/images/places/nuevos_places/Playa_Larga.webp",
            tag: "Matanzas",
            itinerary: ["Tour por la Ciénaga de Zapata", "Zapata Swamp Tour","Экскурсия в Циенага-де-Сапата"],
          },
          {
            id: 43,
            title: "Главная площадь",
            description:
              "Прогуляйтесь по исторической Пласа-де-Армас, старейшей площади Гаваны. Погрузитесь в колониальное очарование, исследуйте книжные рынки и насладитесь яркой атмосферой.",
            image: "/images/places/nuevos_places/Plaza_Armas.webp",
            tag: ["Havana", "La Habana"],
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 45,
            title: "Троицкая площадь",
            description:
              "Испытайте очарование Пласа Тринидад, исторической площади Тринидада. Полюбуйтесь колониальной архитектурой, посетите местные магазины и погрузитесь в богатую культуру этого района.",
            image: "/images/places/nuevos_places/Plaza.webp",
            tag: ["Central Region", "Región Central"],
        
            itinerary: [
              "Tour Trinidad - Cienfuegos (Opcional Nicho)",  "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Trinidad - Cienfuegos Tour (Optional Nicho)",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 46,
            title: "Площадь Сан-Франциско",
            description:
              "Откройте для себя красоту Пласа-де-Сан-Франциско, площади, окруженной историческими зданиями. Наслаждайтесь оживленной атмосферой, посетите близлежащие достопримечательности и окунитесь в богатую историю.",
            image: "/images/places/nuevos_places/San_Francisco.webp",
            tag: ["Havana", "La Habana"],
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 47,
            title: "Крепость Сан-Северино",
            description:
              "Исследуйте впечатляющую крепость Сан-Северино, крепость с великой историей. Узнайте об их роли в защите города и насладитесь панорамным видом на окружающие пейзажи.",
            image: "/images/places/nuevos_places/San_Seberino.webp",
            tag: "Matanzas",
            itinerary: ["Tour por Matanzas", "Matanzas Tour", "Тур по Матансасу"],
          },
          {
            id: 48,
            title: "Сент-Клер",
            description:
              "Погрузитесь в оживленный город Санта-Клара, известный своей революционной историей. Исследуйте знаковые места, узнайте о Че Геваре и познакомьтесь с оживленной культурной жизнью.",
            image: "/images/places/nuevos_places/Santa_Clara.webp",
            tag: ["Central Region", "Región Central"],
        
            itinerary: [
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 49,
            title: "Национальный театр Алисии Алонсо",
            description:
              "Почувствуйте величие Национального театра Алисии Алонсо, известного театра Гаваны. Посетите выставки, полюбуйтесь красотой архитектуры и погрузитесь в искусство и культуру.",
            image: "/images/places/nuevos_places/Teatro_Nacional_Alicia_Alonso.webp",
            tag: ["Havana", "La Habana"],
        
            itinerary: [
              "Tour de un día en La Habana",  "Однодневный тур по Гаване",
              "Tour al Atardecer en La Habana",  "Тур на закате в Гаване",
              "Tour por La Habana + Tropicana", "Тур по Гаване + Тропикана",
              "Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки",
              "One day tour in Havana",
              "Sunset Tour in Havana",
              "Havana Tour + Cannon Shot",
              "Havana Tour + Tropicana",
              "City Tour Havana for Hour",
              "Tour de Ciudad en La Habana por Hora",
            ],
          },
          {
            id: 50,
            title: "Троица",
            description:
              "Откройте для себя Тринидад, объект Всемирного наследия ЮНЕСКО, город, застывший во времени. Прогуляйтесь по мощеным улочкам, полюбуйтесь колониальной архитектурой и познакомьтесь с богатой историей и культурой.",
            image: "/images/places/nuevos_places/Trinidad.webp",
            tag: ["Central Region", "Región Central"],
        
            itinerary: [
              "Tour Trinidad - Cienfuegos (Opcional Nicho)",  "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
              "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara", "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара","Tour Trinidad - Cienfuegos (Nicho opcional)","Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
              "Trinidad - Cienfuegos Tour (Optional Nicho)",
              "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
            ],
          },
          {
            id: 51,
            title: "Тропикана",
            description:
              "Окунитесь в яркую ночную жизнь Гаваны в легендарном кабаре «Тропикана». Наслаждайтесь великолепными представлениями, живой музыкой и гламуром самого знаменитого развлекательного заведения Кубы.",
            image: "/images/places/nuevos_places/Tropicana.webp",
            tag: ["Havana", "La Habana"],
            itinerary: ["Tour por La Habana + Tropicana","Тур по Гаване + Тропикана", "Havana Tour + Tropicana"],
          },
          {
            id: 52,
            title: "Долина Юмури",
            description:
              "Исследуйте живописную долину Юмури, пышную долину, окруженную холмами и реками. Наслаждайтесь прогулками на природе, снимайте потрясающие виды и погрузитесь в спокойствие пейзажа.",
            image: "/images/places/nuevos_places/Valle_Yumuri.webp",
            tag: "Matanzas",
            itinerary: ["Tour por Matanzas", "Matanzas Tour", "Тур по Матансасу"],
          },
          {
            id: 53,
            title: "Виньялес",
            description:
              "Отправьтесь в живописную красоту Виньялеса, долины, окруженной величественными известняковыми холмами. Откройте для себя табачные фермы, исследуйте пещеры и насладитесь непринужденной атмосферой сельской Кубы.",
            image: "/images/places/nuevos_places/Viñales.webp",
            tag: "Pinar Del Río",
            itinerary: ["Tour Viñales - Soroa", "Тур Виньялес - Сороа", "Viñales - Soroa Tour"],
          },
          {
            id: 54,
            title: "Вид на Монсеррат",
            description:
              "Поднимитесь на Vista Monserrate, откуда открывается панорамный вид на Гавану. Снимайте потрясающие городские пейзажи, наслаждайтесь безмятежной атмосферой и восхищайтесь красотой кубинской столицы сверху.",
            image: "/images/places/nuevos_places/Vistas_Monserrate.webp",
            tag: "Matanzas",
            itinerary: ["Tour por Matanzas", "Matanzas Tour", "Тур по Матансасу"],
          },
          {
            id: 55,
            title: "Дельфинарий Варадеро",
            description:
              "Дельфинарий Варадеро на Кубе предлагает захватывающие шоу и интерактивные мероприятия, которые позволяют посетителям пообщаться с дельфинами и одновременно способствовать сохранению морской среды.",
        
            image: "/images/places/nuevos_places/Delfinario_Varadero.webp",
            tag: "Matanzas",
            itinerary: [
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
        
          {
            id: 56,
            title: "Варадеро Марина",
            description:
              "Марина Варадеро — это пристань, расположенная в Варадеро, Куба, которая предлагает полный морской сервис и размещение для лодок, продвигая морской туризм и прогулочный катание на лодках.",
            image: "/images/places/nuevos_places/Marina_Varadero.webp",
            tag: "Matanzas",
            itinerary: [
              "City Tour Varadero for Hour", "Однодневная экскурсия в Варадеро из Гаваны",
              "Recorrido por la ciudad de Varadero por hora", "Тур по городу Варадеро по часам",
            ],
          },
          {
            id: 57,
            title: "Пушечный выстрел по замку Морро Кабанья",
            description:
              "Испытайте историческую церемонию пушечного выстрела в замке Морро Кабанья, ночной ритуал, насчитывающий несколько столетий и позволяющий заглянуть в богатое прошлое Кубы.",
            image: "/images/places/nuevos_places/Cañonazo.webp",
            tag: ["Havana", "La Habana"],
            itinerary: ["Tour por La Habana + Cañonazo","Тур по Гаване + Салют из пушки", "Havana Tour + Cannon Shot"],
          },
        ]
},
it: {
  nav: {
    'home': 'Casa',
    'places': 'Luoghi',
    'about': 'Chi siamo',
    'services': 'Servizi',
    'feedback': 'Feedback',
    matanzas: 'Matanzas',
    habana: "L'Avana",
    pinar: "Pinar del Río",
    central: "Regione Centrale"
  },
  hero: {
    'h1': 'Classica',
    'h12': 'Cubana 52',
    'span': '',
    'p': 'Sperimenta un servizio taxi affidabile ed efficiente con autisti professionisti. Garantiamo viaggi sicuri, puntuali e confortevoli.',
    'button': 'Prenota ora'
  },
  prov: {
    visit: 'Visita',
    'h2': 'La Tua Vacanza da Sogno Inizia con Noi',
    'p': 'Scopri orizzonti culturali dove antiche tradizioni incontrano la vitalità moderna, e ogni strada ti invita a diventare parte della storia vivente della città.',
    places: [{
      name: "Pinar del Río",
      slug: 'Pinar del Río',
      desc: "Campi di tabacco, Valle di Viñales, mogotes, Cueva del Indio, terme di San Diego, Soroa, fabbriche di sigari e fascino coloniale.",
      img: '/images/Pinar.png',
      href: "/"
    }, {
      name: "L'Avana",
      slug: 'La Habana',
      desc: "Storica Vecchia Avana, lungomare del Malecón, auto d'epoca, Castello del Morro, musica vivace, rum, musei e cultura vibrante.",
      img: '/images/Havana.jpg',
      href: "/"
    }, {
      name: "Matanzas",
      slug: "Matanzas",
      desc: "Spiaggia di Varadero, Castello di San Severino, Valle di Yumurí, cultura afro-cubana ed eredità coloniale.",
      img: '/images/Matanzas.png',
      href: "/"
    }, {
      name: "Regione Centrale",
      slug: "Región Central",
      desc: "Unisce storia, musica tradizionale, parchi naturali e bellissime spiagge.",
      img: '/images/Trinidad.png',
      href: "/"
    }]
  },
  aboutComp: {
    'h2': "Informazioni sull'azienda",
    'pdesc': "Ridefiniamo il turismo a Cuba offrendo esperienze attraverso tour personalizzati in auto d'epoca che catturano perfettamente lo spirito vintage dell'isola. Combinando prezzi competitivi con l'autentica ospitalità cubana, offriamo un servizio eccezionale che mette in mostra la vera essenza della nostra cultura.",
    'p': "Lascia che trasformiamo la tua visita in un viaggio straordinario.",
    'secT': "Puntualità",
    'secP': "Prelievi in orario e percorsi ottimizzati.",
    'conT': "Autenticità",
    'conP': "Luoghi segreti conosciuti solo dai locali."
  },
  about2: {
    h2: 'Creiamo momenti indimenticabili per te',
    elementos: [{
      num: '1',
      title: 'Prenotazione Facile e Veloce',
      text: 'Prenota in pochi minuti: inviaci un messaggio WhatsApp con le tue preferenze.',
      active: false
    }, {
      num: '2',
      title: 'Viaggio Personalizzato Su Misura per Te',
      text: 'Il nostro team ti aiuterà a progettare l itinerario perfetto in base alle tue preferenze.',
      active: false
    }, {
      num: '3',
      title: 'Goditi un Servizio Esclusivo',
      text: 'Goditi un servizio di prima classe con autisti esperti e attenzione personalizzata.',
      active: true
    }]
  },
  services: {
    h2: "Goditi il miglior servizio di trasporto con noi",
    p: "Il nostro team di professionisti esperti si adatta perfettamente a ogni viaggiatore, progettando esperienze su misura che superano le aspettative.",
    serv1h4: 'Excursioni',
    serv1p: 'Scopri città vivaci, villaggi e ogni gemma nascosta lungo il percorso',
    serv2h4: 'Trasporto Privato',
    serv2p: 'Prenotazione facile con i nostri veicoli premium.',
    serv3h4: 'Trasferimenti',
    serv3p: 'Viaggia in comfort, goditi viaggi senza intoppi.'
  },
  feedback: {
    h2: 'Cosa dicono i clienti di noi',
    p: 'Scopri cosa hanno da dire i nostri clienti sui nostri tour, mentre condividono le loro esperienze indimenticabili e recensioni entusiastiche.',
    coment: 'Scrivici il tuo commento'
  },
  itinerary: [{
    title: "Tour di un giorno a L'Avana",
    place: ["Havana", "La Habana"],
    details: [
      "Orario di partenza dall'hotel ~8:00 Orario di arrivo in hotel ~17:00-18:00",
      "Ci vogliono da 1,5 a 2 ore per raggiungere L'Avana. Lungo la strada, faremo una sosta al ponte più alto di Cuba (Bacunayagua), con vista sulla Valle di Yumurí e sull'oceano. Possono provare il cocktail all'ananas più delizioso di Cuba (a un costo aggiuntivo).",
      "Sosta vicino al Castello del Morro, che offre impressionanti viste panoramiche su L'Avana. (L'ingresso è a pagamento e opzionale).",
      "Poi, faremo una passeggiata lungo il Malecón da dove inizierà una passeggiata di due ore per la Vecchia Avana. Tra le attrazioni ci sono la Plaza de San Francisco de Asís, un campanile del vecchio monastero francescano (a pagamento), un museo del rum con degustazione (ingresso a pagamento), la Cattedrale di Nostra Signora di Kazán, la Plaza della Cattedrale, la Piccola Cantina, il Palazzo dei Governatori Spagnoli, la Plaza de Armas, il Castello della Real Fuerza (ingresso a pagamento), Calle Obispo, l'Hotel Ambos Mundos, Plaza Vieja, tra gli altri.",
      "Visita a Plaza de la Revolución, una passeggiata per il centro dell'Avana, dove troverai il Campidoglio, il Gran Teatro dell'Avana, il caffè Floridita (menzionato da Hemingway) e altri punti di interesse.",
      "Partiamo da L'Avana alle 15:00.",
      "Il pranzo non è incluso nel prezzo dell'escursione (costo stimato del pranzo è di 15-20 €)."
    ]
  }, {
    title: "Tour al tramonto a L'Avana",
    place: ["Havana", "La Habana"],
    details: [
      "Prelievo presso il tuo alloggio o hotel alle 10:00 a Varadero.",
      "Circa due ore di viaggio per L'Avana lungo la costa nord.",
      "Sosta al ponte più alto di Cuba (Bacunayagua), alto 112 metri, dove puoi gustare il miglior Cocktail all'Ananas di Cuba.",
      "Viaggio a L'Avana.",
      "Passeggiata per la Vecchia Avana, dichiarata Patrimonio dell'Umanità dall'UNESCO nel 1982.",
      "Visita a Plaza de la Catedral.",
      "Visita a Plaza del Brazo.",
      "Visita a Plaza Vieja.",
      "Visita a Plaza San Francisco de Asís.",
      "Sosta al forte più antico di Cuba, il Castello del Morro.",
      "Visita alla statua del Cristo dell'Avana.",
      "Hotel Nacional.",
      "Visita ai famosi bar di Hemingway La Bodeguita del Medio ed El Floridita.",
      "Orario di pranzo (prezzi variano a seconda della scelta del cliente, non inclusi).",
      "Percorso lungo il Malecón e la Nuova Avana.",
      "Sosta a Plaza de la Revolución.",
      "Tempo per passeggiare nel centro città dove puoi vedere l'edificio del Campidoglio, il Gran Teatro dell'Avana e il Parco Centrale.",
      "Sosta facoltativa al Museo del Rum.",
      "Visita al negozio di tabacco.",
      "La sera, visiteremo i posti migliori per godersi il tramonto, che può essere dal Malecón dell'Avana o dal Castello del Morro.",
      "Il percorso termina al tramonto.",
      "Rientro a Varadero dopo il tramonto.",
      "Cose opzionali che puoi aggiungere a questo tour: 25 USD/EURO per un'ora in un'auto d'epoca scoperta una volta a L'Avana."
    ]
  }, {
    title: "Tour dell'Avana + Saluto di Cannone",
    place: ["Havana", "La Habana"],
    details: [
      "Prelievo presso il tuo alloggio o hotel alle 10:00.",
      "Passeggiata per la Vecchia Avana, dichiarata Patrimonio dell'Umanità dall'UNESCO nel 1982. Goditi il tempo libero e ti consigliamo una visita al mercato rappresentativo di arti e mestieri che rappresenta l'identità culturale del popolo.",
      "Visita a Plaza de San Francisco de Asís, piena di ciottoli situata alle porte dell'Avana.",
      "Sosta a Plaza de la Catedral, uno dei luoghi più belli della Vecchia Avana.",
      "Sosta nella Plaza Vieja recentemente restaurata, una tappa obbligatoria per gli amanti della storia.",
      "Visita a Plaza de Armas, la piazza più antica dell'Avana.",
      "Sosta al Palazzo dei Capitani Generali, una delle opere architettoniche più importanti di Cuba.",
      "Breve sosta all'Hotel Ambos Mundos, un edificio in stile eclettico situato nella Vecchia Avana.",
      "Visita a due dei bar più famosi dell'Avana, La Bodeguita del Medio ed El Floridita, per gustare i cocktail più deliziosi.",
      "Pranzo suggerito dalla guida nei ristoranti più spettacolari dell'Avana dove puoi gustare la nostra tipica cucina cubana.",
      "Viaggio in auto d'epoca lungo l'Avenida Malecón godendo di una bellissima vista sulla Baia dell'Avana.",
      "Passeggiata per la Nuova Avana, visita esclusiva.",
      "Viaggio panoramico attraverso i quartieri Vedado e Miramar.",
      "Sosta a Plaza de la Revolución, una delle più grandi del mondo e sede di uno dei musei più interessanti di tutta Cuba.",
      "Sosta panoramica all'edificio corrispondente al Campidoglio, uno dei luoghi più emblematici dell'Avana.",
      "Sosta al Parco Centrale José Martí, una grande attrazione per viaggiatori da tutto il mondo, dove si combinano la storia di magnifici edifici e la natura.",
      "Visita al Gran Teatro dell'Avana Alicia Alonso, un magnifico edificio sede del Balletto e dell'Opera Nazionale di Cuba.",
      "Visita panoramica alla Fortezza del Morro, un'importante fortificazione costruita a Cuba nel XVI secolo.",
      "Visita panoramica al Cristo dell'Avana, un'opera scultorea monumentale di circa 20 metri di altezza.",
      "Cena nei ristoranti consigliati dell'Avana secondo la tua scelta. Scegli tra gamberi o pollo, per assaporare l'autentica cucina cubana.",
      "Alle 21:00 potrai goderti una delle tradizioni cubane: il 'colpo di cannone delle nove' nella visita guidata alla Fortezza di San Carlos de la Cabaña.",
      "Viaggio di ritorno al tuo alloggio in un'auto d'epoca con il massimo comfort e sicurezza."
    ]
  }, {
    title: "Tour dell'Avana + Tropicana",
    place: ["Havana", "La Habana"],
    details: [
      "Prelievo presso il tuo alloggio o hotel alle 10:30.",
      "Circa due ore di viaggio per L'Avana lungo la costa atlantica.",
      "Sosta al ponte più alto di Cuba «Bacunayagua» dove puoi anche gustare il miglior Cocktail all'Ananas di Cuba.",
      "Viaggio a L'Avana.",
      "Passeggiata per la Vecchia Avana, dichiarata Patrimonio dell'Umanità dall'UNESCO nel 1982.",
      "Visita a Plaza de la Catedral.",
      "Visita a Plaza de Arma.",
      "Visita a Plaza Vieja.",
      "Visita a Plaza San Francisco de Asís.",
      "Sosta al forte più antico di Cuba, il Castello del Morro.",
      "Visita alla statua del Cristo dell'Avana.",
      "Visita ai famosi bar di Hemingway La Bodeguita del Medio ed El Floridita.",
      "Orario di pranzo (prezzi variano a seconda della scelta del cliente, non inclusi).",
      "Il percorso lungo il Malecón e la Nuova Avana.",
      "Sosta a Plaza de la Revolución.",
      "Tempo per passeggiare verso il centro dove puoi vedere l'edificio del Campidoglio, il Gran Teatro dell'Avana e il Parco Centrale.",
      "Sosta facoltativa al Museo del Rum.",
      "Visita al negozio di tabacco.",
      "Visita al Tropicana (l'ospite paga l'ingresso direttamente al cabaré).",
      "Dopo lo spettacolo, viaggio di ritorno a Varadero."
    ]
  }, {
    title: "Tour della Palude di Zapata",
    place: "Matanzas",
    details: [
      "Partenza dall'hotel alle 8 del mattino.",
      "Attraversiamo l'isola da nord a sud. Il viaggio dura circa 2 ore.",
      "Lungo la strada, attraverseremo le città di Santa Marta e Cardenas, la città di Jovellanos, dove vivono molti discendenti di schiavi africani, una cooperativa chiamata Vladimir Ilich Lenin, il villaggio di Australia, piantagioni di canna da zucchero, banane, agrumi, mango e altre colture tropicali.",
      "Prima sosta in una mini fattoria con piante e animali tipici cubani. A un costo aggiuntivo, puoi bere succo di canna da zucchero e cavalcare un toro zebu.",
      "Allevamento di coccodrilli (5 € a persona).",
      "Visita agli 'Indiani': Saliamo su motoscafi e ci portano su un'isola con alcune capanne e sculture indiane. Questo villaggio indiano ha un costo di 12 € a persona e dura circa 2 ore o più.",
      "Pranzo incluso con 4 tipi di carne, come coccodrillo, granchio, aragosta, gamberi, pesce, cervo, lumache o calamari, per 15-20 € a persona. Include anche riso con verdure, insalata e bevande.",
      "Mar dei Caraibi: Godremo del Mar dei Caraibi nella Baia dei Porci, con acque limpide specialmente vicino ai coralli.",
      "Snorkeling: Noleggio attrezzatura da snorkeling a 5 € l'ora. Puoi portare la tua attrezzatura. Si consiglia di portare briciole di pane dall'hotel per nutrire i pesci e altre creature marine.",
      "Immersioni: Costerà 25 € per 40 minuti per subacquei esperti. I principianti pagano un supplemento di 10 € per una lezione introduttiva. L'area di immersione è facile e ha navi affondate a 25-30 metri di profondità.",
      "Cenotes: Vedremo cenotes o doline nelle giungle intorno alla Baia dei Porci, dove puoi nuotare. Se lo desideri, possiamo andare alla Casa del Colibrì per osservare gli uccelli (1 $).",
      "Sosta facoltativa per nuotare sulla spiaggia di sabbia nel villaggio di Playa Larga.",
      "Storia: Visiteremo importanti siti storici legati alla Guerra Fredda nella Baia dei Porci, dove nel 1961 fu condotta un'invasione pro-Castro.",
      "Rientro a Varadero alle 16:00."
    ]
  }, {
    title: "Tour di Matanzas",
    place: "Matanzas",
    details: [
      "Partenza dall'hotel alle 9:00.",
      "Visita alle Grotte di Bellamar (ingresso $5): Esploreremo le impressionanti Grotte di Bellamar, un sistema di grotte che offre formazioni rocciose uniche e spettacolari. Scopriremo la ricca geologia e la storia di questo luogo affascinante.",
      "Tour del centro storico coloniale: Ci immergeremo nella storia di Matanzas esplorando il suo centro coloniale. Visiteremo la famosa Farmacia Francese, un iconico punto di riferimento architettonico che riflette l'influenza francese nella regione.",
      "Belvedere di Monserrat: Godremo di una vista panoramica dal Belvedere di Monserrat, che offre una prospettiva impressionante della città e dei suoi dintorni. Un luogo perfetto per catturare ricordi indimenticabili.",
      "L'Eremo: Visiteremo L'Eremo, un luogo sacro che è stato testimone di eventi storici significativi. Impareremo di più sul significato culturale e religioso di questo sito.",
      "Castello di San Severino: Esploreremo il Castello di San Severino, una fortezza storica che ha svolto un ruolo cruciale nella difesa della città. Scopriremo l'architettura militare e la storia che circonda questo imponente castello.",
      "Grotta di Saturno (ingresso $5): Concluderemo il nostro tour esplorando la Grotta di Saturno, un cenote sotterraneo con acque cristalline. I visitatori avranno l'opportunità di nuotare e godere della bellezza naturale unica di questa formazione geologica.",
      "Rientro in hotel intorno alle 14:00."
    ]
  }, {
    title: "Escursione di un giorno a Varadero da L'Avana",
    place: "Matanzas",
    details: [
      "Prelievo in hotel o B&B in auto d'epoca alle 8:00.",
      "Uscita verso Varadero lungo la costa con splendidi paesaggi.",
      "Sosta facoltativa al Ponte Bacunayagua: Faremo una sosta al ponte più alto di Cuba con 112 m di altezza. Da questo belvedere, i visitatori possono godere di splendide viste panoramiche e gustare il miglior Cocktail all'Ananas di Cuba.",
      "Viaggio a Coral Beach per fare snorkeling (ingressi non inclusi, 10 USD per persona): Esploreremo le acque cristalline di Coral Beach, ideali per praticare snorkeling e godere della vita marina.",
      "Visita alla grotta aperta di Saturno (ingressi non inclusi, 5 USD per persona): Scopriremo la bellezza della Grotta di Saturno, un cenote sotterraneo con acque cristalline. I visitatori avranno l'opportunità di nuotare e godere della bellezza naturale unica di questa formazione geologica.",
      "Proseguimento del viaggio per Varadero.",
      "Visita La casa Alcapone a Varadero: Esploreremo La Casa Alcapone, che offre uno sguardo sulla storia e il lusso dell'epoca.",
      "Visita al mercato di Varadero: Immergiti nella cultura locale esplorando il mercato di Varadero, dove puoi trovare artigianato locale e prodotti.",
      "Visita al Parco Josone: Goditi la bellezza naturale del Parco Josone, un'oasi nel mezzo di Varadero con giardini esuberanti e laghi sereni.",
      "Visita alla Mansion Dupon: Esploreremo l'elegante Mansion Dupon, una testimonianza dell'architettura storica di Varadero.",
      "Tempo libero in spiaggia: I visitatori avranno tempo per rilassarsi sulle bellissime spiagge di Varadero.",
      "Il tour si conclude intorno alle 16:30 e rientra a L'Avana."
    ]
  }, {
    title: "Tour Trinidad - Cienfuegos (Nicho Opzionale)",
   place: ["Central Region", "Región Central"],
    details: [
      "Prelievo presso il tuo alloggio o hotel alle 06:30.",
      "Viaggio di tre ore attraverso la campagna fino a Cienfuegos.",
      "Escursione nella città di Cienfuegos.",
      "Visita all'area di Punta Gorda, al Palacio del Valle e all'Hotel Jagua.",
      "Sosta opzionale alle Cascate di El Nicho (Questo ha un costo extra di 40 euro da pagare per il trasporto per salire sulla montagna).",
      "Nota: Se visitiamo El Nicho, avremo meno tempo da trascorrere nelle altre aree.",
      "Viaggio a Trinidad per godersi la vista sul Mar dei Caraibi.",
      "Pausa pranzo a Trinidad (non inclusa).",
      "Passeggiata per il centro storico come Plaza Mayor, La Canchanchara, musei, ecc.",
      "Tempo libero per altre passeggiate o visita al mercato dell'artigianato, se il tempo lo consente.",
      "Rientro in hotel intorno alle 19:00.",
      "Questo tour include un'auto d'epoca con aria condizionata e una guida turistica."
    ]
  }, {
    title: "Tour delle Tre Città: Trinidad - Cienfuegos - Santa Clara",
   place: ["Central Region", "Región Central"],
    details: [
      "Il viaggio può anche essere fatto in due giorni.",
      "Prelievo presso il tuo alloggio o hotel alle 06:00.",
      "Viaggio di tre ore attraverso la campagna fino a Santa Clara.",
      "Sosta al mausoleo di Ernesto Che Guevara e a Piazza della Rivoluzione.",
      "Sosta a Parque Vidal e tour della città.",
      "Sosta al Treno.",
      "Sosta opzionale alle Cascate di El Nicho (Questo ha un costo extra di 40 euro da pagare per il trasporto per salire sulla montagna).",
      "Nota: Se visitiamo El Nicho, avremo meno tempo da trascorrere nelle altre aree. Non disponibile nel tour di un giorno.",
      "Viaggio a Trinidad per godersi la vista sul Mar dei Caraibi.",
      "Pausa pranzo a Trinidad (non inclusa).",
      "Passeggiata per il centro storico come Plaza Mayor, La Canchanchara, musei, ecc.",
      "Tempo libero per altre passeggiate o visita al mercato dell'artigianato, se il tempo lo consente.",
      "Partenza per Cienfuegos.",
      "Escursione nella città di Cienfuegos.",
      "Visita all'area di Punta Gorda, al Palacio del Valle e all'Hotel Jagua.",
      "Rientro in hotel intorno alle 21:00."
    ]
  }, {
    title: "Tour Viñales - Soroa",
    place: "Pinar del Río",
    details: [
      "Retirada in hotel o alloggio alle 8:30.",
      "Attraversa la provincia dell'Avana per proseguire verso Soroa.",
      "Visita Soroa dove puoi fare il bagno nella cascata e visitare il giardino delle orchidee (devi pagare l'ingresso in entrambi i posti, 3-5 USD per persona).",
      "Nota: Se vieni da Varadero e trascorri troppo tempo a Soroa, non avrai abbastanza tempo per goderti Viñales.",
      "Proseguimento del tour per la Valle di Viñales.",
      "Sosta al punto panoramico 'Las Jazmines' (un luogo eccellente per la fotografia).",
      "Visita alla casa del contadino per vedere e conoscere il tabacco cubano.",
      "Visita alla città di Viñales.",
      "Visita alla Grotta dell'Indio (ingresso non incluso, 5 USD per persona).",
      "Visita al Murale della Preistoria.",
      "Goditi una passeggiata a cavallo (opzionale, non inclusa, 10-15 USD per persona).",
      "Viaggio di ritorno a L'Avana o Varadero."
    ]
  }, {
    title: "City Tour Varadero a ore",
    place: ["Matanzas"],
    details: [
      "Esplora ogni angolo della città di Varadero in un'auto d'epoca scoperta a ore. Il prezzo è di $40 USD/ora.",
      "Casa de Todos",
      "Fiera dell'artigianato",
      "Punto panoramico fotografico",
      "Parco Josones",
      "Boulevard di Varadero",
      "Villa Xanadu",
      "Delfinario",
      "Marina Varadero"
    ]
  }],
  itinerarySec: {
    h4: 'Itinerario'
  },
  places: [{
    id: 1,
    title: "Castello nel Cielo",
    description: "Il Castello nel Cielo offre una vista panoramica mozzafiata su Pinar Del Río. Costruito nel XIX secolo come posto di osservazione, questo sito storico è stato restaurato per consentire ai visitatori di goderne la ricca storia.",
    image: "/images/places/Castillo_Cielo.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 2,
    title: "Belvedere Bacunayagua",
    description: "Il Belvedere Bacunayagua, costruito negli anni '60, è un punto di osservazione panoramico che offre viste mozzafiata sulla Valle di Yumurí. Questo località iconica ha anche una storia interessante legata allo sviluppo turistico della regione.",
    image: "/images/places/Mirador_Bacunayagua.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Escursione di un giorno a Varadero da L'Avana",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "Escursione di un giorno a Varadero da L'Avana",
      "Tour di un giorno a L'Avana",
      "Tour al tramonto a L'Avana",
      "Tour dell'Avana + Tropicana",
      "Tour dell'Avana + Saluto di Cannone"
    ]
  }, {
    id: 5,
    title: "Giardino delle Orchidee",
    description: "Il Giardino delle Orchidee a Pinar Del Río è un paradiso floreale istituito nel XX secolo. Con un'impressionante collezione di orchidee native e internazionali, questo luogo offre un'esperienza unica per gli appassionati di botanica.",
    image: "/images/places/Orquideario.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 6,
    title: "Grotta dell'Indio",
    description: "La Grotta dell'Indio, scoperta nel XIX secolo, è un affascinante sistema di grotte con formazioni geologiche uniche. Nel corso degli anni, è stata teatro di scoperte archeologiche che rivelano la presenza di antiche culture nella regione.",
    image: "/images/places/nuevos_places/Cueva_Indio.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 7,
    title: "Floridita",
    description: "Il Floridita è uno storico bar noto per la sua connessione con Ernest Hemingway. Fondato all'inizio del XIX secolo, questo luogo iconico offre un mix di storia, cocktail tradizionali, musica dal vivo e un'atmosfera vivace.",
    image: "/images/places/Floridita.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour dell'Avana + Tropicana",
      "Tour dell'Avana + Saluto di Cannone",
      "Tour di un giorno a L'Avana",
      "Tour al tramonto a L'Avana",
 
    ]
  }, {
    id: 8,
    title: "Bodeguita del Medio",
    description: "La Bodeguita del Medio, fondata nel XX secolo, è uno storico bar e ristorante. Rinomata per i suoi autentici mojito, la musica afro-cubana e l'atmosfera vibrante, è una tappa obbligata per chi cerca la cultura cubana.",
    image: "/images/places/Bodeguita.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour dell'Avana + Tropicana",
      "Tour dell'Avana + Saluto di Cannone",
      "Tour di un giorno a L'Avana",
      "Tour al tramonto a L'Avana",
  
    ]
  }, {
    id: 9,
    title: "Cavaliere di Parigi",
    description: "Il Cavaliere di Parigi è una statua storica a L'Avana, che rappresenta un personaggio unico del passato della città. Questo punto di riferimento offre spunti sulla storia locale, sulle piazze vicine, sull'arte urbana e sulla fotografia architettonica.",
    image: "/images/places/Caballero_Paris.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour dell'Avana + Tropicana",
      "Tour dell'Avana + Saluto di Cannone",
      "Tour di un giorno a L'Avana",
      "Tour al tramonto a L'Avana",
 
    ]
  }, {
    id: 10,
    title: "Cristo dell'Avana",
    description: "Il Cristo dell'Avana è un monumento religioso che offre viste panoramiche. Costruito a metà del XX secolo, funge da simbolo di spiritualità, offrendo ai visitatori passeggiate serene, eventi spirituali e spunti sulla cultura cattolica.",
    image: "/images/places/Cristo.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour di un giorno a L'Avana",
      "Tour al tramonto a L'Avana",
      "Tour dell'Avana + Tropicana",
      "Tour dell'Avana + Saluto di Cannone",
    
    ]
  }, {
    id: 11,
    title: "Il Campidoglio",
    description: "Il Campidoglio, un iconico edificio neoclassico, si erge come punto di riferimento politico a L'Avana. Costruito all'inizio del XX secolo, offre uno sguardo sulla storia politica, visite guidate, eventi culturali e viste panoramiche dalla sua cupola.",
    image: "/images/places/Capitolio.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour dell'Avana + Tropicana",
      "Tour dell'Avana + Saluto di Cannone",
      "Tour di un giorno a L'Avana",
      "Tour al tramonto a L'Avana",

    ]
  }, {
    id: 12,
    title: "Piazza della Rivoluzione",
    description: "Piazza della Rivoluzione, situata a L'Avana, è un'iconica piazza con monumenti rivoluzionari. Fungendo da punto focale per eventi pubblici, presenta arte politica, discorsi storici e una posizione centrale per raduni.",
    image: "/images/places/Plaza_Rev.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour di un giorno a L'Avana",
      "Tour al tramonto a L'Avana",
      "Tour dell'Avana + Tropicana",
      "Tour dell'Avana + Saluto di Cannone",

    ]
  }, {
    id: 13,
    title: "Varadero",
    description: "Varadero è una rinomata località balneare a Matanzas, che attrae visitatori con le sue spiagge incontaminate e la vivace vita notturna. Fondata all'inizio del XX secolo, offre sport acquatici, relax sulla spiaggia ed esperienze culturali.",
    image: "/images/places/Varadero.webp",
    tag: "Matanzas",
    itinerary: [
      "Jeep Safari",
      "Excursión de un día a Varadero desde La Habana",
      "Escursione di un giorno a Varadero da L'Avana",
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Escursione di un giorno a Varadero da L'Avana",
      "City Tour Varadero a ore"
    ]
  }, {
    id: 14,
    title: "Parco della Libertà",
    description: "Il Parco della Libertà a Matanzas è un'oasi verde con un passato storico. Fondato nel XX secolo, funge da area ricreativa, con spazi verdi, monumenti storici ed eventi culturali.",
    image: "/images/places/Parque_Libertad.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursion de un día a Varadero desde La Habana",
      "Tour por Matanzas",
      "Escursione di un giorno a Varadero da L'Avana",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Escursione di un giorno a Varadero da L'Avana",
      "Tour di Matanzas"
    ]
  }, {
    id: 15,
    title: "Grotta di Bellamar",
    description: "La Grotta di Bellamar, scoperta nel XIX secolo, è un affascinante sistema di grotte con formazioni geologiche uniche. Nel corso degli anni, è stata teatro di scoperte archeologiche che rivelano la presenza di antiche culture nella regione.",
    image: "/images/places/Bellamar_Cave.webp",
    tag: "Matanzas",
    itinerary: [
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour por Matanzas",
      "Tour di Matanzas"
    ]
  }, {
    id: 16,
    title: "Casa di Al Capone",
    description: "La Casa di Al Capone, costruita negli anni '20, è un testimone silenzioso dell'era del proibizionismo. Questo sito storico offre uno sguardo unico sulla vita del famoso gangster e sulla sua influenza nella regione di Matanzas durante quegli anni turbolenti.",
    image: "/images/places/Casa_de_Al.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Escursione di un giorno a Varadero da L'Avana",
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Escursione di un giorno a Varadero da L'Avana",
      "City Tour Varadero a ore"
    ]
  }, {
    id: 17,
    title: "Grotta di Saturno",
    description: "La Grotta di Saturno, nota per la sua impressionante piscina naturale sotterranea, ha una storia che risale all'epoca precolombiana. Utilizzata dagli indigeni Taíno, la grotta è stata un sito sacro e un rifugio nel corso dei secoli.",
    image: "/images/places/Cueva_Saturno.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Escursione di un giorno a Varadero da L'Avana",
      "Jeep Safari",
      "Escursione di un giorno a Varadero da L'Avana"
    ]
  }, {
    id: 18,
    title: "Guama",
    description: "Guama è un villaggio Taíno ricostruito nella regione di Matanzas. Questo sito unico offre ai visitatori un'esperienza immersiva nella cultura indigena, con repliche autentiche delle abitazioni Taíno e attività che mettono in risalto la ricca eredità dei nativi dell'isola.",
    image: "/images/places/Guama.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por la Ciénaga de Zapata",
      "Tour della Palude di Zapata",
      "Экскурсия в Циенага-де-Сапата",
      "Tour della Palude di Zapata"
    ]
  }, {
    id: 19,
    title: "Mansion Dupon",
    description: "La Mansion Dupón, costruita alla fine del XIX secolo, è un esempio eccezionale di architettura coloniale a Matanzas. Questa maestosa residenza è stata testimone di eventi storici e culturali nel corso degli anni, ora aperta al pubblico per condividere la sua ricca storia.",
    image: "/images/places/Mansion_Dupon.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Escursione di un giorno a Varadero da L'Avana",
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Escursione di un giorno a Varadero da L'Avana",
      "City Tour Varadero a ore"
    ]
  }, {
    id: 20,
    title: "Soroa",
    description: "Soroa, conosciuta come l''arcobaleno di Cuba', è famosa per il suo giardino botanico e le cascate. Fondata nel XIX secolo, l'area è un paradiso naturale che ha attratto appassionati di flora e fauna da tutto il mondo per generazioni.",
    image: "/images/places/Pinar_Cascada.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 21,
    title: "Museo Farmaceutico",
    description: "Il Museo Farmaceutico a Matanzas, aperto all'inizio del XX secolo, è una testimonianza dello sviluppo della farmacologia nella regione. Espone un'affascinante collezione di strumenti medici antichi e offre ai visitatori uno sguardo unico sulla storia della medicina.",
    image: "/images/places/Museo_Farmaceutico.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por Matanzas",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour di Matanzas"
    ]
  }, {
    id: 22,
    title: "Città di Matanzas",
    description: "La Città di Matanzas, conosciuta anche come l''Atene di Cuba', ha una ricca storia che va dall'epoca coloniale ai giorni nostri. La sua architettura unica, le piazze affascinanti e gli eventi culturali rendono questa città una tappa obbligata per gli appassionati di storia e cultura.",
    image: "/images/places/plaza_mtz.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursion de un día a Varadero desde La Habana",
      "Tour por Matanzas",
      "Escursione di un giorno a Varadero da L'Avana",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Escursione di un giorno a Varadero da L'Avana",
      "Tour di Matanzas"
    ]
  }, {
    id: 23,
    title: "The Beatles",
    description: "The Beatles a Matanzas è un vibrante tributo all'iconica band rock. Questo luogo offre un'esperienza musicale unica con mostre, eventi a tema e un'atmosfera che trasporta i visitatori nell'entusiasmante era della Beatlemania.",
    image: "/images/places/the_beatles.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Escursione di un giorno a Varadero da L'Avana",
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Escursione di un giorno a Varadero da L'Avana",
      "City Tour Varadero a ore"
    ]
  }, {
    id: 27,
    title: "Castello della Real Fuerza",
    description: "Visita lo storico Castello della Real Fuerza, una fortezza che un tempo proteggeva L'Avana dagli attacchi dei pirati. Esplora il suo passato storico e goditi le viste panoramiche sulla città.",
    image: "/images/places/nuevos_places/Castillo_Real_Fuerza.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour dell'Avana + Tropicana",
      "Tour dell'Avana + Saluto di Cannone",
      "Tour di un giorno a L'Avana",
      "Tour al tramonto a L'Avana",
  
    ]
  }, {
    id: 28,
    title: "Cattedrale di Nostra Signora di Kazan",
    description: "Ammira la bellezza architettonica della Cattedrale di Nostra Signora di Kazan, una cattedrale che mostra un mix di stili diversi. Scopri il significato religioso e culturale.",
    image: "/images/places/nuevos_places/Catedral_Senora_Kazan.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "One day tour in Havana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour di un giorno a L'Avana",
  
    ]
  }, {
    id: 29,
    title: "Cienfuegos",
    description: "Esplora la pittoresca città di Cienfuegos, nota per la sua influenza francese e lo splendido lungomare. Immergiti nelle arti e nella cultura locali e nell'atmosfera accogliente.",
    image: "/images/places/nuevos_places/Cienfuegos.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Trinidad - Cienfuegos Tour (Optional Nicho)",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour Trinidad - Cienfuegos (Nicho Opzionale)",
      "Tour delle Tre Città: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 30,
    title: "Fattoria dei Coccodrilli",
    description: "Visita la Fattoria dei Coccodrilli e osserva questi affascinanti rettili nel loro habitat naturale. Scopri gli sforzi di conservazione dei coccodrilli e goditi un'esperienza unica con la fauna selvatica.",
    image: "/images/places/nuevos_places/Criadero_Cocodrilos.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por la Ciénaga de Zapata",
      "Tour della Palude di Zapata",
      "Экскурсия в Циенага-де-Сапата",
      "Tour della Palude di Zapata"
    ]
  }, {
    id: 32,
    title: "Chiesa della Trinità",
    description: "Visita la Chiesa della Trinità, una chiesa storica a Trinidad. Ammira la sua architettura e immergiti nel patrimonio religioso e culturale di questa affascinante cittadina cubana.",
    image: "/images/places/nuevos_places/Iglesia_Trinidad.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Trinidad - Cienfuegos Tour (Optional Nicho)",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour Trinidad - Cienfuegos (Nicho Opzionale)",
      "Tour delle Tre Città: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 33,
    title: "Parco Josone",
    description: "Rilassati nei lussureggianti dintorni del Parco Josone, un bellissimo parco con giardini, laghi e aree ricreative. Goditi una fuga tranquilla dal trambusto della vita quotidiana.",
    image: "/images/places/nuevos_places/Josone.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Escursione di un giorno a Varadero da L'Avana",
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Escursione di un giorno a Varadero da L'Avana",
      "City Tour Varadero a ore"
    ]
  }, {
    id: 34,
    title: "Monserrate",
    description: "Sali in cima al Monserrate per ammirare viste mozzafiata sui paesaggi circostanti. Questo punto panoramico offre una prospettiva unica sulla città e sui suoi dintorni pittoreschi.",
    image: "/images/places/nuevos_places/Monserrate.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por Matanzas",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour di Matanzas"
    ]
  }, {
    id: 35,
    title: "Monumento a Ernesto Che Guevara",
    description: "Rendi omaggio all'iconico leader rivoluzionario al Monumento a Ernesto Che Guevara. Esplora il memoriale e scopri la vita e l'eredità di Che Guevara.",
    image: "/images/places/nuevos_places/Monumento_Ernesto_Che_Guevara.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour delle Tre Città: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 36,
    title: "Monumento all'attacco del Treno Blindato",
    description: "Visita il Monumento all'attacco del Treno Blindato, che commemora un evento storico durante la Rivoluzione Cubana. Scopri il coraggio e il significato di questo momento cruciale.",
    image: "/images/places/nuevos_places/Monumento_Tren_Blindado.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour delle Tre Città: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 37,
    title: "Murale della Preistoria",
    description: "Ammira il Murale della Preistoria, un colossale murale all'aperto che raffigura la storia evolutiva della vita sulla Terra. Esplora l'opera d'arte vibrante immersa in uno scenario naturale.",
    image: "/images/places/nuevos_places/Mural_Prehistoria.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 39,
    title: "Museo del Rum",
    description: "Assapora la ricca storia del rum cubano al Museo del Rum. Scopri l'arte della produzione del rum, impara il suo significato culturale e goditi le degustazioni dei pregiati rum cubani.",
    image: "/images/places/nuevos_places/Museo_Ron.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour di un giorno a L'Avana",
      "Tour al tramonto a L'Avana",
   
    ]
  }, {
    id: 40,
    title: "Palazzo dei Governatori Spagnoli",
    description: "Fai un salto indietro nel tempo al Palazzo dei Governatori Spagnoli, un palazzo storico che mostra l'architettura coloniale. Esplora le stanze e i corridoi che sussurrano storie del passato.",
    image: "/images/places/nuevos_places/Palacio_Gobernadores.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour dell'Avana + Tropicana",
      "Tour dell'Avana + Saluto di Cannone",
      "Tour di un giorno a L'Avana",
      "Tour al tramonto a L'Avana",
    ]
  }, {
    id: 41,
    title: "Palazzo della Valle",
    description: "Sperimenta la grandezza del Palazzo della Valle, un gioiello architettonico che fonde vari stili. Ammira i dettagli intricati e goditi le viste panoramiche sui paesaggi circostanti.",
    image: "/images/places/nuevos_places/Palacio_Valle.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Trinidad - Cienfuegos Tour (Optional Nicho)",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour Trinidad - Cienfuegos (Nicho Opzionale)",
      "Tour delle Tre Città: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 42,
    title: "Playa Larga",
    description: "Rilassati sulle spiagge incontaminate di Playa Larga, una bellissima spiaggia nota per la sua tranquillità e bellezza naturale. Goditi il sole, nuota e fuggi in pace al mare.",
    image: "/images/places/nuevos_places/Playa_Larga.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por la Ciénaga de Zapata",
      "Tour della Palude di Zapata",
      "Экскурсия в Циенага-де-Сапата",
      "Tour della Palude di Zapata"
    ]
  }, {
    id: 43,
    title: "Piazza Principale",
    description: "Passeggia per la storica Piazza Principale, la piazza più antica dell'Avana. Immergiti nel fascino coloniale, esplora i mercati dei libri e goditi l'atmosfera vivace.",
    image: "/images/places/nuevos_places/Plaza_Armas.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour di un giorno a L'Avana",
      "Tour al tramonto a L'Avana",
      "Tour dell'Avana + Tropicana",
      "Tour dell'Avana + Saluto di Cannone",
    
    ]
  }, {
    id: 45,
    title: "Piazza della Trinità",
    description: "Sperimenta il fascino di Piazza della Trinità, una piazza storica a Trinidad. Ammira l'architettura coloniale, esplora i negozi locali e immergiti nella ricchezza culturale della zona.",
    image: "/images/places/nuevos_places/Plaza.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Trinidad - Cienfuegos Tour (Optional Nicho)",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour Trinidad - Cienfuegos (Nicho Opzionale)",
      "Tour delle Tre Città: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 46,
    title: "Piazza San Francesco",
    description: "Scopri la bellezza di Piazza San Francesco, una piazza circondata da edifici storici. Enjoy the lively atmosphere, visit the nearby attractions, and soak in the rich history.",
    image: "/images/places/nuevos_places/San_Francisco.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour di un giorno a L'Avana",
      "Tour al tramonto a L'Avana",
      "Tour dell'Avana + Tropicana",
      "Tour dell'Avana + Saluto di Cannone",
   
    ]
  }, {
    id: 47,
    title: "Fortezza di San Severino",
    description: "Esplora l'imponente Fortezza di San Severino, una fortezza con una storia ricca. Scopri il suo ruolo nella protezione della città e goditi le viste panoramiche sui paesaggi circostanti.",
    image: "/images/places/nuevos_places/San_Seberino.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por Matanzas",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour di Matanzas"
    ]
  }, {
    id: 48,
    title: "Santa Clara",
    description: "Immergiti nella vibrante città di Santa Clara, nota per la sua storia rivoluzionaria. Esplora i punti di riferimento, scopri Che Guevara e vivi la vivace scena culturale.",
    image: "/images/places/nuevos_places/Santa_Clara.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour delle Tre Città: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 49,
    title: "Teatro Nazionale Alicia Alonso",
    description: "Sperimenta la grandezza del Teatro Nazionale Alicia Alonso, un rinomato teatro a L'Avana. Assisti agli spettacoli, ammira la bellezza architettonica e immergiti nelle arti e nella cultura.",
    image: "/images/places/nuevos_places/Teatro_Nacional_Alicia_Alonso.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour di un giorno a L'Avana",
      "Tour al tramonto a L'Avana",
      "Tour dell'Avana + Tropicana",
      "Tour dell'Avana + Saluto di Cannone",
  
    ]
  }, {
    id: 50,
    title: "Trinidad",
    description: "Scopri il sito Patrimonio dell'Umanità dell'UNESCO di Trinidad, una città ferma nel tempo. Passeggia per le strade acciottolate, ammira l'architettura coloniale e vivi la ricca storia e cultura.",
    image: "/images/places/nuevos_places/Trinidad.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Trinidad - Cienfuegos Tour (Optional Nicho)",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour Trinidad - Cienfuegos (Nicho Opzionale)",
      "Tour delle Tre Città: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 51,
    title: "Tropicana",
    description: "Sperimenta la vibrante vita notturna dell'Avana al Tropicana, un cabaret leggendario. Goditi spettacoli abbaglianti, musica vivace e il glamour del locale di intrattenimento più iconico di Cuba.",
    image: "/images/places/nuevos_places/Tropicana.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Havana Tour + Tropicana",
      "Tour dell'Avana + Tropicana"
    ]
  }, {
    id: 52,
    title: "Valle di Yumurí",
    description: "Esplora la pittoresca Valle di Yumurí, una valle lussureggiante circondata da colline e fiumi. Goditi le passeggiate nella natura, cattura viste mozzafiato e immergiti nella tranquillità del paesaggio.",
    image: "/images/places/nuevos_places/Valle_Yumuri.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por Matanzas",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour di Matanzas"
    ]
  }, {
    id: 53,
    title: "Viñales",
    description: "Fuggi nella bellezza paesaggistica di Viñales, una valle circondata da maestose colline calcaree. Scopri le fattorie di tabacco, esplora le grotte e goditi l'atmosfera rilassata della Cuba rurale.",
    image: "/images/places/nuevos_places/Viñales.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 54,
    title: "Vista di Monserrate",
    description: "Sali sulla Vista di Monserrate per godere di viste panoramiche sull'Avana. Cattura paesaggi urbani mozzafiato, goditi un'atmosfera serena e ammira la bellezza della capitale cubana dall'alto.",
    image: "/images/places/nuevos_places/Vistas_Monserrate.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por Matanzas",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour di Matanzas"
    ]
  }, {
    id: 55,
    title: "Delfinario di Varadero",
    description: "Il Delfinario di Varadero a Cuba offre spettacoli emozionanti e attività interattive che consentono ai visitatori di interagire da vicino con i delfini promuovendo al contempo la conservazione marina.",
    image: "/images/places/nuevos_places/Delfinario_Varadero.webp",
    tag: "Matanzas",
    itinerary: [
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "City Tour Varadero a ore"
    ]
  }, {
    id: 56,
    title: "Marina di Varadero",
    description: "Marina Varadero è un porto turistico situato a Varadero, Cuba, che offre servizi nautici completi e alloggi per imbarcazioni, promuovendo il turismo marittimo e la nautica da diporto.",
    image: "/images/places/nuevos_places/Marina_Varadero.webp",
    tag: "Matanzas",
    itinerary: [
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по гороdu Varadero по часам",
      "City Tour Varadero a ore"
    ]
  }, {
    id: 57,
    title: "Saluto di cannone al Castello del Morro Cabaña",
    description: "Vivi la storica cerimonia del Saluto di cannone al Castello del Morro Cabaña, un rituale notturno che risale a secoli fa, offrendo uno sguardo sul ricco passato di Cuba.",
    image: "/images/places/nuevos_places/Cañonazo.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Havana Tour + Cannon Shot",
      "Tour dell'Avana + Saluto di Cannone"
    ]
  }]
},
de: {
  nav: {
    'home': 'Startseite',
    'places': 'Orte',
    'about': 'Über uns',
    'services': 'Dienstleistungen',
    'feedback': 'Feedback',
    matanzas: 'Matanzas',
    habana: "Havanna",
    pinar: "Pinar del Río",
    central: "Zentralregion"
  },
  hero: {
    'h1': 'Klassisch',
    'h12': 'Kubanisch 52',
    'span': '',
    'p': 'Erleben Sie einen zuverlässigen und effizienten Taxidienst mit professionellen Fahrern. Wir garantieren sichere, pünktliche und komfortable Fahrten.',
    'button': 'Jetzt buchen'
  },
  prov: {
    visit: 'Besuchen',
    'h2': 'Ihr Traumurlaub beginnt bei uns',
    'p': 'Entdecken Sie kulturelle Horizonte, wo alte Traditionen auf moderne Vitalität treffen und jede Straße Sie einlädt, Teil der lebendigen Geschichte der Stadt zu werden.',
    places: [{
      name: "Pinar del Río",
      slug: 'Pinar del Río',
      desc: "Tabakfelder, Viñales-Tal, Mogotes, Cueva del Indio, San Diego Thermalquellen, Soroa, Zigarrenfabriken und kolonialer Charme.",
      img: '/images/Pinar.png',
      href: "/"
    }, {
      name: "Havanna",
      slug: 'La Habana',
      desc: "Historische Altstadt Havanna, Malecón-Promenade, Oldtimer, Morro-Festung, lebhafte Musik, Rum, Museen und pulsierende Kultur.",
      img: '/images/Havana.jpg',
      href: "/"
    }, {
      name: "Matanzas",
      slug: "Matanzas",
      desc: "Varadero Strand, San Severino Schloss, Yumurí-Tal, afro-kubanische Kultur und koloniales Erbe.",
      img: '/images/Matanzas.png',
      href: "/"
    }, {
      name: "Zentralregion",
      slug: "Región Central",
      desc: "Vereint Geschichte, traditionelle Musik, Naturparks und wunderschöne Strände.",
      img: '/images/Trinidad.png',
      href: "/"
    }]
  },
  aboutComp: {
    'h2': "Informationen zum Unternehmen",
    'pdesc': "Wir definieren Tourismus in Kuba neu, indem wir Erlebnisse durch maßgeschneiderte Touren in Oldtimern anbieten, die den Vintage-Geist der Insel perfekt einfangen. Durch die Kombination wettbewerbsfähiger Preise mit authentischer kubanischer Gastfreundschaft bieten wir einen außergewöhnlichen Service, der die wahre Essenz unserer Kultur zeigt.",
    'p': "Lassen Sie uns Ihren Besuch in eine außergewöhnliche Reise verwandeln.",
    'secT': "Pünktlichkeit",
    'secP': "Abholung pünktlich und optimierte Routen.",
    'conT': "Authentizität",
    'conP': "Geheime Orte, die nur Einheimische kennen."
  },
  about2: {
    h2: 'Wir schaffen unvergessliche Momente für Sie',
    elementos: [{
      num: '1',
      title: 'Einfache und schnelle Buchung',
      text: 'Buchen Sie in wenigen Minuten: Senden Sie uns eine WhatsApp-Nachricht mit Ihren Präferenzen.',
      active: false
    }, {
      num: '2',
      title: 'Maßgeschneiderte Reise nach Ihren Wünschen',
      text: 'Unser Team hilft Ihnen bei der Planung der perfekten Reiseroute basierend auf Ihren Präferenzen.',
      active: false
    }, {
      num: '3',
      title: 'Genießen Sie einen exklusiven Service',
      text: 'Genießen Sie einen erstklassigen Service mit erfahrenen Fahrern und persönlicher Betreuung.',
      active: true
    }]
  },
  services: {
    h2: "Genießen Sie den besten Transportservice mit uns",
    p: "Unser Team von erfahrenen Fachleuten passt sich perfekt an jeden Reisenden an und entwirft maßgeschneiderte Erlebnisse, die die Erwartungen übertreffen.",
    serv1h4: 'Ausflüge',
    serv1p: 'Entdecken Sie lebhafte Städte, Dörfer und jedes versteckte Juwel auf dem Weg',
    serv2h4: 'Privattransport',
    serv2p: 'Einfache Buchung mit unseren Premium-Fahrzeugen.',
    serv3h4: 'Transfers',
    serv3p: 'Reisen Sie komfortabel, genießen Sie reibungslose Fahrten.'
  },
  feedback: {
    h2: 'Was Kunden über uns sagen',
    p: 'Erfahren Sie, was unsere Kunden über unsere Touren zu sagen haben, während sie ihre unvergesslichen Erlebnisse und begeisterten Bewertungen teilen.',
    coment: 'Schreiben Sie uns Ihren Kommentar'
  },
  itinerary: [{
    title: "Tagestour in Havanna",
    place: ["Havana", "La Habana"],
    details: [
      "Abholzeit vom Hotel ~8:00 Uhr Ankunftszeit im Hotel ~17:00-18:00 Uhr",
      "Es dauert 1,5 bis 2 Stunden, um Havanna zu erreichen. Unterwegs halten wir an der höchsten Brücke Kubas (Bacunayagua) mit Blick auf das Yumurí-Tal und das Meer. Dort können Sie den köstlichsten Ananas-Cocktail Kubas probieren (gegen Aufpreis).",
      "Stopp in der Nähe des Morro-Schlosses, das beeindruckende Panoramablicke auf Havanna bietet. (Der Eintritt ist kostenpflichtig und optional).",
      "Anschließend machen wir einen Spaziergang entlang des Malecón, von wo aus ein zweistündiger Spaziergang durch die Altstadt von Havanna beginnt. Zu den Attraktionen gehören die Plaza de San Francisco de Asís, ein Glockenturm des alten Franziskanerklosters (kostenpflichtig), ein Rummuseum mit Verkostung (kostenpflichtiger Eintritt), die Kathedrale Unserer Lieben Frau von Kasan, der Kathedralenplatz, die Kleine Bodega, der Palast der spanischen Gouverneure, die Plaza de Armas, das Castillo de la Real Fuerza (kostenpflichtiger Eintritt), die Calle Obispo, das Hotel Ambos Mundos, die Plaza Vieja und andere.",
      "Besuch der Plaza de la Revolución, ein Spaziergang durch das Zentrum von Havanna, wo Sie das Kapitol, das Gran Teatro de La Habana, das von Hemingway erwähnte Café Floridita und andere interessante Orte finden.",
      "Wir verlassen Havanna um 15:00 Uhr.",
      "Das Mittagessen ist nicht im Ausflugspreis enthalten (geschätzte Kosten für das Mittagessen betragen 15-20 €)."
    ]
  }, {
    title: "Sonnenuntergangstour in Havanna",
    place: ["Havana", "La Habana"],
    details: [
      "Abholung von Ihrer Unterkunft oder Ihrem Hotel um 10:00 Uhr in Varadero.",
      "Etwa zwei Stunden Fahrt nach Havanna entlang der Nordküste.",
      "Stopp an der höchsten Brücke Kubas (Bacunayagua), 112 Meter hoch, wo Sie den besten Ananas-Cocktail Kubas genießen können.",
      "Fahrt nach Havanna.",
      "Spaziergang durch die Altstadt von Havanna, die 1982 zum UNESCO-Weltkulturerbe erklärt wurde.",
      "Besuch der Plaza de la Catedral.",
      "Besuch der Plaza del Brazo.",
      "Besuch der Plaza Vieja.",
      "Besuch der Plaza San Francisco de Asís.",
      "Stopp an der ältesten Festung Kubas, dem Castillo del Morro.",
      "Besuch der Christusstatue von Havanna.",
      "Hotel Nacional.",
      "Besuch der berühmten Hemingway-Bars La Bodeguita del Medio und El Floridita.",
      "Mittagszeit (Preise variieren je nach Wahl des Kunden, nicht inbegriffen).",
      "Route entlang des Malecón und des Neuen Havanna.",
      "Stopp an der Plaza de la Revolución.",
      "Zeit für einen Spaziergang im Stadtzentrum, wo Sie das Kapitolgebäude, das Gran Teatro de La Habana und den Parque Central sehen können.",
      "Optionaler Stopp im Rummuseum.",
      "Besuch des Tabakladens.",
      "Am Abend besuchen wir die besten Orte, um den Sonnenuntergang zu genießen, entweder vom Malecón in Havanna oder vom Castillo del Morro aus.",
      "Die Route endet bei Sonnenuntergang.",
      "Rückkehr nach Varadero nach Sonnenuntergang.",
      "Optionale Dinge, die Sie dieser Tour hinzufügen können: 25 USD/EURO für eine Stunde in einem offenen Oldtimer, sobald Sie in Havanna sind."
    ]
  }, {
    title: "Havanna Tour + Kanonenschuss",
    place: ["Havana", "La Habana"],
    details: [
      "Abholung von Ihrer Unterkunft oder Ihrem Hotel um 10:00 Uhr.",
      "Spaziergang durch die Altstadt von Havanna, die 1982 zum UNESCO-Weltkulturerbe erklärt wurde. Genießen Sie die freie Zeit und wir empfehlen einen Besuch des repräsentativen Kunsthandwerkmarktes, der die kulturelle Identität der Menschen darstellt.",
      "Besuch der Plaza de San Francisco de Asís, voller Kopfsteinpflaster, gelegen vor den Toren Havannas.",
      "Stopp an der Plaza de la Catedral, einem der schönsten Orte in der Altstadt von Havanna.",
      "Stopp auf der kürzlich restaurierten Plaza Vieja, ein Muss für Geschichtsinteressierte.",
      "Besuch der Plaza de Armas, dem ältesten Platz Havannas.",
      "Stopp am Palast der Generalkapitäne, einem der wichtigsten architektonischen Werke Kubas.",
      "Kurzer Stopp am Hotel Ambos Mundos, einem Gebäude im eklektischen Stil in der Altstadt von Havanna.",
      "Besuch von zwei der berühmtesten Bars Havannas, La Bodeguita del Medio und El Floridita, um die köstlichsten Cocktails zu genießen.",
      "Mittagessen, das vom Guide in den spektakulärsten Restaurants Havannas empfohlen wird, wo Sie unsere typisch kubanische Küche probieren können.",
      "Fahrt mit einem Oldtimer entlang der Avenida Malecón mit einem schönen Blick auf die Bucht von Havanna.",
      "Spaziergang durch das Neue Havanna, exklusiver Besuch.",
      "Panoramische Fahrt durch die Viertel Vedado und Miramar.",
      "Stopp an der Plaza de la Revolución, einer der größten der Welt und Heimat eines der interessantesten Museen Kubas.",
      "Panoramischer Stopp am Gebäude des Kapitols, einem der emblematischsten Orte Havannas.",
      "Stopp am Parque Central José Martí, eine große Attraktion für Reisende aus aller Welt, wo die Geschichte prächtiger Gebäude und die Natur zusammenkommen.",
      "Besuch des Gran Teatro de La Habana Alicia Alonso, einem prächtigen Gebäude, in dem das Nationalballett und die Oper von Kuba beheimatet sind.",
      "Panoramische Besichtigung der Morro-Festung, einer wichtigen Festung, die im 16. Jahrhundert in Kuba erbaut wurde.",
      "Panoramische Besichtigung der Christusstatue von Havanna, einem monumentalen Skulpturenwerk von etwa 20 Metern Höhe.",
      "Abendessen in empfohlenen Restaurants in Havanna nach Ihrer Wahl. Wählen Sie zwischen Garnelen oder Huhn, um die authentische kubanische Küche zu genießen.",
      "Um 21:00 Uhr können Sie eine der kubanischen Traditionen genießen: den 'Neun-Uhr-Kanonenschuss' während der Führung durch die Festung San Carlos de la Cabaña.",
      "Rückfahrt zu Ihrer Unterkunft in einem Oldtimer mit maximalem Komfort und Sicherheit."
    ]
  }, {
    title: "Havanna Tour + Tropicana",
    place: ["Havana", "La Habana"],
    details: [
      "Abholung von Ihrer Unterkunft oder Ihrem Hotel um 10:30 Uhr.",
      "Etwa zwei Stunden Fahrt nach Havanna entlang der Atlantikküste.",
      "Stopp an der höchsten Brücke Kubas «Bacunayagua», wo Sie auch den besten Ananas-Cocktail Kubas genießen können.",
      "Fahrt nach Havanna.",
      "Spaziergang durch die Altstadt von Havanna, die 1982 zum UNESCO-Weltkulturerbe erklärt wurde.",
      "Besuch der Plaza de la Catedral.",
      "Besuch der Plaza de Arma.",
      "Besuch der Plaza Vieja.",
      "Besuch der Plaza San Francisco de Asís.",
      "Stopp an der ältesten Festung Kubas, dem Castillo del Morro.",
      "Besuch der Christusstatue von Havanna.",
      "Besuch der berühmten Hemingway-Bars La Bodeguita del Medio und El Floridita.",
      "Mittagszeit (Preise variieren je nach Wahl des Kunden, nicht inbegriffen).",
      "Die Route entlang des Malecón und des Neuen Havanna.",
      "Stopp an der Plaza de la Revolución.",
      "Zeit für einen Spaziergang ins Zentrum, wo Sie das Kapitolgebäude, das Gran Teatro de La Habana und den Parque Central sehen können.",
      "Optionaler Stopp im Rummuseum.",
      "Besuch des Tabakladens.",
      "Besuch des Tropicana (der Gast zahlt den Eintritt direkt im Cabaret).",
      "Nach der Show Rückfahrt nach Varadero."
    ]
  }, {
    title: "Tour durch das Zapata-Sumpfgebiet",
    place: "Matanzas",
    details: [
      "Abfahrt vom Hotel um 8 Uhr morgens.",
      "Wir durchqueren die Insel von Nord nach Süd. Die Fahrt dauert etwa 2 Stunden.",
      "Unterwegs passieren wir die Städte Santa Marta und Cardenas, die Stadt Jovellanos, in der viele Nachkommen afrikanischer Sklaven leben, eine Genossenschaft namens Vladimir Ilich Lenin, das Dorf Australien, Zuckerrohrplantagen, Bananen, Zitrusfrüchte, Mango und andere tropische Kulturen.",
      "Erster Halt auf einer Mini-Farm mit typisch kubanischen Pflanzen und Tieren. Gegen Aufpreis können Sie Zuckerrohrsaft trinken und auf einem Zebu-Bullen reiten.",
      "Krokodilfarm (5 € pro Person).",
      "Besuch der 'Indianer': Wir steigen in Motorboote und fahren zu einer Insel mit einigen Hütten und indischen Skulpturen. Dieses Indianerdorf kostet 12 € pro Person und dauert etwa 2 Stunden oder länger.",
      "Mittagessen inklusive mit 4 Fleischsorten wie Krokodil, Krabbe, Hummer, Garnelen, Fisch, Wild, Schnecken oder Tintenfisch für 15-20 € pro Person. Ebenfalls enthalten sind Reis mit Gemüse, Salat und Getränke.",
      "Karibisches Meer: Wir genießen das Karibische Meer in der Schweinebucht mit klarem Wasser, besonders in der Nähe der Korallen.",
      "Schnorcheln: Schnorchelausrüstung kann für 5 € pro Stunde gemietet werden. Sie können Ihre eigene Ausrüstung mitbringen. Es wird empfohlen, Brotkrümel vom Hotel mitzubringen, um die Fische und andere Meeresbewohner zu füttern.",
      "Tauchen: Kostet 25 € für 40 Minuten für erfahrene Taucher. Anfänger zahlen einen Aufpreis von 10 € für eine Einführung. Das Tauchgebiet ist einfach und hat versunkene Schiffe in 25-30 Metern Tiefe.",
      "Cenotes: Wir sehen Cenotes oder Dolinen in den Dschungeln rund um die Schweinebucht, wo Sie schwimmen können. Auf Wunsch können wir zum Casa del Colibrí gehen, um Vögel zu beobachten (1 $).",
      "Optionaler Stopp zum Schwimmen am Sandstrand im Dorf Playa Larga.",
      "Geschichte: Wir besuchen wichtige historische Stätten im Zusammenhang mit dem Kalten Krieg in der Schweinebucht, wo 1961 eine Pro-Castro-Invasion stattfand.",
      "Rückkehr nach Varadero um 16:00 Uhr."
    ]
  }, {
    title: "Tour durch Matanzas",
    place: "Matanzas",
    details: [
      "Abfahrt vom Hotel um 9:00 Uhr.",
      "Besuch der Bellamar-Höhlen (Eintritt 5 $): Wir erkunden die beeindruckenden Bellamar-Höhlen, ein Höhlensystem, das einzigartige und spektakuläre Felsformationen bietet. Wir entdecken die reiche Geologie und Geschichte dieses faszinierenden Ortes.",
      "Tour durch das koloniale historische Zentrum: Wir tauchen in die Geschichte von Matanzas ein, indem wir sein koloniales Zentrum erkunden. Wir besuchen die berühmte Französische Apotheke, ein ikonisches architektonisches Wahrzeichen, das den französischen Einfluss in der Region widerspiegelt.",
      "Monserrat Aussichtspunkt: Wir genießen einen Panoramablick vom Monserrat Aussichtspunkt, der eine beeindruckende Perspektive auf die Stadt und ihre Umgebung bietet. Ein perfekter Ort, um unvergessliche Erinnerungen festzuhalten.",
      "Die Einsiedelei: Wir besuchen die Einsiedelei, einen heiligen Ort, der Zeuge bedeutender historischer Ereignisse war. Wir erfahren mehr über die kulturelle und religiöse Bedeutung dieser Stätte.",
      "San Severino Schloss: Wir erkunden das San Severino Schloss, eine historische Festung, die eine entscheidende Rolle bei der Verteidigung der Stadt spielte. Wir entdecken die militärische Architektur und die Geschichte, die dieses imposante Schloss umgibt.",
      "Saturn-Höhle (Eintritt 5 $): Wir beenden unsere Tour mit der Erkundung der Saturn-Höhle, einer unterirdischen Cenote mit kristallklarem Wasser. Besucher haben die Möglichkeit zu schwimmen und die einzigartige natürliche Schönheit dieser geologischen Formation zu genießen.",
      "Rückkehr zum Hotel gegen 14:00 Uhr."
    ]
  }, {
    title: "Tagesausflug nach Varadero von Havanna",
    place: "Matanzas",
    details: [
      "Abholung im Hotel oder B&B mit einem Oldtimer um 8:00 Uhr.",
      "Fahrt nach Varadero entlang der Küste mit wunderschönen Landschaften.",
      "Optionaler Stopp an der Bacunayagua-Brücke: Wir machen einen Stopp an der höchsten Brücke Kubas mit 112 m Höhe. Von diesem Aussichtspunkt aus können die Besucher herrliche Panoramablicke genießen und den besten Ananas-Cocktail Kubas probieren.",
      "Fahrt zum Coral Beach zum Schnorcheln (Eintritt nicht inbegriffen, 10 USD pro Person): Wir erkunden das kristallklare Wasser von Coral Beach, ideal zum Schnorcheln und Genießen der Unterwasserwelt.",
      "Besuch der offenen Saturn-Höhle (Eintritt nicht inbegriffen, 5 USD pro Person): Wir entdecken die Schönheit der Saturn-Höhle, einer unterirdischen Cenote mit kristallklarem Wasser. Besucher haben die Möglichkeit zu schwimmen und die einzigartige natürliche Schönheit dieser geologischen Formation zu genießen.",
      "Weiterfahrt nach Varadero.",
      "Besuch von La casa Alcapone in Varadero: Wir erkunden La Casa Alcapone, das einen Einblick in die Geschichte und den Luxus der Ära bietet.",
      "Besuch des Marktes von Varadero: Tauchen Sie in die lokale Kultur ein, indem Sie den Markt von Varadero erkunden, wo Sie lokales Kunsthandwerk und Produkte finden.",
      "Besuch des Josone Parks: Genießen Sie die natürliche Schönheit des Josone Parks, einer Oase mitten in Varadero mit üppigen Gärten und ruhigen Seen.",
      "Besuch der Mansion Dupon: Wir erkunden die elegante Mansion Dupon, ein Zeugnis der historischen Architektur von Varadero.",
      "Freizeit am Strand: Besucher haben Zeit, sich an den schönen Stränden von Varadero zu entspannen.",
      "Die Tour endet gegen 16:30 Uhr und kehrt nach Havanna zurück."
    ]
  }, {
    title: "Tour Trinidad - Cienfuegos (Optional Nicho)",
   place: ["Central Region", "Región Central"],
    details: [
      "Abholung von Ihrer Unterkunft oder Ihrem Hotel um 06:30 Uhr.",
      "Dreistündige Fahrt durch die Landschaft nach Cienfuegos.",
      "Ausflug in die Stadt Cienfuegos.",
      "Besuch des Gebiets Punta Gorda, des Palacio del Valle und des Hotels Jagua.",
      "Optionaler Stopp an den El Nicho Wasserfällen (dieser hat zusätzliche Kosten von 40 Euro für den Transport, um auf den Berg zu fahren).",
      "Hinweis: Wenn wir El Nicho besuchen, haben wir weniger Zeit, um andere Bereiche zu verbringen.",
      "Fahrt nach Trinidad, um den Blick auf das Karibische Meer zu genießen.",
      "Mittagspause in Trinidad (nicht inbegriffen).",
      "Spaziergang durch das historische Zentrum wie Plaza Mayor, La Canchanchara, Museen usw.",
      "Freizeit für weitere Spaziergänge oder Besuch des Kunsthandwerkmarktes, wenn die Zeit es erlaubt.",
      "Rückkehr zum Hotel gegen 19:00 Uhr.",
      "Diese Tour beinhaltet ein Oldtimer mit Klimaanlage und einen Reiseleiter."
    ]
  }, {
    title: "Drei-Städte-Tour: Trinidad - Cienfuegos - Santa Clara",
   place: ["Central Region", "Región Central"],
    details: [
      "Die Reise kann auch an zwei Tagen durchgeführt werden.",
      "Abholung von Ihrer Unterkunft oder Ihrem Hotel um 06:00 Uhr.",
      "Dreistündige Fahrt durch die Landschaft nach Santa Clara.",
      "Stopp am Mausoleum von Ernesto Che Guevara und am Revolutionsplatz.",
      "Stopp im Parque Vidal und Stadtrundfahrt.",
      "Stopp am Zug.",
      "Optionaler Stopp an den El Nicho Wasserfällen (dieser hat zusätzliche Kosten von 40 Euro für den Transport, um auf den Berg zu fahren).",
      "Hinweis: Wenn wir El Nicho besuchen, haben wir weniger Zeit, um andere Bereiche zu verbringen. Nicht verfügbar bei der Tagestour.",
      "Fahrt nach Trinidad, um den Blick auf das Karibische Meer zu genießen.",
      "Mittagspause in Trinidad (nicht inbegriffen).",
      "Spaziergang durch das historische Zentrum wie Plaza Mayor, La Canchanchara, Museen usw.",
      "Freizeit für weitere Spaziergänge oder Besuch des Kunsthandwerkmarktes, wenn die Zeit es erlaubt.",
      "Abfahrt nach Cienfuegos.",
      "Ausflug in die Stadt Cienfuegos.",
      "Besuch des Gebiets Punta Gorda, des Palacio del Valle und des Hotels Jagua.",
      "Rückkehr zum Hotel gegen 21:00 Uhr."
    ]
  }, {
    title: "Tour Viñales - Soroa",
    place: "Pinar del Río",
    details: [
      "Abholung im Hotel oder Unterkunft um 8:30 Uhr.",
      "Durchqueren Sie die Provinz Havanna, um nach Soroa weiterzufahren.",
      "Besuchen Sie Soroa, wo Sie am Wasserfall schwimmen und den Orchideengarten besuchen können (Sie müssen an beiden Orten Eintritt zahlen, 3-5 USD pro Person).",
      "Hinweis: Wenn Sie von Varadero kommen und zu viel Zeit in Soroa verbringen, haben Sie nicht genug Zeit, um Viñales zu genießen.",
      "Fortsetzung der Tour zum Viñales-Tal.",
      "Stopp am Aussichtspunkt 'Las Jazmines' (ein ausgezeichneter Ort zum Fotografieren).",
      "Besuch des Bauernhauses, um kubanischen Tabak zu sehen und kennenzulernen.",
      "Besuch der Stadt Viñales.",
      "Besuch der Cueva del Indio (Eintritt nicht inbegriffen, 5 USD pro Person).",
      "Besuch des Mural de la Prehistoria.",
      "Genießen Sie einen Ausritt (optional, nicht inbegriffen, 10-15 USD pro Person).",
      "Rückfahrt nach Havanna oder Varadero."
    ]
  }, {
    title: "Stadtrundfahrt Varadero nach Stunden",
    place: ["Matanzas"],
    details: [
      "Erkunden Sie jede Ecke der Stadt Varadero in einem offenen Oldtimer pro Stunde. Der Preis beträgt 40 USD/Stunde.",
      "Casa de Todos",
      "Handwerksmesse",
      "Fotografischer Aussichtspunkt",
      "Josones Park",
      "Boulevard von Varadero",
      "Villa Xanadu",
      "Delfinarium",
      "Marina Varadero"
    ]
  }],
  itinerarySec: {
    h4: 'Reiseroute'
  },
  places: [{
    id: 1,
    title: "Schloss im Himmel",
    description: "Das Schloss im Himmel bietet einen atemberaubenden Panoramablick auf Pinar Del Río. Im 19. Jahrhundert als Beobachtungsposten erbaut, wurde dieser historische Ort restauriert, um Besuchern die Möglichkeit zu geben, seine reiche Geschichte zu genießen.",
    image: "/images/places/Castillo_Cielo.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 2,
    title: "Bacunayagua Aussichtspunkt",
    description: "Der Bacunayagua Aussichtspunkt, erbaut in den 60er Jahren, ist ein Panoramablick, der atemberaubende Ausblicke auf das Yumurí-Tal bietet. Dieser ikonische Ort hat auch eine interessante Geschichte im Zusammenhang mit der touristischen Entwicklung der Region.",
    image: "/images/places/Mirador_Bacunayagua.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Tagesausflug nach Varadero von Havanna",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "Tagesausflug nach Varadero von Havanna",
      "Tagestour in Havanna",
      "Sonnenuntergangstour in Havanna",
      "Havanna Tour + Tropicana",
      "Havanna Tour + Kanonenschuss"
    ]
  }, {
    id: 5,
    title: "Orchideengarten",
    description: "Der Orchideengarten in Pinar Del Río ist ein florales Paradies, das im 20. Jahrhundert angelegt wurde. Mit einer beeindruckenden Sammlung einheimischer und internationaler Orchideen bietet dieser Ort ein einzigartiges Erlebnis für Botanik-Enthusiasten.",
    image: "/images/places/Orquideario.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 6,
    title: "Höhle des Indianers",
    description: "Die Höhle des Indianers, entdeckt im 19. Jahrhundert, ist ein faszinierendes Höhlensystem mit einzigartigen geologischen Formationen. Im Laufe der Jahre war sie Schauplatz archäologischer Entdeckungen, die die Präsenz alter Kulturen in der Region enthüllen.",
    image: "/images/places/nuevos_places/Cueva_Indio.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 7,
    title: "Floridita",
    description: "Das Floridita ist eine historische Bar, bekannt für ihre Verbindung zu Ernest Hemingway. Gegründet zu Beginn des 19. Jahrhunderts, bietet dieser ikonische Ort eine Mischung aus Geschichte, traditionellen Cocktails, Live-Musik und einer lebhaften Atmosphäre.",
    image: "/images/places/Floridita.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Havanna Tour + Tropicana",
      "Havanna Tour + Kanonenschuss",
      "Tagestour in Havanna",
      "Sonnenuntergangstour in Havanna",

    ]
  }, {
    id: 8,
    title: "Bodeguita del Medio",
    description: "Die Bodeguita del Medio, gegründet im 20. Jahrhundert, ist eine historische Bar und ein Restaurant. Bekannt für ihre authentischen Mojitos, afro-kubanische Musik und die lebhafte Atmosphäre, ist sie ein Muss für alle, die kubanische Kultur suchen.",
    image: "/images/places/Bodeguita.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Havanna Tour + Tropicana",
      "Havanna Tour + Kanonenschuss",
      "Tagestour in Havanna",
      "Sonnenuntergangstour in Havanna",

    ]
  }, {
    id: 9,
    title: "Ritter von Paris",
    description: "Der Ritter von Paris ist eine historische Statue in Havanna, die eine einzigartige Figur aus der Vergangenheit der Stadt darstellt. Dieses Wahrzeichen bietet Einblicke in die lokale Geschichte, nahegelegene Plätze, urbane Kunst und Architekturfotografie.",
    image: "/images/places/Caballero_Paris.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Havanna Tour + Tropicana",
      "Havanna Tour + Kanonenschuss",
      "Tagestour in Havanna",
      "Sonnenuntergangstour in Havanna",

    ]
  }, {
    id: 10,
    title: "Christus von Havanna",
    description: "Der Christus von Havanna ist ein religiöses Denkmal, das Panoramablicke bietet. Mitte des 20. Jahrhunderts erbaut, dient er als Symbol der Spiritualität und bietet Besuchern ruhige Spaziergänge, spirituelle Veranstaltungen und Einblicke in die katholische Kultur.",
    image: "/images/places/Cristo.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tagestour in Havanna",
      "Sonnenuntergangstour in Havanna",
      "Havanna Tour + Tropicana",
      "Havanna Tour + Kanonenschuss",

    ]
  }, {
    id: 11,
    title: "Das Kapitol",
    description: "Das Kapitol, ein ikonisches neoklassizistisches Gebäude, steht als politisches Wahrzeichen in Havanna. Anfang des 20. Jahrhunderts erbaut, bietet es einen Einblick in die politische Geschichte, geführte Touren, kulturelle Veranstaltungen und Panoramablicke von seiner Kuppel.",
    image: "/images/places/Capitolio.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Havanna Tour + Tropicana",
      "Havanna Tour + Kanonenschuss",
      "Tagestour in Havanna",
      "Sonnenuntergangstour in Havanna",

    ]
  }, {
    id: 12,
    title: "Platz der Revolution",
    description: "Der Platz der Revolution in Havanna ist ein ikonischer Platz mit revolutionären Monumenten. Als Mittelpunkt für öffentliche Veranstaltungen zeigt er politische Kunst, historische Reden und eine zentrale Lage für Versammlungen.",
    image: "/images/places/Plaza_Rev.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tagestour in Havanna",
      "Sonnenuntergangstour in Havanna",
      "Havanna Tour + Tropicana",
      "Havanna Tour + Kanonenschuss",

    ]
  }, {
    id: 13,
    title: "Varadero",
    description: "Varadero ist ein bekannter Badeort in Matanzas, der Besucher mit seinen unberührten Stränden und seinem lebhaften Nachtleben anzieht. Anfang des 20. Jahrhunderts gegründet, bietet er Wassersport, Entspannung am Strand und kulturelle Erlebnisse.",
    image: "/images/places/Varadero.webp",
    tag: "Matanzas",
    itinerary: [
      "Jeep Safari",
      "Excursión de un día a Varadero desde La Habana",
      "Tagesausflug nach Varadero von Havanna",
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Tagesausflug nach Varadero von Havanna",
      "Stadtrundfahrt Varadero nach Stunden"
    ]
  }, {
    id: 14,
    title: "Freiheitspark",
    description: "Der Freiheitspark in Matanzas ist eine grüne Oase mit historischer Vergangenheit. Im 20. Jahrhundert gegründet, dient er als Erholungsgebiet mit Grünflächen, historischen Denkmälern und kulturellen Veranstaltungen.",
    image: "/images/places/Parque_Libertad.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursion de un día a Varadero desde La Habana",
      "Tour por Matanzas",
      "Tagesausflug nach Varadero von Havanna",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tagesausflug nach Varadero von Havanna",
      "Tour durch Matanzas"
    ]
  }, {
    id: 15,
    title: "Bellamar-Höhle",
    description: "Die Bellamar-Höhle, entdeckt im 19. Jahrhundert, ist ein faszinierendes Höhlensystem mit einzigartigen geologischen Formationen. Im Laufe der Jahre war sie Schauplatz archäologischer Entdeckungen, die die Präsenz alter Kulturen in der Region enthüllen.",
    image: "/images/places/Bellamar_Cave.webp",
    tag: "Matanzas",
    itinerary: [
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour por Matanzas",
      "Tour durch Matanzas"
    ]
  }, {
    id: 16,
    title: "Haus von Al Capone",
    description: "Das Haus von Al Capone, erbaut in den 1920er Jahren, ist ein stummer Zeuge der Prohibitionsära. Dieser historische Ort bietet einen einzigartigen Einblick in das Leben des berühmten Gangsters und seinen Einfluss in der Region Matanzas während dieser turbulenten Jahre.",
    image: "/images/places/Casa_de_Al.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Tagesausflug nach Varadero von Havanna",
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Tagesausflug nach Varadero von Havanna",
      "Stadtrundfahrt Varadero nach Stunden"
    ]
  }, {
    id: 17,
    title: "Saturn-Höhle",
    description: "Die Saturn-Höhle, bekannt für ihren beeindruckenden unterirdischen Naturpool, hat eine Geschichte, die bis in die vorkolumbianische Zeit zurückreicht. Von den einheimischen Taíno genutzt, war die Höhle über Jahrhunderte ein heiliger Ort und Zufluchtsort.",
    image: "/images/places/Cueva_Saturno.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Tagesausflug nach Varadero von Havanna",
      "Jeep Safari",
      "Tagesausflug nach Varadero von Havanna"
    ]
  }, {
    id: 18,
    title: "Guama",
    description: "Guama ist ein rekonstruiertes Taíno-Dorf in der Region Matanzas. Dieser einzigartige Ort bietet Besuchern ein immersives Erlebnis der indigenen Kultur mit authentischen Nachbildungen von Taíno-Behausungen und Aktivitäten, die das reiche Erbe der Ureinwohner der Insel hervorheben.",
    image: "/images/places/Guama.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por la Ciénaga de Zapata",
      "Tour durch das Zapata-Sumpfgebiet",
      "Экскурсия в Циенага-де-Сапата",
      "Tour durch das Zapata-Sumpfgebiet"
    ]
  }, {
    id: 19,
    title: "Mansion Dupon",
    description: "Die Mansion Dupón, erbaut Ende des 19. Jahrhunderts, ist ein außergewöhnliches Beispiel kolonialer Architektur in Matanzas. Diese majestätische Residenz war Zeuge historischer und kultureller Ereignisse im Laufe der Jahre und ist nun für die Öffentlichkeit zugänglich, um ihre reiche Geschichte zu teilen.",
    image: "/images/places/Mansion_Dupon.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Tagesausflug nach Varadero von Havanna",
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Tagesausflug nach Varadero von Havanna",
      "Stadtrundfahrt Varadero nach Stunden"
    ]
  }, {
    id: 20,
    title: "Soroa",
    description: "Soroa, bekannt als der 'Regenbogen Kubas', ist berühmt für seinen Botanischen Garten und die Wasserfälle. Im 19. Jahrhundert gegründet, ist das Gebiet ein Naturparadies, das seit Generationen Flora- und Fauna-Enthusiasten aus aller Welt anzieht.",
    image: "/images/places/Pinar_Cascada.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 21,
    title: "Pharmazeutisches Museum",
    description: "Das Pharmazeutische Museum in Matanzas, eröffnet zu Beginn des 20. Jahrhunderts, ist ein Zeugnis der Entwicklung der Pharmakologie in der Region. Es stellt eine faszinierende Sammlung antiker medizinischer Instrumente aus und bietet Besuchern einen einzigartigen Einblick in die Geschichte der Medizin.",
    image: "/images/places/Museo_Farmaceutico.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por Matanzas",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour durch Matanzas"
    ]
  }, {
    id: 22,
    title: "Stadt Matanzas",
    description: "Die Stadt Matanzas, auch bekannt als das 'Athen Kubas', hat eine reiche Geschichte, die von der Kolonialzeit bis in die Gegenwart reicht. Ihre einzigartige Architektur, die charmanten Plätze und kulturellen Veranstaltungen machen diese Stadt zu einem Muss für Geschichts- und Kulturinteressierte.",
    image: "/images/places/plaza_mtz.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursion de un día a Varadero desde La Habana",
      "Tour por Matanzas",
      "Tagesausflug nach Varadero von Havanna",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tagesausflug nach Varadero von Havanna",
      "Tour durch Matanzas"
    ]
  }, {
    id: 23,
    title: "The Beatles",
    description: "The Beatles in Matanzas ist eine lebhafte Hommage an die ikonische Rockband. Dieser Ort bietet ein einzigartiges musikalisches Erlebnis mit Ausstellungen, Themenveranstaltungen und einer Atmosphäre, die Besucher in die aufregende Ära der Beatlemania entführt.",
    image: "/images/places/the_beatles.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Tagesausflug nach Varadero von Havanna",
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Tagesausflug nach Varadero von Havanna",
      "Stadtrundfahrt Varadero nach Stunden"
    ]
  }, {
    id: 27,
    title: "Castillo de la Real Fuerza",
    description: "Besuchen Sie das historische Castillo de la Real Fuerza, eine Festung, die einst Havanna vor Piratenangriffen schützte. Erkunden Sie ihre geschichtsträchtige Vergangenheit und genießen Sie den Panoramablick auf die Stadt.",
    image: "/images/places/nuevos_places/Castillo_Real_Fuerza.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Havanna Tour + Tropicana",
      "Havanna Tour + Kanonenschuss",
      "Tagestour in Havanna",
      "Sonnenuntergangstour in Havanna",

    ]
  }, {
    id: 28,
    title: "Kathedrale Unserer Lieben Frau von Kasan",
    description: "Bewundern Sie die architektonische Schönheit der Kathedrale Unserer Lieben Frau von Kasan, einer Kathedrale, die einen Mix aus verschiedenen Stilen zeigt. Entdecken Sie ihre religiöse und kulturelle Bedeutung.",
    image: "/images/places/nuevos_places/Catedral_Senora_Kazan.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "One day tour in Havana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tagestour in Havanna",

    ]
  }, {
    id: 29,
    title: "Cienfuegos",
    description: "Erkunden Sie die malerische Stadt Cienfuegos, bekannt für ihren französischen Einfluss und ihre wunderschöne Uferpromenade. Tauchen Sie ein in die lokale Kunst und Kultur und die einladende Atmosphäre.",
    image: "/images/places/nuevos_places/Cienfuegos.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Trinidad - Cienfuegos Tour (Optional Nicho)",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour Trinidad - Cienfuegos (Optional Nicho)",
      "Drei-Städte-Tour: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 30,
    title: "Krokodilfarm",
    description: "Besuchen Sie die Krokodilfarm und beobachten Sie diese faszinierenden Reptilien in ihrem natürlichen Lebensraum. Erfahren Sie mehr über die Bemühungen zur Krokodilhaltung und genießen Sie ein einzigartiges Erlebnis mit Wildtieren.",
    image: "/images/places/nuevos_places/Criadero_Cocodrilos.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por la Ciénaga de Zapata",
      "Tour durch das Zapata-Sumpfgebiet",
      "Экскурсия в Циенага-де-Сапата",
      "Tour durch das Zapata-Sumpfgebiet"
    ]
  }, {
    id: 32,
    title: "Kirche der Heiligen Dreifaltigkeit",
    description: "Besuchen Sie die Kirche der Heiligen Dreifaltigkeit, eine historische Kirche in Trinidad. Bewundern Sie ihre Architektur und tauchen Sie ein in das religiöse und kulturelle Erbe dieser charmanten kubanischen Stadt.",
    image: "/images/places/nuevos_places/Iglesia_Trinidad.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Trinidad - Cienfuegos Tour (Optional Nicho)",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour Trinidad - Cienfuegos (Optional Nicho)",
      "Drei-Städte-Tour: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 33,
    title: "Josone Park",
    description: "Entspannen Sie sich in der üppigen Umgebung des Josone Parks, einem wunderschönen Park mit Gärten, Seen und Erholungsgebieten. Genießen Sie eine ruhige Flucht aus der Hektik des Alltags.",
    image: "/images/places/nuevos_places/Josone.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Tagesausflug nach Varadero von Havanna",
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Tagesausflug nach Varadero von Havanna",
      "Stadtrundfahrt Varadero nach Stunden"
    ]
  }, {
    id: 34,
    title: "Monserrate",
    description: "Erklimmen Sie den Gipfel des Monserrate und genießen Sie atemberaubende Ausblicke auf die umliegenden Landschaften. Dieser Panoramablick bietet eine einzigartige Perspektive auf die Stadt und ihre malerische Umgebung.",
    image: "/images/places/nuevos_places/Monserrate.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por Matanzas",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour durch Matanzas"
    ]
  }, {
    id: 35,
    title: "Denkmal für Ernesto Che Guevara",
    description: "Huldigen Sie dem ikonischen Revolutionsführer am Denkmal für Ernesto Che Guevara. Erkunden Sie die Gedenkstätte und erfahren Sie mehr über das Leben und Erbe von Che Guevara.",
    image: "/images/places/nuevos_places/Monumento_Ernesto_Che_Guevara.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Drei-Städte-Tour: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 36,
    title: "Denkmal für den Angriff auf den Panzerzug",
    description: "Besuchen Sie das Denkmal für den Angriff auf den Panzerzug, das an ein historisches Ereignis während der kubanischen Revolution erinnert. Erfahren Sie mehr über den Mut und die Bedeutung dieses entscheidenden Moments.",
    image: "/images/places/nuevos_places/Monumento_Tren_Blindado.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Drei-Städte-Tour: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 37,
    title: "Mural der Vorgeschichte",
    description: "Bewundern Sie das Mural der Vorgeschichte, ein kolossales Freilichtmural, das die evolutionäre Geschichte des Lebens auf der Erde darstellt. Erkunden Sie das lebendige Kunstwerk inmitten einer natürlichen Kulisse.",
    image: "/images/places/nuevos_places/Mural_Prehistoria.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 39,
    title: "Rummuseum",
    description: "Erleben Sie die reiche Geschichte des kubanischen Rums im Rummuseum. Entdecken Sie die Kunst der Rumherstellung, lernen Sie seine kulturelle Bedeutung kennen und genießen Sie Verkostungen der erlesenen kubanischen Rumsorten.",
    image: "/images/places/nuevos_places/Museo_Ron.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tagestour in Havanna",
      "Sonnenuntergangstour in Havanna",

    ]
  }, {
    id: 40,
    title: "Palast der spanischen Gouverneure",
    description: "Machen Sie eine Zeitreise im Palast der spanischen Gouverneure, einem historischen Palast, der koloniale Architektur zeigt. Erkunden Sie die Räume und Korridore, die Geschichten aus der Vergangenheit flüstern.",
    image: "/images/places/nuevos_places/Palacio_Gobernadores.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Havanna Tour + Tropicana",
      "Havanna Tour + Kanonenschuss",
      "Tagestour in Havanna",
      "Sonnenuntergangstour in Havanna",
    ]
  }, {
    id: 41,
    title: "Palast des Tals",
    description: "Erleben Sie die Pracht des Palastes des Tals, eines architektonischen Juwels, das verschiedene Stile vereint. Bewundern Sie die aufwendigen Details und genießen Sie den Panoramablick auf die umliegenden Landschaften.",
    image: "/images/places/nuevos_places/Palacio_Valle.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Trinidad - Cienfuegos Tour (Optional Nicho)",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour Trinidad - Cienfuegos (Optional Nicho)",
      "Drei-Städte-Tour: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 42,
    title: "Playa Larga",
    description: "Entspannen Sie sich an den unberührten Stränden von Playa Larga, einem wunderschönen Strand, der für seine Ruhe und natürliche Schönheit bekannt ist. Genießen Sie die Sonne, schwimmen Sie und entfliehen Sie in Frieden ans Meer.",
    image: "/images/places/nuevos_places/Playa_Larga.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por la Ciénaga de Zapata",
      "Tour durch das Zapata-Sumpfgebiet",
      "Экскурсия в Циенага-де-Сапата",
      "Tour durch das Zapata-Sumpfgebiet"
    ]
  }, {
    id: 43,
    title: "Hauptplatz",
    description: "Schlendern Sie über den historischen Hauptplatz, den ältesten Platz Havannas. Tauchen Sie ein in den kolonialen Charme, erkunden Sie die Buchmärkte und genießen Sie die lebhafte Atmosphäre.",
    image: "/images/places/nuevos_places/Plaza_Armas.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tagestour in Havanna",
      "Sonnenuntergangstour in Havanna",
      "Havanna Tour + Tropicana",
      "Havanna Tour + Kanonenschuss",

    ]
  }, {
    id: 45,
    title: "Platz der Heiligen Dreifaltigkeit",
    description: "Erleben Sie den Charme der Plaza de la Santísima Trinidad, einem historischen Platz in Trinidad. Bewundern Sie die koloniale Architektur, erkunden Sie die lokalen Geschäfte und tauchen Sie ein in den kulturellen Reichtum der Gegend.",
    image: "/images/places/nuevos_places/Plaza.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Trinidad - Cienfuegos Tour (Optional Nicho)",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour Trinidad - Cienfuegos (Optional Nicho)",
      "Drei-Städte-Tour: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 46,
    title: "Franziskusplatz",
    description: "Entdecken Sie die Schönheit des Franziskusplatzes, eines Platzes, der von historischen Gebäuden umgeben ist. Genießen Sie die lebhafte Atmosphäre, besuchen Sie die nahegelegenen Attraktionen und saugen Sie die reiche Geschichte auf.",
    image: "/images/places/nuevos_places/San_Francisco.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tagestour in Havanna",
      "Sonnenuntergangstour in Havanna",
      "Havanna Tour + Tropicana",
      "Havanna Tour + Kanonenschuss",

    ]
  }, {
    id: 47,
    title: "Festung San Severino",
    description: "Erkunden Sie die imposante Festung San Severino, eine Festung mit reicher Geschichte. Erfahren Sie mehr über ihre Rolle bei der Verteidigung der Stadt und genießen Sie den Panoramablick auf die umliegenden Landschaften.",
    image: "/images/places/nuevos_places/San_Seberino.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por Matanzas",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour durch Matanzas"
    ]
  }, {
    id: 48,
    title: "Santa Clara",
    description: "Tauchen Sie ein in die lebhafte Stadt Santa Clara, bekannt für ihre revolutionäre Geschichte. Erkunden Sie die Sehenswürdigkeiten, erfahren Sie mehr über Che Guevara und erleben Sie die pulsierende Kulturszene.",
    image: "/images/places/nuevos_places/Santa_Clara.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Drei-Städte-Tour: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 49,
    title: "Nationaltheater Alicia Alonso",
    description: "Erleben Sie die Pracht des Nationaltheaters Alicia Alonso, eines renommierten Theaters in Havanna. Besuchen Sie Aufführungen, bewundern Sie die architektonische Schönheit und tauchen Sie ein in die Kunst und Kultur.",
    image: "/images/places/nuevos_places/Teatro_Nacional_Alicia_Alonso.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tagestour in Havanna",
      "Sonnenuntergangstour in Havanna",
      "Havanna Tour + Tropicana",
      "Havanna Tour + Kanonenschuss",

    ]
  }, {
    id: 50,
    title: "Trinidad",
    description: "Entdecken Sie das UNESCO-Weltkulturerbe Trinidad, eine Stadt, in der die Zeit stillzustehen scheint. Spazieren Sie durch die Kopfsteinpflasterstraßen, bewundern Sie die koloniale Architektur und erleben Sie die reiche Geschichte und Kultur.",
    image: "/images/places/nuevos_places/Trinidad.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Trinidad - Cienfuegos Tour (Optional Nicho)",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour Trinidad - Cienfuegos (Optional Nicho)",
      "Drei-Städte-Tour: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 51,
    title: "Tropicana",
    description: "Erleben Sie das lebhafte Nachtleben Havannas im Tropicana, einem legendären Cabaret. Genießen Sie schillernde Shows, lebhafte Musik und den Glamour des ikonischsten Unterhaltungsortes Kubas.",
    image: "/images/places/nuevos_places/Tropicana.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Havana Tour + Tropicana",
      "Havanna Tour + Tropicana"
    ]
  }, {
    id: 52,
    title: "Yumurí-Tal",
    description: "Erkunden Sie das malerische Yumurí-Tal, ein üppiges Tal, umgeben von Hügeln und Flüssen. Genießen Sie Spaziergänge in der Natur, halten Sie atemberaubende Ausblicke fest und tauchen Sie ein in die Ruhe der Landschaft.",
    image: "/images/places/nuevos_places/Valle_Yumuri.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por Matanzas",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour durch Matanzas"
    ]
  }, {
    id: 53,
    title: "Viñales",
    description: "Entfliehen Sie der landschaftlichen Schönheit von Viñales, einem Tal, umgeben von majestätischen Kalksteinhügeln. Entdecken Sie Tabakfarmen, erkunden Sie Höhlen und genießen Sie die entspannte Atmosphäre des ländlichen Kubas.",
    image: "/images/places/nuevos_places/Viñales.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 54,
    title: "Blick auf Monserrate",
    description: "Erklimmen Sie den Blick auf Monserrate und genießen Sie Panoramablicke auf Havanna. Halten Sie atemberaubende Stadtlandschaften fest, genießen Sie eine ruhige Atmosphäre und bewundern Sie die Schönheit der kubanischen Hauptstadt von oben.",
    image: "/images/places/nuevos_places/Vistas_Monserrate.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por Matanzas",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour durch Matanzas"
    ]
  }, {
    id: 55,
    title: "Delfinarium Varadero",
    description: "Das Delfinarium Varadero in Kuba bietet aufregende Shows und interaktive Aktivitäten, die es Besuchern ermöglichen, Delfinen hautnah zu begegnen und gleichzeitig den Meeresschutz zu fördern.",
    image: "/images/places/nuevos_places/Delfinario_Varadero.webp",
    tag: "Matanzas",
    itinerary: [
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Stadtrundfahrt Varadero nach Stunden"
    ]
  }, {
    id: 56,
    title: "Marina Varadero",
    description: "Marina Varadero ist ein Jachthafen in Varadero, Kuba, der umfassende Nautikdienstleistungen und Liegeplätze für Boote bietet und den maritimen Tourismus und die Freizeitschifffahrt fördert.",
    image: "/images/places/nuevos_places/Marina_Varadero.webp",
    tag: "Matanzas",
    itinerary: [
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по гороdu Varadero по часам",
      "Stadtrundfahrt Varadero nach Stunden"
    ]
  }, {
    id: 57,
    title: "Kanonenschuss am Castillo del Morro Cabaña",
    description: "Erleben Sie die historische Zeremonie des Kanonenschusses am Castillo del Morro Cabaña, ein nächtliches Ritual, das Jahrhunderte zurückreicht und einen Einblick in die reiche Vergangenheit Kubas bietet.",
    image: "/images/places/nuevos_places/Cañonazo.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Havana Tour + Cannon Shot",
      "Havanna Tour + Kanonenschuss"
    ]
  }]
},
fr: {
  nav: {
    'home': 'Accueil',
    'places': 'Lieux',
    'about': 'À propos',
    'services': 'Services',
    'feedback': 'Avis',
    matanzas: 'Matanzas',
    habana: "La Havane",
    pinar: "Pinar del Río",
    central: "Région Centrale"
  },
  hero: {
    'h1': 'Classique',
    'h12': 'Cubana 52',
    'span': '',
    'p': 'Découvrez un service de taxi fiable et efficace avec des chauffeurs professionnels. Nous garantissons des trajets sûrs, ponctuels et confortables.',
    'button': 'Réservez maintenant'
  },
  prov: {
    visit: 'Visitez',
    'h2': 'Vos vacances de rêve commencent avec nous',
    'p': 'Découvrez des horizons culturels où les traditions anciennes rencontrent la vitalité moderne, et où chaque rue vous invite à faire partie de l\'histoire vivante de la ville.',
    places: [{
      name: "Pinar del Río",
      slug: 'Pinar del Río',
      desc: "Champs de tabac, Vallée de Viñales, mogotes, Cueva del Indio, thermes de San Diego, Soroa, fabriques de cigares et charme colonial.",
      img: '/images/Pinar.png',
      href: "/"
    }, {
      name: "La Havane",
      slug: 'La Habana',
      desc: "Vieille Havane historique, Malecon, voitures anciennes, forteresse de Morro, musique vivante, rhum, musées et culture vibrante.",
      img: '/images/Havana.jpg',
      href: "/"
    }, {
      name: "Matanzas",
      slug: "Matanzas",
      desc: "Plage de Varadero, Château de San Severino, Vallée de Yumurí, culture afro-cubaine et héritage colonial.",
      img: '/images/Matanzas.png',
      href: "/"
    }, {
      name: "Région Centrale",
      slug: "Región Central",
      desc: "Combine histoire, musique traditionnelle, parcs naturels et belles plages.",
      img: '/images/Trinidad.png',
      href: "/"
    }]
  },
  aboutComp: {
    'h2': "Informations sur l'entreprise",
    'pdesc': "Nous redéfinissons le tourisme à Cuba en offrant des expériences à travers des tours personnalisés en voitures anciennes qui capturent parfaitement l'esprit vintage de l'île. En combinant des prix compétitifs avec une authentique hospitalité cubaine, nous offrons un service exceptionnel qui met en valeur la véritable essence de notre culture.",
    'p': "Laissez-nous transformer votre visite en un voyage extraordinaire.",
    'secT': "Ponctualité",
    'secP': "Prise en charge à l'heure et itinéraires optimisés.",
    'conT': "Authenticité",
    'conP': "Lieux secrets connus seulement des locaux."
  },
  about2: {
    h2: 'Nous créons des moments inoubliables pour vous',
    elementos: [{
      num: '1',
      title: 'Réservation Facile et Rapide',
      text: 'Réservez en quelques minutes : envoyez-nous un message WhatsApp avec vos préférences.',
      active: false
    }, {
      num: '2',
      title: 'Voyage Personnalisé Sur Mesure pour Vous',
      text: 'Notre équipe vous aidera à concevoir l\'itinéraire parfait en fonction de vos préférences.',
      active: false
    }, {
      num: '3',
      title: 'Profitez d\'un Service Exclusif',
      text: 'Profitez d\'un service de première classe avec des chauffeurs expérimentés et une attention personnalisée.',
      active: true
    }]
  },
  services: {
    h2: "Profitez du meilleur service de transport avec nous",
    p: "Notre équipe de professionnels expérimentés s'adapte parfaitement à chaque voyageur, concevant des expériences sur mesure qui dépassent les attentes.",
    serv1h4: 'Excursions',
    serv1p: 'Découvrez des villes animées, des villages et tous les joyaux cachés le long du chemin',
    serv2h4: 'Transport privé',
    serv2p: 'Réservation facile avec nos véhicules premium.',
    serv3h4: 'Transferts',
    serv3p: 'Voyagez confortablement, profitez de trajets sans encombre.'
  },
  feedback: {
    h2: 'Ce que disent les clients de nous',
    p: 'Découvrez ce que nos clients ont à dire sur nos tours, alors qu\'ils partagent leurs expériences inoubliables et leurs critiques enthousiastes.',
    coment: 'Écrivez-nous votre commentaire'
  },
  itinerary: [{
    title: "Tour d'une journée à La Havane",
    place: ["Havana", "La Habana"],
    details: [
      "Heure de départ de l'hôtel ~8h00 Heure d'arrivée à l'hôtel ~17h00-18h00",
      "Il faut 1h30 à 2h pour atteindre La Havane. En chemin, nous ferons un arrêt au pont le plus haut de Cuba (Bacunayagua), avec vue sur la Vallée de Yumurí et l'océan. Vous pourrez y déguster le plus délicieux cocktail à l'ananas de Cuba (en supplément).",
      "Arrêt près du Château de Morro, qui offre une vue panoramique impressionnante sur La Havane. (L'entrée est payante et facultative).",
      "Ensuite, nous nous promènerons le long du Malecón d'où commencera une promenade de deux heures dans la Vieille Havane. Parmi les attractions figurent la Plaza de San Francisco de Asís, un clocher de l'ancien monastère franciscain (payant), un musée du rhum avec dégustation (entrée payante), la Cathédrale Notre-Dame de Kazan, la Plaza de la Catedral, la Petite Bodega, le Palais des Gouverneurs Espagnols, la Plaza de Armas, le Castillo de la Real Fuerza (entrée payante), la Calle Obispo, l'Hôtel Ambos Mundos, la Plaza Vieja, entre autres.",
      "Visite de la Plaza de la Revolución, une promenade dans le centre de La Havane, où vous trouverez le Capitole, le Gran Teatro de La Habana, le café Floridita (mentionné par Hemingway) et d'autres points d'intérêt.",
      "Nous partons de La Havane à 15h00.",
      "Le déjeuner n'est pas inclus dans le prix de l'excursion (coût estimé du déjeuner est de 15-20 €)."
    ]
  }, {
    title: "Tour au coucher du soleil à La Havane",
    place: ["Havana", "La Habana"],
    details: [
      "Prise en charge à votre logement ou hôtel à 10h00 à Varadero.",
      "Environ deux heures de trajet vers La Havane le long de la côte nord.",
      "Arrêt au pont le plus haut de Cuba (Bacunayagua), haut de 112 mètres, où vous pourrez déguster le meilleur Cocktail à l'ananas de Cuba.",
      "Voyage à La Havane.",
      "Promenade dans la Vieille Havane, déclarée site du patrimoine mondial par l'UNESCO en 1982.",
      "Visite de la Plaza de la Catedral.",
      "Visite de la Plaza del Brazo.",
      "Visite de la Plaza Vieja.",
      "Visite de la Plaza San Francisco de Asís.",
      "Arrêt au plus ancien fort de Cuba, le Castillo del Morro.",
      "Visite de la statue du Christ de La Havane.",
      "Hôtel Nacional.",
      "Visite des célèbres bars d'Hemingway, La Bodeguita del Medio et El Floridita.",
      "Heure du déjeuner (les prix varient selon le choix du client, non inclus).",
      "Parcours le long du Malecón et de la Nouvelle Havane.",
      "Arrêt à la Plaza de la Revolución.",
      "Temps libre pour flâner dans le centre-ville où vous pourrez voir le bâtiment du Capitole, le Gran Teatro de La Habana et le Parque Central.",
      "Arrêt facultatif au Musée du Rhum.",
      "Visite du magasin de tabac.",
      "Le soir, nous visiterons les meilleurs endroits pour profiter du coucher du soleil, que ce soit depuis le Malecón de La Havane ou depuis le Castillo del Morro.",
      "L'itinéraire se termine au coucher du soleil.",
      "Retour à Varadero après le coucher du soleil.",
      "Options facultatives que vous pouvez ajouter à ce tour : 25 USD/EURO pour une heure dans une voiture classique décapotable une fois à La Havane."
    ]
  }, {
    title: "Tour de La Havane + Coup de Canon",
    place: ["Havana", "La Habana"],
    details: [
      "Prise en charge à votre logement ou hôtel à 10h00.",
      "Promenade dans la Vieille Havane, déclarée site du patrimoine mondial par l'UNESCO en 1982. Profitez du temps libre et nous vous recommandons une visite du marché d'artisanat représentatif qui représente l'identité culturelle du peuple.",
      "Visite de la Plaza de San Francisco de Asís, pavée et située aux portes de La Havane.",
      "Arrêt à la Plaza de la Catedral, l'un des plus beaux endroits de la Vieille Havane.",
      "Arrêt sur la Plaza Vieja récemment restaurée, un arrêt obligatoire pour les amateurs d'histoire.",
      "Visite de la Plaza de Armas, la plus ancienne place de La Havane.",
      "Arrêt au Palais des Capitaines Généraux, l'une des œuvres architecturales les plus importantes de Cuba.",
      "Court arrêt à l'Hôtel Ambos Mundos, un bâtiment de style éclectique situé dans la Vieille Havane.",
      "Visite de deux des bars les plus célèbres de La Havane, La Bodeguita del Medio et El Floridita, pour déguster les cocktails les plus délicieux.",
      "Déjeuner suggéré par le guide dans les restaurants les plus spectaculaires de La Havane où vous pourrez déguster notre cuisine cubaine typique.",
      "Trajet en voiture classique le long de l'Avenida Malecón en profitant d'une belle vue sur la Baie de La Havane.",
      "Promenade dans la Nouvelle Havane, visite exclusive.",
      "Voyage panoramique à travers les quartiers Vedado et Miramar.",
      "Arrêt à la Plaza de la Revolución, l'une des plus grandes au monde et siège de l'un des musées les plus intéressants de tout Cuba.",
      "Arrêt panoramique à l'édifice correspondant au Capitole, l'un des lieux les plus emblématiques de La Havane.",
      "Arrêt au Parque Central José Martí, une grande attraction pour les voyageurs du monde entier, où se combinent l'histoire de magnifiques bâtiments et la nature.",
      "Visite du Gran Teatro de La Habana Alicia Alonso, un magnifique bâtiment abritant le Ballet national et l'Opéra de Cuba.",
      "Visite panoramique de la Forteresse du Morro, une importante fortification construite à Cuba au XVIe siècle.",
      "Visite panoramique du Christ de La Havane, une œuvre sculpturale monumentale d'environ 20 mètres de hauteur.",
      "Dîner dans les restaurants recommandés de La Havane selon votre choix. Choisissez entre des crevettes ou du poulet, pour savourer l'authentique cuisine cubaine.",
      "À 21h00, vous pourrez profiter d'une des traditions cubaines : le 'coup de canon de neuf heures' lors de la visite guidée de la Forteresse de San Carlos de la Cabaña.",
      "Voyage de retour à votre logement en voiture classique avec le maximum de confort et de sécurité."
    ]
  }, {
    title: "Tour de La Havane + Tropicana",
    place: ["Havana", "La Habana"],
    details: [
      "Prise en charge à votre logement ou hôtel à 10h30.",
      "Environ deux heures de trajet vers La Havane le long de la côte atlantique.",
      "Arrêt au pont le plus haut de Cuba « Bacunayagua » où vous pourrez également déguster le meilleur Cocktail à l'ananas de Cuba.",
      "Voyage à La Havane.",
      "Promenade dans la Vieille Havane, déclarée site du patrimoine mondial par l'UNESCO en 1982.",
      "Visite de la Plaza de la Catedral.",
      "Visite de la Plaza de Arma.",
      "Visite de la Plaza Vieja.",
      "Visite de la Plaza San Francisco de Asís.",
      "Arrêt au plus ancien fort de Cuba, le Castillo del Morro.",
      "Visite de la statue du Christ de La Havane.",
      "Visite des célèbres bars d'Hemingway La Bodeguita del Medio et El Floridita.",
      "Heure du déjeuner (les prix varient selon le choix du client, non inclus).",
      "Le parcours le long du Malecón et de la Nouvelle Havane.",
      "Arrêt à la Plaza de la Revolución.",
      "Temps pour flâner vers le centre où vous pourrez voir le bâtiment du Capitole, le Gran Teatro de La Habana et le Parque Central.",
      "Arrêt facultatif au Musée du Rhum.",
      "Visite du magasin de tabac.",
      "Visite du Tropicana (le client paie l'entrée directement au cabaret).",
      "Après le spectacle, retour à Varadero."
    ]
  }, {
    title: "Tour du marais de Zapata",
    place: "Matanzas",
    details: [
      "Départ de l'hôtel à 8h du matin.",
      "Nous traversons l'île du nord au sud. Le trajet dure environ 2 heures.",
      "En chemin, nous traverserons les villes de Santa Marta et Cardenas, la ville de Jovellanos, où vivent de nombreux descendants d'esclaves africains, une coopérative appelée Vladimir Ilich Lénine, le village d'Australie, des plantations de canne à sucre, bananes, agrumes, mangues et autres cultures tropicales.",
      "Premier arrêt dans une mini-ferme avec des plantes et des animaux cubains typiques. Moyennant un supplément, vous pouvez boire du jus de canne à sucre et monter sur un taureau zébu.",
      "Élevage de crocodiles (5 € par personne).",
      "Visite des 'Indiens' : Nous montons à bord de bateaux à moteur et ils nous emmènent sur une île avec quelques cabanes et sculptures indiennes. Ce village indien coûte 12 € par personne et dure environ 2 heures ou plus.",
      "Déjeuner inclus avec 4 types de viande, comme le crocodile, le crabe, la langouste, les crevettes, le poisson, le cerf, les escargots ou les calamars, pour 15-20 € par personne. Comprend également du riz avec des légumes, de la salade et des boissons.",
      "Mer des Caraïbes : Nous profiterons de la Mer des Caraïbes dans la Baie des Cochons, avec des eaux claires surtout près des coraux.",
      "Snorkeling : Location d'équipement de snorkeling à 5 € de l'heure. Vous pouvez apporter votre propre équipement. Il est conseillé d'apporter des miettes de pain de l'hôtel pour nourrir les poissons et autres créatures marines.",
      "Plongée : Coûtera 25 € pour 40 minutes pour les plongeurs expérimentés. Les débutants paient un supplément de 10 € pour une leçon d'introduction. La zone de plongée est facile et il y a des navires coulés à 25-30 mètres de profondeur.",
      "Cenotes : Nous verrons des cenotes ou des dolines dans les jungles autour de la Baie des Cochons, où vous pourrez nager. Si vous le souhaitez, nous pouvons aller à la Casa del Colibrí pour observer les oiseaux (1 $).",
      "Arrêt facultatif pour nager sur la plage de sable du village de Playa Larga.",
      "Histoire : Nous visiterons d'importants sites historiques liés à la Guerre Froide dans la Baie des Cochons, où une invasion pro-Castro a été menée en 1961.",
      "Retour à Varadero à 16h00."
    ]
  }, {
    title: "Tour de Matanzas",
    place: "Matanzas",
    details: [
      "Départ de l'hôtel à 9h00.",
      "Visite des grottes de Bellamar (entrée 5 $): Nous explorerons les impressionnantes grottes de Bellamar, un système de grottes offrant des formations rocheuses uniques et spectaculaires. Nous découvrirons la riche géologie et l'histoire de ce lieu fascinant.",
      "Tour du centre historique colonial : Nous plongerons dans l'histoire de Matanzas en explorant son centre colonial. Nous visiterons la célèbre Pharmacie Française, un point de repère architectural emblématique qui reflète l'influence française dans la région.",
      "Belvédère de Monserrat : Nous profiterons d'une vue panoramique depuis le Belvédère de Monserrat, offrant une perspective impressionnante de la ville et de ses environs. Un endroit parfait pour immortaliser des souvenirs inoubliables.",
      "L'Ermitage : Nous visiterons l'Ermitage, un lieu sacré qui a été témoin d'événements historiques importants. Nous en apprendrons davantage sur la signification culturelle et religieuse de ce site.",
      "Château de San Severino : Nous explorerons le Château de San Severino, une forteresse historique qui a joué un rôle crucial dans la défense de la ville. Nous découvrirons l'architecture militaire et l'histoire entourant cet imposant château.",
      "Grotte de Saturne (entrée 5 $): Nous terminerons notre tour en explorant la Grotte de Saturne, une cenote souterraine aux eaux cristallines. Les visiteurs auront l'occasion de nager et de profiter de la beauté naturelle unique de cette formation géologique.",
      "Retour à l'hôtel vers 14h00."
    ]
  }, {
    title: "Excursion d'une journée à Varadero depuis La Havane",
    place: "Matanzas",
    details: [
      "Prise en charge à l'hôtel ou B&B en voiture ancienne à 8h00.",
      "Départ vers Varadero le long de la côte avec de magnifiques paysages.",
      "Arrêt facultatif au pont Bacunayagua : Nous ferons un arrêt au pont le plus haut de Cuba avec 112 m de hauteur. Depuis ce point de vue, les visiteurs peuvent profiter de splendides vues panoramiques et déguster le meilleur Cocktail à l'ananas de Cuba.",
      "Voyage à Coral Beach pour faire du snorkeling (entrées non incluses, 10 USD par personne) : Nous explorerons les eaux cristallines de Coral Beach, idéales pour pratiquer le snorkeling et profiter de la vie marine.",
      "Visite de la grotte ouverte de Saturne (entrées non incluses, 5 USD par personne) : Nous découvrirons la beauté de la grotte de Saturne, une cenote souterraine aux eaux cristallines. Les visiteurs auront l'occasion de nager et de profiter de la beauté naturelle unique de cette formation géologique.",
      "Poursuite du voyage vers Varadero.",
      "Visite de La casa Alcapone à Varadero : Nous explorerons La Casa Alcapone, qui offre un aperçu de l'histoire et du luxe de l'époque.",
      "Visite du marché de Varadero : Plongez dans la culture locale en explorant le marché de Varadero, où vous pouvez trouver de l'artisanat local et des produits.",
      "Visite du parc Josone : Profitez de la beauté naturelle du parc Josone, une oasis au milieu de Varadero avec des jardins luxuriants et des lacs sereins.",
      "Visite de la Mansion Dupon : Nous explorerons l'élégante Mansion Dupon, un témoignage de l'architecture historique de Varadero.",
      "Temps libre sur la plage : Les visiteurs auront du temps pour se détendre sur les belles plages de Varadero.",
      "Le tour se termine vers 16h30 et retourne à La Havane."
    ]
  }, {
    title: "Tour Trinidad - Cienfuegos (Nicho facultatif)",
   place: ["Central Region", "Región Central"],
    details: [
      "Prise en charge à votre logement ou hôtel à 06h30.",
      "Voyage de trois heures à travers la campagne jusqu'à Cienfuegos.",
      "Excursion dans la ville de Cienfuegos.",
      "Visite de la zone de Punta Gorda, du Palacio del Valle et de l'Hôtel Jagua.",
      "Arrêt facultatif aux cascades d'El Nicho (cela entraîne un coût supplémentaire de 40 euros à payer pour le transport pour monter la montagne).",
      "Note : Si nous visitons El Nicho, nous aurons moins de temps à passer dans les autres zones.",
      "Voyage à Trinidad pour profiter de la vue sur la Mer des Caraïbes.",
      "Pause déjeuner à Trinidad (non incluse).",
      "Promenade dans le centre historique comme la Plaza Mayor, La Canchanchara, les musées, etc.",
      "Temps libre pour d'autres promenades ou visite du marché d'artisanat, si le temps le permet.",
      "Retour à l'hôtel vers 19h00.",
      "Ce tour comprend une voiture classique avec climatisation et un guide touristique."
    ]
  }, {
    title: "Tour des Trois Villes : Trinidad - Cienfuegos - Santa Clara",
   place: ["Central Region", "Región Central"],
    details: [
      "Le voyage peut également se faire en deux jours.",
      "Prise en charge à votre logement ou hôtel à 06h00.",
      "Voyage de trois heures à travers la campagne jusqu'à Santa Clara.",
      "Arrêt au mausolée d'Ernesto Che Guevara et à la Plaza de la Revolución.",
      "Arrêt au Parque Vidal et tour de la ville.",
      "Arrêt au train.",
      "Arrêt facultatif aux cascades d'El Nicho (cela entraîne un coût supplémentaire de 40 euros à payer pour le transport pour monter la montagne).",
      "Note : Si nous visitons El Nicho, nous aurons moins de temps à passer dans les autres zones. Non disponible lors du tour d'une journée.",
      "Voyage à Trinidad pour profiter de la vue sur la Mer des Caraïbes.",
      "Pause déjeuner à Trinidad (non incluse).",
      "Promenade dans le centre historique comme la Plaza Mayor, La Canchanchara, les musées, etc.",
      "Temps libre pour d'autres promenades ou visite du marché d'artisanat, si le temps le permet.",
      "Départ pour Cienfuegos.",
      "Excursion dans la ville de Cienfuegos.",
      "Visite de la zone de Punta Gorda, du Palacio del Valle et de l'Hôtel Jagua.",
      "Retour à l'hôtel vers 21h00."
    ]
  }, {
    title: "Tour Viñales - Soroa",
    place: "Pinar del Río",
    details: [
      "Prise en charge à l'hôtel ou logement à 8h30.",
      "Traversez la province de La Havane pour continuer vers Soroa.",
      "Visitez Soroa où vous pourrez vous baigner à la cascade et visiter le jardin d'orchidées (vous devez payer l'entrée aux deux endroits, 3-5 USD par personne).",
      "Note : Si vous venez de Varadero et passez trop de temps à Soroa, vous n'aurez pas assez de temps pour profiter de Viñales.",
      "Poursuite du tour vers la Vallée de Viñales.",
      "Arrêt au point de vue 'Las Jazmines' (un excellent endroit pour la photographie).",
      "Visite de la maison du paysan pour voir et connaître le tabac cubain.",
      "Visite de la ville de Viñales.",
      "Visite de la Cueva del Indio (entrée non incluse, 5 USD par personne).",
      "Visite du Mural de la Préhistoire.",
      "Profitez d'une promenade à cheval (facultatif, non inclus, 10-15 USD par personne).",
      "Retour à La Havane ou Varadero."
    ]
  }, {
    title: "City Tour Varadero à l'heure",
    place: ["Matanzas"],
    details: [
      "Explorez chaque coin de la ville de Varadero dans une voiture classique décapotable à l'heure. Le prix est de 40 USD/heure.",
      "Casa de Todos",
      "Foire artisanale",
      "Point de vue photographique",
      "Parc Josones",
      "Boulevard de Varadero",
      "Villa Xanadu",
      "Delfinarium",
      "Marina Varadero"
    ]
  }],
  itinerarySec: {
    h4: 'Itinéraire'
  },
  places: [{
    id: 1,
    title: "Château dans le ciel",
    description: "Le Château dans le ciel offre une vue panoramique imprenable sur Pinar Del Río. Construit au XIXe siècle comme poste d'observation, ce site historique a été restauré pour permettre aux visiteurs de profiter de sa riche histoire.",
    image: "/images/places/Castillo_Cielo.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 2,
    title: "Belvédère de Bacunayagua",
    description: "Le Belvédère de Bacunayagua, construit dans les années 60, est un point d'observation panoramique offrant des vues imprenables sur la Vallée de Yumurí. Ce lieu emblématique a également une histoire intéressante liée au développement touristique de la région.",
    image: "/images/places/Mirador_Bacunayagua.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Excursion d'une journée à Varadero depuis La Havane",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "Excursion d'une journée à Varadero depuis La Havane",
      "Tour d'une journée à La Havane",
      "Tour au coucher du soleil à La Havane",
      "Tour de La Havane + Tropicana",
      "Tour de La Havane + Coup de Canon"
    ]
  }, {
    id: 5,
    title: "Jardin d'orchidées",
    description: "Le Jardin d'orchidées de Pinar Del Río est un paradis floral établi au XXe siècle. Avec une collection impressionnante d'orchidées indigènes et internationales, ce lieu offre une expérience unique pour les passionnés de botanique.",
    image: "/images/places/Orquideario.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 6,
    title: "Grotte de l'Indien",
    description: "La Grotte de l'Indien, découverte au XIXe siècle, est un fascinant système de grottes avec des formations géologiques uniques. Au fil des ans, elle a été le théâtre de découvertes archéologiques révélant la présence d'anciennes cultures dans la région.",
    image: "/images/places/nuevos_places/Cueva_Indio.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 7,
    title: "Floridita",
    description: "Le Floridita est un bar historique connu pour sa connexion avec Ernest Hemingway. Fondé au début du XIXe siècle, ce lieu emblématique offre un mélange d'histoire, de cocktails traditionnels, de musique live et une atmosphère animée.",
    image: "/images/places/Floridita.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour de La Havane + Tropicana",
      "Tour de La Havane + Coup de Canon",
      "Tour d'une journée à La Havane",
      "Tour au coucher du soleil à La Havane",

    ]
  }, {
    id: 8,
    title: "Bodeguita del Medio",
    description: "La Bodeguita del Medio, fondée au XXe siècle, est un bar et restaurant historique. Réputée pour ses mojitos authentiques, sa musique afro-cubaine et son atmosphère vibrante, c'est un arrêt obligatoire pour ceux qui recherchent la culture cubaine.",
    image: "/images/places/Bodeguita.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour de La Havane + Tropicana",
      "Tour de La Havane + Coup de Canon",
      "Tour d'une journée à La Havane",
      "Tour au coucher du soleil à La Havane",

    ]
  }, {
    id: 9,
    title: "Le Chevalier de Paris",
    description: "Le Chevalier de Paris est une statue historique à La Havane, représentant un personnage unique du passé de la ville. Ce point de repère offre des aperçus de l'histoire locale, des places voisines, de l'art urbain et de la photographie architecturale.",
    image: "/images/places/Caballero_Paris.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour de La Havane + Tropicana",
      "Tour de La Havane + Coup de Canon",
      "Tour d'une journée à La Havane",
      "Tour au coucher du soleil à La Havane",

    ]
  }, {
    id: 10,
    title: "Christ de La Havane",
    description: "Le Christ de La Havane est un monument religieux offrant une vue panoramique. Construit au milieu du XXe siècle, il sert de symbole de spiritualité, offrant aux visiteurs des promenades sereines, des événements spirituels et des aperçus de la culture catholique.",
    image: "/images/places/Cristo.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour d'une journée à La Havane",
      "Tour au coucher du soleil à La Havane",
      "Tour de La Havane + Tropicana",
      "Tour de La Havane + Coup de Canon",

    ]
  }, {
    id: 11,
    title: "Le Capitole",
    description: "Le Capitole, un bâtiment néoclassique emblématique, s'élève comme un point de repère politique à La Havane. Construit au début du XXe siècle, il offre un aperçu de l'histoire politique, des visites guidées, des événements culturels et des vues panoramiques depuis sa coupole.",
    image: "/images/places/Capitolio.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour de La Havane + Tropicana",
      "Tour de La Havane + Coup de Canon",
      "Tour d'une journée à La Havane",
      "Tour au coucher du soleil à La Havane",

    ]
  }, {
    id: 12,
    title: "Place de la Révolution",
    description: "La Place de la Révolution, située à La Havane, est une place emblématique avec des monuments révolutionnaires. Servant de point central pour les événements publics, elle présente de l'art politique, des discours historiques et une position centrale pour les rassemblements.",
    image: "/images/places/Plaza_Rev.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour d'une journée à La Havane",
      "Tour au coucher du soleil à La Havane",
      "Tour de La Havane + Tropicana",
      "Tour de La Havane + Coup de Canon",

    ]
  }, {
    id: 13,
    title: "Varadero",
    description: "Varadero est une station balnéaire renommée à Matanzas, attirant les visiteurs avec ses plages immaculées et sa vie nocturne animée. Fondée au début du XXe siècle, elle offre des sports nautiques, la détente sur la plage et des expériences culturelles.",
    image: "/images/places/Varadero.webp",
    tag: "Matanzas",
    itinerary: [
      "Jeep Safari",
      "Excursión de un día a Varadero desde La Habana",
      "Excursion d'une journée à Varadero depuis La Havane",
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Excursion d'une journée à Varadero depuis La Havane",
      "City Tour Varadero à l'heure"
    ]
  }, {
    id: 14,
    title: "Parc de la Liberté",
    description: "Le Parc de la Liberté à Matanzas est une oasis de verdure avec un passé historique. Fondé au XXe siècle, il sert d'espace récréatif, avec des espaces verts, des monuments historiques et des événements culturels.",
    image: "/images/places/Parque_Libertad.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursion de un día a Varadero desde La Habana",
      "Tour por Matanzas",
      "Excursion d'une journée à Varadero depuis La Havane",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Excursion d'une journée à Varadero depuis La Havane",
      "Tour de Matanzas"
    ]
  }, {
    id: 15,
    title: "Grotte de Bellamar",
    description: "La Grotte de Bellamar, découverte au XIXe siècle, est un fascinant système de grottes avec des formations géologiques uniques. Au fil des ans, elle a été le théâtre de découvertes archéologiques révélant la présence d'anciennes cultures dans la région.",
    image: "/images/places/Bellamar_Cave.webp",
    tag: "Matanzas",
    itinerary: [
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour por Matanzas",
      "Tour de Matanzas"
    ]
  }, {
    id: 16,
    title: "Maison d'Al Capone",
    description: "La Maison d'Al Capone, construite dans les années 1920, est un témoin silencieux de l'ère de la prohibition. Ce site historique offre un aperçu unique de la vie du célèbre gangster et de son influence dans la région de Matanzas pendant ces années turbulentes.",
    image: "/images/places/Casa_de_Al.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Excursion d'une journée à Varadero depuis La Havane",
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Excursion d'une journée à Varadero depuis La Havane",
      "City Tour Varadero à l'heure"
    ]
  }, {
    id: 17,
    title: "Grotte de Saturne",
    description: "La Grotte de Saturne, connue pour son impressionnante piscine naturelle souterraine, a une histoire qui remonte à l'époque précolombienne. Utilisée par les indigènes Taínos, la grotte a été un site sacré et un refuge au fil des siècles.",
    image: "/images/places/Cueva_Saturno.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Excursion d'une journée à Varadero depuis La Havane",
      "Jeep Safari",
      "Excursion d'une journée à Varadero depuis La Havane"
    ]
  }, {
    id: 18,
    title: "Guama",
    description: "Guama est un village Taíno reconstruit dans la région de Matanzas. Ce site unique offre aux visiteurs une expérience immersive dans la culture indigène, avec des répliques authentiques des habitations Taíno et des activités mettant en valeur le riche héritage des natifs de l'île.",
    image: "/images/places/Guama.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por la Ciénaga de Zapata",
      "Tour du marais de Zapata",
      "Экскурсия в Циенага-де-Сапата",
      "Tour du marais de Zapata"
    ]
  }, {
    id: 19,
    title: "Mansion Dupon",
    description: "La Mansion Dupón, construite à la fin du XIXe siècle, est un exemple exceptionnel d'architecture coloniale à Matanzas. Cette résidence majestueuse a été témoin d'événements historiques et culturels au fil des ans, maintenant ouverte au public pour partager sa riche histoire.",
    image: "/images/places/Mansion_Dupon.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Excursion d'une journée à Varadero depuis La Havane",
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Excursion d'une journée à Varadero depuis La Havane",
      "City Tour Varadero à l'heure"
    ]
  }, {
    id: 20,
    title: "Soroa",
    description: "Soroa, connue comme l'« arc-en-ciel de Cuba », est célèbre pour son jardin botanique et ses cascades. Fondée au XIXe siècle, la région est un paradis naturel qui attire les passionnés de flore et de faune du monde entier depuis des générations.",
    image: "/images/places/Pinar_Cascada.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 21,
    title: "Musée Pharmaceutique",
    description: "Le Musée Pharmaceutique de Matanzas, ouvert au début du XXe siècle, témoigne du développement de la pharmacologie dans la région. Il expose une fascinante collection d'instruments médicaux anciens et offre aux visiteurs un aperçu unique de l'histoire de la médecine.",
    image: "/images/places/Museo_Farmaceutico.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por Matanzas",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour de Matanzas"
    ]
  }, {
    id: 22,
    title: "Ville de Matanzas",
    description: "La ville de Matanzas, également connue sous le nom d'« Athènes de Cuba », a une riche histoire qui remonte à l'époque coloniale jusqu'à nos jours. Son architecture unique, ses places charmantes et ses événements culturels font de cette ville un arrêt obligatoire pour les passionnés d'histoire et de culture.",
    image: "/images/places/plaza_mtz.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursion de un día a Varadero desde La Habana",
      "Tour por Matanzas",
      "Excursion d'une journée à Varadero depuis La Havane",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Excursion d'une journée à Varadero depuis La Havane",
      "Tour de Matanzas"
    ]
  }, {
    id: 23,
    title: "The Beatles",
    description: "The Beatles à Matanzas est un vibrant hommage au groupe de rock emblématique. Ce lieu offre une expérience musicale unique avec des expositions, des événements à thème et une atmosphère qui transporte les visiteurs dans l'ère passionnante de la Beatlemania.",
    image: "/images/places/the_beatles.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Excursion d'une journée à Varadero depuis La Havane",
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Excursion d'une journée à Varadero depuis La Havane",
      "City Tour Varadero à l'heure"
    ]
  }, {
    id: 27,
    title: "Castillo de la Real Fuerza",
    description: "Visitez l'historique Castillo de la Real Fuerza, une forteresse qui protégeait autrefois La Havane des attaques de pirates. Explorez son passé historique et profitez de la vue panoramique sur la ville.",
    image: "/images/places/nuevos_places/Castillo_Real_Fuerza.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour de La Havane + Tropicana",
      "Tour de La Havane + Coup de Canon",
      "Tour d'une journée à La Havane",
      "Tour au coucher du soleil à La Havane",

    ]
  }, {
    id: 28,
    title: "Cathédrale Notre-Dame de Kazan",
    description: "Admirez la beauté architecturale de la Cathédrale Notre-Dame de Kazan, une cathédrale qui présente un mélange de styles différents. Découvrez sa signification religieuse et culturelle.",
    image: "/images/places/nuevos_places/Catedral_Senora_Kazan.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "One day tour in Havana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour d'une journée à La Havane",

    ]
  }, {
    id: 29,
    title: "Cienfuegos",
    description: "Explorez la pittoresque ville de Cienfuegos, connue pour son influence française et son magnifique front de mer. Plongez dans les arts et la culture locaux et l'atmosphère accueillante.",
    image: "/images/places/nuevos_places/Cienfuegos.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Trinidad - Cienfuegos Tour (Optional Nicho)",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour Trinidad - Cienfuegos (Nicho facultatif)",
      "Tour des Trois Villes : Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 30,
    title: "Ferme aux crocodiles",
    description: "Visitez la Ferme aux crocodiles et observez ces fascinants reptiles dans leur habitat naturel. Découvrez les efforts de conservation des crocodiles et profitez d'une expérience unique avec la faune.",
    image: "/images/places/nuevos_places/Criadero_Cocodrilos.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por la Ciénaga de Zapata",
      "Tour du marais de Zapata",
      "Экскурсия в Циенага-де-Сапата",
      "Tour du marais de Zapata"
    ]
  }, {
    id: 32,
    title: "Église de la Trinité",
    description: "Visitez l'Église de la Trinité, une église historique à Trinidad. Admirez son architecture et plongez dans le patrimoine religieux et culturel de cette charmante ville cubaine.",
    image: "/images/places/nuevos_places/Iglesia_Trinidad.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Trinidad - Cienfuegos Tour (Optional Nicho)",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour Trinidad - Cienfuegos (Nicho facultatif)",
      "Tour des Trois Villes : Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 33,
    title: "Parc Josone",
    description: "Détendez-vous dans les environs luxuriants du parc Josone, un magnifique parc avec des jardins, des lacs et des zones récréatives. Profitez d'une évasion tranquille de l'agitation de la vie quotidienne.",
    image: "/images/places/nuevos_places/Josone.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Excursion d'une journée à Varadero depuis La Havane",
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Excursion d'une journée à Varadero depuis La Havane",
      "City Tour Varadero à l'heure"
    ]
  }, {
    id: 34,
    title: "Monserrate",
    description: "Montez au sommet de Monserrate pour admirer des vues imprenables sur les paysages environnants. Ce point de vue offre une perspective unique sur la ville et ses environs pittoresques.",
    image: "/images/places/nuevos_places/Monserrate.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por Matanzas",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour de Matanzas"
    ]
  }, {
    id: 35,
    title: "Monument à Ernesto Che Guevara",
    description: "Rendez hommage à l'emblématique leader révolutionnaire au Monument à Ernesto Che Guevara. Explorez le mémorial et découvrez la vie et l'héritage de Che Guevara.",
    image: "/images/places/nuevos_places/Monumento_Ernesto_Che_Guevara.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour des Trois Villes : Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 36,
    title: "Monument à l'attaque du train blindé",
    description: "Visitez le Monument à l'attaque du train blindé, qui commémore un événement historique pendant la Révolution cubaine. Découvrez le courage et l'importance de ce moment crucial.",
    image: "/images/places/nuevos_places/Monumento_Tren_Blindado.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour des Trois Villes : Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 37,
    title: "Mural de la Préhistoire",
    description: "Admirez le Mural de la Préhistoire, une murale colossale en plein air qui représente l'histoire évolutive de la vie sur Terre. Explorez l'œuvre d'art vibrante nichée dans un cadre naturel.",
    image: "/images/places/nuevos_places/Mural_Prehistoria.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 39,
    title: "Musée du Rhum",
    description: "Savourez la riche histoire du rhum cubain au Musée du Rhum. Découvrez l'art de la fabrication du rhum, apprenez son importance culturelle et profitez de dégustations des excellents rhums cubains.",
    image: "/images/places/nuevos_places/Museo_Ron.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour d'une journée à La Havane",
      "Tour au coucher du soleil à La Havane",

    ]
  }, {
    id: 40,
    title: "Palais des Gouverneurs Espagnols",
    description: "Faites un saut dans le passé au Palais des Gouverneurs Espagnols, un palais historique qui met en valeur l'architecture coloniale. Explorez les chambres et les couloirs qui murmurent des histoires du passé.",
    image: "/images/places/nuevos_places/Palacio_Gobernadores.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour de La Havane + Tropicana",
      "Tour de La Havane + Coup de Canon",
      "Tour d'une journée à La Havane",
      "Tour au coucher du soleil à La Havane",
    ]
  }, {
    id: 41,
    title: "Palais de la Vallée",
    description: "Découvrez la grandeur du Palais de la Vallée, un joyau architectural qui mélange différents styles. Admirez les détails complexes et profitez de la vue panoramique sur les paysages environnants.",
    image: "/images/places/nuevos_places/Palacio_Valle.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Trinidad - Cienfuegos Tour (Optional Nicho)",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour Trinidad - Cienfuegos (Nicho facultatif)",
      "Tour des Trois Villes : Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 42,
    title: "Playa Larga",
    description: "Détendez-vous sur les plages immaculées de Playa Larga, une magnifique plage connue pour sa tranquillité et sa beauté naturelle. Profitez du soleil, nagez et évadez-vous paisiblement au bord de la mer.",
    image: "/images/places/nuevos_places/Playa_Larga.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por la Ciénaga de Zapata",
      "Tour du marais de Zapata",
      "Экскурсия в Циенага-де-Сапата",
      "Tour du marais de Zapata"
    ]
  }, {
    id: 43,
    title: "Place Principale",
    description: "Promenez-vous sur la Place Principale historique, la plus ancienne place de La Havane. Imprégnez-vous du charme colonial, explorez les marchés aux livres et profitez de l'atmosphère animée.",
    image: "/images/places/nuevos_places/Plaza_Armas.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour d'une journée à La Havane",
      "Tour au coucher du soleil à La Havane",
      "Tour de La Havane + Tropicana",
      "Tour de La Havane + Coup de Canon",

    ]
  }, {
    id: 45,
    title: "Place de la Trinité",
    description: "Découvrez le charme de la Plaza de la Santísima Trinidad, une place historique à Trinidad. Admirez l'architecture coloniale, explorez les boutiques locales et imprégnez-vous de la richesse culturelle de la région.",
    image: "/images/places/nuevos_places/Plaza.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Trinidad - Cienfuegos Tour (Optional Nicho)",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour Trinidad - Cienfuegos (Nicho facultatif)",
      "Tour des Trois Villes : Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 46,
    title: "Place Saint-François",
    description: "Découvrez la beauté de la Place Saint-François, une place entourée de bâtiments historiques. Profitez de l'atmosphère animée, visitez les attractions voisines et imprégnez-vous de la riche histoire.",
    image: "/images/places/nuevos_places/San_Francisco.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour d'une journée à La Havane",
      "Tour au coucher du soleil à La Havane",
      "Tour de La Havane + Tropicana",
      "Tour de La Havane + Coup de Canon",

    ]
  }, {
    id: 47,
    title: "Forteresse de San Severino",
    description: "Explorez l'imposante Forteresse de San Severino, une forteresse riche en histoire. Découvrez son rôle dans la protection de la ville et profitez de la vue panoramique sur les paysages environnants.",
    image: "/images/places/nuevos_places/San_Seberino.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por Matanzas",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour de Matanzas"
    ]
  }, {
    id: 48,
    title: "Santa Clara",
    description: "Plongez dans la ville animée de Santa Clara, connue pour son histoire révolutionnaire. Explorez les points de repère, découvrez Che Guevara et vivez la scène culturelle vibrante.",
    image: "/images/places/nuevos_places/Santa_Clara.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour des Trois Villes : Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 49,
    title: "Théâtre National Alicia Alonso",
    description: "Découvrez la grandeur du Théâtre National Alicia Alonso, un théâtre renommé à La Havane. Assistez à des spectacles, admirez la beauté architecturale et plongez dans les arts et la culture.",
    image: "/images/places/nuevos_places/Teatro_Nacional_Alicia_Alonso.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour d'une journée à La Havane",
      "Tour au coucher du soleil à La Havane",
      "Tour de La Havane + Tropicana",
      "Tour de La Havane + Coup de Canon",

    ]
  }, {
    id: 50,
    title: "Trinidad",
    description: "Découvrez le site du patrimoine mondial de l'UNESCO de Trinidad, une ville figée dans le temps. Promenez-vous dans les rues pavées, admirez l'architecture coloniale et vivez la riche histoire et culture.",
    image: "/images/places/nuevos_places/Trinidad.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Trinidad - Cienfuegos Tour (Optional Nicho)",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour Trinidad - Cienfuegos (Nicho facultatif)",
      "Tour des Trois Villes : Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 51,
    title: "Tropicana",
    description: "Découvrez la vie nocturne animée de La Havane au Tropicana, un cabaret légendaire. Profitez de spectacles éblouissants, de musique vivante et du glamour du lieu de divertissement le plus emblématique de Cuba.",
    image: "/images/places/nuevos_places/Tropicana.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Havana Tour + Tropicana",
      "Tour de La Havane + Tropicana"
    ]
  }, {
    id: 52,
    title: "Vallée de Yumurí",
    description: "Explorez la pittoresque Vallée de Yumurí, une vallée luxuriante entourée de collines et de rivières. Profitez des promenades dans la nature, capturez des vues à couper le souffle et plongez dans la tranquillité du paysage.",
    image: "/images/places/nuevos_places/Valle_Yumuri.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por Matanzas",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour de Matanzas"
    ]
  }, {
    id: 53,
    title: "Viñales",
    description: "Évadez-vous dans la beauté pittoresque de Viñales, une vallée entourée de majestueuses collines calcaires. Découvrez les fermes de tabac, explorez les grottes et profitez de l'atmosphère détendue de la Cuba rurale.",
    image: "/images/places/nuevos_places/Viñales.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 54,
    title: "Vue de Monserrate",
    description: "Montez à la Vue de Monserrate pour profiter de vues panoramiques sur La Havane. Capturez des paysages urbains à couper le souffle, profitez d'une atmosphère sereine et admirez la beauté de la capitale cubaine d'en haut.",
    image: "/images/places/nuevos_places/Vistas_Monserrate.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por Matanzas",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour de Matanzas"
    ]
  }, {
    id: 55,
    title: "Delfinarium de Varadero",
    description: "Le Delfinarium de Varadero à Cuba propose des spectacles passionnants et des activités interactives permettant aux visiteurs d'interagir de près avec les dauphins tout en promouvant la conservation marine.",
    image: "/images/places/nuevos_places/Delfinario_Varadero.webp",
    tag: "Matanzas",
    itinerary: [
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "City Tour Varadero à l'heure"
    ]
  }, {
    id: 56,
    title: "Marina de Varadero",
    description: "Marina Varadero est un port de plaisance situé à Varadero, Cuba, offrant des services nautiques complets et des hébergements pour bateaux, favorisant le tourisme maritime et la navigation de plaisance.",
    image: "/images/places/nuevos_places/Marina_Varadero.webp",
    tag: "Matanzas",
    itinerary: [
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по гороdu Varadero по часам",
      "City Tour Varadero à l'heure"
    ]
  }, {
    id: 57,
    title: "Salut au canon au Castillo del Morro Cabaña",
    description: "Vivez la cérémonie historique du Salut au canon au Castillo del Morro Cabaña, un rituel nocturne remontant à plusieurs siècles, offrant un aperçu du riche passé de Cuba.",
    image: "/images/places/nuevos_places/Cañonazo.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Havana Tour + Cannon Shot",
      "Tour de La Havane + Coup de Canon"
    ]
  }]
}, 
pt: {
  nav: {
    'home': 'Início',
    'places': 'Lugares',
    'about': 'Sobre nós',
    'services': 'Serviços',
    'feedback': 'Avaliações',
    matanzas: 'Matanzas',
    habana: "Havana",
    pinar: "Pinar del Río",
    central: "Região Central"
  },
  hero: {
    'h1': 'Clássico',
    'h12': 'Cubana 52',
    'span': '',
    'p': 'Experimente um serviço de táxi confiável e eficiente com motoristas profissionais. Garantimos viagens seguras, pontuais e confortáveis.',
    'button': 'Reserve agora'
  },
  prov: {
    visit: 'Visite',
    'h2': 'Suas Férias de Sonho Começam Conosco',
    'p': 'Descubra horizontes culturais onde tradições antigas encontram a vitalidade moderna, e cada rua convida você a se tornar parte da história viva da cidade.',
    places: [{
      name: "Pinar del Río",
      slug: 'Pinar del Río',
      desc: "Campos de tabaco, Vale de Viñales, mogotes, Cueva del Indio, termas de San Diego, Soroa, fábricas de charutos e charme colonial.",
      img: '/images/Pinar.png',
      href: "/"
    }, {
      name: "Havana",
      slug: 'La Habana',
      desc: "Histórica Velha Havana, calçadão do Malecón, carros antigos, Castelo do Morro, música animada, rum, museus e cultura vibrante.",
      img: '/images/Havana.jpg',
      href: "/"
    }, {
      name: "Matanzas",
      slug: "Matanzas",
      desc: "Praia de Varadero, Castelo de San Severino, Vale do Yumurí, cultura afro-cubana e herança colonial.",
      img: '/images/Matanzas.png',
      href: "/"
    }, {
      name: "Região Central",
      slug: "Región Central",
      desc: "Combina história, música tradicional, parques naturais e belas praias.",
      img: '/images/Trinidad.png',
      href: "/"
    }]
  },
  aboutComp: {
    'h2': "Informações sobre a empresa",
    'pdesc': "Redefinimos o turismo em Cuba oferecendo experiências através de tours personalizados em carros antigos que capturam perfeitamente o espírito vintage da ilha. Combinando preços competitivos com a autêntica hospitalidade cubana, oferecemos um serviço excepcional que mostra a verdadeira essência da nossa cultura.",
    'p': "Deixe-nos transformar sua visita em uma viagem extraordinária.",
    'secT': "Pontualidade",
    'secP': "Retirada no horário e rotas otimizadas.",
    'conT': "Autenticidade",
    'conP': "Lugares secretos conhecidos apenas pelos locais."
  },
  about2: {
    h2: 'Criamos momentos inesquecíveis para você',
    elementos: [{
      num: '1',
      title: 'Reserva Fácil e Rápida',
      text: 'Reserve em poucos minutos: envie-nos uma mensagem no WhatsApp com suas preferências.',
      active: false
    }, {
      num: '2',
      title: 'Viagem Personalizada Sob Medida para Você',
      text: 'Nossa equipe irá ajudá-lo a planejar o itinerário perfeito com base em suas preferências.',
      active: false
    }, {
      num: '3',
      title: 'Desfrute de um Serviço Exclusivo',
      text: 'Desfrute de um serviço de primeira classe com motoristas experientes e atenção personalizada.',
      active: true
    }]
  },
  services: {
    h2: "Desfrute do melhor serviço de transporte conosco",
    p: "Nossa equipe de profissionais experientes se adapta perfeitamente a cada viajante, projetando experiências personalizadas que superam as expectativas.",
    serv1h4: 'Excursões',
    serv1p: 'Descubra cidades vibrantes, vilas e todas as joias escondidas ao longo do caminho',
    serv2h4: 'Transporte Privado',
    serv2p: 'Reserva fácil com nossos veículos premium.',
    serv3h4: 'Transferências',
    serv3p: 'Viaje com conforto, desfrute de viagens tranquilas.'
  },
  feedback: {
    h2: 'O que os clientes dizem sobre nós',
    p: 'Descubra o que nossos clientes têm a dizer sobre nossos tours, enquanto compartilham suas experiências inesquecíveis e avaliações entusiasmadas.',
    coment: 'Escreva-nos seu comentário'
  },
  itinerary: [{
    title: "Tour de um dia em Havana",
    place: ["Havana", "La Habana"],
    details: [
      "Horário de partida do hotel ~8:00 Horário de chegada ao hotel ~17:00-18:00",
      "Leva de 1,5 a 2 horas para chegar a Havana. Ao longo do caminho, faremos uma parada na ponte mais alta de Cuba (Bacunayagua), com vista para o Vale de Yumurí e o oceano. Você pode experimentar o cocktail de abacaxi mais delicioso de Cuba (custo adicional).",
      "Parada perto do Castelo do Morro, que oferece vistas panorâmicas impressionantes de Havana. (A entrada é paga e opcional).",
      "Em seguida, faremos uma caminhada ao longo do Malecón de onde começará uma caminhada de duas horas pela Velha Havana. Entre as atrações estão a Plaza de San Francisco de Asís, um campanário do antigo mosteiro franciscano (pago), um museu do rum com degustação (entrada paga), a Catedral de Nossa Senhora de Kazan, a Plaza da Catedral, a Pequena Bodega, o Palácio dos Governadores Espanhóis, a Plaza de Armas, o Castillo de la Real Fuerza (entrada paga), a Calle Obispo, o Hotel Ambos Mundos, a Plaza Vieja, entre outros.",
      "Visita à Plaza de la Revolución, um passeio pelo centro de Havana, onde você encontrará o Capitólio, o Gran Teatro de La Habana, o café Floridita (mencionado por Hemingway) e outros pontos de interesse.",
      "Partimos de Havana às 15:00.",
      "O almoço não está incluído no preço da excursão (custo estimado do almoço é de 15-20 €)."
    ]
  }, {
    title: "Tour ao pôr do sol em Havana",
    place: ["Havana", "La Habana"],
    details: [
      "Busca em sua acomodação ou hotel às 10:00 em Varadero.",
      "Cerca de duas horas de viagem para Havana ao longo da costa norte.",
      "Parada na ponte mais alta de Cuba (Bacunayagua), com 112 metros de altura, onde você pode desfrutar do melhor Cocktail de Abacaxi de Cuba.",
      "Viagem para Havana.",
      "Passeio pela Velha Havana, declarada Patrimônio Mundial da UNESCO em 1982.",
      "Visita à Plaza de la Catedral.",
      "Visita à Plaza del Brazo.",
      "Visita à Plaza Vieja.",
      "Visita à Plaza San Francisco de Asís.",
      "Parada no forte mais antigo de Cuba, o Castelo do Morro.",
      "Visita à estátua do Cristo de Havana.",
      "Hotel Nacional.",
      "Visita aos famosos bares de Hemingway, La Bodeguita del Medio e El Floridita.",
      "Horário de almoço (os preços variam dependendo da escolha do cliente, não incluído).",
      "Percurso ao longo do Malecón e da Nova Havana.",
      "Parada na Plaza de la Revolución.",
      "Tempo para passear no centro da cidade onde você pode ver o edifício do Capitólio, o Gran Teatro de La Habana e o Parque Central.",
      "Parada opcional no Museu do Rum.",
      "Visita à loja de tabaco.",
      "À noite, visitaremos os melhores lugares para desfrutar do pôr do sol, que pode ser do Malecón de Havana ou do Castelo do Morro.",
      "O percurso termina ao pôr do sol.",
      "Retorno a Varadero após o pôr do sol.",
      "Coisas opcionais que você pode adicionar a este tour: 25 USD/EURO por uma hora em um carro clássico conversível uma vez em Havana."
    ]
  }, {
    title: "Tour Havana + Saúdo de Canhão",
    place: ["Havana", "La Habana"],
    details: [
      "Busca em sua acomodação ou hotel às 10:00.",
      "Passeio pela Velha Havana, declarada Patrimônio Mundial da UNESCO em 1982. Aproveite o tempo livre e recomendamos uma visita ao mercado de artes e ofícios representativo que representa a identidade cultural do povo.",
      "Visita à Plaza de San Francisco de Asís, cheia de paralelepípedos, localizada às portas de Havana.",
      "Parada na Plaza de la Catedral, um dos lugares mais bonitos da Velha Havana.",
      "Parada na Plaza Vieja recentemente restaurada, uma parada obrigatória para os amantes da história.",
      "Visita à Plaza de Armas, a praça mais antiga de Havana.",
      "Parada no Palácio dos Capitães Gerais, uma das obras arquitetônicas mais importantes de Cuba.",
      "Breve parada no Hotel Ambos Mundos, um edifício em estilo eclético localizado na Velha Havana.",
      "Visita a dois dos bares mais famosos de Havana, La Bodeguita del Medio e El Floridita, para desfrutar dos coquetéis mais deliciosos.",
      "Almoço sugerido pelo guia nos restaurantes mais espetaculares de Havana onde você pode desfrutar da nossa culinária cubana típica.",
      "Viagem em carro clássico ao longo da Avenida Malecón desfrutando de uma bela vista da Baía de Havana.",
      "Passeio pela Nova Havana, visita exclusiva.",
      "Viagem panorâmica pelos bairros Vedado e Miramar.",
      "Parada na Plaza de la Revolución, uma das maiores do mundo e sede de um dos museus mais interessantes de toda Cuba.",
      "Parada panorâmica no edifício correspondente ao Capitólio, um dos lugares mais emblemáticos de Havana.",
      "Parada no Parque Central José Martí, uma grande atração para viajantes de todo o mundo, onde se combinam a história de magníficos edifícios e a natureza.",
      "Visita ao Gran Teatro de La Habana Alicia Alonso, um magnífico edifício sede do Balé e da Ópera Nacional de Cuba.",
      "Visita panorâmica à Fortaleza do Morro, uma importante fortificação construída em Cuba no século XVI.",
      "Visita panorâmica ao Cristo de Havana, uma obra escultórica monumental de cerca de 20 metros de altura.",
      "Jantar nos restaurantes recomendados de Havana de acordo com sua escolha. Escolha entre camarões ou frango, para saborear a autêntica culinária cubana.",
      "Às 21:00, você poderá desfrutar de uma das tradições cubanas: o 'tiro de canhão das nove' na visita guiada à Fortaleza de San Carlos de la Cabaña.",
      "Viagem de volta à sua acomodação em um carro clássico com o máximo conforto e segurança."
    ]
  }, {
    title: "Tour Havana + Tropicana",
    place: ["Havana", "La Habana"],
    details: [
      "Busca em sua acomodação ou hotel às 10:30.",
      "Cerca de duas horas de viagem para Havana ao longo da costa atlântica.",
      "Parada na ponte mais alta de Cuba « Bacunayagua » onde você também pode desfrutar do melhor Cocktail de Abacaxi de Cuba.",
      "Viagem para Havana.",
      "Passeio pela Velha Havana, declarada Patrimônio Mundial da UNESCO em 1982.",
      "Visita à Plaza de la Catedral.",
      "Visita à Plaza de Arma.",
      "Visita à Plaza Vieja.",
      "Visita à Plaza San Francisco de Asís.",
      "Parada no forte mais antigo de Cuba, o Castelo do Morro.",
      "Visita à estátua do Cristo de Havana.",
      "Visita aos famosos bares de Hemingway, La Bodeguita del Medio e El Floridita.",
      "Horário de almoço (os preços variam dependendo da escolha do cliente, não incluído).",
      "O percurso ao longo do Malecón e da Nova Havana.",
      "Parada na Plaza de la Revolución.",
      "Tempo para passear em direção ao centro onde você pode ver o edifício do Capitólio, o Gran Teatro de La Habana e o Parque Central.",
      "Parada opcional no Museu do Rum.",
      "Visita à loja de tabaco.",
      "Visita ao Tropicana (o hóspede paga a entrada diretamente no cabaré).",
      "Após o show, viagem de volta para Varadero."
    ]
  }, {
    title: "Tour pelo Pântano de Zapata",
    place: "Matanzas",
    details: [
      "Partida do hotel às 8 da manhã.",
      "Atravessamos a ilha de norte a sul. A viagem dura cerca de 2 horas.",
      "Ao longo do caminho, passaremos pelas cidades de Santa Marta e Cardenas, a cidade de Jovellanos, onde vivem muitos descendentes de escravos africanos, uma cooperativa chamada Vladimir Ilich Lénine, a vila de Australia, plantações de cana-de-açúcar, bananas, frutas cítricas, manga e outras culturas tropicais.",
      "Primeira parada em uma mini-fazenda com plantas e animais típicos cubanos. Por um custo adicional, você pode beber suco de cana-de-açúcar e andar em um touro zebu.",
      "Criadouro de crocodilos (5 € por pessoa).",
      "Visita aos 'Índios': Subimos em lanchas rápidas e elas nos levam a uma ilha com algumas cabanas e esculturas indígenas. Esta vila indígena custa 12 € por pessoa e dura cerca de 2 horas ou mais.",
      "Almoço incluído com 4 tipos de carne, como crocodilo, caranguejo, lagosta, camarão, peixe, veado, caracóis ou lula, por 15-20 € por pessoa. Inclui também arroz com legumes, salada e bebidas.",
      "Mar do Caribe: Desfrutaremos do Mar do Caribe na Baía dos Porcos, com águas claras, especialmente perto dos corais.",
      "Snorkeling: Aluguel de equipamento de snorkeling a 5 € por hora. Você pode trazer seu próprio equipamento. É aconselhável trazer migalhas de pão do hotel para alimentar os peixes e outras criaturas marinhas.",
      "Mergulho: Custará 25 € por 40 minutos para mergulhadores experientes. Iniciantes pagam um suplemento de 10 € por uma aula introdutória. A área de mergulho é fácil e tem navios afundados a 25-30 metros de profundidade.",
      "Cenotes: Veremos cenotes ou sumidouros nas selvas ao redor da Baía dos Porcos, onde você pode nadar. Se desejar, podemos ir à Casa do Colibri para observar pássaros (1 $).",
      "Parada opcional para nadar na praia de areia na vila de Playa Larga.",
      "História: Visitaremos importantes locais históricos relacionados à Guerra Fria na Baía dos Porcos, onde uma invasão pró-Castro foi realizada em 1961.",
      "Retorno a Varadero às 16:00."
    ]
  }, {
    title: "Tour por Matanzas",
    place: "Matanzas",
    details: [
      "Partida do hotel às 9:00.",
      "Visita às Grutas de Bellamar (entrada $5): Exploraremos as impressionantes Grutas de Bellamar, um sistema de cavernas que oferece formações rochosas únicas e espetaculares. Descobriremos a rica geologia e história deste lugar fascinante.",
      "Tour pelo centro histórico colonial: Mergulharemos na história de Matanzas explorando seu centro colonial. Visitaremos a famosa Farmácia Francesa, um marco arquitetônico icônico que reflete a influência francesa na região.",
      "Mirante de Monserrat: Desfrutaremos de uma vista panorâmica do Mirante de Monserrat, que oferece uma perspectiva impressionante da cidade e seus arredores. Um lugar perfeito para capturar memórias inesquecíveis.",
      "A Ermida: Visitaremos A Ermida, um lugar sagrado que foi testemunha de eventos históricos significativos. Aprenderemos mais sobre o significado cultural e religioso deste local.",
      "Castelo de San Severino: Exploraremos o Castelo de San Severino, uma fortaleza histórica que desempenhou um papel crucial na defesa da cidade. Descobriremos a arquitetura militar e a história que cerca este imponente castelo.",
      "Gruta de Saturno (entrada $5): Concluiremos nosso tour explorando a Gruta de Saturno, uma cenote subterrânea com águas cristalinas. Os visitantes terão a oportunidade de nadar e desfrutar da beleza natural única desta formação geológica.",
      "Retorno ao hotel por volta das 14:00."
    ]
  }, {
    title: "Excursão de um dia para Varadero a partir de Havana",
    place: "Matanzas",
    details: [
      "Busca no hotel ou B&B em carro clássico às 8:00.",
      "Saída para Varadero ao longo da costa com belas paisagens.",
      "Parada opcional na Ponte Bacunayagua: Faremos uma parada na ponte mais alta de Cuba, com 112 m de altura. Deste mirante, os visitantes podem desfrutar de esplêndidas vistas panorâmicas e saborear o melhor Cocktail de Abacaxi de Cuba.",
      "Viagem para Coral Beach para snorkeling (entradas não incluídas, 10 USD por pessoa): Exploraremos as águas cristalinas de Coral Beach, ideais para praticar snorkeling e desfrutar da vida marinha.",
      "Visita à caverna aberta de Saturno (entradas não incluídas, 5 USD por pessoa): Descobriremos a beleza da Gruta de Saturno, uma cenote subterrânea com águas cristalinas. Os visitantes terão a oportunidade de nadar e desfrutar da beleza natural única desta formação geológica.",
      "Continuação da viagem para Varadero.",
      "Visita a La casa Alcapone em Varadero: Exploraremos La Casa Alcapone, que oferece um vislumbre da história e do luxo da época.",
      "Visita ao mercado de Varadero: Mergulhe na cultura local explorando o mercado de Varadero, onde você pode encontrar artesanato local e produtos.",
      "Visita ao Parque Josone: Desfrute da beleza natural do Parque Josone, um oásis no meio de Varadero com jardins exuberantes e lagos serenos.",
      "Visita à Mansion Dupon: Exploraremos a elegante Mansion Dupon, um testemunho da arquitetura histórica de Varadero.",
      "Tempo livre na praia: Os visitantes terão tempo para relaxar nas belas praias de Varadero.",
      "O tour termina por volta das 16:30 e retorna a Havana."
    ]
  }, {
    title: "Tour Trinidad - Cienfuegos (Opcional Nicho)",
   place: ["Central Region", "Región Central"],
    details: [
      "Busca em sua acomodação ou hotel às 06:30.",
      "Viagem de três horas pela zona rural até Cienfuegos.",
      "Excursão na cidade de Cienfuegos.",
      "Visita à área de Punta Gorda, ao Palácio del Valle e ao Hotel Jagua.",
      "Parada opcional nas Cascatas de El Nicho (Isso tem um custo extra de 40 euros a ser pago pelo transporte para subir a montanha).",
      "Nota: Se visitarmos El Nicho, teremos menos tempo para passar nas outras áreas.",
      "Viagem para Trinidad para desfrutar da vista para o Mar do Caribe.",
      "Pausa para almoço em Trinidad (não incluído).",
      "Passeio pelo centro histórico como a Plaza Mayor, La Canchanchara, museus, etc.",
      "Tempo livre para outros passeios ou visita ao mercado de artesanato, se o tempo permitir.",
      "Retorno ao hotel por volta das 19:00.",
      "Este tour inclui um carro clássico com ar condicionado e um guia turístico."
    ]
  }, {
    title: "Tour das Três Cidades: Trinidad - Cienfuegos - Santa Clara",
   place: ["Central Region", "Región Central"],
    details: [
      "A viagem também pode ser feita em dois dias.",
      "Busca em sua acomodação ou hotel às 06:00.",
      "Viagem de três horas pela zona rural até Santa Clara.",
      "Parada no mausoléu de Ernesto Che Guevara e na Praça da Revolução.",
      "Parada no Parque Vidal e tour pela cidade.",
      "Parada no trem.",
      "Parada opcional nas Cascatas de El Nicho (Isso tem um custo extra de 40 euros a ser pago pelo transporte para subir a montanha).",
      "Nota: Se visitarmos El Nicho, teremos menos tempo para passar nas outras áreas. Não disponível no tour de um dia.",
      "Viagem para Trinidad para desfrutar da vista para o Mar do Caribe.",
      "Pausa para almoço em Trinidad (não incluído).",
      "Passeio pelo centro histórico como a Plaza Mayor, La Canchanchara, museus, etc.",
      "Tempo livre para outros passeios ou visita ao mercado de artesanato, se o tempo permitir.",
      "Partida para Cienfuegos.",
      "Excursão na cidade de Cienfuegos.",
      "Visita à área de Punta Gorda, ao Palácio del Valle e ao Hotel Jagua.",
      "Retorno ao hotel por volta das 21:00."
    ]
  }, {
    title: "Tour Viñales - Soroa",
    place: "Pinar del Río",
    details: [
      "Retirada no hotel ou acomodação às 8:30.",
      "Atravesse a província de Havana para continuar em direção a Soroa.",
      "Visite Soroa onde você pode tomar banho na cascata e visitar o jardim de orquídeas (você deve pagar a entrada em ambos os locais, 3-5 USD por pessoa).",
      "Nota: Se você vem de Varadero e passa muito tempo em Soroa, não terá tempo suficiente para desfrutar de Viñales.",
      "Continuação do tour para o Vale de Viñales.",
      "Parada no mirante 'Las Jazmines' (um excelente lugar para fotografia).",
      "Visita à casa do camponês para ver e aprender sobre o tabaco cubano.",
      "Visita à cidade de Viñales.",
      "Visita à Cueva del Indio (entrada não incluída, 5 USD por pessoa).",
      "Visita ao Mural da Pré-história.",
      "Desfrute de um passeio a cavalo (opcional, não incluído, 10-15 USD por pessoa).",
      "Viagem de volta para Havana ou Varadero."
    ]
  }, {
    title: "City Tour Varadero por hora",
    place: ["Matanzas"],
    details: [
      "Explore cada canto da cidade de Varadero em um carro clássico conversível por hora. O preço é de $40 USD/hora.",
      "Casa de Todos",
      "Feira de artesanato",
      "Ponto de vista fotográfico",
      "Parque Josones",
      "Boulevard de Varadero",
      "Villa Xanadu",
      "Delfinário",
      "Marina Varadero"
    ]
  }],
  itinerarySec: {
    h4: 'Itinerário'
  },
  places: [{
    id: 1,
    title: "Castelo no Céu",
    description: "O Castelo no Céu oferece uma vista panorâmica de tirar o fôlego de Pinar Del Río. Construído no século XIX como posto de observação, este sítio histórico foi restaurado para permitir que os visitantes desfrutem de sua rica história.",
    image: "/images/places/Castillo_Cielo.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 2,
    title: "Mirante de Bacunayagua",
    description: "O Mirante de Bacunayagua, construído nos anos 60, é um ponto de observação panorâmica que oferece vistas deslumbrantes do Vale do Yumurí. Este local icônico também tem uma história interessante relacionada ao desenvolvimento turístico da região.",
    image: "/images/places/Mirador_Bacunayagua.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Excursão de um dia para Varadero a partir de Havana",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "Excursão de um dia para Varadero a partir de Havana",
      "Tour de um dia em Havana",
      "Tour ao pôr do sol em Havana",
      "Tour Havana + Tropicana",
      "Tour Havana + Saúdo de Canhão"
    ]
  }, {
    id: 5,
    title: "Jardim de Orquídeas",
    description: "O Jardim de Orquídeas em Pinar Del Río é um paraíso floral estabelecido no século XX. Com uma coleção impressionante de orquídeas nativas e internacionais, este lugar oferece uma experiência única para entusiastas de botânica.",
    image: "/images/places/Orquideario.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 6,
    title: "Gruta do Índio",
    description: "A Gruta do Índio, descoberta no século XIX, é um fascinante sistema de cavernas com formações geológicas únicas. Ao longo dos anos, tem sido palco de descobertas arqueológicas que revelam a presença de culturas antigas na região.",
    image: "/images/places/nuevos_places/Cueva_Indio.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 7,
    title: "Floridita",
    description: "O Floridita é um bar histórico conhecido por sua conexão com Ernest Hemingway. Fundado no início do século XIX, este lugar icônico oferece uma mistura de história, coquetéis tradicionais, música ao vivo e uma atmosfera animada.",
    image: "/images/places/Floridita.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour Havana + Tropicana",
      "Tour Havana + Saúdo de Canhão",
      "Tour de um dia em Havana",
      "Tour ao pôr do sol em Havana",

    ]
  }, {
    id: 8,
    title: "Bodeguita del Medio",
    description: "A Bodeguita del Medio, fundada no século XX, é um bar e restaurante histórico. Renomada por seus mojitos autênticos, música afro-cubana e atmosfera vibrante, é uma parada obrigatória para quem busca a cultura cubana.",
    image: "/images/places/Bodeguita.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour Havana + Tropicana",
      "Tour Havana + Saúdo de Canhão",
      "Tour de um dia em Havana",
      "Tour ao pôr do sol em Havana",

    ]
  }, {
    id: 9,
    title: "Cavaleiro de Paris",
    description: "O Cavaleiro de Paris é uma estátua histórica em Havana, representando um personagem único do passado da cidade. Este marco oferece insights sobre a história local, praças próximas, arte urbana e fotografia arquitetônica.",
    image: "/images/places/Caballero_Paris.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour Havana + Tropicana",
      "Tour Havana + Saúdo de Canhão",
      "Tour de um dia em Havana",
      "Tour ao pôr do sol em Havana",

    ]
  }, {
    id: 10,
    title: "Cristo de Havana",
    description: "O Cristo de Havana é um monumento religioso que oferece vistas panorâmicas. Construído em meados do século XX, serve como símbolo de espiritualidade, oferecendo aos visitantes passeios serenos, eventos espirituais e insights sobre a cultura católica.",
    image: "/images/places/Cristo.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour de um dia em Havana",
      "Tour ao pôr do sol em Havana",
      "Tour Havana + Tropicana",
      "Tour Havana + Saúdo de Canhão",

    ]
  }, {
    id: 11,
    title: "O Capitólio",
    description: "O Capitólio, um edifício neoclássico icônico, ergue-se como um marco político em Havana. Construído no início do século XX, oferece um vislumbre da história política, visitas guiadas, eventos culturais e vistas panorâmicas de sua cúpula.",
    image: "/images/places/Capitolio.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour Havana + Tropicana",
      "Tour Havana + Saúdo de Canhão",
      "Tour de um dia em Havana",
      "Tour ao pôr do sol em Havana",

    ]
  }, {
    id: 12,
    title: "Praça da Revolução",
    description: "A Praça da Revolução, localizada em Havana, é uma praça icônica com monumentos revolucionários. Servindo como ponto focal para eventos públicos, apresenta arte política, discursos históricos e uma posição central para reuniões.",
    image: "/images/places/Plaza_Rev.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour de um dia em Havana",
      "Tour ao pôr do sol em Havana",
      "Tour Havana + Tropicana",
      "Tour Havana + Saúdo de Canhão",

    ]
  }, {
    id: 13,
    title: "Varadero",
    description: "Varadero é uma renomada estância balnear em Matanzas, atraindo visitantes com suas praias intocadas e vida noturna vibrante. Fundada no início do século XX, oferece esportes aquáticos, relaxamento na praia e experiências culturais.",
    image: "/images/places/Varadero.webp",
    tag: "Matanzas",
    itinerary: [
      "Jeep Safari",
      "Excursión de un día a Varadero desde La Habana",
      "Excursão de um dia para Varadero a partir de Havana",
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Excursão de um dia para Varadero a partir de Havana",
      "City Tour Varadero por hora"
    ]
  }, {
    id: 14,
    title: "Parque da Liberdade",
    description: "O Parque da Liberdade em Matanzas é um oásis verde com um passado histórico. Fundado no século XX, serve como área recreativa, com espaços verdes, monumentos históricos e eventos culturais.",
    image: "/images/places/Parque_Libertad.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursion de un día a Varadero desde La Habana",
      "Tour por Matanzas",
      "Excursão de um dia para Varadero a partir de Havana",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Excursão de um dia para Varadero a partir de Havana",
      "Tour por Matanzas"
    ]
  }, {
    id: 15,
    title: "Gruta de Bellamar",
    description: "A Gruta de Bellamar, descoberta no século XIX, é um fascinante sistema de cavernas com formações geológicas únicas. Ao longo dos anos, tem sido palco de descobertas arqueológicas que revelam a presença de culturas antigas na região.",
    image: "/images/places/Bellamar_Cave.webp",
    tag: "Matanzas",
    itinerary: [
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour por Matanzas",
      "Tour por Matanzas"
    ]
  }, {
    id: 16,
    title: "Casa de Al Capone",
    description: "A Casa de Al Capone, construída nos anos 20, é um testemunho silencioso da era da proibição. Este local histórico oferece um vislumbre único da vida do famoso gângster e sua influência na região de Matanzas durante aqueles anos turbulentos.",
    image: "/images/places/Casa_de_Al.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Excursão de um dia para Varadero a partir de Havana",
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Excursão de um dia para Varadero a partir de Havana",
      "City Tour Varadero por hora"
    ]
  }, {
    id: 17,
    title: "Gruta de Saturno",
    description: "A Gruta de Saturno, conhecida por sua impressionante piscina natural subterrânea, tem uma história que remonta à era pré-colombiana. Utilizada pelos indígenas Taínos, a gruta tem sido um local sagrado e um refúgio ao longo dos séculos.",
    image: "/images/places/Cueva_Saturno.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Excursão de um dia para Varadero a partir de Havana",
      "Jeep Safari",
      "Excursão de um dia para Varadero a partir de Havana"
    ]
  }, {
    id: 18,
    title: "Guama",
    description: "Guama é uma vila Taíno reconstruída na região de Matanzas. Este local único oferece aos visitantes uma experiência imersiva na cultura indígena, com réplicas autênticas das habitações Taíno e atividades que destacam a rica herança dos nativos da ilha.",
    image: "/images/places/Guama.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por la Ciénaga de Zapata",
      "Tour pelo Pântano de Zapata",
      "Экскурсия в Циенага-де-Сапата",
      "Tour pelo Pântano de Zapata"
    ]
  }, {
    id: 19,
    title: "Mansion Dupon",
    description: "A Mansion Dupón, construída no final do século XIX, é um exemplo excepcional de arquitetura colonial em Matanzas. Esta majestosa residência tem sido testemunha de eventos históricos e culturais ao longo dos anos, agora aberta ao público para compartilhar sua rica história.",
    image: "/images/places/Mansion_Dupon.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Excursão de um dia para Varadero a partir de Havana",
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Excursão de um dia para Varadero a partir de Havana",
      "City Tour Varadero por hora"
    ]
  }, {
    id: 20,
    title: "Soroa",
    description: "Soroa, conhecida como o 'arco-íris de Cuba', é famosa por seu jardim botânico e cachoeiras. Fundada no século XIX, a área é um paraíso natural que atrai entusiastas de flora e fauna de todo o mundo há gerações.",
    image: "/images/places/Pinar_Cascada.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 21,
    title: "Museu Farmacêutico",
    description: "O Museu Farmacêutico em Matanzas, aberto no início do século XX, é um testemunho do desenvolvimento da farmacologia na região. Exibe uma fascinante coleção de instrumentos médicos antigos e oferece aos visitantes um vislumbre único da história da medicina.",
    image: "/images/places/Museo_Farmaceutico.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por Matanzas",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour por Matanzas"
    ]
  }, {
    id: 22,
    title: "Cidade de Matanzas",
    description: "A cidade de Matanzas, também conhecida como a 'Atenas de Cuba', tem uma rica história que vai desde a era colonial até os dias atuais. Sua arquitetura única, praças charmosas e eventos culturais tornam esta cidade uma parada obrigatória para entusiastas de história e cultura.",
    image: "/images/places/plaza_mtz.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursion de un día a Varadero desde La Habana",
      "Tour por Matanzas",
      "Excursão de um dia para Varadero a partir de Havana",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Excursão de um dia para Varadero a partir de Havana",
      "Tour por Matanzas"
    ]
  }, {
    id: 23,
    title: "The Beatles",
    description: "The Beatles em Matanzas é uma vibrante homenagem à icônica banda de rock. Este local oferece uma experiência musical única com exposições, eventos temáticos e uma atmosfera que transporta os visitantes para a emocionante era da Beatlemania.",
    image: "/images/places/the_beatles.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Excursão de um dia para Varadero a partir de Havana",
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Excursão de um dia para Varadero a partir de Havana",
      "City Tour Varadero por hora"
    ]
  }, {
    id: 27,
    title: "Castillo de la Real Fuerza",
    description: "Visite o histórico Castillo de la Real Fuerza, uma fortaleza que outrora protegia Havana de ataques de piratas. Explore seu passado histórico e desfrute da vista panorâmica da cidade.",
    image: "/images/places/nuevos_places/Castillo_Real_Fuerza.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour Havana + Tropicana",
      "Tour Havana + Saúdo de Canhão",
      "Tour de um dia em Havana",
      "Tour ao pôr do sol em Havana",

    ]
  }, {
    id: 28,
    title: "Catedral de Nossa Senhora de Kazan",
    description: "Admire a beleza arquitetônica da Catedral de Nossa Senhora de Kazan, uma catedral que mostra uma mistura de estilos diferentes. Descubra seu significado religioso e cultural.",
    image: "/images/places/nuevos_places/Catedral_Senora_Kazan.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "One day tour in Havana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour de um dia em Havana",

    ]
  }, {
    id: 29,
    title: "Cienfuegos",
    description: "Explore a pitoresca cidade de Cienfuegos, conhecida por sua influência francesa e sua bela orla marítima. Mergulhe nas artes e cultura locais e na atmosfera acolhedora.",
    image: "/images/places/nuevos_places/Cienfuegos.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Trinidad - Cienfuegos Tour (Optional Nicho)",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Tour das Três Cidades: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 30,
    title: "Criadouro de Crocodilos",
    description: "Visite o Criadouro de Crocodilos e observe esses fascinantes répteis em seu habitat natural. Aprenda sobre os esforços de conservação de crocodilos e desfrute de uma experiência única com a vida selvagem.",
    image: "/images/places/nuevos_places/Criadero_Cocodrilos.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por la Ciénaga de Zapata",
      "Tour pelo Pântano de Zapata",
      "Экскурсия в Циенага-де-Сапата",
      "Tour pelo Pântano de Zapata"
    ]
  }, {
    id: 32,
    title: "Igreja da Santíssima Trindade",
    description: "Visite a Igreja da Santíssima Trindade, uma igreja histórica em Trinidad. Admire sua arquitetura e mergulhe na herança religiosa e cultural desta encantadora cidade cubana.",
    image: "/images/places/nuevos_places/Iglesia_Trinidad.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Trinidad - Cienfuegos Tour (Optional Nicho)",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Tour das Três Cidades: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 33,
    title: "Parque Josone",
    description: "Relaxe nos exuberantes arredores do Parque Josone, um belo parque com jardins, lagos e áreas recreativas. Desfrute de uma fuga tranquila da agitação da vida cotidiana.",
    image: "/images/places/nuevos_places/Josone.webp",
    tag: "Matanzas",
    itinerary: [
      "Excursión de un día a Varadero desde La Habana",
      "Excursão de um dia para Varadero a partir de Havana",
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "Excursão de um dia para Varadero a partir de Havana",
      "City Tour Varadero por hora"
    ]
  }, {
    id: 34,
    title: "Monserrate",
    description: "Suba ao topo de Monserrate para admirar vistas deslumbrantes das paisagens circundantes. Este ponto de vista oferece uma perspectiva única da cidade e seus arredores pitorescos.",
    image: "/images/places/nuevos_places/Monserrate.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por Matanzas",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour por Matanzas"
    ]
  }, {
    id: 35,
    title: "Monumento a Ernesto Che Guevara",
    description: "Preste homenagem ao icônico líder revolucionário no Monumento a Ernesto Che Guevara. Explore o memorial e descubra a vida e o legado de Che Guevara.",
    image: "/images/places/nuevos_places/Monumento_Ernesto_Che_Guevara.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour das Três Cidades: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 36,
    title: "Monumento ao ataque do trem blindado",
    description: "Visite o Monumento ao ataque do trem blindado, que comemora um evento histórico durante a Revolução Cubana. Aprenda sobre a coragem e o significado deste momento crucial.",
    image: "/images/places/nuevos_places/Monumento_Tren_Blindado.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour das Três Cidades: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 37,
    title: "Mural da Pré-história",
    description: "Admire o Mural da Pré-história, um mural colossal ao ar livre que retrata a história evolutiva da vida na Terra. Explore a vibrante obra de arte situada em um cenário natural.",
    image: "/images/places/nuevos_places/Mural_Prehistoria.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 39,
    title: "Museu do Rum",
    description: "Saboreie a rica história do rum cubano no Museu do Rum. Descubra a arte da produção de rum, aprenda seu significado cultural e desfrute de degustações dos finos runs cubanos.",
    image: "/images/places/nuevos_places/Museo_Ron.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour de um dia em Havana",
      "Tour ao pôr do sol em Havana",

    ]
  }, {
    id: 40,
    title: "Palácio dos Governadores Espanhóis",
    description: "Dê um salto no tempo no Palácio dos Governadores Espanhóis, um palácio histórico que mostra a arquitetura colonial. Explore os quartos e corredores que sussurram histórias do passado.",
    image: "/images/places/nuevos_places/Palacio_Gobernadores.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour Havana + Tropicana",
      "Tour Havana + Saúdo de Canhão",
      "Tour de um dia em Havana",
      "Tour ao pôr do sol em Havana",
    ]
  }, {
    id: 41,
    title: "Palácio do Vale",
    description: "Experimente a grandiosidade do Palácio do Vale, uma joia arquitetônica que mistura vários estilos. Admire os detalhes intrincados e desfrute das vistas panorâmicas das paisagens circundantes.",
    image: "/images/places/nuevos_places/Palacio_Valle.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Trinidad - Cienfuegos Tour (Optional Nicho)",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Tour das Três Cidades: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 42,
    title: "Playa Larga",
    description: "Relaxe nas praias intocadas de Playa Larga, uma bela praia conhecida por sua tranquilidade e beleza natural. Aproveite o sol, nade e fuja pacificamente para o mar.",
    image: "/images/places/nuevos_places/Playa_Larga.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por la Ciénaga de Zapata",
      "Tour pelo Pântano de Zapata",
      "Экскурсия в Циенага-де-Сапата",
      "Tour pelo Pântano de Zapata"
    ]
  }, {
    id: 43,
    title: "Praça Principal",
    description: "Passeie pela histórica Praça Principal, a praça mais antiga de Havana. Mergulhe no charme colonial, explore os mercados de livros e desfrute da atmosfera animada.",
    image: "/images/places/nuevos_places/Plaza_Armas.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour de um dia em Havana",
      "Tour ao pôr do sol em Havana",
      "Tour Havana + Tropicana",
      "Tour Havana + Saúdo de Canhão",

    ]
  }, {
    id: 45,
    title: "Praça da Santíssima Trindade",
    description: "Experimente o charme da Plaza de la Santísima Trinidad, uma praça histórica em Trinidad. Admire a arquitetura colonial, explore as lojas locais e mergulhe na riqueza cultural da área.",
    image: "/images/places/nuevos_places/Plaza.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Trinidad - Cienfuegos Tour (Optional Nicho)",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Tour das Três Cidades: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 46,
    title: "Praça de São Francisco",
    description: "Descubra a beleza da Praça de São Francisco, uma praça rodeada por edifícios históricos. Aproveite a atmosfera animada, visite as atrações próximas e absorva a rica história.",
    image: "/images/places/nuevos_places/San_Francisco.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour de um dia em Havana",
      "Tour ao pôr do sol em Havana",
      "Tour Havana + Tropicana",
      "Tour Havana + Saúdo de Canhão",

    ]
  }, {
    id: 47,
    title: "Fortaleza de San Severino",
    description: "Explore a imponente Fortaleza de San Severino, uma fortaleza com uma história rica. Descubra seu papel na proteção da cidade e desfrute das vistas panorâmicas das paisagens circundantes.",
    image: "/images/places/nuevos_places/San_Seberino.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por Matanzas",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour por Matanzas"
    ]
  }, {
    id: 48,
    title: "Santa Clara",
    description: "Mergulhe na vibrante cidade de Santa Clara, conhecida por sua história revolucionária. Explore os pontos de referência, descubra Che Guevara e experimente a animada cena cultural.",
    image: "/images/places/nuevos_places/Santa_Clara.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour das Três Cidades: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 49,
    title: "Teatro Nacional Alicia Alonso",
    description: "Experimente a grandiosidade do Teatro Nacional Alicia Alonso, um renomado teatro em Havana. Assista a apresentações, admire a beleza arquitetônica e mergulhe nas artes e cultura.",
    image: "/images/places/nuevos_places/Teatro_Nacional_Alicia_Alonso.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour de un día en La Habana",
      "Однодневный тур по Гаване",
      "Tour al Atardecer en La Habana",
      "Тур на закате в Гаване",
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "One day tour in Havana",
      "Sunset Tour in Havana",
      "Havana Tour + Cannon Shot",
      "Havana Tour + Tropicana",
      "City Tour Havana for Hour",
      "Tour de Ciudad en La Habana por Hora",
      "Tour de um dia em Havana",
      "Tour ao pôr do sol em Havana",
      "Tour Havana + Tropicana",
      "Tour Havana + Saúdo de Canhão",

    ]
  }, {
    id: 50,
    title: "Trinidad",
    description: "Descubra o sítio do Patrimônio Mundial da UNESCO de Trinidad, uma cidade parada no tempo. Passeie pelas ruas de paralelepípedos, admire a arquitetura colonial e viva a rica história e cultura.",
    image: "/images/places/nuevos_places/Trinidad.webp",
    tag: ["Central Region", "Región Central"],
    itinerary: [
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
      "Tour de Tres Ciudades: Trinidad - Cienfuegos - Santa Clara",
      "Тур по tre tre città Trinidad - Сьенфуэгос - Санта-Клара",
      "Tour Trinidad - Cienfuegos (Nicho opcional)",
      "Tour Tres ciudades Trinidad - Cienfuegos - Santa Clara",
      "Trinidad - Cienfuegos Tour (Optional Nicho)",
      "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
      "Tour Trinidad - Cienfuegos (Opcional Nicho)",
      "Tour das Três Cidades: Trinidad - Cienfuegos - Santa Clara"
    ]
  }, {
    id: 51,
    title: "Tropicana",
    description: "Experimente a vibrante vida noturna de Havana no Tropicana, um lendário cabaré. Desfrute de shows deslumbrantes, música animada e o glamour do local de entretenimento mais icônico de Cuba.",
    image: "/images/places/nuevos_places/Tropicana.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Tropicana",
      "Тур по Гаване + Тропикана",
      "Havana Tour + Tropicana",
      "Tour Havana + Tropicana"
    ]
  }, {
    id: 52,
    title: "Vale do Yumurí",
    description: "Explore o pitoresco Vale do Yumurí, um vale exuberante cercado por colinas e rios. Desfrute de caminhadas na natureza, capture vistas deslumbrantes e mergulhe na tranquilidade da paisagem.",
    image: "/images/places/nuevos_places/Valle_Yumuri.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por Matanzas",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour por Matanzas"
    ]
  }, {
    id: 53,
    title: "Viñales",
    description: "Fuja para a beleza cênica de Viñales, um vale cercado por majestosas colinas calcárias. Descubra as fazendas de tabaco, explore as cavernas e desfrute da atmosfera descontraída da Cuba rural.",
    image: "/images/places/nuevos_places/Viñales.webp",
    tag: "Pinar Del Río",
    itinerary: [
      "Tour Viñales - Soroa",
      "Тур Виньялес - Сороа",
      "Viñales - Soroa Tour",
      "Tour Viñales - Soroa"
    ]
  }, {
    id: 54,
    title: "Vista de Monserrate",
    description: "Suba à Vista de Monserrate para desfrutar de vistas panorâmicas de Havana. Capture paisagens urbanas de tirar o fôlego, desfrute de uma atmosfera serena e admire a beleza da capital cubana do alto.",
    image: "/images/places/nuevos_places/Vistas_Monserrate.webp",
    tag: "Matanzas",
    itinerary: [
      "Tour por Matanzas",
      "Matanzas Tour",
      "Тур по Матансасу",
      "Tour por Matanzas"
    ]
  }, {
    id: 55,
    title: "Delfinário de Varadero",
    description: "O Delfinário de Varadero, em Cuba, oferece shows emocionantes e atividades interativas que permitem aos visitantes interagir de perto com golfinhos, ao mesmo tempo que promovem a conservação marinha.",
    image: "/images/places/nuevos_places/Delfinario_Varadero.webp",
    tag: "Matanzas",
    itinerary: [
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по городу Варадеро по часам",
      "City Tour Varadero por hora"
    ]
  }, {
    id: 56,
    title: "Marina de Varadero",
    description: "A Marina Varadero é um porto turístico localizado em Varadero, Cuba, que oferece serviços náuticos completos e alojamento para embarcações, promovendo o turismo marítimo e a navegação de recreio.",
    image: "/images/places/nuevos_places/Marina_Varadero.webp",
    tag: "Matanzas",
    itinerary: [
      "City Tour Varadero for Hour",
      "Однодневная экскурсия в Варадеро из Гаваны",
      "Recorrido por la ciudad de Varadero por hora",
      "Тур по гороdu Varadero по часам",
      "City Tour Varadero por hora"
    ]
  }, {
    id: 57,
    title: "Saúdo de canhão no Castelo do Morro Cabaña",
    description: "Experimente a histórica cerimônia do Saúdo de canhão no Castelo do Morro Cabaña, um ritual noturno que remonta a séculos, oferecendo um vislumbre do rico passado de Cuba.",
    image: "/images/places/nuevos_places/Cañonazo.webp",
    tag: ["Havana", "La Habana"],
    itinerary: [
      "Tour por La Habana + Cañonazo",
      "Тур по Гаване + Салют из пушки",
      "Havana Tour + Cannon Shot",
      "Tour Havana + Saúdo de Canhão"
    ]
  }]
}
} as const;
