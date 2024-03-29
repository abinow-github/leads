/////////preloader function
var load = document.getElementById("preloader");
let header = document.getElementById("hdr");
function isHeaderLoaded() {
  return header !== null; 
}
// Check if header is loaded, and if so, add classes immediately
if (isHeaderLoaded()) {
  setTimeout(function () {
      load.classList.add('hide');
      load.classList.remove('show');
  }, 500);
}

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
