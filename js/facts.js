let allFacts;

let readFile = (file) => {
    const f = new XMLHttpRequest();
    f.open("GET", file, false);
    f.onreadystatechange = () => {
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
const factButton = document.getElementById('fact-button');
factButton.addEventListener('click', newFact);

let factText = document.getElementById("fact");

// Initialise fact text variables
let fact = "";
let prevFact = "";

newFact();

// Changes the current fact with a random new one
const newFact = () => {

  while (fact === prevFact) {
    fact = allFacts[Math.floor(Math.random() * (allFacts.length - 1))];
  }
  // Then record the last fact we successfully generated
  prevFact = fact;

  // DOM text assignment changed from use of 'innerHTML' to avoid "bad practice"
  factText.textContent = fact;
}
// }
