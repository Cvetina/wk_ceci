
document.addEventListener("touchstart", function(){}, true);
     $(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
    });