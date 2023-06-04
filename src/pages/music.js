var audio = document.getElementById('myAudio');
var playIcon = document.querySelector('.play_pause_icon');
var checkbox = document.getElementById('checkbox');

playIcon.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playIcon.classList.remove('play');
    playIcon.classList.add('pause');
  } else {
    audio.pause();
    playIcon.classList.remove('pause');
    playIcon.classList.add('play');
  }
});

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    audio.play();
    playIcon.classList.remove('play');
    playIcon.classList.add('pause');
  } else {
    audio.pause();
    playIcon.classList.remove('pause');
    playIcon.classList.add('play');
  }
});

audio.addEventListener('play', function() {
  playIcon.classList.remove('play');
  playIcon.classList.add('pause');
});

audio.addEventListener('pause', function() {
  playIcon.classList.remove('pause');
  playIcon.classList.add('play');
});
