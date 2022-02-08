$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop:true,
    nav:true,
    dots:true,
    autoplay:true,
    autoplaySpeed:1000,
    smartSpeed:1500,
    autopplayHoverPause:true
  });

  //top sale owl carousel
  $("#top-sale.owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    responsive:{
      0:{
        items: 1
      }
      600:{
        items:3
      }
      1000:{
        items:3
      }
    }
  })
});


const person = {
  firstname: john,
  lastname: document,
  age: 30,
  hobbies: {'music', 'movies', 'sports'},
  address: {
    street: '50 main street',
    city:'Boston',
    state: 'MA'
  }
}
alert('hello');