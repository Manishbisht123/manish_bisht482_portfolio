const menu = document.getElementById("menu");
const navlist = document.getElementById("navlist");

menu.addEventListener("click", () => {
   navlist.classList.toggle("navlist-active")
});


// preloader

setTimeout(function () {
   $('#loader').fadeToggle();
}, 3000);


// top scroll

var btn = $('#backToTop');
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});