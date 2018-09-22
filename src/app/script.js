$(function () {
  $('.toggles button').click(function () {
    var get_id = this.id;
    var get_current = $('.posts .' + get_id);

    $('.post').not(get_current).hide(500);
    get_current.show(500);
  });

  $('#showall').click(function () {
    $('.post').show(500);
  });
});


$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 3
      },
      800: {
        items: 4
      },
      1000: {
        items: 5,
        loop: false
      },
      1300: {
        items: 8,
        loop: false
      }
    }
  })
});