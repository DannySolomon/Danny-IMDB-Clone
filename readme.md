The entry point of the code is 'index.html'

index.html
* Stylesheet - style.css
* Script - script.js
* other libraries used:
    - Bootstrap cdn
    - FontAwesome cdn
* Description:
    - Created a navbar with options to switch to Home(index.html) & Favourites(favourites.html) page
    - In the center a searchbar and a search button
    - When we type the movie name in the searchbar a suggestion drop down is displayed with an "Add to Favourite" button for each movie
    - The search button takes you to the search_details.html page where the search list is displayed
    - clicking on any movie in the dropdown takes you to movie_details.html page where a detailed description of the movie will be displayed

movie_details.html
* Stylesheet - movie_details.css
* Script - movie_details.js
* other libraries used:
    - Bootstrap cdn
    - FontAwesome cdn 
* Desrciption:
    - Here the movie details: [title, poster, rating, runtime, plot, actors, year], are displayed
    - Here you can remove and add to Favourites

favourites.html
* Stylesheet - movie_details.css, favourites.css
* Script - favourites.js
* other libraries used:
    - Bootstrap cdn
    - FontAwesome cdn
* Description:
    - Here we can see the movies that we marked favourites
    - We can also remove and add to Favourites here
    - clicking on a movie will take you to movie_details page

search_details.html   
* Stylesheet - movie_details.css, favourites.css
* Script - favourites.js   
* other libraries used:
    - Bootstrap cdn
* Description:
    - The search button of the search bar takes us to this page
    - the search text matched movie list will be displayed here.
    - Clicking on any movie will take you to the movie_details page      


