
var fileNames;

const readFile = (file) => {
  const f = new XMLHttpRequest();
  f.open("GET", file, true);
  f.onreadystatechange = () => {
    if (f.readyState === 4) {
      if (f.status === 200 || f.status == 0) {
        fileNames = f.responseText;
      }
    }
  }
  f.send(null);
}

// Use below variable instead of readfile when debugging on local computer since readFile will result in an error 
// when trying to do a cross origin request with url starting with file://
/*
fileNames = `Alaric: Parents typically look for a Holy Grail of monikers, something that is pleasing to the ears, but not too common. If you are looking for the same, Alaric would be perfect. Alaric is a character from the series “Vampire Diaries”. This melodic name means ‘noble leader.’
Casper: Calling your little one Casper, one of the friendliest ghosts in the film industry will make him the best-tempered baby. Casper is the English variant of the name Caspar, meaning ‘wealthy man.’ The name has always been popular with the Scandinavians.
Dexter: Starring the charming Michael C. Hall, then name him after this creepy character. Dexter is a blood-spatter analyst during the day and a serial killer at night. Dexter is a Latin name, meaning ‘right-handed.’
Norman: The movie “Psycho” came out in 1960, but it still manages to scare audiences as much as it did five decades back. 
Harry: The extraordinary boy wizard from J.K. Rowling’s book had a pretty common name. Harry was a common name for the years 1910 to 1950, but that’s before its association with the series. After the release of the film, Harry was no longer ordinary. It jumped 600 spots to become a part of top 100 names.
Damien: Is the name of the character from “The Omen”, the spookiest films of all time. In the movie, a couple adopts a child boy named Damien, who is the devil incarnate. The film released in 1976, but the name rose in popularity after a couple of years. 
Edward: Everyone loves “Twilight”, right? Some people were so devoted to the “Twilight” series that they started naming their children after the two main characters, especially Edward. So, even you can consider this classic. And, it’s extremely usable.
Hannibal: Anthony Hopkins gave Hannibal a new meaning through this portrayal of the cannibalistic serial killer in “The Silence of the Lambs”
Freddy: “A Nightmare on Elm Street,” is one of the best teenage horror flicks of all time. Just like the film, the name Freddy also gained worldwide acceptance
Hethcliff: This nature name conjures the images of the haunting and disturbing moorlands found in some British Isles.
Jason: Originating from Greek, meaning 'to heal'. Also the name of the mask-donning killer in "Friday the 13th".
Xander: This strong name, meaning ‘defender of man’, would make a cool Halloween name.`;
*/

// Initialise name text variables
var name = "";
var prevName = "";
var textName;
var textDesc;
readFile('./names.txt');
const allNames = fileNames.split("\n");

// Took "onclick" action away from HTML button; "Separation of Concerns"
const newName = () => {
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

const nameButton = document.getElementById('name-button');
nameButton.addEventListener('click', newName);

// Since they're reused again and again, allocated memory to card-name and card-desc DOM elements
const cardName = document.getElementById('card-name');
const cardDesc = document.getElementById('card-desc');
