


// 擴展卡
// const panels = document.querySelectorAll('.panel');


// panels.forEach(panel => {
//   panel.addEventListener('click', () =>{
//     removeActiveClasses();
//     panel.classList.add('active');
//   })
// })


// function removeActiveClasses(){
//   panels.forEach(panel => {
//     panel.classList.remove('active');
//   })
// }




// 進度條


const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circle = document.querySelectorAll('.circle')



let currentActive =1


// 監聽點擊事件
next.addEventListener('click',() =>{
  
  currentActive++
    
  if(currentActive > circle.length){
    currentActive = circle.length
    
  }
  updated() 
})




prev.addEventListener('click',() =>{
  
  currentActive--
    
  if(currentActive < 1){
    currentActive = 1
    
  }
  updated() 

})


function updated() {
  circle.forEach((circle, idx) =>{
    if(idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
  const actives =document.querySelectorAll('.active')
  progress.style.width = (actives.length - 1) / (circle.length - 1) * 100 + '%'


  if(currentActive === 1){
    prev.disabled = true
  }else if(currentActive === circle.length){
    next.disabled = true
  }else{
    prev.disabled = false
    next.disabled = false
  } 

}

 
