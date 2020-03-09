$(document).ready(function() {
  var touchMeNot = $(".touch-me-not");

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  touchMeNot.on("mouseenter", () => {
    var randX = Math.floor(Math.random() * (window.innerWidth - 100));
    var randY = Math.floor(Math.random() * (window.innerHeight - 100));

    touchMeNot.stop().animate({ left: randX + "px", top: randY + "px" });
  });

  touchMeNot.on("click", function() {
//    alert("clicked!");
  });
});
