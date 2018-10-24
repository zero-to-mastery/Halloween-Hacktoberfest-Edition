// Disabled while testing
// modal on load
$(window).on('load', function() {
    $('#exampleModalCenter').modal('show');
    //console.log('ready111');
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function() {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $('#back-to-top').tooltip('show');

});

//Add color to navbar on scroll and remove color when back to top.
document.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.add('navbar-scroll');
    if (window.scrollY === 0) {
        document.querySelector('.navbar').classList.remove('navbar-scroll');
    }
})