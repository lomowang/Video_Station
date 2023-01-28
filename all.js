

// APIURL
const API_KEY = 'api_key=5d7ac24e63419994fda11db9f90c8f2b';
const BASE_URL ='https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;

const IMG_URL= 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL+'/search/movie?'+API_KEY;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

function getMovies(url){
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data.results);
        showMovies(data.results);
    })
}


function showMovies(data){
    main.innerHTML = '';

    data.forEach(movie =>{        
        const {title,poster_path,overview,release_date,vote_average} = movie;
        const movieEL = document.createElement('div');
        movieEL.classList.add('movie');
        movieEL.innerHTML=
            `
            <img src="${IMG_URL+poster_path}" alt="${title}">
            <div class="movieInfo">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>

            <div class="date">
                <p>${release_date}</p>
            </div>

            <div class="overView">
                <h3>overview</h3>
                ${overview};
            </div>`


            main.appendChild(movieEL);
    })

    }


    //  評分投票
     function getColor(vote){
        if(vote>=8){
            return'green'
        }else if(vote >=5){
            return'orange'
        }else{
            return 'red'
        }
     }


     form.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = search.value;

    if(searchTerm){
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        // 搜尋清空就回主畫面
        getMovies(API_URL);
    }
})


























// 六角
// const PostURL= 'https://image.tmdb.org/t/p/w500';
// let data;

// const list = document.querySelector(".list");
// function renderHTML(){
//     let str;
//     data.forEach(function(item){
//         const {title,poster_path,overview,release_date,vote_average
//         } = item;
//         str+=`
//         <img src="${PostURL+poster_path}" alt="image">
//         <div class="movieInfo">
//             <h3>${title}</h3>
//             <span class="green">評分</span>
//         </div>

//         <div class="date">
//             <p >發布日期</p>
//         </div>

//         <div class="overView">
//             <h3>overview</h3>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sapiente nisi aut quo modi recusandae! Fugiat ducimus sunt facilis quis, eius magnam a iure tempora molestiae dolor, ullam ex et!
//         </div>`
//     });

//     list.innerHTML = str;
// }

// axios.get('https://api.themoviedb.org/3/discover/movie?api_key=5d7ac24e63419994fda11db9f90c8f2b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2021&with_watch_monetization_types=flatrate')
// .then(function(response){
// console.log(response);
// data = response.data.results;
// console.log(data);
// renderHTML()

//   })

