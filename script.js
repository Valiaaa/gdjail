$(document).ready(function(){

var hint

$('#question').click(function() {
    $(this).css({"text-align": "left"}).html($(this).html() == hint ? '?' : hint);
});


//check box
$('.menu input[type="checkbox"]').bind('click', function() {
    $('.menu input[type="checkbox"]').not(this).prop('checked', false);
    $("#question").css({"cursor": "pointer", "color": "var(--txt)"});
});

$('.p1 input[type="checkbox"]').bind('click', function() {
    $('.p1 input[type="checkbox"]').not(this).prop('checked', false);
    $('#question').html("?");
});


//navigation check
$('#stretch').click(function() {
    $(":root").css({"--bg": "#5E1313", "--txt": "#C6EAFF"});
    $('.p0, .p2').css("opacity","0");
    $('.p1').css("opacity","1");
});

$('#caption').click(function() {
    $(":root").css({"--bg": "#FBFFC9", "--txt": "#43738D"});
    $('.p0, .p1').css("opacity","0");
    $('.p2').css("opacity","1");
});


//page1
$('#stretched1').click(function() {
    $(".p1t").css({"transform": "scaleX(0.25)"});
});

$('#stretched2').click(function() {
    $(".p1t").css({"transform": "scaleX(0.5)"});
});

$('#stretched3').click(function() {
    $(".p1t").css({"transform": "scaleX(1)"});
});

$('#stretched4').click(function() {
    $(".p1t").css({"transform": "scaleX(1.4)"});
});

setInterval(() => {
    if ($('#stretched1,#stretched2,#stretched4').is(":checked"))
    {
        hint=("Stretched font is unideal.");
        $('#question').css({'animation': 'none'});
        $('.p1t').html("Stretched<br>Font");
        $('.p1 input[type="checkbox"]').css({"color": "var(--txt)"});
    }
    else if ($('#stretched3').is(":checked"))
    {
        hint=("Yes, the typeface should remain how it designed to be. If you stretch it, the proportion of its glyph will be distorted.<br><br>When you want a condensed / expanded text in your design, try to search for a matching variable type.");
        $('#question').css({'animation': 'blink 1.5s linear infinite'});
        $('.p1t').html("<span style='text-decoration: line-through;'>Stretched</span><br>Font");
        $('.p1 input[type="checkbox"]').css({"color": "var(--no)"});
        $('.strike1').css({"display": "block"});
    }
}, 1);


  //Navigation Check
$('.gd, .jail').click(function() {
    $('.menu input[type="checkbox"]').prop('checked', false);
    $("#question").css({"cursor": "pointer", "color": "var(--txt)"});
});

  setInterval(() => {
    if ($('.menu input[type="checkbox"]').is(":checked"))
    {
        $("#question:active").css({"pointer-events": "inherit"});
    }
    else
    {
        $('.p0').css("opacity","1");
        $('.p1, .p2').css("opacity","0");
        $(":root").css({"--bg": "white", "--txt": "black"});
        $("#question").css({"cursor": "not-allowed", "color": "var(--no)", 'animation': 'none'}).html("?");
        $("#question:active").css({"pointer-events": "none"});
    }
  }, 1);


});