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
// $( "p:first" ).fadeToggle( "slow", "linear" );
// });
// $(function () {
//   $('#quotes').children('.first').fadeToggle(1000, function () {
//     // animation complete
//   })
// });


/*var language = window.navigator.userLanguage || window.navigator.language;

console.log(language);

if (language === 'en-us') {
	window.location = 'file:///Users/benediktlehnert/Sites/everyday-typography/typopocketguide/de/index.html'
};*/
