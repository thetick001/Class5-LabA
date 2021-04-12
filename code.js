$(document).ready(function () {

    $("button").on("click", enterInfo);
});

function enterInfo() {

    let userrank = $("input[name=rank]:checked").data("rank");

    let rankColor = $("input[name=rank]:checked").data("color");

    let fName = $("input[name=first]").val();

    let lName = $("input[name=last]").val();

    $("p#display").text(`Hello ${userrank}. ${fName} ${lName}, welcome.`);

    $("p#display").css("background-color", rankColor);

}