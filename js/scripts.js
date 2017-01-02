function leapYear(year) {

    if (year == 1993 || year % 100 == 0 && year % 400 !== 0) {
        return false;
    } else if (year % 4 == 0) {
        return true;
    }

}



$(function() {
    $("#leap-year").submit(function(event) {

        event.preventDefault();
        var year = parseInt($("#year").val());
        var result = leapYear(year);


        $(".year").text(year);

        if (!result) {
            $(".not").text("not");
        } else {
            $(".not").text("");
        }

        $("#results").show();

    });
});