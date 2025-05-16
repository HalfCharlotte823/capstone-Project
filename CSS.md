# CSS Explanation
This is the README file for the CSS of my Capstone Project: Movie Explorer.
```
body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: var(--bg-color);
    border: 40px solid var(--border-color);
}
```
Key points:
* Uses the `themeToggle` for the border and background color.
* Removes the padding and margin all HTML files automatically have.

```
.theme-toggle{
    padding: 5px;
    transition: background-color 0.2s;
    background-color: #e5e5f7;
    opacity: 0.8;
    background-image:  linear-gradient(135deg, #ffd000 25%, transparent 25%), linear-gradient(225deg, #ffd000 25%, transparent 25%), linear-gradient(45deg, #ffd000 25%, transparent 25%), linear-gradient(315deg, #ffd000 25%, #d0ff00 25%);
    background-position:  10px 0, 10px 0, 0 0, 0 0;
    background-size: 20px 20px;
    background-repeat: repeat;
    border-radius: 50px;
}
```
Key points:
* This is the Button for the `ThemeToggle.` It's really just to make the design look cool and decent.

```
.flag-img{
    width: 200px;
    height: 200px;
}
```
Key points:
* Literally just here to make the posters fit within the page and all be the same size.

```
footer{
    background-color: var(--footer-color);
    border: 1px solid black;
    color: var(--text-color);
    padding: 50px;
    text-align: center;
}
```
Key points:
* Here to make the footer look decent and have it stand out amongst the rest of the page.

```
.moviecontainer{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px
}
.movie-header{
    border: 2px solid black;
    background-color: var(--movie-card-bg);
    color: var(--text-color);
    padding: 5px;
}
.logo{
    margin-left: 500px;
}
```
Lumped together for convenience.

Key points:
* Moviecontainer holds everything to make the movie cards actually generate.
* Movie-header is the main container for all the movies to generate on.
* logo makes the logo sit in the middle of the page.

```
.search-container input{
    margin-left: 650px;
    margin-bottom: 40px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 40px;
}
```
Key points:
* This is what the searchbar looks like.

```
.dark{
    --bg-color: #5a5252;
    --text-color: #f5f5f5;
    --border-color-color: #333;
    --footer-color: #444;
    --movie-card-bg: #3a3838;
    --movie-card-color: white;
}
```
Key points:
* This is the dark theme for `themeToggle`