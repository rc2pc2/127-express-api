const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

app.get("/clubs", (request, response) => {
    const status = [
        {
            "name": "Manchester United",
            "country": "England",
            "founded": 1878,
            "stadium": "Old Trafford",
            "capacity": 74879,
            "manager": "Erik ten Hag"
        },
        {
            "name": "Real Madrid",
            "country": "Spain",
            "founded": 1902,
            "stadium": "Santiago Bernabéu",
            "capacity": 81044,
            "manager": "Carlo Ancelotti"
        },
        {
            "name": "Barcelona",
            "country": "Spain",
            "founded": 1899,
            "stadium": "Camp Nou",
            "capacity": 99354,
            "manager": "Xavi"
        },
        {
            "name": "Bayern Munich",
            "country": "Germany",
            "founded": 1900,
            "stadium": "Allianz Arena",
            "capacity": 75000,
            "manager": "Thomas Tuchel"
        },
        {
            "name": "Juventus",
            "country": "Italy",
            "founded": 1897,
            "stadium": "Allianz Stadium",
            "capacity": 41507,
            "manager": "Massimiliano Allegri"
        },
        {
            "name": "Paris Saint-Germain",
            "country": "France",
            "founded": 1970,
            "stadium": "Parc des Princes",
            "capacity": 47929,
            "manager": "Luis Enrique"
        },
        {
            "name": "Chelsea",
            "country": "England",
            "founded": 1905,
            "stadium": "Stamford Bridge",
            "capacity": 41837,
            "manager": "Mauricio Pochettino"
        },
        {
            "name": "Liverpool",
            "country": "England",
            "founded": 1892,
            "stadium": "Anfield",
            "capacity": 53394,
            "manager": "Jürgen Klopp"
        },
        {
            "name": "Arsenal",
            "country": "England",
            "founded": 1886,
            "stadium": "Emirates Stadium",
            "capacity": 60260,
            "manager": "Mikel Arteta"
        },
        {
            "name": "Manchester City",
            "country": "England",
            "founded": 1880,
            "stadium": "Etihad Stadium",
            "capacity": 53400,
            "manager": "Pep Guardiola"
        },
        {
            "name": "AC Milan",
            "country": "Italy",
            "founded": 1899,
            "stadium": "San Siro",
            "capacity": 80018,
            "manager": "Stefano Pioli"
        },
        {
            "name": "Inter Milan",
            "country": "Italy",
            "founded": 1908,
            "stadium": "San Siro",
            "capacity": 80018,
            "manager": "Simone Inzaghi"
        },
        {
            "name": "Atlético Madrid",
            "country": "Spain",
            "founded": 1903,
            "stadium": "Wanda Metropolitano",
            "capacity": 68456,
            "manager": "Diego Simeone"
        },
        {
            "name": "Tottenham Hotspur",
            "country": "England",
            "founded": 1882,
            "stadium": "Tottenham Hotspur Stadium",
            "capacity": 62850,
            "manager": "Ange Postecoglou"
        },
        {
            "name": "Borussia Dortmund",
            "country": "Germany",
            "founded": 1909,
            "stadium": "Signal Iduna Park",
            "capacity": 81365,
            "manager": "Edin Terzić"
        },
        {
            "name": "Ajax",
            "country": "Netherlands",
            "founded": 1900,
            "stadium": "Johan Cruyff Arena",
            "capacity": 54790,
            "manager": "Maurice Steijn"
        },
        {
            "name": "Benfica",
            "country": "Portugal",
            "founded": 1904,
            "stadium": "Estádio da Luz",
            "capacity": 64642,
            "manager": "Roger Schmidt"
        },
        {
            "name": "Porto",
            "country": "Portugal",
            "founded": 1893,
            "stadium": "Estádio do Dragão",
            "capacity": 50033,
            "manager": "Sérgio Conceição"
        },
        {
            "name": "Sporting CP",
            "country": "Portugal",
            "founded": 1906,
            "stadium": "Estádio José Alvalade",
            "capacity": 50095,
            "manager": "Rúben Amorim"
        },
        {
            "name": "Sevilla",
            "country": "Spain",
            "founded": 1890,
            "stadium": "Ramón Sánchez Pizjuán",
            "capacity": 43883,
            "manager": "José Luis Mendilibar"
        },
        {
            "name": "Roma",
            "country": "Italy",
            "founded": 1927,
            "stadium": "Stadio Olimpico",
            "capacity": 70634,
            "manager": "José Mourinho"
        },
        {
            "name": "Napoli",
            "country": "Italy",
            "founded": 1926,
            "stadium": "Stadio Diego Armando Maradona",
            "capacity": 54726,
            "manager": "Rudi Garcia"
        },
        {
            "name": "RB Leipzig",
            "country": "Germany",
            "founded": 2009,
            "stadium": "Red Bull Arena",
            "capacity": 47069,
            "manager": "Marco Rose"
        },
        {
            "name": "Bayer Leverkusen",
            "country": "Germany",
            "founded": 1904,
            "stadium": "BayArena",
            "capacity": 30210,
            "manager": "Xabi Alonso"
        }
    ];
    
    response.send(status);
 });

 
app.get("/fitness-articles", (request, response) => {
    const status = [
        {
            "title": "The Ultimate Guide to Strength Training",
            "author": "John Doe",
            "publication_date": "2023-01-15",
            "url": "https://www.example.com/ultimate-guide-strength-training",
            "summary": "A comprehensive guide covering everything you need to know about strength training, including exercises, techniques, and benefits."
        },
        {
            "title": "Top 10 Cardio Workouts for Weight Loss",
            "author": "Jane Smith",
            "publication_date": "2023-02-10",
            "url": "https://www.example.com/top-10-cardio-workouts",
            "summary": "A list of the best cardio workouts to help you lose weight and improve cardiovascular health."
        },
        {
            "title": "Yoga for Beginners: Tips and Poses",
            "author": "Emily Johnson",
            "publication_date": "2023-03-05",
            "url": "https://www.example.com/yoga-for-beginners",
            "summary": "An introductory guide to yoga for beginners, including basic poses and tips for starting your practice."
        },
        {
            "title": "How to Create a Balanced Workout Routine",
            "author": "Michael Brown",
            "publication_date": "2023-04-20",
            "url": "https://www.example.com/balanced-workout-routine",
            "summary": "Learn how to create a well-rounded workout routine that includes strength training, cardio, and flexibility exercises."
        },
        {
            "title": "The Benefits of High-Intensity Interval Training (HIIT)",
            "author": "Sarah Davis",
            "publication_date": "2023-05-18",
            "url": "https://www.example.com/benefits-of-hiit",
            "summary": "Discover the benefits of HIIT workouts, including improved fitness levels, fat loss, and reduced workout time."
        },
        {
            "title": "Nutrition Tips for Optimal Fitness",
            "author": "David Martinez",
            "publication_date": "2023-06-25",
            "url": "https://www.example.com/nutrition-tips-optimal-fitness",
            "summary": "Essential nutrition tips to help you fuel your body and achieve your fitness goals."
        },
        {
            "title": "Stretching Exercises to Improve Flexibility",
            "author": "Laura Wilson",
            "publication_date": "2023-07-10",
            "url": "https://www.example.com/stretching-exercises",
            "summary": "A guide to effective stretching exercises that can help improve your flexibility and prevent injuries."
        },
        {
            "title": "The Importance of Rest and Recovery in Fitness",
            "author": "James Anderson",
            "publication_date": "2023-08-15",
            "url": "https://www.example.com/rest-and-recovery",
            "summary": "Understand the importance of rest and recovery in your fitness routine and how to incorporate it effectively."
        },
        {
            "title": "Strength Training for Women: Myths and Facts",
            "author": "Megan Taylor",
            "publication_date": "2023-09-05",
            "url": "https://www.example.com/strength-training-for-women",
            "summary": "Addressing common myths and providing facts about strength training for women."
        },
        {
            "title": "Best Outdoor Activities for Staying Fit",
            "author": "Chris White",
            "publication_date": "2023-10-12",
            "url": "https://www.example.com/best-outdoor-activities",
            "summary": "A list of the best outdoor activities to keep you fit and active, from hiking to cycling."
        },
        {
            "title": "Mindfulness and Meditation for Better Fitness",
            "author": "Anna Thomas",
            "publication_date": "2023-11-20",
            "url": "https://www.example.com/mindfulness-meditation-fitness",
            "summary": "Exploring the benefits of mindfulness and meditation practices to enhance your fitness journey."
        },
        {
            "title": "Home Workout Routines: No Equipment Needed",
            "author": "Daniel Lee",
            "publication_date": "2023-12-01",
            "url": "https://www.example.com/home-workout-routines",
            "summary": "Effective home workout routines that require no equipment, perfect for staying fit at home."
        },
        {
            "title": "How to Stay Motivated in Your Fitness Journey",
            "author": "Sophia Moore",
            "publication_date": "2024-01-10",
            "url": "https://www.example.com/stay-motivated-fitness",
            "summary": "Tips and strategies to help you stay motivated and committed to your fitness goals."
        },
        {
            "title": "The Role of Hydration in Exercise Performance",
            "author": "Robert Harris",
            "publication_date": "2024-02-22",
            "url": "https://www.example.com/role-of-hydration",
            "summary": "Understanding the crucial role of hydration in maintaining optimal exercise performance."
        },
        {
            "title": "Functional Fitness: Training for Everyday Life",
            "author": "Jessica Lewis",
            "publication_date": "2024-03-15",
            "url": "https://www.example.com/functional-fitness",
            "summary": "An introduction to functional fitness and how it helps you perform everyday activities more efficiently."
        }
    ];
    
    response.send(status);
 });