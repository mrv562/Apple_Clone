const Pre = document.querySelectorAll(".offers ul pre");
const backBtn = document.querySelector('.control-back');
const frontBtn = document.querySelector('.control-front');

let n = 0;

function changeSlide(){
  for (let i = 0; i < Pre.length; i++) {
    Pre[i].style.display = 'none';
  }
  Pre[n].style.display = 'block';
}

changeSlide();

backBtn.addEventListener('click',(e) =>{
  if(n > 0){
    n--;
  }
  else{
    n = Pre.length -1;
  }
  changeSlide();
})

frontBtn.addEventListener('click',(e) =>{
  if(n < Pre.length - 1){
    n++;
  }
  else{
    n = 0;
  }
  changeSlide();
})


// const scrollContainer = document.querySelectorAll('.plans_slider');
// for(const item of scrollContainer){
//   item.addEventListener('wheel' ,(evt) =>{
//     evt.preventDefault();
//     item.scrollLeft += evt.deltaY;
//   })
// }

// const scrollContainer1 = document.querySelectorAll('.image_slider');
// for(const item of scrollContainer1){
//   item.addEventListener('wheel' ,(evt) =>{
//     evt.preventDefault();
//     item.scrollLeft += evt.deltaY;
//   })
// }