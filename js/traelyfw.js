var jq = $.noConflict();
jq(document).ready(function () {
  // Add smooth scrolling to all links
  jq("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      jq('html, body').animate({
        scrollTop: jq(hash).offset().top
      }, 1000, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });
    } // End if
  });
});

// function getScrollTop(){
//   var doc = document.documentElement;
//   return (window.pageYOffset||doc.scrollTop)-(doc.clientTop||0);
// }
// function getScrollDirection(currentScroll) {
//   var direction = currentScroll >lastScroll ? 'down' : 'up';
//   lastScroll = currentScroll;
//   return direction;
// }
// function scrollHandler(){
//   var currentSection;
//   var currentScroll = getScrollTop();
//   var scrollDirection = getScrollDirection(currentScroll);
// }
// var attrName='[data-anchor]';

// var anchorLink = currentSection.getAttribute('data-anchor');