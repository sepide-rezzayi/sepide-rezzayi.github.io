let playerArea = document.querySelector(".myplayer");
let media = playerArea.querySelector("video");
let controls = playerArea.querySelector(".myplayer__controls");

let play = controls.querySelector('.play')
let rewind = controls.querySelector('.rewind')
let forward = controls.querySelector('.forward')
// let fullscreen = controls.querySelector('.fullscreen')

play.addEventListener('click',function (){
   if(media.paused){
      media.play();
      togglePlayIcon()
   }else {
      media.pause();
      togglePlayIcon()
   }
})

rewind.addEventListener('click',function (){
   media.currentTime = media.currentTime-5;
})
forward.addEventListener('click',function (){
   media.currentTime = media.currentTime +5;
})







function  togglePlayIcon (){
   let icon = play.querySelector('i')
   icon.classList.toggle('ion-md-pause')
   icon.classList.toggle('ion-md-play')
}