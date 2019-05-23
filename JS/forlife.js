$(document).ready(function () {

    $(".a-in-cont-menu-top").click(function () {
        if ($(this).css("background") == "red") {
            $(this).css({
                "background": "white"
            });
        } else {
            $(this).css({
                "background": "red"
            });
        }
    });

    $(".a-in-cont-menu-top").click(function () {
        $(".a-in-cont-menu-top").css("color", "white" , "background", "red");
    });








});