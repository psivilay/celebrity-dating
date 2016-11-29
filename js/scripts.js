$(document).ready(function() {
  $("form#user-info").submit(function(event){
    event.preventDefault();

    var userFood = $("#food").val();
    var userHoroscope = $("input:radio[name=horoscope]:checked").val();

    if (userFood === "american" && userHoroscope === "aries") {
      $("img").hide();
      $("#results #donald-trump").show();
    } else if (userFood === "mexican" && userHoroscope ===
  "taurus") {
      $("img").hide();
      $("#results #hillary").show();
    } else {
      alert("try again please!")
    }
  });
});
