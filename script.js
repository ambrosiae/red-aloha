
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

// $('form').on('submit', function(event){
//   event.preventDefault();
//     if ($('input').val()==''){
//     alert('Please enter a valid e-mail address.');}
    
//     // if ($('email').val().indexOf('@')!=0){
      
//     else {
//     alert('Thanks for subscribing!');}
//   })

// REMOVE SOCIAL TEXT IF MOBILE

// if (window.matchMedia('(max-width: 599px)'.match) {
//   $('.social').removeClass('a');
// }
// else{

// };)

// STACKOVERFLOW E-MAIL SUBSCRIPTION ALERT

function validateEmail(input){
  var email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (email.test(input.value) == true) 
  {
    alert('Thanks for subscribing!');
  }

  else
  {
    alert('Invalid Email Address');
  }

}

// ADD TO CART NUMBER

var counter = 0;

$('.add-cart').click(function (){
  counter ++;
  $('#counter').html(counter).css('display', 'block');
}); 

// REMOVE ADD TO CART WHEN CLICKED
// if ()