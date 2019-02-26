let url = 'https://script.google.com/macros/s/AKfycbyGbc2AyoKf6rMSa4nT21bydauvtUahBxD9WhIJ_JKw9dBYHC0/exec';


fetch(url)
  .then((resp) => resp.json())
  .then(json => {
    let gameList = json.games.map(obj => obj.game);
    addGames(gameList);
    let searchBox = document.getElementById('searchbar');
    searchBox.addEventListener('keyup', filterGames(gameList))
    // for (var i = 0; i < gameList.length; i++) {
    //   addGame(gameList[i]);
    // }
    // let searchBtn = document.querySelector('.searchBtn');
    // searchBtn.addEventListener('click', search(gameList));
  })
// function for adding game
  let addGames = (gameList)  => {
  let ul = document.createElement('ul');
    gameList.forEach(game => {
      let li = document.createElement('li');
      li.textContent = game;
      ul.appendChild(li)
    })
    let resultContainer = document.getElementById('game-list');
    resultContainer.innerHTML = '';
    resultContainer.appendChild(ul);
  };

  let filterGames = (gameList) => (event) => {
    let input = event.target.value.toLowerCase();
    let filteredGamesList = gameList.filter(game => {
      return game.toLowerCase().includes(input);
    })
    addGames(filteredGamesList);
  }






// let count = [];
// for (var i = 0; i <= 150; i++) {
//   count.push(i);
// } // let count = 150;
//
//
//   let countDown = (count) => {
//     let ul = document.createElement('ul');
//     count.forEach(num => {
//       let li = document.createElement('li');
//       li.length = 30;
//       li.textContent = num;
//       ul.appendChild(li);
//       console.log(li);
//     })
//     let section = document.getElementById('section');
//     section.innerHTML = '';
//     section.appendChild(ul);
//   };
// countDown(count);





// var x = new Array(10);
//
// for (var i = 0; i < x.length; i++) {
//   x[i] = new Array(3);
// }
//
// console.log(x);
