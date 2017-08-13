$('body').show();

$(document).on('click', '.navbar a, .goto', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - $('.navbar').height() -60
    }, 500);
});