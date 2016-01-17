$('document').ready(function () {
    var check = 0;
    $('#notification').click(function () {
        if (check === 0) {
            $("#search").slideDown("slow");
            check = 1;
        } else {
            $("#search").slideUp("slow");
            check = 0;
        }
    });

    $('#hamburger').click(function () {
        $('#overlay').animate({
            left: '0px'
        }, 1000);
        $('#drawer').animate({
            left: '0px'
        }, 1000);
    });
    $("#overlay").click(function () {
        $(this).animate({
            left: '-1080px'
        }, 1000);
        $('#drawer').animate({
            left: '-900px'
        }, 1000);
    });
});