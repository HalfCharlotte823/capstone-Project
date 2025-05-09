function renderMovies(movies){
    console.log('renderMovies called with', movies.length, 'movies');
    const resultsContainer = document.getElementById('resultsContainer');
    if(!resultsContainer){
        console.error('Results container not found');
        return;
    }
    resultsContainer.innerHTML = '';
    if(movies.length === 0){
        console.log('No Movies found, showing empty message');
        resultsContainer.innerHTML = `<p id="noResults">No movies found, sorry!</p>`;
        return;
    }
    const movieElements = [];
    movies.forEach(movie => {
        if(!movie || typeof movie.name !== 'string'){
            console.warn('Invalid movie object:', movie);
            return;
        }
        const movieDiv = document.createElement('div');
        movieDiv.className = 'tape';
        movieDiv.innerHTML=`
        <div class="movie-header">
        <img src="${movie.poster || ''}" alt="${movie.name}" class="flag-img">
        <h3>${movie.name}</h3>
        <p><strong>Rating:</strong> ${movie.rating || 'Unknown'}</p>
        <p><strong>Release Date:</strong> ${movie.releaseDate || 'Unknown'}</p>
        <a href="${movie.link || '#'}" target="_blank">
        <button class="learn-more-btn">See details</button>
        </a>
        </div>
        `;
        movieElements.push(movieDiv);
    });
    movieElements.forEach(element =>{
        resultsContainer.appendChild(element);
    });
    console.log(`Successfully Rendered ${movies.length} movies`);
}
function initializeSearch(){
    console.log("Initializing search functionality");
    renderMovies(moviesData);
    const searchInput = document.getElementById('searchInput');
    if(!searchInput){
        console.error('Search input element not found');
        return;
    }
    searchInput.addEventListener('input', function(){
        const searchTerm = this.value.trim().toLowerCase();
        console.log('Input event detected, search term:', searchTerm)
        if(searchTerm !== ''){
            searchMovies(searchTerm);
        } else {
            renderMovies(moviesData);
        }
    });
    searchInput.addEventListener('keydown', function(e){
        if(e.key === 'Enter'){
            const searchTerm = searchInput.value.trim().toLowerCase();
            console.log('Enter key pressed for search term:', searchTerm);
            if(searchTerm !== ''){
                searchMovies(searchTerm);
                saveSearchTerm(searchTerm);
                searchInput.value = '';
            }
        }
    })
}
function searchMovies(searchTerm){
    console.log('searchMovies called with term:', searchTerm);
    if(typeof moviesData === 'undefined' || !Array.isArray(moviesData)){
        console.error('moviesData is not defined or not an array in searchMovies');
        return;
    }
    if(searchTerm === ''){
        console.log('Empty search term, showing all movies');
        renderMovies(moviesData);
        return;
    }
    const filteredMovies = moviesData.filter(movie => {
        if(!movie || typeof movie.name !== 'string'){
            consome.warn('Invalid movie object found:', movie);
            return false;
        }
        return movie.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    console.log(`Found ${filteredMovies.length} movies matching "${searchTerm}"`)
    renderMovies(filteredMovies)
}
function saveSearchTerm(term){
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    if(searchHistory.length >= 10){
        searchHistory.shift();
    }
    if(!searchHistory.includes(term)){
        searchHistory.push(term)
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }
}
initializeSearch();
renderMovies(moviesData);