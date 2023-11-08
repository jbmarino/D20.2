var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");

    video = document.getElementById("player1");

    video.autoplay = false;
    video.loop = false;
    
    document.querySelector("#play").addEventListener("click", function() {
        
        video.volume =  document.querySelector("#slider").value / 100;
        document.querySelector("#volume").textContent = document.querySelector("#slider").value + "%";
        video.play();
    });

    document.querySelector("#pause").addEventListener("click", function() {
        video.pause();
    });

    document.querySelector("#slower").addEventListener("click", function() {
        video.playbackRate -= 0.1;
    });

    document.querySelector("#faster").addEventListener("click", function() {
        video.playbackRate += 0.1;
    });

    document.querySelector("#skip").addEventListener("click", function() {
       
        video.pause();

        if (video.currentTime + 5 > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 5;
        }

        video.play();
    });

    document.querySelector("#mute").addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            this.textContent = "Mute";
        } else {
            video.muted = true;
            this.textContent = "Unmute";
        }
    });

    var volumeSlider = document.querySelector("#slider");
    var volumeSpan = document.querySelector("#volume");

    volumeSpan.textContent = volumeSlider.value + "%";

    volumeSlider.addEventListener("input", function() {
        video.volume = volumeSlider.value / 100;
        volumeSpan.textContent = volumeSlider.value + "%";
    });

    document.querySelector("#vintage").addEventListener("click", function() {
        video.classList.add('oldSchool');
    });

    document.querySelector("#orig").addEventListener("click", function() {
        video.classList.remove('oldSchool');
    });
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

