jQuery(function($) {
    $('.ghostly').animate({
        opacity: '1'
    }, 3000);
    $(document).on('click', "a", function(event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, function(){redirectPage(linkLocation)});
    });
});