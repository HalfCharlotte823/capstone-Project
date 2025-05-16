# JAVASCRIPT
## Movies.js (Aka the JSON file)
```
const moviesData = [
    {
        id: 1,
        poster: "images/AcrossTheSpiderVerse.png",
        name: "Across the Spiderverse",
        releaseDate: "June 02, 2023",
        rating: "4.3/5",
        link: "https://en.wikipedia.org/wiki/Spider-Man:_Across_the_Spider-Verse",
    },
    {
        id: 2,
        poster: "../images/JujutsuKaisen0.png",
        name: "Jujutsu Kaisen 0",
        releaseDate: "March 18, 2022",
        rating: "4.8/5",
        link: "https://en.wikipedia.org/wiki/Jujutsu_Kaisen_0_(film)",
    },
    {
        id: 3,
        poster: "images/AvengersEndgame.png",
        name: "Avengers Endgame",
        releaseDate: "April 26, 2019",
        rating: "4.7/5",
        link: "https://en.wikipedia.org/wiki/Avengers:_Endgame",
    },
    {
        id: 4,
        poster: "images/birthofanation.png",
        name: "The Birth of a Nation",
        releaseDate: "October 7, 2016",
        rating: "4.6/5",
        link: "https://en.wikipedia.org/wiki/The_Birth_of_a_Nation_(2016_film)",
    },
    {
        id: 5,
        poster: "images/minecraftmovie.png",
        name: "A Minecraft Movie",
        releaseDate: "April 04, 2025",
        rating: "4.0/5",
        link: "https://en.wikipedia.org/wiki/A_Minecraft_Movie",
    },
    {
        id: 6,
        poster: "images/sonic3.png",
        name: "Sonic 3",
        releaseDate: "December 20, 2024",
        rating: "4.7/5",
        link: "https://en.wikipedia.org/wiki/Sonic_the_Hedgehog_3_(film)",
    },
    {
        id: 7,
        poster: "images/havoc.png",
        name: "Havoc",
        releaseDate: "April 25, 2025",
        rating: "3.0/5",
        link: "https://en.wikipedia.org/wiki/Havoc_(2025_film)",
    },
    {
        id: 8,
        poster: "images/cokebear.png",
        name: "Cocaine Bear",
        releaseDate: "February 24, 2023",
        rating: "3.2/5",
        link: "https://en.wikipedia.org/wiki/Cocaine_Bear",
    },
    {
        id: 9,
        poster: "images/twister.png",
        name: "Twister",
        releaseDate: "May 10, 1996",
        rating: "4.2/5",
        link: "https://en.wikipedia.org/wiki/Twister_(1996_film)",
    },
    {
        id: 10,
        poster: "images/doghotel.png",
        name: "Hotel for Dogs",
        releaseDate: "January 16, 2009",
        rating: "4.7/5",
        link: "https://en.wikipedia.org/wiki/Hotel_for_Dogs_(film)",
    },
    {
        id: 11,
        poster: "images/shrek.png",
        name: "Shrek",
        releaseDate: "May 18, 2001",
        rating: "4.5/5",
        link: "https://en.wikipedia.org/wiki/Shrek",
    },
    {
        id: 12,
        poster: "images/darkknight.png",
        name: "The Dark Knight",
        releaseDate: "July 18, 2008",
        rating: "4.9/5",
        link: "https://en.wikipedia.org/wiki/The_Dark_Knight",
    },
    {
        id: 13,
        poster: "images/SpyKids.png",
        name: "Spy Kids 3-D: Game over",
        releaseDate: "July 25, 2003",
        rating: "4.0/5",
        link: "https://en.wikipedia.org/wiki/Spy_Kids_3-D:_Game_Over",
    },
    {
        id: 14,
        poster: "images/despicable.png",
        name: "Despicable Me 4",
        releaseDate: "July 3, 2024",
        rating: "3.7/5",
        link: "https://en.wikipedia.org/wiki/Despicable_Me_4",
    },
    {
        id: 15,
        poster: "images/loudhouse.png",
        name: "The Loud House Movie",
        releaseDate: "August 20, 2021",
        rating: "4.1/5",
        link: "https://en.wikipedia.org/wiki/The_Loud_House_Movie",
    },
    {
        id: 16,
        poster: "images/lavaboysharkgirl.png",
        name: "Sharkboy and Lavagirl",
        releaseDate: "June 10, 2005",
        rating: "4.1/5",
        link: "https://en.wikipedia.org/wiki/The_Adventures_of_Sharkboy_and_Lavagirl_in_3-D",
    },
    {
        id: 17,
        poster: "images/surfsdown.png",
        name: "Surf's Up 2: WaveMania",
        releaseDate: "January 17, 2017",
        rating: "2.3/5",
        link: "https://en.wikipedia.org/wiki/Surf%27s_Up_2:_WaveMania",
    },
    {
        id: 18,
        poster: "images/fred3.png",
        name: "Fred 3: Camp Fred",
        releaseDate: "July 28, 2012",
        rating: "4.1/5",
        link: "https://en.wikipedia.org/wiki/Fred_3:_Camp_Fred",
    },
    {
        id: 19,
        poster: "images/peebodyandsureman.png",
        name: "Mr. Peabody & Sherman",
        releaseDate: "March 7, 2014",
        rating: "4.6/5",
        link: "https://en.wikipedia.org/wiki/Mr._Peabody_%26_Sherman",
    },
    {
        id: 20,
        poster: "images/alvinchip.png",
        name: "Alvin & Chipmunks: Chipwrecked",
        releaseDate: "December 16, 2011",
        rating: "4.3/5",
        link: "https://en.wikipedia.org/wiki/Alvin_and_the_Chipmunks:_Chipwrecked",
    },
    {
        id: 21,
        poster: "images/enaf.png",
        name: "Eight Crazy Nights",
        releaseDate: "November 27, 2002",
        rating: "4.1/5",
        link: "https://en.wikipedia.org/wiki/Eight_Crazy_Nights",
    },
    {
        id: 22,
        poster: "images/underpanties.png",
        name: "Captain Underpants",
        releaseDate: "June 2, 2017",
        rating: "4.7/5",
        link: "https://en.wikipedia.org/wiki/Captain_Underpants:_The_First_Epic_Movie",
    },
    {
        id: 23,
        poster: "images/pixel.png",
        name: "Pixels",
        releaseDate: "July 24, 2015",
        rating: "4.3/5",
        link: "https://en.wikipedia.org/wiki/Pixels_(2015_film)",
    },
    {
        id: 23,
        poster: "images/kidspy4.png",
        name: "Spy Kids: All the Time in the World",
        releaseDate: "August 19, 2011",
        rating: "3.4/5",
        link: "https://en.wikipedia.org/wiki/Spy_Kids:_All_the_Time_in_the_World",
    },
    {
        id: 24,
        poster: "images/karatekid.png",
        name: "The Karate Kid",
        releaseDate: "June 11, 2010",
        rating: "4.4/5",
        link: "https://en.wikipedia.org/wiki/The_Karate_Kid_(2010_film)",
    },
    {
        id: 25,
        poster: "images/croods.png",
        name: "The Croods",
        releaseDate: "March 22, 2013",
        rating: "4.6/5",
        link: "https://en.wikipedia.org/wiki/The_Croods",
    },
    {
        id: 26,
        poster: "images/lorax.png",
        name: "The Lorax",
        releaseDate: "March 2, 2012",
        rating: "3.2/5",
        link: "https://en.wikipedia.org/wiki/The_Lorax_(film)",
    },
    {
        id: 27,
        poster: "images/rio.png",
        name: "Rio",
        releaseDate: "April 15, 2011",
        rating: "4.7/5",
        link: "https://en.wikipedia.org/wiki/Rio_(2011_film)",
    },
];
```
Key point:
* This file just holds all the different movies.

## Timer.js
```
function startTimer(){
    console.log('Starting session timer');
    if(document.getElementById('sessionTimer')){
        console.log('Timer already exists, not creating a new one');
        return;
    }
    let sessionSeconds = 0;
    const timerElement = document.createElement('div');
    timerElement.id="sessionTimer";
    timerElement.style.marginTop = "20px";
    timerElement.style.color = "var(--primary-color)";
    timerElement.style.fontSize = "18px";
    timerElement.style.textAlign = "center";
    document.body.appendChild(timerElement);
    updateTimerDisplay(timerElement, sessionSeconds);
    let timerInterval = setInterval(() => {
        sessionSeconds++;
        updateTimerDisplay(timerElement, sessionSeconds);
        sessionStorage.setItem('timeOnPage', sessionSeconds.toString());
        if(sessionSeconds === 300){
            showLongSessionMessage();
        };
    }, 1000);
    window.addEventListener('beforeunload', () => {
        console.log('Page unloading, stopping timer');
        clearInterval(timerInterval);
    });
}
function updateTimerDisplay(element, totalSeconds){
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    let timeText = `Time on page: `;
    if(hours > 0){
        timeText += `${hours}h `;
    }
    if(hours > 0 || minutes > 0){
        timeText += `${minutes}m `;
    }
    timeText += `${seconds}s `;
    element.textContent = timeText;
}
function showLongSessionMessage(){
    console.log('Showing long session message (5 minutes)');
    if(document.getElementById('longSessionMessage')){
        console.log('Long session message already exists');
        return;
    }
    const messageDiv = document.createElement('div');
    messageDiv.id="longSessionMessage";
    messageDiv.style.padding='10px';
    messageDiv.style.margin = '20px 0'
    messageDiv.style.backgroundColor = 'var(--primary-color)'
    messageDiv.style.color = 'var(--btn-text)'
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.textAlign = 'center';
    messageDiv.innerHTML = `
    <p>You've been searching for the perfect movie for 5 minutes! Thank you for your interest in Random Play!</p>
    <button id="dismissMessage" style="margin-top: 10px; padding: 5px 10px; border: none; border-radius: 4px; cursor:pointer;>
    Dismiss
    </button>
    `;
    const timerElement = document.getElementById('sessionTimer');
    if(timerElement){
        document.body.insertBefore(messageDiv, timerElement);
    } else {
        document.body.appendChild(messageDiv);
    }
    const dismissButton = document.getElementById('dismissMessage');
    if(dismissButton){
        dismissButton.addEventListener('click', function(){
            const message = document.getElementById('longSessionMessage');
            if(message){
                message.remove()
            }
        });
    }
}
startTimer();
```
Key points:
* This displays the amount of time you've spent on the website.
* At around the 5 minute mark, you get a message that says how thankful we are for using the website.
* There also should be a button that lets you close the message but for some reason it doesnt show up...

## Themes.js
```
const themeToggle = document.getElementById('themeToggle');
if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark');
}
themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
})
document.addEventListener('keydown', function(e){
    if(e.shiftKey && e.key === 'D'){
        themeToggle.click();
    }
})
```
Key points:
* This is how the `themeToggle` button works.
* I tried to make a `pink` theme over the basic `light` theme, btu sadly it didn't work.

## Greetings.js
```
function greetUser(){
    const hasVisitedBefore = document.cookie.includes("visitedBefore=true");
    if(hasVisitedBefore){
        alert("Welcome back to Random Play!");
    } else {
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);
        document.cookie = `visitedBefore=true;
        expires=${expiryDate.toUTCString()}; path=/`;
        alert("Welcome to Random Play! Enjoy your stay!");
    }
}
greetUser()
```
Key points:
* The `greetUser()` at the end is for making sure the function works.
* If you've been to the website before, it should tell you 'welcome back!' and if it's your first time, it should say 'welcome!'

### AND FINALLY,
## Rendering.js
```
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
```
Key points:
1. Multiple warnings in case anything doesn't work.
2. Shows all the different movie cards, with all the `movies.js` data displaying.
3. Real-time movie searching.
4. Saves all your history in `localStorage`