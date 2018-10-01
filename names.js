var allNames;

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
allNames = allNames.split("\n");

function newName() {
  // Changes the current name with a random new one.
  // We keep rerolling until we get a "new" one (not same as current)
  var name = allNames[Math.floor(Math.random()*allNames.length)];
  while (name == document.getElementById("name").innerHTML || name === "") name = allNames[Math.floor(Math.random()*allNames.length)];
  document.getElementById("name").innerHTML = name;
}

window.onload = newName;