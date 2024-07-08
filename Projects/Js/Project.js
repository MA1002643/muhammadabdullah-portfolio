var countDownDate = new Date("Nov 20, 2022 12:00:00").getTime();

var countdownfunction = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// when scroll down navbar changes color

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".projectnavbar").addClass("sticky");
    } else {
      $(".projectnavbar").removeClass("sticky");
    }
    if (this.scrollY > 20) {
      $(".projectscroll-up-btn").addClass("show");
    } else {
      $(".projectscroll-up-btn").removeClass("show");
    }
  });
});

// slide-up script
$(".projectscroll-up-btn").click(function () {
  $("html").animate({ scrollTop: 0 });
  $("html").css("scrollBehavior", "auto");
});

// team displaying

var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});
