const readFile = (file) => {
  const f = new XMLHttpRequest();
  f.open("GET", file, false);
  f.onreadystatechange = () => {
    if (f.readyState === 4) {
      if (f.status === 200 || f.status == 0) {
        allNames = f.responseText;
      }
    }
  }
  f.send(null);
}

readFile('names.txt');

const allNames = allNames.split("\n");

// Took "onclick" action away from HTML button; "Separation of Concerns"
const nameButton = document.getElementById('name-button');
nameButton.addEventListener('click', newName);

// Since they're reused again and again, allocated memory to card-name and card-desc DOM elements
const cardName = document.getElementById('card-name');
const cardDesc = document.getElementById('card-desc');

// Initialise name text variables
const name = "";
const prevName = "";
const textName;
const textDesc;

newName();

// Changes the current name with a random new one
newName = () => {

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
