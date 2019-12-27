$('.touchMeNot').on('mouseenter',function(e){
    var maxX = $(window).width() - $(this).width();
    var maxY = $(window).height() - $(this).height();
    $(this).css({
        'left':getRandomInt(0, maxX),
        'top':getRandomInt(0, maxY)
    });
});
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var caller = $("emcee"),
    box = $("#box");

function foo(){
  var randX = Math.floor(Math.random() * (window.innerWidth - 100));
  var randY = Math.floor(Math.random() * (window.innerHeight - 100));
  console.log([randX, randY]);
  caller.stop().animate({"left": randX + "px", "top": randY + "px"});
}

$(document).ready(function() {
  caller.on('mouseenter', foo);
  caller.on('click', function(){
  alert('clicked!');
  });

});
