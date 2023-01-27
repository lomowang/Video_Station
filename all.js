
// let data = [];
// function renderHTML(){
//     document.querySelector("h1").innerHTML = data[0].name;
// }
// axios.get('https://api.themoviedb.org/3/discover/movie?api_key=5d7ac24e63419994fda11db9f90c8f2b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2021&with_watch_monetization_types=flatrate')
//     .then(function(response){
//         console.log(response)
//         // data = response.data;
//         // renderHTML();
//     })




let data;
const list = document.querySelector(".list");


function renderHTML(){

    let str;
    data.forEach(function(item){
        str+=`
        <li>
            <h2>${item.title}</h2>
            <img src="${item.backdrop_path}" alt="" />
        </li>`
    
    });

    list.innerHTML = str;
}

axios.get('https://api.themoviedb.org/3/discover/movie?api_key=5d7ac24e63419994fda11db9f90c8f2b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2021&with_watch_monetization_types=flatrate')
.then(function(response){

console.log(response);
data = response.data.results;
renderHTML()

  })