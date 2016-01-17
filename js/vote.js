function toggle(a) {
    if (a === '1up' || a === '1down' || a === '2up' || a === '2down') {
        return 8;
    } else if (a === '3up' || a === '3down') {
        return 4;
    } else if (a === '4up' || a === '4down') {
        return 1;
    }
}

$("document").ready(function () {
    var check = '';
    $("#tri1-up").click(function () {
        $("#score1").html("9");
        $(check).html(toggle(check));
        check = "#tri1-up";
    });
    $("#tri2-up").click(function () {
        $("#score2").html("9");
        $(check).html(toggle(check));
        check = "#tri2-up";
    });
    $("#tri3-up").click(function () {
        $("#score3").html("5");
        $(check).html(toggle(check));
        check = "#tri3-up";
    });
    $("#tri4-up").click(function () {
        $("#score4").html("2");
        $(check).html(toggle(check));
        check = "#tri4-up";
    });
    $("#tri1-down").click(function () {
        $("#score1").html("7");
        $(check).html(toggle(check));
        check = "#tri1-down";
    });
    $("#tri2-down").click(function () {
        $("#score2").html("7");
        $(check).html(toggle(check));
        check = "#tri2-down";
    });
    $("#tri3-down").click(function () {
        $("#score3").html("3");
        $(check).html(toggle(check));
        check = "#tri3-down";
    });
    $("#tri4-down").click(function () {
        $("#score4").html("0");
        $(check).html(toggle(check));
        check = "#tri4-down";
    });
});