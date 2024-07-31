let url = "https://www.omdbapi.com/?apikey=7a4dd7e7&t=";
let movieName = document.getElementById("movieName");
let director = document.getElementById("director");
let cast = document.getElementById("cast");
let language = document.getElementById("language")
let collection = document.getElementById("collection");
let description = document.getElementById("description");
let genre = document.getElementById("genre");
let writer = document.getElementById("writer");
let awards = document.getElementById("awards");
let rating = document.getElementById("rating");
let releaseOn = document.getElementById("releasedOn");
let poster = document.getElementById("poster")



function searchMovie(){

    let query = url + movieName.value ;

    fetch(query).then((response) =>{
        return response.json();
    }).then((jsonData) =>{
        title.innerText = jsonData.Title
        director.innerText = jsonData.Director;
        cast.innerText = jsonData.Actors;
        language.innerText = jsonData.Language
        collection.innerText = jsonData.BoxOffice;
        description.innerText = jsonData.Plot;
        genre.innerText = jsonData.Genre;
        writer.innerText = jsonData.Writer;
        awards.innerText = jsonData.Awards;
        rating.innerText = jsonData.imdbRating;
        releaseOn.innerText = jsonData.Released;
        poster.src = jsonData.Poster;
    })
}