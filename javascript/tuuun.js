$(document).ready(function(e) {

  console.log("loaded");

$(".dropdown-head").click(function(x) {
  x.stopPropagation();
  $(".dropdown-head").not(this).find("div").removeClass("visible");
  $(this).find(".dropdown-content").toggleClass("visible");

});

$(document).click(function(){
  $(".dropdown-content").removeClass("visible");
});


});
