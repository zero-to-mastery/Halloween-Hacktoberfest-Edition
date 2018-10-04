// Movie list array
var movies = [
    "Nightmare Before Christmas",
    "Halloween",
    "Adams Family",
    "Beetlejuice",
    "Corpse Bride",
    "Moster House",
    "Trick or Treat",
    "Paranorman",
];

// Loop through the movies array and display to list
var movieUl = document.getElementById("listMovies");
movieUl.innerHTML = "";
for (var i = 0; i < movies.length; i++){
    movieUl.innerHTML += "<li>"+ movies[i] + "</li>";
}
// Get random seconds
var randMin = 3000;
var randMax = 9000;
var randNo = Math.floor(Math.random() * (+randMax - +randMin)) + +randMin;
// Loop through the movies array and change text
var counter = 0;
var elem = document.getElementById("randomMovie");
function change(){
    elem.innerHTML = movies[counter];
    counter++;
    if (counter >= movies.length){
        counter = 0;
    }
}
// Randomly stop on a list item from the movies array
function stopShuffle(){
    var numberOfMovies = movies.length;
    var randMinMov = 1;
    var randMaxMov = numberOfMovies;
    var randNoMov = Math.floor(Math.random() * (+randMaxMov - +randMinMov)) + +randMinMov;
    elem.innerHTML = movies[randNoMov];
}
// Set an interval and timeout 
stopText = elem.innerHTML = "";
var tmer = setInterval(() => change(), 500);
setTimeout(() => { clearInterval(tmer); stopShuffle();},randNo);