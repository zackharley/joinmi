function drawerOpen() {
    $('#overlay').css('visibility', 'visible');
    $('#drawer').css('visibility', 'visible');
}
function drawerClose() {
    $('#overlay').css('visibility', 'hidden');
    $('#drawer').css('visibility', 'hidden');
}

$('document').ready(function () {
    $('#notification').click(function () {
        $("#search").slideDown("slow");
    });
});