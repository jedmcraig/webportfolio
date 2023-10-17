const primaryNav = document.querySelector('.primary-navigation')
const navBorder = document.querySelector('.nav-border')
const navToggle = document.querySelector('.nav-custom')

function updateSidebar() {
    if (window.scrollY > 50 || window.innerWidth <= 600) {
        primaryNav.classList.add('side-bar');
        navToggle.style.display = 'flex'
        navBorder.style.display = 'none'
    } else {
        primaryNav.classList.remove('side-bar');
        navToggle.style.display = 'none'
        navBorder.style.display = 'block'
    }
  }

navToggle.addEventListener('click', () => {
    if (primaryNav.classList.contains('side-bar')) {
        primaryNav.classList.toggle('show');
        navToggle.classList.toggle('active');
    }
});
  
  window.addEventListener('scroll', updateSidebar);
  window.addEventListener('resize', updateSidebar);

updateSidebar();

const typingEffect = new Typed(".dynamic-text", {
    strings : ["Developer","Engineer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500,
})

