 let searchDesign = () => {
 input = document.getElementById('search-text');
 filter = input.value.toUpperCase();

 const designs = document.getElementsByClassName("card");
 for (i = 0; i < designs.length; i++) {
        a = designs[i].getElementsByTagName('h3');
        console.log(a[0].innerText);
        if (a[0].innerHTML.toUpperCase().indexOf(filter) > -1) {
            designs[i].style.display = "";
        } else {
            designs[i].style.display = "none";
        }
    }
  }

  searchDesign();