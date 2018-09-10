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

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementsByClassName("scrollTop")[0].style.display = "flex";
  } else {
    document.getElementsByClassName("scrollTop")[0].style.display = "none";
  }
}