(function(){
    
    var menuIcon = $('.menuIcon'),
        navList = $('.nav-portfolio_list');

    menuIcon.click(function() {
        navList.toggleClass('displayNone')
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