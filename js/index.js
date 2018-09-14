$(document).ready(function(){
    $(".mainmenu").on("click","a", function (event) {
          event.preventDefault();
        let id  = $(this).attr('href');
        if (/html/.test(id)) {
            openPage(id);
        } else if (id=='#refreshPage') {
            location.reload();
        } else {
           let top = $(id).offset().top;
            console.log(top);
            $('body,html').animate({scrollTop: top}, 1500, 'easeInOutSine');
        };
    });
    // $(#photos).click
    // $('.single-item').slick({
    //     autoplay: true,
    // });
    $('.multiple-items').slick({
        autoplay: true,
        arrows: true,
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.arrowleft'),
        nextArrow: $('.arrowright'),
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,

                }
            },
            {breakpoint: 500,
            settings: {
                slidesToShow: 1,
            }
        }],
    });
});


function openPage(page){
    console.log(page);
    // $('main').fadeOut(2000);
    $("#newFilms").load(page);
}