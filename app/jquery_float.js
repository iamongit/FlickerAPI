// $(window).scroll(function(e){ 
//   var $el = $('.fixedElement'); 
//   var isPositionFixed = ($el.css('position') == 'fixed');
//   if ($(this).scrollTop() > 200 && !isPositionFixed){ 
//     $('.fixedElement').css({'position': 'fixed', 'top': '0px'}); 
//   }
//   if ($(this).scrollTop() < 200 && isPositionFixed)
//   {
//     $('.fixedElement').css({'position': 'static', 'top': '60px'}); 
//   } 
// });

// $(document).ready(function() {
  
//   $(window).scroll(function () {
//       //if you hard code, then use console
//       //.log to determine when you want the 
//       //nav bar to stick.  
//       console.log($(window).scrollTop())
//     if ($(window).scrollTop() > 280) {
//       $('#nav_bar').addClass('navbar-fixed');
//     }
//     if ($(window).scrollTop() < 281) {
//       $('#nav_bar').removeClass('navbar-fixed');
//     }
//   });
// });