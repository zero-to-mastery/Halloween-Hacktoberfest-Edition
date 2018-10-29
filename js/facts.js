var allFacts;

// Fetches the file, and stores the facts in the allFacts variable
var readFile = (file) => {
    fetch(file)
      .then(response => response.text())
      .then((data) => {
        allFacts = data.split("\n");
      });
}

readFile('../txt/facts.txt');
// Took "onclick" action away from HTML button; "Separation of Concerns"
var factButton = document.getElementById('fact-button');
var factText = document.getElementById("fact");

// Initialise fact text variables
var fact = "";
var prevFact = "";

// Changes the current fact with a random new one
var newFact = () => {

  while (fact === prevFact) {
    fact = allFacts[Math.floor(Math.random() * (allFacts.length - 1))];
  }
  // Then record the last fact we successfully generated
  prevFact = fact;

  // DOM text assignment changed from use of 'innerHTML' to avoid "bad practice"
  factText.textContent = fact;
}

factButton.addEventListener('click', newFact);
