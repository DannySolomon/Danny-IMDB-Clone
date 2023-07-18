const urlParams = new URLSearchParams(window.location.search);
const imdb_title = urlParams.get('mtitle');
const imdb_year = urlParams.get('year');

console.log(imdb_title);

let favarray = localStorage.getItem('favourites');
let favourites = JSON.parse(favarray);

//change document title to movie name
document.title = imdb_title;

let fav_button = document.getElementById('addFav');

getmovie();

async function getmovie(){
    let movieapi = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8456bf09&t=${imdb_title}&y=${imdb_year}&plot=full`);
    let resjson = await movieapi.json();
    console.log(resjson);

    for(let i = 0; i < favourites.length; i++){
        if(imdb_title == favourites[i].title && imdb_year == favourites[i].year){
            fav_button.innerHTML = "Remove from Favourites";   
        }
    }
    
    //add Poster
    addPoster(resjson);

    //add Title
    addTitle(resjson);

    //add Year
    addYear(resjson);

    //add Plot
    addPlot(resjson);

    //add Runtime
    addRuntime(resjson);

    //add Rating
    addRating(resjson);

    //add Actors
    addActors(resjson);
}

function addPoster(res){
    let movie_image = document.getElementById('movie-image');
    movie_image.src = res.Poster;

}

function addTitle(res){
    let movie_title = document.getElementById('movie-title');
    movie_title.innerHTML = res.Title;
}

function addYear(res){
    let movie_year = document.getElementById('movie-year');
    movie_year.innerHTML = res.Year;
}

function addPlot(res){
    let movie_plot = document.getElementById('plot-details');
    movie_plot.innerHTML = res.Plot;
}

function addRuntime(res){
    let movie_runtime = document.getElementById('runtime');
    movie_runtime.innerHTML = res.Runtime;
}

function addRating(res){
    let movie_rating = document.getElementById('rating');
    movie_rating.innerHTML = res.imdbRating;
}

function addActors(res){
    let movie_actors = document.getElementById('actor-details');
    movie_actors.innerHTML = res.Actors;
}

fav_button.addEventListener('click',function(event){
    console.log("Hello");
    const movie = {
        title: imdb_title,
        year: imdb_year
    }
    if(fav_button.innerHTML == 'Add To Favourites'){
        fav_button.innerHTML = "Remove from Favourites";  
        favourites.push(movie);
    }else{
        fav_button.innerHTML = "Add To Favourites";  
        favourites.pop(movie);
    }

    localStorage.setItem('favourites', JSON.stringify(favourites));
})
