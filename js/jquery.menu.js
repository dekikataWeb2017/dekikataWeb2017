$(document).ready(function() {
    $('.animsition').animsition({
      loading: false,
      inDuration: 1200,
    outDuration: 800,
    });
  $('.menu li').click(function() {
    $('header').removeClass('open');
  });
});
$(function() {
  $('#nav_toggle').click(function(){//headerに .openNav を付加・削除
      $('header').toggleClass('open');
  });
});
