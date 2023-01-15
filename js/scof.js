/* follow button */
var insta_follow_var = 1;
$(document).ready(function(){
  
    /*When window scroll*/
    $(window).scroll(function(){
      
      /*navigation hide and show*/
      if($(window).scrollTop()>200)
          $('nav').slideDown(500);
      else
           $('nav').slideUp(500);
    });
  
    /*navigation toggle function*/
    $('.nav-toggle').click(function(){
  
        $("nav ul").slideToggle();
    });
  

    /*When window resize*/
    $(window).resize(function(){
  
      /*메뉴버튼을 눌러서 네비게이션을 없애고 너비를 늘릴경우 -> 다시 보여줘야함*/
      if($(window).width() > 980){
        if(!$("nav ul").is(":visible"))//900이상인데, 네비게이션이 안보이면 보이게함
        {
          $("nav ul").css("display", "block");
        }
      }
      else//900이하일때는 네비게이션 안보이게함
      {
        $("nav ul").css("display", "none");
      }
    })
  });




  /*SNS Toggle*/
$('.fa-facebook-square').click(function(){
  $('.fa-facebook-square a span').animate({width:'toggle'});
});
$('.fa-instagram').click(function(){
  $('.fa-instagram a span').animate({width:'toggle'});
});
$('.fa-github-square').click(function(){
  $('.fa-github-square a span').animate({width:'toggle'});
});
$('.fa-paper-plane').click(function(){
  $('.fa-paper-plane a span').animate({width:'toggle'});
});