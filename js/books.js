 var searchBook = () => {
 input = document.getElementById('search-book');
 filter = input.value.toUpperCase();

 var books = document.getElementsByClassName("card");
 for (i = 0; i < books.length; i++) {
        card = books[i].getElementsByTagName('h3');
        if (card[0].innerHTML.toUpperCase().indexOf(filter) > -1) {
            books[i].style.display = "";
        } else {
            books[i].style.display = "none";
        }
    }
  };

  searchBook();

