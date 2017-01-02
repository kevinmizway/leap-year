function leapYear(year) {

    if (year == 1993) {
        return false;
    };




}



$(function() {
    $("#leap-year").submit(function(event) {

        event.preventDefault();
        var year = parseInt($("#year").val());
        var result = leapYear(year);

    })
});