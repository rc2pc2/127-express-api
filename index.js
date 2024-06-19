const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const router = express.Router();

router.get("/soccer", (request, response) => {
    const events = [
        {
            "event_name": "Super Bowl LVIII",
            "location": "Las Vegas, USA",
            "start_date": "2024-02-11",
            "end_date": "2024-02-11",
            "type": "Championship",
            "image": "https://images.unsplash.com/photo-1551958219-acbc608c6377?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwxfHxzb2NjZXJ8ZW58MHwwfHx8MTcxODgxMzE2M3ww&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "FIFA World Cup 2026",
            "location": "USA, Canada, Mexico",
            "start_date": "2026-06-08",
            "end_date": "2026-07-08",
            "type": "World Cup",
            "image": "https://images.unsplash.com/photo-1574629810360-7efbbe195018?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwyfHxzb2NjZXJ8ZW58MHwwfHx8MTcxODgxMzE2M3ww&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "UEFA Champions League Final",
            "location": "London, UK",
            "start_date": "2024-05-25",
            "end_date": "2024-05-25",
            "type": "Championship",
            "image": "https://images.unsplash.com/photo-1522778119026-d647f0596c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwzfHxzb2NjZXJ8ZW58MHwwfHx8MTcxODgxMzE2M3ww&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Copa America",
            "location": "Ecuador",
            "start_date": "2024-06-10",
            "end_date": "2024-07-12",
            "type": "Tournament",
            "image": "https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw0fHxzb2NjZXJ8ZW58MHwwfHx8MTcxODgxMzE2M3ww&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "AFC Asian Cup",
            "location": "Qatar",
            "start_date": "2024-01-12",
            "end_date": "2024-02-10",
            "type": "Tournament",
            "image": "https://images.unsplash.com/photo-1459865264687-595d652de67e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw1fHxzb2NjZXJ8ZW58MHwwfHx8MTcxODgxMzE2M3ww&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Africa Cup of Nations",
            "location": "Ivory Coast",
            "start_date": "2024-01-13",
            "end_date": "2024-02-11",
            "type": "Tournament",
            "image": "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw2fHxzb2NjZXJ8ZW58MHwwfHx8MTcxODgxMzE2M3ww&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "CONCACAF Gold Cup",
            "location": "USA",
            "start_date": "2024-06-15",
            "end_date": "2024-07-07",
            "type": "Tournament",
            "image": "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw3fHxzb2NjZXJ8ZW58MHwwfHx8MTcxODgxMzE2M3ww&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "UEFA European Championship",
            "location": "Germany",
            "start_date": "2024-06-14",
            "end_date": "2024-07-14",
            "type": "Tournament",
            "image": "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw4fHxzb2NjZXJ8ZW58MHwwfHx8MTcxODgxMzE2M3ww&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "FA Cup Final",
            "location": "London, UK",
            "start_date": "2024-05-18",
            "end_date": "2024-05-18",
            "type": "Final",
            "image": "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw5fHxzb2NjZXJ8ZW58MHwwfHx8MTcxODgxMzE2M3ww&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Copa Libertadores Final",
            "location": "Sao Paulo, Brazil",
            "start_date": "2024-11-30",
            "end_date": "2024-11-30",
            "type": "Final",
            "image": "https://images.unsplash.com/photo-1600679472829-3044539ce8ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwxMHx8c29jY2VyfGVufDB8MHx8fDE3MTg4MTMxNjN8MA&ixlib=rb-4.0.3&q=80&w=1080"
        }
    ];

    response.send(events);
});

router.get("/bike", (request, response) => {
    const events = [
        {
            "event_name": "Tour de France",
            "location": "France",
            "start_date": "2024-07-01",
            "end_date": "2024-07-23",
            "type": "Road Cycling",
            "image": "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwxfHxiaWtlJTIwc3BvcnR8ZW58MHwxfHx8MTcxODgxMzMxN3ww&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Giro d'Italia",
            "location": "Italy",
            "start_date": "2024-05-05",
            "end_date": "2024-05-28",
            "type": "Road Cycling",
            "image": "https://images.unsplash.com/photo-1542397680-c1450496a750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwyfHxiaWtlJTIwc3BvcnR8ZW58MHwxfHx8MTcxODgxMzMxN3ww&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Vuelta a España",
            "location": "Spain",
            "start_date": "2024-08-20",
            "end_date": "2024-09-11",
            "type": "Road Cycling",
            "image": "https://images.unsplash.com/photo-1536244955395-0b8a2a5ab5df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwzfHxiaWtlJTIwc3BvcnR8ZW58MHwxfHx8MTcxODgxMzMxN3ww&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Mountain Bike World Championship",
            "location": "Vallnord, Andorra",
            "start_date": "2024-09-01",
            "end_date": "2024-09-07",
            "type": "Mountain Biking",
            "image": "https://images.unsplash.com/photo-1530006313355-fac5500eca1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw0fHxiaWtlJTIwc3BvcnR8ZW58MHwxfHx8MTcxODgxMzMxN3ww&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Paris-Roubaix",
            "location": "France",
            "start_date": "2024-04-14",
            "end_date": "2024-04-14",
            "type": "Road Cycling",
            "image": "https://images.unsplash.com/photo-1541690922024-ecd939490163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw1fHxiaWtlJTIwc3BvcnR8ZW58MHwxfHx8MTcxODgxMzMxN3ww&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Cape Epic",
            "location": "South Africa",
            "start_date": "2024-03-17",
            "end_date": "2024-03-24",
            "type": "Mountain Biking",
            "image": "https://images.unsplash.com/photo-1605354800627-70919e735abf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw2fHxiaWtlJTIwc3BvcnR8ZW58MHwxfHx8MTcxODgxMzMxN3ww&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Tour Down Under",
            "location": "Australia",
            "start_date": "2024-01-16",
            "end_date": "2024-01-21",
            "type": "Road Cycling",
            "image": "https://images.unsplash.com/photo-1541024565616-3a4add50ea72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw3fHxiaWtlJTIwc3BvcnR8ZW58MHwxfHx8MTcxODgxMzMxN3ww&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "UCI BMX World Championships",
            "location": "Houston, USA",
            "start_date": "2024-05-26",
            "end_date": "2024-05-31",
            "type": "BMX",
            "image": "https://images.unsplash.com/photo-1607109181641-74f8e7f4eb11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw4fHxiaWtlJTIwc3BvcnR8ZW58MHwxfHx8MTcxODgxMzMxN3ww&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Tour of California",
            "location": "California, USA",
            "start_date": "2024-05-13",
            "end_date": "2024-05-19",
            "type": "Road Cycling",
            "image": "https://images.unsplash.com/photo-1567353737043-a8b964c398a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw5fHxiaWtlJTIwc3BvcnR8ZW58MHwxfHx8MTcxODgxMzMxN3ww&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Strade Bianche",
            "location": "Italy",
            "start_date": "2024-03-02",
            "end_date": "2024-03-02",
            "type": "Road Cycling",
            "image": "https://images.unsplash.com/photo-1534146789009-76ed5060ec70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwxMHx8YmlrZSUyMHNwb3J0fGVufDB8MXx8fDE3MTg4MTMzMTd8MA&ixlib=rb-4.0.3&q=80&w=1080"
        }
    ];

    response.send(events);
});

router.get("/esport", (request, response) => {
    const events = [
        {
            "event_name": "The International",
            "location": "Seattle, USA",
            "start_date": "2024-10-15",
            "end_date": "2024-10-20",
            "type": "Dota 2 Championship",
            "image": "https://images.unsplash.com/photo-1558742619-fd82741daa99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwxfHxlc3BvcnQlMjBldmVudHxlbnwwfDF8fHwxNzE4ODAzMzEwfDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "League of Legends World Championship",
            "location": "Seoul, South Korea",
            "start_date": "2024-11-01",
            "end_date": "2024-11-10",
            "type": "League of Legends Championship",
            "image": "https://images.unsplash.com/photo-1558742569-fe6d39d05837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwyfHxlc3BvcnQlMjBldmVudHxlbnwwfDF8fHwxNzE4ODAzMzEwfDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Fortnite World Cup",
            "location": "New York, USA",
            "start_date": "2024-07-26",
            "end_date": "2024-07-28",
            "type": "Fortnite Championship",
            "image": "https://images.unsplash.com/photo-1548061435-d56a87bdd05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwzfHxlc3BvcnQlMjBldmVudHxlbnwwfDF8fHwxNzE4ODAzMzEwfDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Overwatch League Grand Finals",
            "location": "Los Angeles, USA",
            "start_date": "2024-09-29",
            "end_date": "2024-09-30",
            "type": "Overwatch Championship",
            "image": "https://images.unsplash.com/photo-1485178075098-49f78b4b43b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw0fHxlc3BvcnQlMjBldmVudHxlbnwwfDF8fHwxNzE4ODAzMzEwfDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Intel Extreme Masters",
            "location": "Katowice, Poland",
            "start_date": "2024-03-01",
            "end_date": "2024-03-03",
            "type": "Counter-Strike: Global Offensive Tournament",
            "image": "https://images.unsplash.com/photo-1473973916745-60839aebf06b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw1fHxlc3BvcnQlMjBldmVudHxlbnwwfDF8fHwxNzE4ODAzMzEwfDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Call of Duty League Championship",
            "location": "Atlanta, USA",
            "start_date": "2024-08-15",
            "end_date": "2024-08-18",
            "type": "Call of Duty Championship",
            "image": "https://images.unsplash.com/photo-1515577756537-d9af957a75dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw2fHxlc3BvcnQlMjBldmVudHxlbnwwfDF8fHwxNzE4ODAzMzEwfDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Rocket League Championship Series",
            "location": "London, UK",
            "start_date": "2024-06-20",
            "end_date": "2024-06-23",
            "type": "Rocket League Championship",
            "image": "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw3fHxlc3BvcnQlMjBldmVudHxlbnwwfDF8fHwxNzE4ODAzMzEwfDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "EVO Championship Series",
            "location": "Las Vegas, USA",
            "start_date": "2024-08-02",
            "end_date": "2024-08-04",
            "type": "Fighting Games Tournament",
            "image": "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw4fHxlc3BvcnQlMjBldmVudHxlbnwwfDF8fHwxNzE4ODAzMzEwfDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "PUBG Global Championship",
            "location": "Berlin, Germany",
            "start_date": "2024-11-15",
            "end_date": "2024-11-17",
            "type": "PUBG Championship",
            "image": "https://images.unsplash.com/photo-1515962187632-cc5c908fd2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw5fHxlc3BvcnQlMjBldmVudHxlbnwwfDF8fHwxNzE4ODAzMzEwfDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Hearthstone World Championship",
            "location": "Amsterdam, Netherlands",
            "start_date": "2024-12-06",
            "end_date": "2024-12-08",
            "type": "Hearthstone Championship",
            "image": "https://images.unsplash.com/photo-1530023367847-a683933f4172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwxMHx8ZXNwb3J0JTIwZXZlbnR8ZW58MHwxfHx8MTcxODgwMzMxMHww&ixlib=rb-4.0.3&q=80&w=1080"
        }
    ];

    response.send(events);
});

router.get("/rock", (request, response) => {
    const events = [
        {
            "event_name": "Rock am Ring",
            "location": "Nürburgring, Germany",
            "start_date": "2024-06-07",
            "end_date": "2024-06-09",
            "type": "Music Festival",
            "image": "https://images.unsplash.com/photo-1717184359916-c53b012fd983?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwxfHxyb2NrJTIwZXZlbnR8ZW58MHx8fHwxNzE4ODEzMTY1fDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Download Festival",
            "location": "Donington Park, UK",
            "start_date": "2024-06-14",
            "end_date": "2024-06-16",
            "type": "Music Festival",
            "image": "https://images.unsplash.com/photo-1505428160878-8e349f4d301c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwyfHxyb2NrJTIwZXZlbnR8ZW58MHx8fHwxNzE4ODEzMTY1fDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Hellfest",
            "location": "Clisson, France",
            "start_date": "2024-06-21",
            "end_date": "2024-06-23",
            "type": "Music Festival",
            "image": "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwzfHxyb2NrJTIwZXZlbnR8ZW58MHx8fHwxNzE4ODEzMTY1fDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Glastonbury Festival",
            "location": "Pilton, UK",
            "start_date": "2024-06-26",
            "end_date": "2024-06-30",
            "type": "Music Festival",
            "image": "https://images.unsplash.com/photo-1516945472-fef9edd66698?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw0fHxyb2NrJTIwZXZlbnR8ZW58MHx8fHwxNzE4ODEzMTY1fDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Roskilde Festival",
            "location": "Roskilde, Denmark",
            "start_date": "2024-06-29",
            "end_date": "2024-07-06",
            "type": "Music Festival",
            "image": "https://images.unsplash.com/photo-1522327646852-4e28586a40dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw1fHxyb2NrJTIwZXZlbnR8ZW58MHx8fHwxNzE4ODEzMTY1fDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Lollapalooza",
            "location": "Chicago, USA",
            "start_date": "2024-08-01",
            "end_date": "2024-08-04",
            "type": "Music Festival",
            "image": "https://images.unsplash.com/photo-1574672079325-839aa3e397bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw2fHxyb2NrJTIwZXZlbnR8ZW58MHx8fHwxNzE4ODEzMTY1fDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Reading and Leeds Festivals",
            "location": "Reading and Leeds, UK",
            "start_date": "2024-08-23",
            "end_date": "2024-08-25",
            "type": "Music Festival",
            "image": "https://images.unsplash.com/photo-1629675434088-a8736076b708?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw3fHxyb2NrJTIwZXZlbnR8ZW58MHx8fHwxNzE4ODEzMTY1fDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Rock in Rio",
            "location": "Rio de Janeiro, Brazil",
            "start_date": "2024-09-27",
            "end_date": "2024-09-29",
            "type": "Music Festival",
            "image": "https://images.unsplash.com/photo-1614301075678-bc4bd04993e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw4fHxyb2NrJTIwZXZlbnR8ZW58MHx8fHwxNzE4ODEzMTY1fDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Bonnaroo Music and Arts Festival",
            "location": "Manchester, Tennessee, USA",
            "start_date": "2024-06-13",
            "end_date": "2024-06-16",
            "type": "Music Festival",
            "image": "https://images.unsplash.com/photo-1510639322343-20cd2a815a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw5fHxyb2NrJTIwZXZlbnR8ZW58MHx8fHwxNzE4ODEzMTY1fDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Fuji Rock Festival",
            "location": "Niigata Prefecture, Japan",
            "start_date": "2024-07-26",
            "end_date": "2024-07-28",
            "type": "Music Festival",
            "image": "https://images.unsplash.com/photo-1681855178578-4535aba9b305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwxMHx8cm9jayUyMGV2ZW50fGVufDB8fHx8MTcxODgxMzE2NXww&ixlib=rb-4.0.3&q=80&w=1080"
        }
    ];

    response.send(events);
});

router.get("/fitness", (request, response) => {
    const events = [
        {
            "event_name": "Maratona di New York",
            "location": "New York, USA",
            "start_date": "2024-11-03",
            "end_date": "2024-11-03",
            "type": "Maratona",
            "image": "https://images.unsplash.com/photo-1662045010180-a2b1ac1652b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwxfHxmaXRuZXNzfGVufDB8MXx8fDE3MTg4MDMzMTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Ironman World Championship",
            "location": "Kailua-Kona, Hawaii, USA",
            "start_date": "2024-10-12",
            "end_date": "2024-10-12",
            "type": "Triathlon",
            "image": "https://images.unsplash.com/photo-1662961154170-d2421e29f94b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwyfHxmaXRuZXNzfGVufDB8MXx8fDE3MTg4MDMzMTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "CrossFit Games",
            "location": "Madison, Wisconsin, USA",
            "start_date": "2024-07-29",
            "end_date": "2024-08-04",
            "type": "Competizione CrossFit",
            "image": "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwzfHxmaXRuZXNzfGVufDB8MXx8fDE3MTg4MDMzMTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Berlin Marathon",
            "location": "Berlin, Germany",
            "start_date": "2024-09-29",
            "end_date": "2024-09-29",
            "type": "Maratona",
            "image": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw0fHxmaXRuZXNzfGVufDB8MXx8fDE3MTg4MDMzMTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "World Yoga Festival",
            "location": "Reading, UK",
            "start_date": "2024-07-18",
            "end_date": "2024-07-21",
            "type": "Festival di Yoga",
            "image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw1fHxmaXRuZXNzfGVufDB8MXx8fDE3MTg4MDMzMTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Ultra-Trail du Mont-Blanc",
            "location": "Chamonix, France",
            "start_date": "2024-08-26",
            "end_date": "2024-09-01",
            "type": "Corsa in montagna",
            "image": "https://images.unsplash.com/photo-1550345332-09e3ac987658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw2fHxmaXRuZXNzfGVufDB8MXx8fDE3MTg4MDMzMTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Arnold Sports Festival",
            "location": "Columbus, Ohio, USA",
            "start_date": "2024-03-07",
            "end_date": "2024-03-10",
            "type": "Festival sportivo",
            "image": "https://images.unsplash.com/photo-1594381898411-846e7d193883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw3fHxmaXRuZXNzfGVufDB8MXx8fDE3MTg4MDMzMTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "London Marathon",
            "location": "London, UK",
            "start_date": "2024-04-21",
            "end_date": "2024-04-21",
            "type": "Maratona",
            "image": "https://images.unsplash.com/photo-1613685044678-0a9ae422cf5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw4fHxmaXRuZXNzfGVufDB8MXx8fDE3MTg4MDMzMTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Spartan Race Trifecta World Championship",
            "location": "Sparta, Greece",
            "start_date": "2024-11-02",
            "end_date": "2024-11-04",
            "type": "Corsa a ostacoli",
            "image": "https://images.unsplash.com/photo-1539794830467-1f1755804d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw5fHxmaXRuZXNzfGVufDB8MXx8fDE3MTg4MDMzMTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Boston Marathon",
            "location": "Boston, USA",
            "start_date": "2024-04-15",
            "end_date": "2024-04-15",
            "type": "Maratona",
            "image": "https://images.unsplash.com/photo-1541694458248-5aa2101c77df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwxMHx8Zml0bmVzc3xlbnwwfDF8fHwxNzE4ODAzMzEzfDA&ixlib=rb-4.0.3&q=80&w=1080"
        }
    ];

    response.send(events);
});

router.get("/geek", (request, response) => {
    const events = [
        {
            "event_name": "Anime Expo",
            "location": "Los Angeles, USA",
            "start_date": "2024-07-04",
            "end_date": "2024-07-07",
            "type": "Anime Convention",
            "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwxfHxhbmltZXxlbnwwfDF8fHwxNzE4ODAzMzAxfDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Comic Market (Comiket)",
            "location": "Tokyo, Japan",
            "start_date": "2024-12-28",
            "end_date": "2024-12-31",
            "type": "Doujinshi Convention",
            "image": "https://images.unsplash.com/photo-1559981421-3e0c0d712e3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwyfHxhbmltZXxlbnwwfDF8fHwxNzE4ODAzMzAxfDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Crunchyroll Expo",
            "location": "San Jose, USA",
            "start_date": "2024-08-23",
            "end_date": "2024-08-25",
            "type": "Anime Convention",
            "image": "https://images.unsplash.com/photo-1541562232579-512a21360020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwzfHxhbmltZXxlbnwwfDF8fHwxNzE4ODAzMzAxfDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Japan Expo",
            "location": "Paris, France",
            "start_date": "2024-07-11",
            "end_date": "2024-07-14",
            "type": "Japanese Culture Convention",
            "image": "https://images.unsplash.com/photo-1590796583326-afd3bb20d22d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw0fHxhbmltZXxlbnwwfDF8fHwxNzE4ODAzMzAxfDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "AnimeJapan",
            "location": "Tokyo, Japan",
            "start_date": "2024-03-21",
            "end_date": "2024-03-24",
            "type": "Anime Convention",
            "image": "https://images.unsplash.com/photo-1575540325855-4b5d285a3845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw1fHxhbmltZXxlbnwwfDF8fHwxNzE4ODAzMzAxfDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Otakon",
            "location": "Washington, D.C., USA",
            "start_date": "2024-07-26",
            "end_date": "2024-07-28",
            "type": "Anime Convention",
            "image": "https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw2fHxhbmltZXxlbnwwfDF8fHwxNzE4ODAzMzAxfDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Sakura-Con",
            "location": "Seattle, USA",
            "start_date": "2024-03-29",
            "end_date": "2024-03-31",
            "type": "Anime Convention",
            "image": "https://images.unsplash.com/photo-1542931287-023b922fa89b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw3fHxhbmltZXxlbnwwfDF8fHwxNzE4ODAzMzAxfDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "MCM London Comic Con",
            "location": "London, UK",
            "start_date": "2024-10-25",
            "end_date": "2024-10-27",
            "type": "Comic Convention",
            "image": "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw4fHxhbmltZXxlbnwwfDF8fHwxNzE4ODAzMzAxfDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "FanimeCon",
            "location": "San Jose, USA",
            "start_date": "2024-05-24",
            "end_date": "2024-05-27",
            "type": "Anime Convention",
            "image": "https://images.unsplash.com/photo-1608874973277-a34ed4aba3f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw5fHxhbmltZXxlbnwwfDF8fHwxNzE4ODAzMzAxfDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "AnimeFest",
            "location": "Dallas, USA",
            "start_date": "2024-08-16",
            "end_date": "2024-08-19",
            "type": "Anime Convention",
            "image": "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwxMHx8YW5pbWV8ZW58MHwxfHx8MTcxODgwMzMwMXww&ixlib=rb-4.0.3&q=80&w=1080"
        }
    ];

    response.send(events);
});

router.get("/elearning", (request, response) => {
    const events = [
        {
            "event_name": "Online Learning Conference",
            "location": "Virtual",
            "start_date": "2024-09-10",
            "end_date": "2024-09-12",
            "type": "Conference",
            "image": "https://images.unsplash.com/photo-1509316647984-7dea6d513c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMGV2ZW50fGVufDB8MXx8fDE3MTg4MDMzMDd8MA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "E-Learn World Conference",
            "location": "Virtual",
            "start_date": "2024-11-05",
            "end_date": "2024-11-07",
            "type": "Conference",
            "image": "https://images.unsplash.com/photo-1684080060958-bbe39813566a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwyfHxmb290YmFsbCUyMGV2ZW50fGVufDB8MXx8fDE3MTg4MDMzMDd8MA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Learning Technologies Summer Forum",
            "location": "London, UK",
            "start_date": "2024-06-18",
            "end_date": "2024-06-18",
            "type": "Forum",
            "image": "https://images.unsplash.com/photo-1492636408754-1268274d6d51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwzfHxmb290YmFsbCUyMGV2ZW50fGVufDB8MXx8fDE3MTg4MDMzMDd8MA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "EdTech Europe",
            "location": "London, UK",
            "start_date": "2024-06-20",
            "end_date": "2024-06-20",
            "type": "Summit",
            "image": "https://images.unsplash.com/photo-1703711096750-6e0d08d25626?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw0fHxmb290YmFsbCUyMGV2ZW50fGVufDB8MXx8fDE3MTg4MDMzMDd8MA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "DevLearn Conference & Expo",
            "location": "Las Vegas, USA",
            "start_date": "2024-10-23",
            "end_date": "2024-10-25",
            "type": "Conference and Expo",
            "image": "https://images.unsplash.com/photo-1631346392930-acbe6c686a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw1fHxmb290YmFsbCUyMGV2ZW50fGVufDB8MXx8fDE3MTg4MDMzMDd8MA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "OEB Global",
            "location": "Berlin, Germany",
            "start_date": "2024-12-04",
            "end_date": "2024-12-06",
            "type": "Conference",
            "image": "https://images.unsplash.com/photo-1635756062663-ec064fe8da3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw2fHxmb290YmFsbCUyMGV2ZW50fGVufDB8MXx8fDE3MTg4MDMzMDd8MA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Learning Solutions Conference & Expo",
            "location": "Orlando, USA",
            "start_date": "2024-03-26",
            "end_date": "2024-03-28",
            "type": "Conference and Expo",
            "image": "https://images.unsplash.com/photo-1636629198288-8fe85b92110a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw3fHxmb290YmFsbCUyMGV2ZW50fGVufDB8MXx8fDE3MTg4MDMzMDd8MA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "eLearning Africa",
            "location": "Kigali, Rwanda",
            "start_date": "2024-05-22",
            "end_date": "2024-05-24",
            "type": "Conference",
            "image": "https://images.unsplash.com/photo-1542029123374-26f7a8e05fdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw4fHxmb290YmFsbCUyMGV2ZW50fGVufDB8MXx8fDE3MTg4MDMzMDd8MA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "Digital Learning Annual Conference",
            "location": "Austin, USA",
            "start_date": "2024-04-01",
            "end_date": "2024-04-03",
            "type": "Conference",
            "image": "https://images.unsplash.com/photo-1529510078431-fefe4d9d8aab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHw5fHxmb290YmFsbCUyMGV2ZW50fGVufDB8MXx8fDE3MTg4MDMzMDd8MA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "event_name": "World Conference on Online Learning",
            "location": "Dublin, Ireland",
            "start_date": "2024-10-06",
            "end_date": "2024-10-09",
            "type": "Conference",
            "image": "https://images.unsplash.com/photo-1694964009504-e7ef622378b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjQwOTR8MHwxfHNlYXJjaHwxMHx8Zm9vdGJhbGwlMjBldmVudHxlbnwwfDF8fHwxNzE4ODAzMzA3fDA&ixlib=rb-4.0.3&q=80&w=1080"
        }
    ];

    response.send(events);
});

app.use('/events', router);

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});