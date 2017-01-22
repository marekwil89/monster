$( document ).ready(function() {
  function randNumber(max, min){
    var number = Math.floor(Math.random() * max) - min
    return number
  };

  function randomStrike(){
    var randLightningImage = randNumber(3, 0)
    var randPosition = randNumber(80, 30)
    var randDeg = randNumber(60, 30)
    var url = 'assets/img/light' + randLightningImage + '.png'
    $('.lightning').css('background-image', 'url(' + url + ')')
    $('.lightning').css({
     'left' : randPosition + '%',
     'transform': 'rotate(' + randDeg + 'deg)'
    });
  }

  setInterval(function(){ 
    randomStrike()
  }, 3000);
});


