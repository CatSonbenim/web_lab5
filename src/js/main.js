//= libs/jquery.js
//= ../slick/slick.min.js

$(function() {
    $('.galery__items').slick({
        arrows: true,
        appendArrows: '.galery__arrows',
        prevArrow: '<div class="arrows__prev"><</div>',
        nextArrow: '<div class="arrows__next">></div>'
    });
});

var menu = 0;

$("#open_menu").click(function() {
    $("#menu_hid").slideToggle("fast", function() {
        if (menu == 0) {
        	$("#open_menu").html('↑');
            $("#menu_hid").css({
                "display": "flex"
            });
            menu = 1;
        } else {
            menu = 0;
            $("#open_menu").html('↓');
            $("#menu_hid").css({
                "display": "none"
            });
        }
    })

});
