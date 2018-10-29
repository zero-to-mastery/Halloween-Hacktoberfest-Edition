 let searchGame = () => {
 input = document.getElementById('search-game');
 filter = input.value.toUpperCase();

 const games = document.getElementsByClassName("card");
 for (i = 0; i < games.length; i++) {
        card = games[i].getElementsByTagName('h3');
        if (card[0].innerHTML.toUpperCase().indexOf(filter) > -1) {
            games[i].style.display = "";
        } else {
            games[i].style.display = "none";
        }
    }
  }

  searchGame();