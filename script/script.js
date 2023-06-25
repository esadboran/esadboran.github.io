// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=200) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})



let isScrolling = false;
let timeout;

window.addEventListener('scroll', function() {
  clearTimeout(timeout);
  if (!isScrolling) {
    header.classList.add('navbarDark');
  }
  
  isScrolling = true;

  timeout = setTimeout(function() {
    header.classList.remove('navbarDark');
    isScrolling = false;
  }, 5000);
});


