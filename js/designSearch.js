 var searchDesign = () => {
 input = document.getElementById('search-text');
 filter = input.value.toUpperCase();

var designs = document.getElementsByClassName("card");
 for (i = 0; i < designs.length; i++) {
        card = designs[i].getElementsByTagName('h3');
        if (card[0].innerHTML.toUpperCase().indexOf(filter) > -1) {
            designs[i].style.display = "";
        } else {
            designs[i].style.display = "none";
        }
    }
  };

  searchDesign();