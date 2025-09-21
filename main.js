$(document).ready(function(){
$('.header').height($(window).height());
})
document.getElementById("scrollBtn").addEventListener("click", () => {
      document.getElementById("target").scrollIntoView({
        behavior: "smooth", // плавний скрол
        block: "start"      // вирівнювання зверху
      });
    });
