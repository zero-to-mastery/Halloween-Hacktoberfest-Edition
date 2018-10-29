    var searchButton = document.getElementById('activateSearch');
    var movieBox = document.getElementById('movies');
    var searchWord = document.getElementById("searchMovie");
    let title = "";
    var handleErrors = (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    };

    var runSearch = (e) => {
        if(e){e.preventDefault();}
        var searchQuery = document.getElementById("searchMovie").value;
        fetch(`//www.omdbapi.com/?apikey=def802d7&type=movie&plot=short&s=${searchQuery}`)
        .then(handleErrors)
        .then(res => res.json())
        .then(movies => {
        movieBox.innerHTML = "";
        movies.Search.forEach((movie)=>{
            var {Title, Poster, imdbID} = movie;
            if(Poster == "N/A"){Poster = "../images/noPoster.png"}
            movieBox.innerHTML += 
            `
            <div class="col-md-3 movie-search-card">
            <h2>${Title}</h2>
            <a href="https://www.google.com/search?q=${Title}&newwindow=1"><img src="${Poster}" alt="${Title}"/></a>
            <a target="_blank" href="https://www.imdb.com/title/${imdbID}">View on IMDB</a>
            </div>
            `
        });
    })
    .catch(err => console.log);
    };
    
    searchButton.addEventListener('click', runSearch);
    searchWord.addEventListener('keyup', (e) => {
        if (e.keyCode == 13) {
            console.log('works');
            runSearch();
        }
    });

    const googleMovie = () => {
        if (!title) {return;}

        let window = new Window();
        window.open(`https://www.google.com/search?q=${title}&newwindow=1`)
    }

