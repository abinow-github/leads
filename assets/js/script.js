/////////preloader function
var load = document.getElementById("preloader");
let header = document.getElementById("hdr");

function isFullyLoaded() {
  return header;
}
window.onload = function () {
  if (isFullyLoaded()) {
      setTimeout(function () {
        load.classList.add('hide');
        load.classList.remove('show');
      }, 500);
  }
};

/////////preloader show on every a tag clicked
const links = document.querySelectorAll('a.link');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('preloader').classList.add('show');
        document.getElementById('preloader').classList.remove('hide');
        // Redirect to the href attribute after showing the preloader
        setTimeout(() => { // Adding a delay to simulate preloader
            window.location.href = link.getAttribute('href');
        }, 1000); // Adjust the delay as needed
    });
});


/////review slider
$(document).ready(function(){
  $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 992,
          settings: {
              slidesToShow: 2
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 1
          }
      }]
  });
});


