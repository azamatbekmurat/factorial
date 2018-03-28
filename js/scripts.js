
$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    event.preventDefault();
    var result = 1;
    var inputNumber = parseInt($("#input-number").val());

    for (var start = 1; start <= inputNumber; start++) {
      result *= start;
      }
    console.log(result);

    $("#answer").text(result);
    $("#result").show();
  });
});
