//loader
// document.ready = function () {

  // Commented out this entire top area because it seemed to be doing nothing, throwing errors in console, and causing the script to run multiple times.

  //   var state = document.readyState
  //   if (state == 'interactive') {
  //        document.getElementById('contents').style.visibility="hidden";
  //   } else if (state == 'complete') {
  //       setTimeout(function(){
  //          document.getElementById('interactive');
  //          document.getElementById('load').style.visibility="hidden";
  //          document.getElementById('contents').style.visibility="visible";
  //       },3000);
  //   }
  // }
// LOADER-----

function readFile(file) {
  var f = new XMLHttpRequest();
  f.open("GET", file, false);
  f.onreadystatechange = function () {
    if(f.readyState === 4) {
      if(f.status === 200 || f.status == 0) {
        allNames = f.responseText;
      }
    }
  }
  f.send(null);
}

readFile('names.txt');

var allNames = allNames.split("\n");

// Took "onclick" action away from HTML button; "Separation of Concerns"
var nameButton = document.getElementById('name-button');
nameButton.addEventListener('click', newName);

// Since they're reused again and again, allocated memory to card-name and card-desc DOM elements
var cardName = document.getElementById('card-name');
var cardDesc = document.getElementById('card-desc');

// Initialise name text variables
var name = "";
var prevName = "";
var textName;
var textDesc;

newName();

// Changes the current name with a random new one
function newName() {

  // Assign name content from allNames array
  while (name === prevName) {
    name = allNames[Math.floor(Math.random() * (allNames.length - 1))];
  }
  // Then record the last name we successfully generated
  prevName = name;

  // Update "textName" & "textDesc" strings with relevant parts from "name"
  textName = name.substring(0, name.indexOf(":"));
  textDesc = name.substring(name.indexOf(":") + 1);

  // DOM text assignment changed from use of 'innerHTML' to avoid "bad practice"
  cardName.textContent = textName;
  cardDesc.textContent = textDesc;
}
// }
