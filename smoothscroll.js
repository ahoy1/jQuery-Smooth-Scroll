/**
* jQuery smooth scrolling for same-page anchor links
*/
$('a[href*=#]:not([href=#])').click(function() {
  //make sure the link is to an ID on the current page
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //get the "#*" portion of the href attribute
    var target = $(this.hash);

    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

    //check the length property of target - that is, make sure it exists on the page. JS interprets 0 == false so this works
    if (target.length) {
      //do the animation. Change the number in ms to change the animation length
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});