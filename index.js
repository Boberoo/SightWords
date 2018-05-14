//enter word your child knows/struggles with
var words = [
  [
    "Lad",
    "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "Ben",
    "https://images.pexels.com/photos/164835/pexels-photo-164835.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "look",
    "https://images.pexels.com/photos/802412/pexels-photo-802412.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "here",
    "https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "come",
    "https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "Mum",
    "https://images.pexels.com/photos/1007786/pexels-photo-1007786.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "Dad",
    "https://images.pexels.com/photos/38302/father-daughter-beach-sea-38302.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "is",
    "https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "I",
    "https://images.pexels.com/photos/663455/pexels-photo-663455.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "to",
    "https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "stop",
    "https://images.pexels.com/photos/770220/pexels-photo-770220.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "at",
    "https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "play",
    "https://images.pexels.com/photos/51349/water-fight-children-water-play-51349.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "me",
    "https://images.pexels.com/photos/220574/pexels-photo-220574.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "we",
    "https://images.pexels.com/photos/798096/pexels-photo-798096.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "can't",
    "https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "this",
    "https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "run",
    "https://images.pexels.com/photos/35009/runner-marathon-military-afghanistan.jpg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "hide",
    "https://images.pexels.com/photos/262103/pexels-photo-262103.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "but",
    "https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "and",
    "https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "out",
    "https://images.pexels.com/photos/134065/pexels-photo-134065.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "in",
    "https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&h=350"
  ]
];

var gridWordNums = [];

var curWordIndex = -1;
var curLevel = 1;
var showImages = true;

var curLanguage = "en-US";
var curSpeed = 1.0;
var fast = 1.2;
var slow = 0.5;

function sayIt(query) {
  //from Jason Mayes. Works on Chrome browser only as at 2013. May work on more browsers now >> seems to be supported by all browsers now except internet explorer
  var q = new SpeechSynthesisUtterance(query);
  q.lang = curLanguage;
  q.rate = curSpeed;
  speechSynthesis.speak(q);
}

function doNextWord() {
  if (gridWordNums.length == 0) {
    curSpeed = fast;
    sayIt("Well done!");
    curLevel++;
    if (curLevel > 5 && showImages) {
      showImages = false;
      $(".image").addClass("unused");
      curLevel = 1;
    }
    resetGrid();
    sayIt("Let's go!");
    curSpeed = slow;
  }
  curWordIndex = Math.floor(Math.random() * gridWordNums.length);
  sayIt(words[gridWordNums[curWordIndex]][0]);
}

function onBlockClick(e) {
  
  console.log(e.target.id);
  //console.log($("#" + e.target.id).html());
  if (curWordIndex > -1 && !$("#" + e.target.id).hasClass("correct")) {
    if ($("#" + e.target.id).html() == "<br>"+words[gridWordNums[curWordIndex]][0]) {
      $("#" + e.target.id).removeClass("incorrect");
      $("#" + e.target.id).css("background-image", "none");
      $("#" + e.target.id).addClass("correct");

      gridWordNums.splice(curWordIndex, 1); //got it right, don't ask again

      doNextWord();
    } else {
      $("#" + e.target.id).removeClass("correct");
      $("#" + e.target.id).addClass("incorrect");
      sayIt(words[gridWordNums[curWordIndex]][0]);
    }
  }
}

function getAllWords() {
  var result = "";
  for (var i = 0; i < gridWordNums.length; i++) {
    result += words[gridWordNums[i]][0] + ", ";
  }
  return result;
}

function resetGrid() {
  gridWordNums.length = 0;
  var availableWordNums = [];
  for (var i = 0; i < words.length; i++) {
    availableWordNums.push(i);
  }

  var index;
  var wordNum;
  for (var i = 0; i < curLevel * 3; i++) {
    $("#" + (i + 1)).removeClass("correct");
    $("#" + (i + 1)).removeClass("unused");
    index = Math.floor(Math.random() * availableWordNums.length);
    wordNum = availableWordNums[index];
    gridWordNums.push(wordNum);
    availableWordNums.splice(index, 1);
    //sayIt(words[wordNum][0]); //remove later once they get the hang of it - too slow
    $("#" + (i + 1)).css("background-image", "url('"+words[wordNum][1]+"')");
    //$("#image" + (i + 1)).html(
    //  '<img src="' + words[wordNum][1] + '" alt="' + words[wordNum][0] + '">'
    //);
    $("#" + (i + 1)).html("<br>"+words[wordNum][0]);
  }
  for (var i = curLevel * 3; i < 15; i++) {
    $("#" + (i + 1)).removeClass("correct");
    $("#" + (i + 1)).addClass("unused");
  }
  sayIt(getAllWords());
}

$(document).ready(function() {
  var touchsupport =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;
  if (!touchsupport) {
    // browser doesn't support touch
    document.documentElement.className += " non-touch"; //May 2018: on mobile devices, stops the block staying grey after touching it, instead of showing red/green.
    //This is one of 4 way of addresing the problem, as detailed here: http://www.javascriptkit.com/dhtmltutors/sticky-hover-issue-solutions.shtml
  }
  curSpeed = fast;
  resetGrid();
  sayIt("Hello, click the word as I say it.");
  curSpeed = 0.5;
  $(".empty-block").click(onBlockClick);
  doNextWord();
});