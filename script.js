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

$('#final').click(function() {
    $(":root").css({"--bg": "#FBFFC9", "--txt": "#43738D"});
    $('.p0, .p1, .p2').css("opacity","0").hide();
    $('.fi').css("opacity","1").show();
    $(":root").css({"--bg": "white", "--txt": "black"});
    $('.p1 input[type="checkbox"], .p2 input[type="checkbox"]').prop('checked', false);
    hint=("Okay, I guess now it's the time for your better task. No pressure because, after all, all you need to do is make something that works for you. And that's everything design is about.");
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
    if ($('#stretched1').is(":checked"))
    {
        hint=("If you think it's sexy and normal then I get why you are here. Stretched type is at least 6 months of jail I'm telling you.");
        $('.p1t').html("Stretched<br>Font");
        $('.p1 input[type="checkbox"]').css({"color": "var(--txt)"});
    }
    else if ($('#stretched2').is(":checked"))
    {
        hint=("Are you still trying to stketch that poor type!? Omg 2 more months of jail for this insane creature.");
        $('.p1t').html("Stretched<br>Font");
        $('.p1 input[type="checkbox"]').css({"color": "var(--txt)"});
    }
    else if ($('#stretched3').is(":checked"))
    {
        hint=("Finally... The typeface should remain how it designed to be. If you stretch it, the proportion of its glyph will be distorted.<br><br>When you want a condensed / expanded text in your design, just search for a matching variable type. I'll consider reduce 3 months of jail for you.");
        $('.p1t').html("<span style='text-decoration: line-through; text-decoration-thickness: 5px;'>Stretched</span><br>Font");
        $('.strike1').css({"display": "block"});
    }
    else if ($('#stretched4').is(":checked"))
    {
        hint=("What are you doing... Fine, no comments. Enjoy your jail life.");
        $('.p1t').html("Stretched<br>Font");
        $('.p1 input[type="checkbox"]').css({"color": "var(--txt)"});
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
    if ($('#width1').is(":checked"))
    {
        hint=("Yea, it may look fine in some occasions but only when you have multiple columns. Try harder.");
        $('.p2t1').html("Hard-to-read Text Block");
        $('.p2 input[type="checkbox"]').css({"color": "var(--txt)"});
    }
    else if ($('#width2').is(":checked"))
    {
        hint=("Don't you feel that everything reads better in this width? If not, you just belong here.");
        $('.p2t1').html("<span style='text-decoration: line-through; text-decoration-thickness: 2px; margin: 0px;'>Hard-to-read</span> Text Block");
        $('.strike2').css({"display": "block"});
    }
    else if ($('#width3').is(":checked"))
    {
        hint=("Am I the only one that can't read this...? Let me grab my ADHD pills.");
        $('.p2t1').html("Hard-to-read Text Block");
        $('.p2 input[type="checkbox"]').css({"color": "var(--txt)"});
    }
    else if ($('#width4').is(":checked"))
    {
        hint=("If you are set with this one you are definitely crazy... or a marathon runner. Guess who will have 4 more months of jail for this?");
        $('.p2t1').html("Hard-to-read Text Block");
        $('.p2 input[type="checkbox"]').css({"color": "var(--txt)"});
    }
}, 1);


  //Navigation Check
$('.gd, .jail').click(function() {
    $('.menu input[type="checkbox"]').prop('checked', false);
    $("#question").css({"cursor": "pointer", "color": "var(--txt)"});
});

setInterval(() => { //when user click
    if ($(".strike1, .strike2").is(':hidden')) {

    } else
    {
        $('#final').css({"cursor": "pointer", "border": "1px solid var(--txt)"});
        $('#final:active').css({"pointer-events": "auto"});
        //alert box show
    }
  }, 1);

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
        hint=("Sup, I'm Valente, your prison guard. I don't know why you end up here in Graphic Design Jail and I don't care. Just read those files on the right and show me why are you here.");
        $("#question:active").css({"pointer-events": "none"});
    }
  }, 1);

  setInterval(() => {
    $('#question').html(hint);
  }, 1);


});