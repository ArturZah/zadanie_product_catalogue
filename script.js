$( document ).ready(function() {
  $(".aside-label").click(function() {
    $(".aside").toggleClass("aside--slide-x");
    $(".aside-label").toggleClass("aside-labe__icon--slide-x");
  });  
});