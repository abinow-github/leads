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

///////////////navbar scroll-y
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      var navbar = document.getElementById('navbar');
      if (window.scrollY > 200) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
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
          breakpoint: 720,
          settings: {
              slidesToShow: 1
          }
      }]
  });
});

 //////navbar onclick in small devices
 function showNav(){
    var nav=document.getElementById('navbarNavDropdown')
    nav.classList.add('show');
  }
 function hideNav(){
    var nav=document.getElementById('navbarNavDropdown')
    nav.classList.remove('show');
  }


