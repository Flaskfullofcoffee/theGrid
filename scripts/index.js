// let url = 'https://script.google.com/macros/s/AKfycbyGbc2AyoKf6rMSa4nT21bydauvtUahBxD9WhIJ_JKw9dBYHC0/exec';
//
//
// fetch(url)
//   .then((resp) => resp.json())
//   .then(json => {
//     let gameList = json.games.map(obj => obj.game);
//     addGames(gameList);
//     let searchBox = document.getElementById('searchbar');
//     searchBox.addEventListener('keyup', filterGames(gameList))
//     // for (var i = 0; i < gameList.length; i++) {
//     //   addGame(gameList[i]);
//     // }
//     // let searchBtn = document.querySelector('.searchBtn');
//     // searchBtn.addEventListener('click', search(gameList));
//   })
// // function for adding game
//   let addGames = (gameList)  => {
//   let ul = document.createElement('ul');
//     gameList.forEach(game => {
//       let li = document.createElement('li');
//       li.textContent = game;
//       ul.appendChild(li)
//     })
//     let resultContainer = document.getElementById('game-list');
//     resultContainer.innerHTML = '';
//     resultContainer.appendChild(ul);
//   };
//
//   let filterGames = (gameList) => (event) => {
//     let input = event.target.value.toLowerCase();
//     let filteredGamesList = gameList.filter(game => {
//       return game.toLowerCase().includes(input);
//     })
//     addGames(filteredGamesList);
//   }
//
//


// // FORM JS
//
// const express = require('express');
// const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
// const path = require('path');
// const nodeMailer = require('nodemailer');
//
// const app = express();  // Initialize our app variable
//
//
// // VIEW ENGINE SETUP
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
//
// // STATIC FOLDER - CSS STYLING
// app.use('/public', express.static(path.join(__dirname, 'public')));
//
// // BODY PARSER MIDDLEWARE
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())
//
// app.get('/', (req, resp) => {  // Create a route
//   resp.render('layouts/contact');
// });
//
// app.listen(3000, () => console.log('Sever Started...'));  // Set up a Port to listen on
