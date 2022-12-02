$(document).ready(function(){

var hint


//check box
$('.menu input[type="checkbox"]').bind('click', function() {
    $('.menu input[type="checkbox"]').not(this).prop('checked', false);
});

$('.p1 input[type="checkbox"]').bind('click', function() {
    $('.p1 input[type="checkbox"]').not(this).prop('checked', false);
    hint=("I'm watching you. And I'll always be watching you...");
});

$('.p2 input[type="checkbox"]').bind('click', function() {
    $('.p2 input[type="checkbox"]').not(this).prop('checked', false);
    hint=("I'm watching you. And I'll always be watching you...");
});


//navigation check
$('#stretch').click(function() {
    $(":root").css({"--bg": "#5E1313", "--txt": "#C6EAFF"});
    $('.p0, .p2').css("opacity","0").hide();
    $('.p1').css("opacity","1").show();
    $('#stretched1').prop('checked', true);
    $('.p2 input[type="checkbox"]').prop('checked', false);
});

$('#width').click(function() {
    $(":root").css({"--bg": "#FBFFC9", "--txt": "#43738D"});
    $('.p0, .p1').css("opacity","0").hide();
    $('.p2').css("opacity","1").show();
    $('#width1').prop('checked', true);
    $('.p1 input[type="checkbox"]').prop('checked', false);
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
        hint=("If you think it's sexy...");
        $('.p1t').html("Stretched<br>Font");
        $('.p1 input[type="checkbox"]').css({"color": "var(--txt)"});
    }
    else if ($('#stretched3').is(":checked"))
    {
        hint=("Yes, the typeface should remain how it designed to be. If you stretch it, the proportion of its glyph will be distorted.<br><br>When you want a condensed / expanded text in your design, try to search for a matching variable type.");
        $('.p1t').html("<span style='text-decoration: line-through; text-decoration-thickness: 5px;'>Stretched</span><br>Font");
        $('.strike1').css({"display": "block"});
    }
}, 1);


//page2
$('#width1').click(function() {
    $(".p2t2").css({"width": "420px"});
});

$('#width2').click(function() {
    $(".p2t2").css({"width": "650px"});
});

$('#width3').click(function() {
    $(".p2t2").css({"width": "920px"});
});

$('#width4').click(function() {
    $(".p2t2").css({"width": "1200px"});
});

setInterval(() => {
    if ($('#width1,#width3,#width4').is(":checked"))
    {
        hint=("Stretched font is unideal.");
        $('.p2t1').html("Hard-to-read Text Block");
        $('.p2 input[type="checkbox"]').css({"color": "var(--txt)"});
    }
    else if ($('#width2').is(":checked"))
    {
        hint=("Yes, the typeface should remain how it designed to be. If you stretch it, the proportion of its glyph will be distorted.<br><br>When you want a condensed / expanded text in your design, try to search for a matching variable type.");
        $('.p2t1').html("<span style='text-decoration: line-through; text-decoration-thickness: 2px; margin: 0px;'>Hard-to-read</span> Text Block");
        $('.strike2').css({"display": "block"});
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
        $('.p0').css("opacity","1").show();
        $('.p1, .p2').css("opacity","0").hide();
        $(":root").css({"--bg": "white", "--txt": "black"});
        hint=("Sup, I don't know why you end up here in Graphic Design jail and I don't care.");
        $("#question:active").css({"pointer-events": "none"});
    }
  }, 1);

  setInterval(() => {
    $('#question').html(hint);
  }, 1);


});