import { getMovies } from "../webservice/backend.js";

document.getElementById("search").addEventListener("keyup", (e) => {
  if (e.keyCode == 13) getMovies();
});
document.getElementById("send").addEventListener("click", () => getMovies());

