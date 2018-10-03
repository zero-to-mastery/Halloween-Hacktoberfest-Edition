<script>
    const searchButton = document.getElementById('activateSearch');
    const movieBox = document.getElementById('movies');
    let searchWord = document.getElementById('searchMovie').value;
    let totalResults = document.getElementById('totalResults');
    
    let runSearch = (e) => {
        e.preventDefault();
        fetch(`//www.omdbapi.com/?apikey=def802d7&type=movie&plot=short&s=${searchWord}`)
        .then(res => res.json())
        .then(movies => {
            console.log(movies);
        totalResults.innerText = movies.totalResults;
        movies.Search.forEach((movie)=>{
            let {Title, Poster, imdbID} = movie;
            movieBox.innerHTML += 
            `
            <div>
            <h1>${Title}</h1>
            <img src="${Poster}" alt="${Title}"/>
            <a target="_blank" href="https://www.imdb.com/title/${imdbID}">View on IMDB</a>
            </div>
            `
        })
    })
    .catch(err => console.log)
    }
    
    searchButton.addEventListener('click', runSearch);
</script>