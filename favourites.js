

let favContainer = document.getElementById('favContainer');

getmovie();

async function getmovie(){
    favContainer.innerHTML = '';

    let favarray = localStorage.getItem('favourites');
    let favourites = JSON.parse(favarray);

    for(let i = 0; i< favourites.length; i++){

        let movieapi = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8456bf09&t=${favourites[i].title}&y=${favourites[i].year}`);
        let resjson = await movieapi.json();

        const div = document.createElement('div');
        div.className = 'favourite-item-container';
        div.innerHTML = `<a class="favourite-item" href="movie_details.html?mtitle=${favourites[i].title}&year=${favourites[i].year}">
                            <div class="favourite-item-poster">
                                <img class="favourite-item-image" src="${resjson.Poster}"></img>
                            </div>
                            <div class="favourite-item-title-year">
                                <div class="favourite-item-title">${favourites[i].title}</div>
                                <div class="favourite-item-year">${favourites[i].year}</div>
                            </div>
                        </a>
                        <div class="favourite-item-add-remove">
                            <button type="button" id="${favourites[i].title}1perd9${favourites[i].year}" class="btn btn-outline-primary" onclick="removeFromFavourites(event,this)">Remove from Favourites</button>
                        </div>`;
        favContainer.append(div);
    }
}



function removeFromFavourites(e,element){
    const splitArr = element.id.split("1perd9");

    const movie = {
        title: splitArr[0],
        year: splitArr[1]
    }

    let favarray = localStorage.getItem('favourites');
    let favourites = JSON.parse(favarray);

    console.log(movie);

    //favourites.pop(movie) did not work
    for(let i=0; i<favourites.length; i++){
        if(favourites[i].title == movie.title && favourites[i].year == movie.year)
        {
            favourites.splice(i,1);
        }
    }

    localStorage.setItem('favourites', JSON.stringify(favourites));

    getmovie();
}


