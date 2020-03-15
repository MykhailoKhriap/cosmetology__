// ----------------плавный скрол-----------------
$(document).ready(function(){
    $("#MyMenu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(window).scroll(function() {
var height = $(window).scrollTop();
if(height > 1){
$('header').addClass('header-fixed');
} else{
$('header').removeClass('header-fixed');
}
});

// if(~['Android', 'iPhone', 'iPod', 'iPad', 'BlackBerry'].indexOf(navigator.platform)) {
//  $('.navbar-collapse').on('click', 'a', function (e) {
//      $(e.delegateTarget).collapse('toggle');
//  });


//  $(function(){
//     $("#video__play").click(function(){
//         var dataYoutube = $(this).parents('.js-video').attr('data-youtube');
//         $(this).parents('.js-video').html('<iframe src="https://www.youtube.com/embed/'+ dataYoutube +'?autoplay=1" frameborder="0" allowfullscreen></iframe>')
//     });
// });