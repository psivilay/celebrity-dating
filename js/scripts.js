$(document).ready(function() {
  $("form#user-info").submit(function(event){
    event.preventDefault();

    var userFood = $("#food").val();
    var userHoroscope = $("input:radio[name=horoscope]:checked").val();

    if (userFood === "american" && userHoroscope === "aries") {
      $("img").hide();
      $(".donald-trump").show();
    } else if (userFood === "mexican" && userHoroscope ===
  "taurus") {
      $("img").hide();
      $(".hillary").show();
    } else {
      alert("try again please!")
    }
  });
});
