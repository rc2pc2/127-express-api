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