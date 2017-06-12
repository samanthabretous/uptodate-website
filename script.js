window.onload = function() {

  // Video
  var videos = document.getElementsByClassName("video");

  // Event listener for the play/pause button
  var playButton = document.getElementById("play-pause");
  playButton.addEventListener("click", function() {
    for(let i = 0; i < videos.length; i++) {
      if (videos[i].paused == true) {
        // Play the video
        videos[i].play();

        // Update the button text to 'Pause'
        playButton.innerHTML = "Pause";
      } else {
        // Pause the video
        videos[i].pause();

        // Update the button text to 'Play'
        playButton.innerHTML = "Play";
      }
    }
  });

  // Event listener for the full-screen button
  // var fullScreenButton = document.getElementById("full-screen");
  // fullScreenButton.addEventListener("click", function() {
  //   if (video.requestFullscreen) {
  //     video.requestFullscreen();
  //   } else if (video.mozRequestFullScreen) {
  //     video.mozRequestFullScreen(); // Firefox
  //   } else if (video.webkitRequestFullscreen) {
  //     video.webkitRequestFullscreen(); // Chrome and Safari
  //   }
  // });

  // Event listener for the seek bar
  var seekBar = document.getElementById("seek-bar");
  seekBar.addEventListener("change", function() {
    for(let i = 0; i < videos.length; i++) {  
      // Calculate the new time
      var time = videos[i].duration * (seekBar.value / 100);
      // Update the video time
      videos[i].currentTime = time;
    }
  });
  // Update the seek bar as the video plays
  for(let i = 0; i < videos.length; i++) {
    videos[i].addEventListener("timeupdate", function() {
      // Calculate the slider value
      var value = (100 / videos[i].duration) * videos[i].currentTime;

      // Update the slider value
      seekBar.value = value;
    });
  }

  // Pause the video when the slider handle is being dragged
  seekBar.addEventListener("mousedown", function() {
    for(let i = 0; i < videos.length; i++) {
      videos[i].pause();
    }
  });

  // Play the video when the slider handle is dropped
  seekBar.addEventListener("mouseup", function() {
    for(let i = 0; i < videos.length; i++) {
      videos[i].play();
    }
    playButton.innerHTML = "Pause";
  });

}