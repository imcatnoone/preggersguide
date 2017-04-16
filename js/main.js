$(function() {
    $('a').bind('click',function(event){
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeInOutExpo');
        /*
        if you don't want to use the easing effects:
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        */
        event.preventDefault();
    });
});

// Quotes Fade In and Fade Out
$(function () {
  $('#quote-1').removeClass('active');
  $('#quote-1').next().addClass('active');
});
// so the thing is happening, just very quickly


/*var language = window.navigator.userLanguage || window.navigator.language;

console.log(language);

if (language === 'en-us') {
	window.location = 'file:///Users/benediktlehnert/Sites/everyday-typography/typopocketguide/de/index.html'
};*/
