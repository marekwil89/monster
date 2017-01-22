$( document ).ready(function() {

  viewAnimation('.front', 'moveClouds-fast', '2')
  viewAnimation('.back', 'moveClouds-slow', '2')
  viewAnimation('.lightning', 'strike', '2')
  viewAnimation('.thunder', 'flash', '2')
  viewAnimation('.overlay', 'lights', '4')
  
  $(window).on('hashchange', function() {
    viewAnimation('.front', 'moveClouds-fast', '2')
    viewAnimation('.back', 'moveClouds-slow', '2')
    viewAnimation('.lightning', 'strike', '2')
    viewAnimation('.thunder', 'flash', '2')
    viewAnimation('.overlay', 'lights', '4')

  });
});

function viewAnimation(object, animation, chosenSlide){
  var animation = animation
  var object = object
  var currectSlide = window.location.hash.slice(-1)
  if(chosenSlide == currectSlide){
    $(object).addClass(animation)
  }
  if(chosenSlide != currectSlide){
    setTimeout(function(){
      $(object).removeClass(animation)
    }, 1500)
  }
  return;
}