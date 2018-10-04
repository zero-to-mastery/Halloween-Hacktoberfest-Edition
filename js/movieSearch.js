    const searchButton = document.getElementById('activateSearch');
    const movieBox = document.getElementById('movies');
    let totalResults = document.getElementById('totalResults');
    let searchWord = document.getElementById("searchMovie");
    const handleErrors = (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    let runSearch = (e) => {
        if(e){e.preventDefault();}
        let searchQuery = document.getElementById("searchMovie").value;
        fetch(`//www.omdbapi.com/?apikey=def802d7&type=movie&plot=short&s=${searchQuery}`)
        .then(handleErrors)
        .then(res => res.json())
        .then(movies => {
        movieBox.innerHTML = "";
        movies.Search.forEach((movie)=>{
            let {Title, Poster, imdbID} = movie;
            if(Poster == "N/A"){Poster = "./images/noPoster.png"};
            movieBox.innerHTML += 
            `
            <div class="col-md-3 movie-search-card">
            <h2>${Title}</h2>
            <img src="${Poster}" alt="${Title}"/>
            <a target="_blank" href="https://www.imdb.com/title/${imdbID}">View on IMDB</a>
            </div>
            `
        })
    })
    .catch(err => console.log)
    }
    
    searchButton.addEventListener('click', runSearch);
    searchWord.addEventListener('keyup', (e) => {
        if (e.keyCode == 13) {
            console.log('works');
            runSearch();
        }
    });
