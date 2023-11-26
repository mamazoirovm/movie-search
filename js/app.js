



const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("input");
const header = document.getElementById("header")
getMovies(APIURL);

async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();
  console.log(respData);
  showMovies(respData.results);
}
function showMovies(movies) {
 let moviePoster;
  main.innerHTML = "";
  movies.forEach((movie) => {
    let { poster_path, title, vote_average, overview, original_language, release_date } = movie;
    
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
   
    const moviePoster = poster_path ? IMGPATH + poster_path : "not.jpg";
  
    movieEl.innerHTML = `
       <img src="${ moviePoster }" alt="${title}"/>
     <div class="movie-info">
         <h3>${title}</h3>
         
         <span class="${getClassByRate(vote_average)}">${vote_average}</span>
     </div> 
     <div class="overview">
     <h1 class="the-title"> Movie name: ${title}</h1>
     <h2 class="the-title"> Language:  ${original_language} </h2>
     <h2 class="the-title"> Release year:  ${release_date} </h2>
    
     <h3> Movie about: </h3>
     ${overview}
     <div class="list">
     <i class="fa-regular fa-heart fa-beat" style="color: red; font-size: 2.5rem"></i>
     <i id="like" class="fas fa-bookmark fa-sharp" style="color: red; font-size: 2.5rem"></i>
   
   </div>
     </div>
     `;
    main.appendChild(movieEl)
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'greenyellow';
  } else if (vote >= 5) {
    return 'white'
  } else {
    return '#E50914';
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm) {
    getMovies(SEARCHAPI + searchTerm);
    search.value = "";
  }
});

