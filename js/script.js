$(document).ready(function() {
    $(".main").onepage_scroll({
        sectionContainer: "section",
        responsiveFallback: 200,
        loop: false,
        keyboard: false,
        pagination: false,
        beforeMove: function(index) {
            $(".par").css({
                "transform": "translate3d(0, " + pos * 3 + "px, 0)",
                "transition": "all " + 1000 + "ms "
            });
        }
    });

    $(".to_first_page").on("click", function() {
        $(".main").moveTo(1);
    })


    editWidthScreen(true);

    $(window).resize(function() {
        editWidthScreen(false);
    });
});

function editWidthScreen(initFlag) {
    if (window.innerWidth < 750) {
        if(initFlag == false){
            $('.autoplay').slick('unslick');
        }
        $('.zoom').trigger('zoom.destroy');
        $('.autoplay').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        });
        } else if (window.innerWidth > 750 && window.innerWidth < 850) {
            if(initFlag == false){
                $('.autoplay').slick('unslick');
            }
            $('.autoplay').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
            });
        } else {
            if(initFlag == false){
                $('.autoplay').slick('unslick');
            }
            $('.autoplay').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
            });
        }
        if (window.innerWidth > 750) {
            $('.zoom').zoom();
        }
}