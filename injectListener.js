(function () {
  // chrome.tabs.query({}, function (tabs) {
  //   var checkExists = false;
  var check = document.getElementsByClassName('miniplayer populated-selections')[0];
  if (!check) {
    return false;
  }

  var play = document.getElementsByClassName('play')[0];
  var pause = document.getElementsByClassName('pause')[0];

  play.addEventListener('click', function () {
    console.log("Palyedson");
  });

  pause.addEventListener('click', function () {
    console.log("pausedson");
  });
})();

