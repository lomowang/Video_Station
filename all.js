
const PostURL= 'https://image.tmdb.org/t/p/w500';





let data;

const list = document.querySelector(".list");
function renderHTML(){
    let str;
    data.forEach(function(item){
        const {title,poster_path,overview,release_date,vote_average
        } = item;
        str+=`
        <li>
            <h2>${title}</h2>
            <img src="${PostURL+poster_path}" alt="" />
            <p>簡介${overview}</p>
            <p>發布日期${release_date}</p>
            <p>評分${vote_average}</p>

        </li>`
    });

    list.innerHTML = str;
}




axios.get('https://api.themoviedb.org/3/discover/movie?api_key=5d7ac24e63419994fda11db9f90c8f2b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2021&with_watch_monetization_types=flatrate')
.then(function(response){
console.log(response);
data = response.data.results;
console.log(data);
renderHTML()

  })

