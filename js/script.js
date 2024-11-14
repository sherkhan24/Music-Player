
//1
let music = document.querySelector('.audio_');
//2
let play = document.querySelector('.play i');
//8
let playNext = document.querySelector('.next i');

let playprev = document.querySelector('.prev i');
//14
let titleTextdata = document.querySelector('.titleTextdata marquee');
//16
let artistNameData = document.querySelector('.text p');
//18
let albumNameData = document.querySelector('.text  small');

//36
let repeatBtn = document.querySelector('.repeat i')
//46
let imageId = document.getElementById('imageId');

//5
let played = false;
//11
let songIndex = 0;
//39
let isRepeat = false;
//6
function playMusicFunction(){
   music.play();
   played = true;
   play.classList.replace('fa-play-circle', 'fa-pause');

   //47
   imageId.classList.add('imageRotate') 
  }
//7
function pauseMusicFunction(){
    music.pause();
    played = false;
    play.classList.replace('fa-pause', 'fa-play-circle');
    
    //48
    imageId.classList.remove('imageRotate')
    // console.log(imageRotate);
}
//4
function playmusic(){

  if(played){
    pauseMusicFunction();
  }else{
    playMusicFunction();
  }
}
//13
function loadData(songs){  
  //15
  titleTextdata.textContent = `${songs.title}`;
  //17
  artistNameData.textContent = `${songs.artistName}`;
  //19
  albumNameData.textContent = `${songs.albumName}`;

    music.src = `music/${songs.name}.mp3`;
//49
// imageId.src = `assets/${music1}.png`;

}
//10
function nextMusicFuntion(){
    
    // songIndex++;
    //12
    songIndex = (songIndex + 1)% songs.length;
    loadData(songs[songIndex]);
    
    playMusicFunction(); 
}

//31
function prevMusicFunction() {

  // songIndex++;
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadData(songs[songIndex]); 
  playMusicFunction();
}

//3
play.addEventListener('click', playmusic);
//9
playNext.addEventListener('click', nextMusicFuntion);
//30
playprev.addEventListener('click', prevMusicFunction);

//23
let progressLine = document.querySelector('.progressLine');

//20
let currentDataTime = document.querySelector('.currentTime'),
    durationDataTime = document.querySelector('.duration');
//22
function UpdateTimeFunction(e) {
  let {currentTime,duration} = e.srcElement;
  
  let currentMyData = (currentTime / duration)*100;
  progressLine.style.width = `${currentMyData}%`
  
// get the currentTime
//32
let remaningTime = duration - currentTime;

//24
let curM = Math.floor (currentTime / 60);
let curS = Math.floor (currentTime % 60);

//25
if (curS < 10){
  curS = `0${curS}`

}
if(curM < 10){
  curM = `0${curM}`
  }

//26
currentDataTime.textContent = `${curM}:${curS}`

//27
let durM = Math.floor(currentTime / 60);
let durS = Math.floor(currentTime % 60);

//28
if (durS < 10){
  durS = `0${durS}`

}
if (durM < 10){
 durM = `0${durM}`
  }

  //29
  if (duration){

    durationDataTime.textContent = `${durM}:${durS}`;
  }
}
//21
music.addEventListener('timeupdate', UpdateTimeFunction);

//33 
let progressBar = document.querySelector('.progressBar');

//35
function progressBarFunction(e) {
  let {duration} =  music;
  let progRate = (e.offsetX / e.srcElement.clientWidth)* duration;
  music.currentTime = progRate  
}

//34
progressBar.addEventListener('click', progressBarFunction);

//38
function repeatMusicFunction() {

  isRepeat = !isRepeat;
  console.log(isRepeat);
//40
  repeatBtn.classList.toggle('repeatMode')
  
}
//41
music.addEventListener('ended', () => {
  if (isRepeat) {
    playMusicFunction();
  }else{
    nextMusicFuntion()
  }
})

//37
repeatBtn.addEventListener('click', repeatMusicFunction);`1`

//45
let likeColour = false;
//42
let likeBtn = document.querySelector('.like i');

//44
function likeBtnFunction() {
likeColour = !likeColour;

likeBtn.classList.toggle('likeColourRed')
  
}
//43
likeBtn.addEventListener('click', likeBtnFunction);

