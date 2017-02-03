$(document).ready(function() {

  $('.contents').hide();
  $('.contents:first').show();
  $('.menu li:first').addClass('active');

  $('.menu li').click(function() {

    $('.menu li').removeClass('active');
    $(this).toggleClass('active');
    $('.contents').hide();
    $('header').removeClass('open');

    $($(this).find('a').attr('href')).fadeIn();
    return false;


  });

});



$(function() {
  $('#nav_toggle').click(function(){//headerに .openNav を付加・削除
      $('header').toggleClass('open');
  });
});
