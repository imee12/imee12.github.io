$(document).ready(function() {

  var tips = [
    "a developer.",
    "a writer.",
    "an ICU nurse.",
    "a filmmaker.",
    "a poet.",
    "an engineer.",
    "a creator.",
    "a dreamer.",
    "a magician."
];

setInterval(function() {
    var i = Math.round((Math.random()) * tips.length);
    if (i == tips.length) --i;
    $("#tip").html(tips[i]);
}, 2 * 1000);

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

});
