import $ from 'jquery'; 

$(document).ready(function () {
  $(window).scroll(function () {
    // check if scroll event happened
    if ($(document).scrollTop() > 130) {
      // check if user scrolled more than 50 from top of the browser window
      $(".navbar-change").css("background-color", "#F9F9F9");
      // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    } else {
      $(".navbar-change").css("background-color", "transparent");
      $(".navbar-change").css("transition", "1s");
      // if not, change it back to transparent
    }
  });
});


/**
****
***** Start Importing files
****
*/

//Nav Bar File imported to the layout.html from "../Vue/navBar.html"

$(function () {

  "use strict";
  $("#navbar").load("navigationBar.html");

});


//footer Bar File imported to the layout.html from "../Vue/footerBar.html"

$(function () {

  "use strict";
  $("#footerbar").load("footerNavigation.html");

});
