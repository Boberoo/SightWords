//enter word your child knows/struggles with, or out the homework list
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
    "book",
    "https://previews.123rf.com/images/benchart/benchart1204/benchart120400018/13237662-illustration-of-a-cartoon-opened-brown-book.jpg"
  ],
  [
    "look",
    "https://images.pexels.com/photos/802412/pexels-photo-802412.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
[
    "dog",
    "https://cdn.pixabay.com/photo/2014/08/21/14/51/pet-423398__340.jpg"
  ],  
  [
    "duck",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Mallard2.jpg/1200px-Mallard2.jpg"
  ],
  [
    "eat",
    "https://t.rmncdn.com/blog/2016/08/kids-eat-free-hero1-1471459190.jpg"
  ],
  [
    "fast",
    "https://www.publicdomainpictures.net/pictures/180000/velka/fast-sport-car-1466168715EF7.jpg"
  ],
  [
    "go",
    "http://www.gonorthdevon.co.uk/images/other/green-arrow.png"
  ],
  [
    "here",
    "https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&h=350"
  ],
  [
    "hop",
    "https://d368g9lw5ileu7.cloudfront.net/races/race41842-logo.bywwEt.png"
  ],
  
  [
    "like",
    "https://www.brafton.com/wp-content/uploads/2013/04/shutterstock_128836729-350x350.jpg"
  ],
  
  [
    "ride",
    "https://www.onlinekeystore.com/images/D/ss_a0a374475b21a9f533694c0b749ac66c0b9b7aa4.1920x1080.jpg"
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
    "park",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Green_Park%2C_London_-_April_2007.jpg/1200px-Green_Park%2C_London_-_April_2007.jpg"
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
    "home",
    "http://www.wilmingtonfarmers.com/wp-content/uploads/2018/04/house-621x414.jpg"
  ],
  [
    "mouse",
    "http://vrjournal.com/wp-content/uploads/2015/10/Mouse-Tales-Neuroscientists-Work-on-Virtual-Reality-System-Using-Mice-Whiskers.jpg"
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
    "rabbit",
    "https://www.farmingstyle.com/wp-content/uploads/2017/04/Rabbits1-1-800x416.jpg"
  ],  
  [
    "see",
    "http://4.bp.blogspot.com/-QGjJ-R7HuO8/T-lJk36tdVI/AAAAAAAADqM/IdEY0pa_dgA/s1600/sight.jpg"
  ],
  [
    "shouted",
    "http://media.bsix12.com/2012/05/shout-570.jpg"
  ],
  [
    "sleep",
    "https://chopra.com/sites/default/files/field/image/ManSleeping.jpg"
  ],
  [
    "swim",
    "https://fthmb.tqn.com/ubtG9v0_h9guBBk4l5V3lXCJ6qY=/4000x2564/filters:fill(auto,1)/LochteFreestyleBreathing-56a9262a3df78cf772a4337a.jpg"
  ],
  [
    "where",
    "http://www.nationinstitute.org/images/managed/where-to-go-from-here.png"
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
    //sayIt(words[wordNum][0]); //remove later once they get the hang of it - too slow\
    if (showImages) {
      $("#" + (i + 1)).css("background-image", "url('"+words[wordNum][1]+"')");
    }
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
