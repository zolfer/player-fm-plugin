var tabOn = false;
var playPause = false;
var mainUrl = "player.fm";

checkTabExists();

chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.query({}, function (tabs) {
    var checkExists = false;

    for (var i = 0; i < tabs.length; i++) {
      if (matchUrl(tabs[i].url)) {
        checkExists = true;
        chrome.tabs.executeScript(tabs[i].id, {
          file: 'injectPlay.js'
        }, function (data) {
          if (!data[0]) {
            alert("Player.FM Plugin: Track not selected.");
          } else {
            if (data[0] == 'Play') {
              playPause = true;
              setIconPause();
            } else if (data[0] == 'Pause') {
              playPause = true;
              setIconPlay();
            }
          }
        });
        break;
      }
    }

    if (!checkExists) {
      var newURL = "http://" + mainUrl;
      chrome.tabs.create({ url: newURL, pinned: true });

      rtn = "Player.FM Plugin: Open in new tab.";
    }
  });
});

chrome.tabs.onUpdated.addListener(function () {
  checkTabExists();
});

chrome.tabs.onRemoved.addListener(function () {
  checkTabExists();
});

function checkTabExists() {
  chrome.tabs.query({}, function (tabs) {
    var check = false;

    for (var i = 0; i < tabs.length; i++) {
      if (matchUrl(tabs[i].url)) {
        check = tabs[i];
        break;
      }
    }

    if (!check) {
      tabOn = false;
      playPause = false;
      setIconOff();
    } else {
      if (!tabOn) {
        tabOn = true;
      }

      if (!playPause) {
        setIconOn();
      }
    }
  });
}

function matchUrl(url) {
  var match = url.split("/");

  if (match.length >= 2 && match[2] === mainUrl) {
    return true;
  }

  return false;
}

function setIconOn() {
  chrome.browserAction.setIcon({
    path: {
      "16": "data/icon/16.png",
      "32": "data/icon/32.png",
      "48": "data/icon/48.png",
      "64": "data/icon/64.png",
      "128": "data/icon/128.png",
      "256": "data/icon/256.png"
    }
  });
}

function setIconOff() {
  chrome.browserAction.setIcon({
    path: {
      "16": "data/icon/16-off.png",
      "32": "data/icon/32-off.png",
      "48": "data/icon/48-off.png",
      "64": "data/icon/64-off.png",
      "128": "data/icon/128-off.png",
      "256": "data/icon/256-off.png"
    }
  });
}

function setIconPlay() {
  chrome.browserAction.setIcon({
    path: {
      "16": "data/icon/16-play.png",
      "32": "data/icon/32-play.png",
      "48": "data/icon/48-play.png",
      "64": "data/icon/64-play.png",
      "128": "data/icon/128-play.png",
      "256": "data/icon/256-play.png"
    }
  });
}

function setIconPause() {
  chrome.browserAction.setIcon({
    path: {
      "16": "data/icon/16-pause.png",
      "32": "data/icon/32-pause.png",
      "48": "data/icon/48-pause.png",
      "64": "data/icon/64-pause.png",
      "128": "data/icon/128-pause.png",
      "256": "data/icon/256-pause.png"
    }
  });
}