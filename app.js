$(function () {
    $(document).scroll(function () {
      var $nav = $(".header-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });