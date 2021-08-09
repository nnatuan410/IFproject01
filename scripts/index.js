$(document).ready(function(){
    // fixed scroll when open menu SP
    $('#navtoggle').click(function(){
        if($(this).is(":checked")){
            $('body').addClass("fixed-body");
            console.log("checked")
        }
        else if($(this).is(":not(:checked)")){
            $('body').removeClass("fixed-body");
            console.log("unchecked")
        }
    });
    // fixed menu when srcoll over
    var headerHeight = $('#header-slide').height();
    console.log(headerHeight);
    $(window).scroll(function(){
        if($(window).scrollTop()>=headerHeight){
            $('#nav').addClass('fixed-menu');
        }else{
            $('#nav').removeClass('fixed-menu');
        }
        })
    //paralax bg
    $('.parallax-window').parallax({imageSrc: './images/recruit-img.png'});

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
    })
    $("#about-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#about").offset().top -80
        }, 1000);
    })
    $("#partners-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#partners").offset().top - 80
        }, 1000);
    })
    $("#recruit-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#recruit").offset().top -80
        }, 1000);
    })
    $("#content-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#contact").offset().top -80
        }, 1000);
    })
});