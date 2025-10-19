$(document).ready(function() {
    $('.product-item .btn-secondary').on('click', function() {
        $(this).siblings('.product-detail').slideToggle(300); 
        if ($(this).text() === 'Xem chi tiết') {
            $(this).text('Thu gọn');
        } else {
            $(this).text('Xem chi tiết');
        }
    });

    $('nav a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - $('.main-header').outerHeight()
            }, 800, function(){
                window.location.hash = hash;
            });

            $('nav a').removeClass('active');
            $(this).addClass('active');
        }
    });

    $(window).on('scroll', function() {
        var scrollPos = $(document).scrollTop() + $('.main-header').outerHeight() + 10; // Thêm một chút offset

        $('section').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.selector);

            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.main-nav ul li a').removeClass("active");
                $('.main-nav ul li a[href="#' + currLink.attr('id') + '"]').addClass("active");
            }
            else{
                $('.main-nav ul li a[href="#' + currLink.attr('id') + '"]').removeClass("active");
            }
        });
    }).scroll();
});
