$(document).ready(function(){
    let elementWidth = $(".togglerMenuSide").width() + "px";
  
    $(".bars").click(function(){
        $(".togglerMenuSide").animate({right: "0"});
        $(".layer").addClass("active");
    });
  
    $(".times").click(function(){
        $(".togglerMenuSide").stop().animate({right: `-${elementWidth}`}, "slow");
        $(".layer").removeClass("active");
    });
  
    $(".layer").click(function(){
        $(".togglerMenuSide").animate({right: `-${elementWidth}`}, "slow");
        $(".layer").removeClass("active");
    });
  
  });