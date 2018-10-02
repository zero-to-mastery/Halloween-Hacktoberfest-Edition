//loader
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('contents').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('interactive');
           document.getElementById('load').style.visibility="hidden";
           document.getElementById('contents').style.visibility="visible";
        },3000);
    }
  }
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

function newFact() {
  // Changes the current fact with a random new one.
  // We keep rerolling until we get a "new" one (not same as current)
  var fact = allFacts[Math.floor(Math.random()*allFacts.length)];
  while (fact == document.getElementById("fact").innerHTML || fact === "") fact = allFacts[Math.floor(Math.random()*allFacts.length)];
  document.getElementById("fact").innerHTML = fact;
}

window.onload = newFact;
