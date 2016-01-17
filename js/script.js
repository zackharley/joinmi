function drawerOpen() {
    $('#overlay').css('visibility', 'visible');
    $('#drawer').css('visibility', 'visible');
}
function drawerClose() {
    $('#overlay').css('visibility', 'hidden');
    $('#drawer').css('visibility', 'hidden');
}

$('document').ready(function () {
    var check = 0;
    $('#notification').click(function () {
        if(check === 0){
            $("#search").slideDown("slow");
            check = 1;
        } else{
            $("#search").slideUp("slow");
            check = 0;
        }        
    });
});