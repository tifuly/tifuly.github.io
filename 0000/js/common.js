//main
$(document).ready(function(){
    var num = 1;
    $('#main li').first().fadeIn(0);
    
    setInterval(function(){
        if(num < 3){
            num++;
            $('#main li').fadeOut('slow');
            $('#main li').eq(num - 1).fadeIn('slow');
        }else{
            num = 1;
            $('#main li').fadeOut('slow');
            $('#main li').first().fadeIn('slow');
        }
    },3000);
});

//tab
$(document).ready(function(){
    $('.btn a').click(function(){
        $('.btn a').removeClass('active');
        $(this).addClass('active');
        
        var i = $(this).parent().index();
        
        $('.bwrap > div').fadeOut(0);
        $('.bwrap > div').eq(i).fadeIn(0);
    });
    
    
});

//popup
$(document).ready(function(){
    $('.open').click(function(){
        $('#popup').show();
    });
    $('#popup a').click(function(){
        $('#popup').hide();
    });
});

//nav
$(document).ready(function(){
    $('.nav > ul > li').hover(function(){
        $(this).find('.subnav').stop().slideDown('fast');
    },function(){
        $(this).find('.subnav').stop().slideUp('fast');
    });
});