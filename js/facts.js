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

var allFacts;

function readFile(file) {
    var f = new XMLHttpRequest();
    f.open("GET", file, false);
    f.onreadystatechange = function () {
        if(f.readyState === 4) {
            if(f.status === 200 || f.status == 0) {
                allFacts = f.responseText;
            }
        }
    }
    f.send(null);
}

readFile('facts.txt');
allFacts = allFacts.split("\n");

// Took "onclick" action away from HTML button; "Separation of Concerns"
var factButton = document.getElementById('fact-button');
factButton.addEventListener('click', newFact);

var factText = document.getElementById("fact");

// Initialise fact text variables
var fact = "";
var prevFact = "";

newFact();

// Changes the current fact with a random new one
function newFact() {

  while (fact === prevFact) {
    fact = allFacts[Math.floor(Math.random() * (allFacts.length - 1))];
  }
  // Then record the last fact we successfully generated
  prevFact = fact;

  // DOM text assignment changed from use of 'innerHTML' to avoid "bad practice"
  factText.textContent = fact;
}
// }
