export const languages = {
    en: 'en',
    es: 'es',
    ru:'ru'
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
            'p':'    Experience reliable, efficient taxi service with professional drivers. We guarantee safe, punctual, and comfortable rides.',
            'button':'Book Now',
          },
        prov:{
          visit:'Visit',
          'h2':'We Will Help You Travel And You Can Consult With Us.',
          'p':'Discover New horizons with us. Travel, explore and live the city.',
          places: [
            {
              name:"Pinar del Río",
              slug:'Pinar del Río',
              desc:"Tobacco, mogotes, beaches. Exuberant nature, World Heritage Site, Caribbean authenticity, fascinating culture.",
              img:'/images/pinar_rio.webp',
              href:"/"
          },
         
          {
              name:"Havana",
              slug:'La Habana',
              desc:"Capital of Cuba, colonial history, iconic architecture, vibrant culture, music and captivating beaches.",
              img:'/images/cristo_vista_havana.webp',
              href:"/"
          },
          {
              name:"Matanzas",
              slug:"Matanzas",
              desc:"Spectacular beaches, warm weather, varied tourist activities and great hospitality.",
              img:'/images/Parque_Libertad.webp',
              href:"/"
          },
          {
              name:"Central Region",
              slug:"Región Central",
              desc:"Colonial architecture, traditional music, beautiful beaches and natural parks.",
              img:'/images/Trinidad.webp',
              href:"/"
          },
         ]
        },
        
        aboutComp: {

            'h2':"About Company",
            'pdesc':"We stand out for providing unprecedented tourist experiences, offering personalized tours in classic cars that capture the vintage essence of the island. With competitive rates, we are committed to providing quality service that reflects Cuban authenticity and hospitality.",
            'p':"Discover the island with us and make your visit to Cuba an unforgettable experience.",
            'secT':"Security",
            'secP':"We create the conditions so that your trip is completely safe.",
            'conT':"Comfort",
            'conP':"Travel with the greatest comfort and the best attention.",
        },

        about2:{
            h2:'Live The Best Experience With Our Work Team.',
             elementos:[
             {
                num: '1',
                title: 'Travel To Your Place',
                text: 'Start the booking by sending a message via WhatsApp with your details and preferences.',
                active: false
                },
                {
                num: '2',
                title: 'Find Your Travel Best Place',
                text: 'Collaborate with our team to personalize your trip according to your needs.',
                active: false
                },
               {
                num: '3',
                title: 'Enjoy The Journey With Pleasure',
                text: 'Experience your journey with our best drivers and guides.',
                active: true
                }
              ]
        },
        services: {
                    h2: "With us you will find the best service on the island.",
                    p:"We have a team of highly qualified professionals.",
                    serv1h4: 'Different Destinations',
                    serv1p: 'Explore a variety of unique destinations, from stunning mountains to vibrant beaches and cities.',
                    serv2h4: 'Competitive prices',
                    serv2p: 'We offer competitive prices to ensure your trip is affordable and memorable.',
                    serv3h4: 'Easy Reservation',
                    serv3p: 'We make booking your trip a simple and fast process.',
      
        },
        feedback: {
            h2: 'What clients say about our tours',
            p:'Find out what our customers have to say about our tours, as they share their unforgettable experiences and rave reviews.',
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
            'h1':'CAMINO FÁCIL A',
            'h12':'LA CIUDAD',
            'span':'EXPLORAR',
            'p':"Experimenta la confiabilidad, eficiencia y calidad que solo nuestro servicio de taxis puede ofrecer. Conducidos por profesionales altamente calificados, garantizamos un viaje seguro, puntual y cómodo."
            ,'button':'Reserva Ahora',
        },
        prov:{
          visit:'Visita',
            'h2':'Le ayudaremos a viajar y puede consultar con nosotros.',
            'p':'Descubre Nuevos horizontes con nosotros. Viaja, explora y vive la ciudad.',
            places: [
             
                    {
                     name: "Pinar del Río",
                     slug: 'Pinar del Río',
                     desc: "Tabaco, mogotes, playas. Naturaleza exuberante, Sitio de Patrimonio Mundial, autenticidad caribeña, cultura fascinante.",
                     img: '/images/pinar_rio.webp',
                     href: "/"
                     },
                     {
                     name: "La Habana",
                     slug: 'La Habana',
                     desc: "Capital de Cuba, historia colonial, arquitectura icónica, cultura vibrante, música y playas cautivadoras.",
                     img: '/images/cristo_vista_havana.webp',
                     href: "/"
                     },
                     {
                     name: "Matanzas",
                     slug: "Matanzas",
                     desc: "Playas espectaculares, clima cálido, diversas actividades turísticas y gran hospitalidad.",
                     img: '/images/Parque_Libertad.webp',
                     href: "/"
                     },
                     {
                     name: "Región Central",
                     slug: "Región Central",
                     desc: "Arquitectura colonial, música tradicional, hermosas playas y parques naturales.",
                     img: '/images/Trinidad.webp',
                     href: "/"
                     }
           ]
        },
        aboutComp:{
              'h2':"Acerca de la compañía",
              'pdesc':"Nos destacamos por proporcionar experiencias turísticas sin precedentes, ofreciendo tours personalizados en autos clásicos que capturan la esencia vintage de la isla. Con tarifas competitivas, estamos comprometidos con la prestación de un servicio de calidad que refleja la autenticidad cubana y la hospitalidad.",
              'p':"Descubre la isla con nosotros y haz que tu visita a Cuba sea una experiencia inolvidable.",
              'secT':"Seguridad",
              'secP':"Creamos las condiciones para que su viaje sea totalmente seguro.",
              'conT':"Comfort",
              'conP':"Viaje con la mayor comodidad y las mejores atenciones.", 
        },
        about2:{
              h2:'Vive La Mejor Experiencia Con Nuestro Equipo de Trabajo.',
              elementos:[
                 {
                  num: '1',
                  title: 'Viaja a Tu Lugar',
                  text: 'Inicia la reserva enviando un mensaje a través de WhatsApp con tus detalles y preferencias.',
                  activo: false
                  },
                 {
                  num: '2',
                  title: 'Encuentre Su Mejor Opción de Viaje',
                  text: 'Colabora con nuestro equipo para personalizar tu viaje según tus necesidades.',
                  activo: false
                  },
                 {
                  num: '3',
                  title: 'Disfruta del Viaje con Placer',
                  text: 'Vive tu viaje con nuestros mejores conductores y guías.',
                  activo: true
                  }
                ]
        },
        services: {
                  h2: "Con nosotros encontrarás el mejor servicio en la isla.",
                  p: "Contamos con un equipo de profesionales altamente calificados.",
                  serv1h4: 'Destinos Diferentes',
                  serv1p: 'Explora una variedad de destinos únicos, desde impresionantes montañas hasta playas y ciudades vibrantes.',
                  serv2h4: 'Precios Competitivos',
                  serv2p: 'Ofrecemos precios competitivos para asegurar que tu viaje sea asequible y memorable.',
                  serv3h4: 'Reservación Fácil',
                  serv3p: 'Hacemos que reservar tu viaje sea un proceso simple y rápido.',
        },
        feedback: {
              h2: 'Lo que dicen los clientes sobre nuestros tours',
              p:'Descubra lo que nuestros clientes tienen que decir sobre nuestros tours, mientras comparten sus experiencias inolvidables y críticas favorables.',
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
        'h1':'ЛЕГКИЙ ПУТЬ ДЛЯ',
        'h12':'ГОРОДА',
        'span':'ИЗУЧЕНИЯ',
        'p':"Почувствуйте надежность, эффективность и качество, которые может предложить только наша служба такси. Под руководством высококвалифицированных специалистов мы гарантируем безопасную, пунктуальную и комфортную поездку."
        ,'button':'Забронируйте сейчас',
       },
      prov:{
        visit:'Посещать',
          'h2':'Мы поможем вам путешествовать и вы можете проконсультироваться с нами.',
          'p':'Откройте для себя новые горизонты вместе с нами. Путешествуйте, исследуйте и живите в городе.',
          places: [
            {
              name: "Пинар-дель-Рио",
              slug:'Pinar del Río',
              desc: "Табак, моготы, пляжи. Изобильная природа, объект Всемирного наследия, карибская подлинность, захватывающая культура.",
              img: '/images/pinar_rio.webp',
              href: "/"
            },
            {
              name: "Гавана",
              slug:'La Habana',
              desc: "Столица Кубы, колониальная история, культовая архитектура, живая культура, музыка и завораживающие пляжи.",
              img: '/images/cristo_vista_havana.webp',
              href: "/"
            },
            {
              name: "Матансас",
              slug:"Matanzas",
              desc: "Впечатляющие пляжи, теплое климат, разнообразные туристические мероприятия и прекрасное гостеприимство.",
              img: '/images/Parque_Libertad.webp',
              href: "/"
            },
            {
              name: "Центральный регион",
              slug:"Región Central",
              desc: "Колониальная архитектура, традиционная музыка, красивые пляжи и природные парки.",
              img: '/images/Trinidad.webp',
              href: "/"
            }
         ]
        }    ,
      aboutComp:{
            'h2':"О компании",
            'pdesc':"Мы выделяемся тем, что предоставляем беспрецедентные туристические впечатления, предлагая индивидуальные туры на классических автомобилях, которые передают винтажную сущность острова. Благодаря конкурентоспособным ценам мы стремимся предоставлять качественные услуги, отражающие кубинскую аутентичность и гостеприимство.",
            'p':"Откройте для себя остров вместе с нами и сделайте свой визит на Кубу незабываемым.",
            'secT':"Безопасность",
            'secP':"Мы создаем условия для того, чтобы ваша поездка была полностью безопасной.",
            'conT':"Комфорт",
            'conP':"Путешествуйте с максимальным комфортом и лучшим вниманием.",
           },
      about2:{
            h2:'Получайте лучший опыт работы с нашей рабочей командой.',
            elementos:[
              {
                num: '1',
                title: 'Путешествие к вам',
                text: 'Начните бронирование, отправив сообщение через WhatsApp со своими данными и предпочтениями.',
                активный: false
              },
               {
                num: '2',
                title: 'Найдите свое лучшее место для путешествия',
                text: 'Сотрудничайте с нашей командой, чтобы настроить ваше путешествие в соответствии с вашими потребностями.',
                активный: false
              },
              {
                num: '3',
                title: 'Насладитесь путешествием с удовольствием',
                text: 'Осуществите свое путешествие с нашими лучшими водителями и гидами.',
                активный: true
              }
            ]
        },
      services: {
              h2: "С нами вы найдете лучшее обслуживание на острове.",
              p: "У нас есть команда высококвалифицированных специалистов.",
              serv1h4: 'Различные направления',
              serv1p: 'Исследуйте разнообразие уникальных направлений, от величественных гор до живописных пляжей и оживленных городов.',
              serv2h4: 'Конкурентоспособные цены',
              serv2p: 'Мы предлагаем конкурентоспособные цены, чтобы ваше путешествие было доступным и запоминающимся.',
              serv3h4: 'Простое бронирование',
              serv3p: 'Мы делаем процесс бронирования вашего путешествия простым и быстрым.',
              
        },
       feedback: {
               h2: 'Что говорят клиенты о наших турах',
               p: 'Узнайте, что говорят наши клиенты о наших турах, делясь своими незабываемыми впечатлениями и положительными отзывами.',
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
} as const;
