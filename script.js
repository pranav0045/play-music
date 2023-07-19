//javascript for music.

let songs = [

    { songName: "instrumental feels", filePath: "/audio/first.mp3" },

    { songName: "high loud peek", filePath: "/audio/second.mp3"},

    { songName: "the mortals one ", filePath: "/audio/third.mp3" },

    { songName: "ideal stone world", filePath: "/audio/fourth.mp3"},

    { songName: "the walk street", filePath: "/audio/fifth.mp3"},

    { songName: "billion mindset", filePath: "/audio/sixth.mp3" },

    { songName: "deaf cave invincible", filePath: "/audio/first.mp3" }


];

//variables.
let audio = new Audio("/audio/0.mp3");
let index=0;
let masterPlay=document.getElementById('masterPlay');
let progressbar=document.getElementById('progressbar');
let song_item=Array.from(document.getElementsByClassName('song-item'));






//used to set the container with song names and song img 

song_item.forEach((element,i) => {

    element.querySelector(".songname").innerText=songs[i].songName;
    
});


//used to make 1 click button play and anothet pause.
function make_all_play()
{
    Array.from(document.getElementsByClassName("song-item-play")).forEach((element)=>{
       
        element.classList.add("fa-play-circle");
        element.classList.remove("fa-pause-circle")
    })
}

Array.from(document.getElementsByClassName("song-item-play")).forEach((element)=>{
  element.addEventListener("click",(e)=>{

    make_all_play();
    e.target.classList.remove("fa-play-circle");
    e.target.classList.add("fa-pause-circle");
    index=parseInt(e.target.id);
    audio.src=`audio/${index}.mp3`;
    audio.currentTime="0";
    audio.play();

    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    mastersongname.innerText=songs[index].songName;
    gif.style.opacity="1";



  })
})


//fast backward

document.getElementById('pre').addEventListener('click',()=>{
    if(index<=0)
    {
        index=0;

    }
    else{
        index=index-1;
    }

    audio.src=`audio/${index}.mp3`;
    audio.currentTime="0";
    audio.play();
    gif.style.opacity="1";
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");

    make_all_play();

    change=document.getElementById(`${index}`);
    change.classList.add('fa-pause-circle');
    change.classList.remove('fa-play-circle');
    mastersongname.innerText=songs[index].songName;

})


//fast forward

document.getElementById('next').addEventListener('click',()=>{

    if(index>= 6){
        index=0;
    
    }
    else{
        index=index+1;
    }

    audio.src=`audio/${index}.mp3`;
    audio.currentTime="0";
    audio.play();


    gif.style.opacity="1";
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");

    make_all_play();

    change=document.getElementById(`${index}`);
    change.classList.add('fa-pause-circle');
    change.classList.remove('fa-play-circle');
    mastersongname.innerText=songs[index].songName;

})


//listen to event.

//playing audio using pause play button.
masterPlay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime <=0){
        audio.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity="1";
        change=document.getElementById(`${index}`);
        change.classList.add("fa-pause-circle");
        change.classList.remove("fa-play-circle");

    
    
    }
    else{
        audio.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity="0";

        
        change=document.getElementById(`${index}`);
        change.classList.add("fa-play-circle");
        change.classList.remove("fa-pause-circle");
    }
})


//updates the seekbar value
audio.addEventListener('timeupdate',()=>{
  //update seekbar.

  progress=parseInt((audio.currentTime/audio.duration)*100);

  progressbar.value=progress;
})

//changes the song time as we apply change event on the progressbar.
progressbar.addEventListener('change',()=>{
    audio.currentTime=progressbar.value*audio.duration/100;
})


//hamburger

let btn=document.querySelector('.nav-c');

btn.addEventListener('click',()=>{
    
      btn.classList.toggle('h-nav');
      li1=document.querySelector('#li1');
      li2=document.querySelector('#li2');

      li1.classList.toggle('v-nav');
      li2.classList.toggle('v-nav');

      if(btn.classList.contains('h-nav')){
          songinfo.style.display="block";
      }
      else{
        songinfo=document.querySelector('.song-info');

        songinfo.style.display="none";
      }
    }
)