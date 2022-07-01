$('.center').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
)
wow.init();



// custom

let currentHeight = $(window).height();
// console.log(currentHeight);

$(window).scroll(function (){
    let currentScroll = $(this).scrollTop();
    // console.log(currentScroll);
    if(currentScroll > currentHeight-200){
        $('.nav-header').addClass('nav-scroll');
        $('.link-to-home').addClass('link-active');

    }else {
        $('.nav-header').removeClass('nav-scroll');
        $('.link-to-home').removeClass('link-active');
        setActive('home');
    }

});

$(".navbar-toggler").on('click',function (){
    $('.m').toggleClass('fa-times');
    $('.m').toggleClass('fa-bars');
})

// for scroll
function setActive(data){
    $('.nav-link').removeClass('nav-active');
    $(`.nav-link[href="#${data}"]`).addClass('nav-active');
}

function navScroll(){
    let currentSection = $('section[id]');
    currentSection.waypoint(function (direction){
        let currentId = $(this.element).attr('id');
        // console.log($(this.element).attr('id'));
        if(direction == 'down'){
            setActive(currentId);
        }
    },{offset: '150px'});

    currentSection.waypoint(function (direction){
        let currentIdTwo = $(this.element).attr('id');
        // console.log($(this.element).attr('id'));
        if(direction == 'up'){
            setActive(currentIdTwo);
        }
    },{offset: '150px'});
}
navScroll();

// for loader
$(window).on('load', function (){
    $('.loader-container').fadeOut(500,function (){
        $(this).remove();
    });
});






// document.querySelector('.navbar-toggler').onclick = function (){
//     document.querySelector('.m').classList.toggle('fa-times');
//     document.querySelector('.m').classList.toggle('fa-bars');
//
// }