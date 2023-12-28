// OwlCarousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
  $(".loop").owlCarousel({
    center: true,
    loop: true,
    dots: false,
    margin: 0,
    nav: false,
    responsive: {
      400: {
        items: 2,
      },
      1045: {
        items: 4,
      },
    },
  });
  $(".loop2").owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    responsive: {
      400: {
        items: 2,
        margin: 0,
      },
      1045: {
        items: 4,
      },
    },
  });
  $(".owl-dots").remove();
  $(".owl-nav").remove();
});
