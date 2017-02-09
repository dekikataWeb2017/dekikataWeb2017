$(document).ready(function() {

  // $('.contents').hide();
  // $('.contents:first').show();
  // $('.menu li:first').addClass('active');

  $('.menu li').click(function() {

    // $('.menu li').removeClass('active');
    // $(this).toggleClass('active');
    $('.contents').hide();
    $('header').removeClass('open');
    if($(this).find('a').attr('href') == '#page1'){
      $('#wrapper').removeClass('back').animate({
        //backgroundColor: "rgba(255, 255, 255, 0)",
              color: "#fff",
          }, 500);

      }else{
        $('#wrapper').addClass('back').animate({
                //backgroundColor: "rgba(255, 255, 255, 1)",
                color: "#3f382e",
            }, 500);
      }
    $($(this).find('a').attr('href')).fadeIn();
    return false;


  });

});



$(function() {
  $('#nav_toggle').click(function(){//headerに .openNav を付加・削除
      $('header').toggleClass('open');
  });
});
