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
    let movieapi = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8456bf09&t=${imdb_title}&y=${imdb_year}`);
    let resjson = await movieapi.json();

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
