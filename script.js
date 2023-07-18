let search_bar = document.getElementById('search-bar');
let search_button = document.getElementById('search-button');

let favourites = [];
// localStorage.setItem('favourites', JSON.stringify(favourites));

search_bar.addEventListener('input',searchApi);
search_button.addEventListener('click',searchPage);

async function searchPage(e){
    e.preventDefault(); // to prevent page from reloading
    let typed_text = search_bar.value;

    if(typed_text != ''){
        window.location.href = `search_details.html?search=${typed_text}`;
    }
}

async function searchApi(){
    let typed_text = search_bar.value;
    let dropdown = document.getElementById('dropdown');
    dropdown.innerHTML = '';
    if(typed_text != ''){
        let res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8456bf09&s=${typed_text}&page=1`);
        let resjson = await res.json();
        if(resjson.Response == 'True')
        {
            for(let i = 0 ;i < resjson.Search.length; i++){

                let favarray = localStorage.getItem('favourites');
                favourites = JSON.parse(favarray);

                const div = document.createElement('div');

                let temp = false;
                for(let j = 0; j < favourites.length; j++){
                    if(resjson.Search[i].Title == favourites[j].title && resjson.Search[i].Year == favourites[j].year){
                        temp = true;
                    }
                }

                //console.log(resjson.Search[i].Title);

                if(temp == false){
                    div.innerHTML = `<a href="movie_details.html?mtitle=${resjson.Search[i].Title}&year=${resjson.Search[i].Year}">${resjson.Search[i].Title}</a>
                            <span onclick="addToFavourite(event,this)" id="${resjson.Search[i].Title}1perd9${resjson.Search[i].Year}" style="color:white" class="favourites"><i class="fa-solid fa-star"></i></span>`;

                }
                else{
                    div.innerHTML = `<a href="movie_details.html?mtitle=${resjson.Search[i].Title}&year=${resjson.Search[i].Year}">${resjson.Search[i].Title}</a>
                            <span onclick="addToFavourite(event,this)" id="${resjson.Search[i].Title}1perd9${resjson.Search[i].Year}" style="color:grey" class="favourites"><i class="fa-solid fa-star"></i></span>`;
                }

                dropdown.append(div);

                
            }
        }
    }
}

function addToFavourite(e,element){
    const splitArr = element.id.split("1perd9");

    const movie = {
        title: splitArr[0],
        year: splitArr[1]
    }

    let present = false;

    for(let i = 0; i < favourites.length; i++){
        if(favourites[i].title == movie.title && favourites[i].year == movie.year)
        {
            present = true;
            break;
        }
    }

    let star = document.getElementById(`${element.id}`);
    if(present == false)
    {
        favourites.push(movie);
        star.style.color = 'grey';

    }
    else{
        favourites.pop(movie);
        star.style.color = 'white';
    }

    localStorage.setItem('favourites', JSON.stringify(favourites));
}

