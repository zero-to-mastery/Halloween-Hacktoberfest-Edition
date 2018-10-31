var movieList = [
        {
            movieName: "The Nightmare Before Christmas",
            imageURL: "https://wallpapercave.com/wp/4DnMAS4.png",
            movieUrl: "https://www.imdb.com/title/tt0107688/"
        },
        {
            movieName: "Corpse Bride",
            imageURL: "https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/corpsehed.jpg?itok=0cnYDZLJ&resize=1100x1100",
            movieUrl: "https://www.imdb.com/title/tt0121164/"
        },
        {
            movieName: "Monster House",
            imageURL: "http://www.asset1.net/tv/pictures/movie/monster-house-2006/Monster-House-01-1.jpg",
            movieUrl: "https://www.imdb.com/title/tt0385880/"
        },
        {
            movieName: "Paranorman",
            imageURL: "https://i.vimeocdn.com/video/676138487_1920x1080.jpg?r=pad",
            movieUrl: "https://www.imdb.com/title/tt1623288"
        },
        {
            movieName: "Casper",
            imageURL: "https://i.ytimg.com/vi/ai9DTupH2r0/maxresdefault.jpg",
            movieUrl: "https://www.imdb.com/title/tt0112642/"
        },
        {
            movieName: "Coraline",
            imageURL: "http://cdn-static.denofgeek.com/sites/denofgeek/files/8/01//coraline-main.jpg",
            movieUrl: "https://www.imdb.com/title/tt0327597/"
        },
        {
            movieName: "Haunted Mansion",
            imageURL: "https://assets.rappler.com/755FE0E0CC734D7E8DE88369DF49E604/img/CBA463BB5D044F389203E30A71F0F831/20151207-Haunted_Mansion-005.jpg",
            movieUrl: "https://www.imdb.com/title/tt3875444/"
        },
        {
            movieName: "Hocus Pocus",
            imageURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hocus-pocus-1538085764.jpg",
            movieUrl: "https://www.imdb.com/title/tt0107120/"
        },
        {
            movieName: "Dawn of the Dead (2004)",
            imageURL: "http://bloodygoodhorror.com/bgh/files/promos/DOD%20Big.jpg",
            movieUrl: "https://www.imdb.com/title/tt0363547/"
        },
        {
            movieName: "I Know What You Did Last Summer",
            imageURL: "http://digitalspyuk.cdnds.net/17/32/1600x800/landscape-1502465209-i-know-what-you-did-last-summer.jpg",
            movieUrl: "https://www.imdb.com/title/tt0119345/"
        },
        {
            movieName: "Interview with the Vampire",
            imageURL: "http://media3.s-nbcnews.com/i/streams/2014/March/140310/2D274905334475-ss-100112-Tom-Cruise-1994-interview.jpg",
            movieUrl: "https://www.imdb.com/title/tt0110148/"
        },
        {
            movieName: "Scream",
            imageURL: "https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/scream-header.png?itok=TGb3gk_m&resize=1100x1100",
            movieUrl: "https://www.imdb.com/title/tt0117571/"
        },
        {
            movieName: "The Shining",
            imageURL: "https://static.gamespot.com/uploads/original/1578/15789737/3345293-theshining.jpg",
            movieUrl: "https://www.imdb.com/title/tt0081505/"
        },
        {
            movieName: "Trick or Treat",
            imageURL: "https://www.legendary.com/wp-content/uploads/2015/10/News_TRTDOTD_desktop_1600x900.jpg",
            movieUrl: "https://www.imdb.com/title/tt0862856/"
        },
        {
            movieName: "Halloween",
            imageURL: "http://morbidlybeautiful.com/wp-content/uploads/2017/02/MMH.jpg",
            movieUrl: "https://www.imdb.com/title/tt1502407/"
        },
        {
            movieName: "The Addams Family",
            imageURL: "https://www.syfy.com/sites/syfy/files/2017/12/addamsfamilyvalues-header.jpg",
            movieUrl: "https://www.imdb.com/title/tt0101272/"
        },
        {
            movieName: "Beetlejuice",
            imageURL: "http://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2012/07/beetlejuice_1280x720.jpg",
            movieUrl: "https://www.imdb.com/title/tt0094721/"
        },
        {
            movieName: "The Exorcist",
            imageURL: "https://images-na.ssl-images-amazon.com/images/I/A17D9d%2BtSML._SY445_.jpg",
            movieUrl: "https://www.imdb.com/title/tt0070047/"
        },
        {
            movieName: "Poltergeist",
            imageURL: "https://images-na.ssl-images-amazon.com/images/I/81yuQrgfhYL._SY445_.jpg",
            movieUrl: "https://www.imdb.com/title/tt0084516/"
        },
        {
            movieName: "Alien",
            imageURL: "https://m.media-amazon.com/images/M/MV5BNDUzMTUwNjA4NV5BMl5BanBnXkFtZTYwMzEwOTk2._V1_.jpg",
            movieUrl: "https://www.imdb.com/title/tt0078748/"
        },
        {
            movieName: "The Texas Chainsaw Massacre",
            imageURL: "https://cdn.mos.cms.futurecdn.net/RdwU2pc7fBtabesE2sPGhQ-970-80.jpg",
            movieUrl: "https://www.imdb.com/title/tt0072271/?ref_=nv_sr_1"
        },
        {
            movieName: "Hotel Transylvania",
            imageURL: "https://m.media-amazon.com/images/M/MV5BMTM3NjQyODI3M15BMl5BanBnXkFtZTcwMDM4NjM0OA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
            movieUrl: "https://www.imdb.com/title/tt0837562/"
        },
        {
            movieName: "Hotel Transylvania 2",
            imageURL: "https://m.media-amazon.com/images/M/MV5BNThkYmNmYzAtOGI2Ny00ODI4LTgwY2MtZmY3YWMxYTUyYjVjXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
            movieUrl: "https://www.imdb.com/title/tt2510894/"
        },
        {
            movieName: "Hotel Transylvania 3: Summer Vacation",
            imageURL: "https://m.media-amazon.com/images/M/MV5BNjA1MzU5MTY3OF5BMl5BanBnXkFtZTgwNTU5MDA3NTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
            movieUrl: "https://www.imdb.com/title/tt5220122/"
        },
        {
            movieName: "The Crow",
            imageURL: "https://m.media-amazon.com/images/M/MV5BMTkwZGVmMTctNTQxZS00MzM4LWEyNjctNDIxYzllZDY4YWJmXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg",
            movieUrl: "https://www.imdb.com/title/tt0109506/"
        },
        {
            movieName: "Insidious",
            imageURL: "https://m.media-amazon.com/images/M/MV5BMTYyOTAxMDA0OF5BMl5BanBnXkFtZTcwNzgwNTc1NA@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
            movieUrl: "https://www.imdb.com/title/tt1591095/"
        }
    ];

// Get random seconds
var randMin = 3000;
var randMax = 9000;
var randNo = Math.floor(Math.random() * (+randMax - +randMin)) + randMin;
// Loop through the movies array and change text
var counter = 0;
var elem = document.getElementById("randomMovie");
let searchURL = `https://www.google.com/search?q=${movieList[counter].movieName}&newwindow=1`;
var change = () => {
    var addCardChange = "";
    addCardChange += '<div class="card-deck"><div class="card" style="width: 90%;">';
    addCardChange += '<a href="' + searchURL + '"><img class="card-img-top" src="' + movieList[counter].imageURL + '" alt="name"></a>';
    addCardChange += '<div class="card-img-overlay"><h4 class="card-title cardMovieTitle"><a href="' 
    + movieList[counter].movieUrl + '" target="_blank">' + 
    movieList[counter].movieName + '</a></h4></div></div></div>';
    elem.innerHTML = addCardChange;
    counter++;
    if (counter >= movieList.length) {
        counter = 0;
    }
}
// Randomly stop on a list item from the movies array
var addCardShuffle = "";
var stopShuffle = () => {
    var numberOfMovies = movieList.length;
    var randMinMov = 1;
    var randMaxMov = numberOfMovies;
    var randNoMov = Math.floor(Math.random() * (+randMaxMov - +randMinMov)) + +randMinMov;
    var movieListName = movieList[randNoMov].movieName;
    var movieImgUrl = movieList[randNoMov].imageURL;
    var movieUrl = movieList[randNoMov].movieUrl; 

    addCardShuffle += `<div class="card-deck">
                           <div class="card" style="width: 90%;">
                                <a href="${movieUrl}" target="_blank"> 
                                    <img class="card-img-top" src="${movieImgUrl}" alt="name">
                                </a>
                              <div class="card-img-overlay">
                                 <h4 class="card-title cardMovieTitle">
                                    <a href="${movieUrl}" target="_blank"> ${movieListName} </a>
                                 </h4>
                              </div>
                           </div>
                        </div>`;
}
// Set an interval and timeout
stopText = elem.innerHTML = "";
var tmer = setInterval(() => change(), 500);
setTimeout(() => {
    clearInterval(tmer);
    stopShuffle();
}, randNo);
// Loading circle
var loadingCircle = document.getElementById("loadCircle");
var pumpkinImage = document.getElementById("imagePumpkin");
setTimeout(function () {
    console.log('timeout');
    loadingCircle.style.display = "none";
    pumpkinImage.style.display = "block";
}, randNo);
// Loop through the movies array and display to list
var addCard = "";
for (var i = 0; i < movieList.length; i++) {
    var movieListName = movieList[i].movieName;
    var movieImgUrl = movieList[i].imageURL;
    var movieUrl = movieList[i].movieUrl;
    addCard +=`<div class="card-deck">
                    <div class="card" style="width: 90%;">
                            <a href="${movieUrl}" target="_blank"> 
                            <img class="card-img-top" src="${movieImgUrl}" alt="name">
                            </a>
                            <div class="card-img-overlay">
                                <h4 class="card-title cardMovieTitle">
                                    <a href="${movieUrl}" target="_blank"> ${movieListName} </a>
                                </h4>
                            </div>
                    </div>
                </div>`
    // addCard += '<div class="card-deck"><div class="card" style="width: 90%;">';
    // addCard += '<img class="card-img-top" src="' + movieImgUrl + '" alt="name">';
    // addCard += '<div class="card-img-overlay"><h4 class="card-title cardMovieTitle"><a href="' + movieUrl + '" target="_blank">' + movieListName + '</a></h4></div></div></div>';
    movieCards.innerHTML = addCard;
}


 const searchMovie = () => {
 input = document.getElementById('search-movie');
 filter = input.value.toLowerCase();

 const movies = document.getElementsByClassName("card");
 Array.from(movies).forEach((movie)=>{
    const movieEach=movie.getElementsByClassName('cardMovieTitle')[0].textContent
    console.log(movieEach.toLowerCase())
    if (movieEach.toLowerCase().indexOf(filter)!=-1){
        movie.style.display='';
    } else {
        movie.style.display='none';
    }
 })
}

searchMovie();
