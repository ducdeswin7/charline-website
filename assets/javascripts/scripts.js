(function(){
    
    var menuIcon = $('.menuIcon'),
        navList = $('.nav_list');

    menuIcon.click(function() {
        navList.toggleClass('displayNone')
    });
    
})(jQuery);