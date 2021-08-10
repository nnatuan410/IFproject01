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

    // Parallax
    $('.parallax').each(function(){
        var img = $(this);
        var imgParent = $(this).parent();
        function parallaxImg () {
          var speed = img.data('speed');
          var imgY = imgParent.offset().top;
          var winY = $(this).scrollTop();
          var winH = $(this).height();
          var parentH = imgParent.innerHeight();
          // The next pixel to show on screen      
          var winBottom = winY + winH;
          // If block is shown on screen
          if (winBottom > imgY && winY < imgY + parentH) {
            // Number of pixels shown after block appear
            var imgBottom = ((winBottom - imgY) * speed);
            // Max number of pixels until block disappear
            var imgTop = winH + parentH;
            // Porcentage between start showing until disappearing
            var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
          }
          img.css({
            top: imgPercent + '%',
            transform: 'translate(-50%, -' + imgPercent + '%)'
          });
        }
        $(document).on({scroll: function () {parallaxImg();}});
      });
});