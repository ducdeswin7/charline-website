(function(){
    
    var menuIcon = $('.menuIcon'),
        navList = $('.nav_list');

    menuIcon.click(function() {
        navList.toggleClass('displayNone')
    });


    // sticky menu
    var stickyClass = "main-nav-scrolled",
        header = $('.landing').height(),
        nav = $(".nav");
    
    $(window).scroll(function() {
        if( $(this).scrollTop() > header ) {
            nav.addClass(stickyClass);
        } else {
            nav.removeClass(stickyClass);
        }
    });

    // anchor smooth 
    
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

})(jQuery);