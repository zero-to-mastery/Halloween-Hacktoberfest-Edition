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
//  LOADER--->

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
  while (name.substring(0, name.indexOf(":")) == document.getElementById("card-name").innerHTML || name === "") name = allNames[Math.floor(Math.random()*allNames.length)];
  document.getElementById("card-name").innerHTML = name.substring(0, name.indexOf(":"));
  document.getElementById("card-desc").innerHTML = name.substring(name.indexOf(":") + 1);
}

window.onload = newName;