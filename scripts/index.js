$(document).ready(function(){

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
});