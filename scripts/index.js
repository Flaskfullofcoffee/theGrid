let url = 'https://script.google.com/macros/s/AKfycbyGbc2AyoKf6rMSa4nT21bydauvtUahBxD9WhIJ_JKw9dBYHC0/exec';


function createNode(element) {
      return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

fetch(url)
  .then((resp) => resp.json())
  .then(json => {
    let gameList = json.games;
    for (var i = 0; i < gameList.length; i++) {
      let games = gameList[i].game;
      let ul = document.querySelector('ul');
      let game = document.createElement('li');
      game.textContent = games;
      // game.className = 'game';
      ul.appendChild(game);
      console.log(games);


    let searchBox = document.getElementById('searchbar');
    let searchBtn = document.querySelector('.searchBtn');
    let response = document.querySelector('.result');
    let reset;

    let checkSearch = () => {
      // console.log(searchBox.value);
      if  (searchBox.value !==  games) {
        response.textContent = 'Game not Found';
      } else {
        response.textContent = `${searchBox.value} found`;
      }
    }
    searchBtn.addEventListener('click', checkSearch);
    }
  })
