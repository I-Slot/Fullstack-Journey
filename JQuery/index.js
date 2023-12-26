// alert("Connected");
$("h1").css("color", "red");

// $("p").hide();

$("#click").click(function () {
  $("p").hide();
});

$(document).keypress(function (event) {
  $("h1").text(event.key);
});
