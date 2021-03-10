import { search } from '../webapp/frontend.js'

function convertToJson(res) {
  if (res.ok) {
    document.getElementById("noMovies").innerHTML = "";
    return res.json(); //json() is a method inside the response object. It returns the data as a json object.
  } else {
    document.getElementById("noMovies").innerHTML = "No movies today X(";
    throw new Error(res.statusText);
  }
}

export async function getMovies() {
  const url = search();
  let movies = await fetch(url).then(convertToJson);
  console.log(movies);
  displayMovies(movies);
}

//display outcome to the user
export function displayMovies(movies) {
  const listMovies = document.getElementById("listMovies");
  //taking only 10 elements
  movies = movies.results;
  let newArray = movies.map((item) => {
    if (!item.poster_path) {
      return `
            <div class="card">
                <img src="https://d1qbemlbhjecig.cloudfront.net/prod/3.43.0/staticfiles/bento_cms/images/placeholder-image.svg">
                <div class="text">
                    <p><b>Title: </b>${item.title}</p>
                    <p><b>Popularity Summary: </b>${item.popularity} out of ${item.vote_count} votes</p>
                </div>
            </div>
              `;
    }
    return `
    <div class="card">
        <img src="https://image.tmdb.org/t/p/w500${item.poster_path}"
            alt="movie poster">
        <div class="text">
            <p><b>Title: </b>${item.title}</p>
            <p><b>Popularity Summary: </b>${item.popularity} out of ${item.vote_count} votes</p>
        </div>
    </div>
      `;
  });
  listMovies.innerHTML = newArray.join("");
  if(newArray.length == 0) if(!movies.results) document.getElementById("noMovies").innerHTML = "No movies found =(";
}
