$(document).ready(function() {

  $(".main-nav-list-item").hover(function() {
    $(this).children(".dropdown-list").toggle();
  });

});
