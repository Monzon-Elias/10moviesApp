
//take input from user
export function search() {
  // Get the value from the search box
  let movieTitle = document.getElementById("search").value;
  console.log(movieTitle);
  //create the endpoint and return it
  const url = 'https://api.themoviedb.org/3/search/movie?&api_key=25b1b277fd1952604770c24af13f6a18&query=';
  const URL = url+movieTitle;
  return URL;
}
