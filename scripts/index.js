$(document).ready(function(){

    // fixed scroll when open menu SP
    $('#navtoggle').click(function(){
        if($(this).is(":checked")){
            $('body').addClass("fixed-body");
        }
        else if($(this).is(":not(:checked)")){
            $('body').removeClass("fixed-body");
        }
    });

    // fixed menu when srcoll over
    var headerHeight = document.getElementById("nav").offsetTop;
    window.onresize = function() {
        headerHeight = document.getElementById("nav").offsetTop;
    };
    $(window).scroll(function(){
    if($(window).scrollTop()>=headerHeight && headerHeight > 0){
        $('#nav').addClass('fixed-menu');
    }else{
        $('#nav').removeClass('fixed-menu');
    }
    })
    //parralax animation
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        console.log(scrollTop);
        $('.parralax').css('top', - ((scrollTop /10)*1.2 + -260)+'px');
    })
    // scroll top btn
    $('#btn-scrollTop').click(function(){
		$('html,body').animate({
			scrollTop: 0
	    }, 500);
	});
    //nav scroll content
    $("#service-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#service").offset().top -80
        }, 1000);
        $('#navtoggle').prop('checked', false);
        $('body').removeClass("fixed-body");
    })
    $("#about-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#about").offset().top -80
        }, 1000);
        $('#navtoggle').prop('checked', false);
        $('body').removeClass("fixed-body");
    })
    $("#partners-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#partners").offset().top - 80
        }, 1000);
        $('#navtoggle').prop('checked', false);
        $('body').removeClass("fixed-body");
    })
    $("#recruit-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#recruit").offset().top -80
        }, 1000);
        $('#navtoggle').prop('checked', false);
        $('body').removeClass("fixed-body");
    })
    $("#content-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#contact").offset().top -80
        }, 1000);
        $('#navtoggle').prop('checked', false);
        $('body').removeClass("fixed-body");
    })
});