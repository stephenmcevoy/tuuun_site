$(document).ready(function() {

  $(".expand").click(function() {
  // alert("clicked!");
  $(this).find("img").slideToggle();
});

  $(".title").click(function() {
  // alert("clicked!");
  $(this).find(".description").slideToggle();
  $(this).find("img").slideToggle();
});

});
