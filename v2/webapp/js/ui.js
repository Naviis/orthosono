$(function(){
    
    // Loader
    
    window.setTimeout(function(){
        $('.g_loader').removeClass('active');
    },1000);
    
    // Buttons
    
    $('.menu_button').click(function(){
       $('body').toggleClass('menuShown'); 
    });    
    
    $('.menu_close').click(function(){
       $('body').toggleClass('menuShown'); 
    });
    
    $('.menu li').click(function(){
       $('body').toggleClass('menuShown'); 
    });
    
    $('.presets_saveClose').click(function(){
       $('body').toggleClass('saveMenuShown'); 
    });  
    
    $('.presets_loadClose').click(function(){
       $('body').toggleClass('loadMenuShown'); 
    });
    
    $('.presets_deleteClose').click(function(){
       $('body').toggleClass('deleteMenuShown'); 
    });
    
    $('.presets_promptClose').click(function(){
       $(this).parent().toggleClass('active'); 
    });  
    
    $('body').on('click','.g_ripple',function(e){
            
        var self = this;
        var offset = $(self).offset();
        var mouseX = e.pageX;
        var mouseY = e.pageY;

        var left = Math.round(mouseX-offset.left);
        var top = Math.round(mouseY-offset.top);

        var $span = $('<span></span>').addClass('ink');
        $(self).append($span);
        $span.css({left:left,top:top});

        window.setTimeout(function(){
            $($span).remove();
        },700);
    });
});


