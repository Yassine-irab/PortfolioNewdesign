window.onload = function() {

  jQuery(document).ready(function () {
    jQuery(window).scroll(function () {
      // check if scroll event happened
      if (jQuery(document).scrollTop() > 130) {
        // check if user scrolled more than 50 from top of the browser window
        jQuery(".navbar-change").css("background-color", "#F9F9F9");
        // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
      } else {
        jQuery(".navbar-change").css("background-color", "transparent");
        jQuery(".navbar-change").css("transition", "1s");
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

  jQuery(function () {

    "use strict";
    jQuery("#navbar").load("navigationBar.html");

  });


  //footer Bar File imported to the layout.html from "../Vue/footerBar.html"

  jQuery(function () {

    "use strict";
    jQuery("#footerbar").load("footerNavigation.html");

  });

}