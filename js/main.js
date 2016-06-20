$(function() {
  mobileNav();
});

//Function to open and close navigation on mobile devices
function mobileNav() {
  $('.mobile-navigation-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){
      $('.mobile-navigation-toggle, .mobile-navigation-links-wrapper, .mobile-menu, .mobile-close').removeClass('is-open');
    } else {
      $('.mobile-navigation-toggle, .mobile-navigation-links-wrapper, .mobile-close, .mobile-menu').addClass('is-open');
      $('.navigation-links a').click( function(){
        $('.mobile-navigation-toggle, .mobile-navigation-links-wrapper, .mobile-menu, .mobile-close').removeClass('is-open');
      });
    }
  });
}
