let namesFromFile;

// Fetches the file, and stores the names in the namesFromFile variable
const readFile = (file) => {
    fetch(file)
      .then(response => response.text())
      .then((data) => {
        namesFromFile = data.split("\n");
      });
}

readFile('../txt/names.txt');

// Initialise name text variables
let name = "";
let prevName = "";
let textName;
let textDesc;

// Since they're reused again and again, allocated memory to card-name and card-desc DOM elements
const cardName = document.getElementById('card-name');
const cardDesc = document.getElementById('card-desc');

// Took "onclick" action away from HTML button; "Separation of Concerns"
const newName = () => {
  // Assign name content from namesFromFile array
  while (name === prevName) {
    name = namesFromFile[Math.floor(Math.random() * (namesFromFile.length - 1))];
  }
  // Then record the last name we successfully generated
  prevName = name;

  // Update "textName" & "textDesc" strings with relevant parts from "name"
  textName = name.substring(0, name.indexOf(":"));
  textDesc = name.substring(name.indexOf(":") + 1);

  // DOM text assignment changed from use of 'innerHTML' to avoid "bad practice"
  cardName.textContent = textName;
  cardDesc.textContent = textDesc;
};

const nameButton = document.getElementById('name-button');
nameButton.addEventListener('click', newName);


