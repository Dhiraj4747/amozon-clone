// to perform arrow button clicakable ->  <- whose present in ancor tag in class name header slider

const img = document.querySelectorAll(".header-slider ul img");
// select the imges from ul of header-slider class
const prev_btn = document.querySelector(".control-prev");
const next_btn = document.querySelector(".control-next");

let n=0; //that represent we intially on first img

//crete one function to change the slide(img)
function changeSlide(){
    //in this we hide the all the images
    for(let i=0; i<img.length; i++){
        img[i].style.display ='none';
    }
    img[n].style.display='block';//it display only the single img
    //it select the particular img on base of n value n=0 spefies the first img and so on
}

changeSlide(); //from this function called all the images from the web page are not visible due to line number 14

//to perform arrow button clickable and switch the img by clicking them
//when we click the prev_btn the n value should be decrease
prev_btn.addEventListener('click',(e)=>{
    if(n > 0){
        n--;
    }else{
        n = img.length - 1;
    }
    changeSlide();
});
//when we click the next_btn the n value should be increase
next_btn.addEventListener('click',(e)=>{
    if(n < img.length -1){
        n++;
    }else{
        n=0;
    }
    changeSlide();
})