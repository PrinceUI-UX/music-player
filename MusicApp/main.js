let play = document.getElementById("Play");
let previous = document.getElementById("Previous");
let next = document.getElementById("Next");
let audio = document.querySelector("audio");
let img = document.querySelector("img");
let title = document.getElementById("title");
let artist = document.getElementById("artist");

let songs =[
    {
       name: "Telemundo",
       title: "Telemundo",
       artist: "Boy16"
    },
    {
        name:"Introvert",
        title: "Introvert",
        artist: "Boy16 ft LeMe"
    },
    {
        name: "Mesmerizer",
        title: "Mesmerizer",
        artist: "Boy16 ft Risto yo Teni"
    },
    {
        name: "Then & Now",
        title: "Then & Now",
        artist: "boy16"
    }
];

let isPlaying = false;

let playMusic = function(){
    isPlaying = true;
    audio.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

let pauseMusic = function(){
    isPlaying = false;
    audio.pause();
    play.classList.replace("fa-pause", "fa-play");
};

play.addEventListener("click", function(){
    if(isPlaying == false){
        playMusic();
    }else{
        pauseMusic();
    }
});

const loadSongs = function(songs) {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    audio.src = "music/" + songs.name + ".mp3";
    img.src = "img/" + songs.name + ".jpeg";
}

let songindex = 1;

const nextSong = function(){
    songindex = (songindex + 1) % songs.length;
    loadSongs(songs[songindex]);
    playMusic();
}

const PrevSong = function(){
    songindex = (songindex - 1 + songs.length) % songs.length;
    loadSongs(songs[songindex]);
    playMusic();
}

next.addEventListener("click", nextSong);
previous.addEventListener("click", PrevSong);

// volume control 
let volume_slider = document.querySelector(".volume_slider");

function setVolume() {
    audio.volume = volume_slider.value/ 100;

}

// progress control 
let progress_slider = document.querySelector(".progress_slider");

function setProgress() {
    audio.currentTime = audio.duration * (progress_slider.value/ 100);
}

// update progress slider as the song plays
audio.addEventListener("timeupdate", function(){
    let progress = (audio.currentTime / audio.duration)* 100;
    progress_slider.value = progress;

    // update progress slider background  to fill up as the song plays
    let fillWidth = (audio.currentTime / audio.duration)* 100;
    progress_slider.styles.background = `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${fillWidth}%, #ddd ${fillWidth}%, #ddd 100%)`;
});

// update time as the progress slider changes
progress_slider.addEventListener("input", function() {
    setProgress();
});



