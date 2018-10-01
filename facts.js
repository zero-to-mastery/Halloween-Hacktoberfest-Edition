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
