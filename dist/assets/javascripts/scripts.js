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


    var aChildren = $(".nav li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $(".nav li a[href='" + theID + "']").parent().addClass("menu_active");
            } else {
                $(".nav li a[href='" + theID + "']").parent().removeClass("menu_active");
            }
        }

        if(windowPos + windowHeight == docHeight) {
            if (!$(".nav li:last-child").hasClass("menu_active")) {
                var navActiveCurrent = $(".menu_active").attr("href");
                $("a[href='" + navActiveCurrent + "']").parent().removeClass("menu_active");
                $(".nav li:last-child").addClass("menu_active");
            }
        }
    });

})(jQuery);