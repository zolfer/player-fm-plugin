(function () {
  var msg = "Player.FM Plugin: No data.";

  var check = document.getElementsByClassName('miniplayer populated-selections')[0];
  if (!check) {
    return false;
  }

  var play = document.getElementsByClassName('play')[0];
  var pause = document.getElementsByClassName('pause')[0];

  var playing = (play.style.display === "none") ? 1 : 0;
  if (playing) {
    pause.click();
    msg = "Player.FM Plugin: Pause.";
    rtn = "Pause";
  } else {
    play.click();
    msg = "Player.FM Plugin: Play."
    rtn = "Play";
  }
  
  console.log(msg);
  return rtn;
})();