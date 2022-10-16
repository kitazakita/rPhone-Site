$(".openbtn1").click(function () {
  $(this).toggleClass("active");
  $(this).next().toggleClass("menu_down");
  $("body").toggleClass("overflow-hidden");
});
