new fullpage('#fullPage', {
    autoScrolling:true,
    navigation: true,
    keyboardScrolling: true,
	controlArrows: true,
    slidesNavigation: true,
    navigationTooltips: ['Home', 'Projects', 'Atmosphere', 'Equipment', 'Contact'],
    anchors:['Section1','Section2','Section3','Section4','Section5'],
})

$(document).ready(function(){
    $('.office-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

});