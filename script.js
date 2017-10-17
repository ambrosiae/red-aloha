
// CSS TRICKS SMOOTH SCROLLING

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
		target.focus();   //Setting focus
        if(target.is(":focus")){ //checking if the target was focused
          return false;
        }else{
          target.attr('tabindex','-1'); //Adding tabindex for elements not focusable
          target.focus(); //Setting focus
        };
        return false;
      }
    }
  });
}); 

// FLICKITY CAROUSEL

$('.carousel').flickity({
  cellAlign: 'left',
  contain: true,
  imagesLoaded: true,
  autoPlay: 1000,
  prevNextButtons: false  

});


// E-MAIL SUBSCRIPTION ALERT

$('form').on('submit', function(event){
  event.preventDefault();
    if ($('input').val()!=''){
    alert('Thanks for subscribing!');}
    else{
    alert('Please enter a valid e-mail address.')
    }
  })

// REMOVE SOCIAL TEXT IF MOBILE

if (window.matchMedia('(max-width: 599px)').matches) {
  $('.social').removeClass('a');
}

else{

}

