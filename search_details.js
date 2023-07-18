const urlParams = new URLSearchParams(window.location.search);
const search_text = urlParams.get('search');

let favContainer = document.getElementById('favContainer');

getmovie();

async function getmovie(){
    favContainer.innerHTML = '';

    //get search item from params
    let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8456bf09&s=${search_text}&page=1`);
    let resjsonmain = await res.json();
    if(resjsonmain.Response == 'True')
    {
        let search_items = resjsonmain.Search;
        for(let i = 0; i< search_items.length; i++){

            let movieapi = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8456bf09&t=${search_items[i].Title}&y=${search_items[i].Year}`);
            let resjson = await movieapi.json();

            if(resjson.Response != 'False'){
                const div = document.createElement('div');
                div.className = 'favourite-item-container';
                div.innerHTML = `<a class="favourite-item" href="movie_details.html?mtitle=${search_items[i].Title}&year=${search_items[i].Year}">
                                    <div class="favourite-item-poster">
                                        <img class="favourite-item-image" src="${resjson.Poster}"></img>
                                    </div>
                                    <div class="favourite-item-title-year">
                                        <div class="favourite-item-title">${search_items[i].Title}</div>
                                        <div class="favourite-item-year">${search_items[i].Year}</div>
                                    </div>
                                </a>`;
                favContainer.append(div);
            }
        }
    }
}



