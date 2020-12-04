//theme additional javascript files added here!
var Windowidth = 0,
    WindowHeight = 0;

$( document ).ready(function() {
    ///////////////// fixed menu on scroll for desktop
    if ($(window).width() > 992) {
        $(window).scroll(function(){  
        if ($(this).scrollTop() > 40) {
            $('#navbar_top').addClass("fixed-top");
            // add padding top to show content behind navbar
            $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
            }else{
            $('#navbar_top').removeClass("fixed-top");
            // remove padding top from body
            $('body').css('padding-top', '0');
            }   
        });
    } // end if

     //Initialize tooltips
     $('.nav-tabs > li a[title]').tooltip();
     //Wizard Tab
     $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
         var $target = $(e.target);
         if ($target.parent().hasClass('disabled')) {
             return false;
         }
     });
     $(".next-step").click(function (e) {
         var $active = $('.wizard .nav-tabs li.active');
         $active.next().removeClass('disabled');
         nextTab($active);
     });
     $(".prev-step").click(function (e) {
         var $active = $('.wizard .nav-tabs li.active');
         prevTab($active);
     });

     //Clarity Dropdown Showcase
     $('#slct-career').on('change', function () {
        $("#slct-career-ref").css('display', (this.value == '0') ? 'block' : 'none');
    });

    //Owl Carousel
    if ($(window).width() > 767) {
    $("#testimonial-slider").owlCarousel({
            items:3,
            itemsDesktop:[1199,3],
            itemsDesktopSmall:[1000,1],
            itemsTablet:[767,1],
            pagination: false,
            navigation:true,
            navigationText:["",""],
            autoPlay:false
        });
    }
    if ($(window).width() < 767) {
        $("#testimonial-slider").owlCarousel({
            items:1,
            pagination: false,
            navigation:true,
            navigationText:["",""],
            autoPlay:true,
            autoHeight: true
        });
    }

    //form validation
    $('#enrollform').validate({ // initialize the plugin
        rules: {
            customerName: {
                required: true,
                email: true
            },
            customerEmailId: {
                required: true,
                minlength: 5
            },
            phoneNumber: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            customerName: "Please enter your full name !",
            customerEmailId: "Please enter a valid e-mailid !",
            phoneNumber: "Please enter a valid mobile number !"
        }
    });
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}