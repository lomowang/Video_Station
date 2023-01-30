const movieUrl='https://api.themoviedb.org/3/movie/upcoming?api_key=5d7ac24e63419994fda11db9f90c8f2b&language=en-US&page=1';

const API_KEY = 'api_key=5d7ac24e63419994fda11db9f90c8f2b';
const BASE_URL ='https://api.themoviedb.org/3';


getMovies(movieUrl);

function getMovies(url){
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data.results);
    })
}
