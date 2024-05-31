// for toggle menu
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-menu");
    const navbar = document.getElementById("navbarTogglerDemo01");

    toggleButton.onclick = () => {
        toggleButton.classList.toggle('open');
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        toggleButton.classList.remove('open');
        navbar.classList.remove('active');
    };
})
// for navbar linking
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};
// for menu section linking
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filters .filter');
    const menuItems = document.querySelectorAll('#menu-dish .dish-box-wp');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
  
        menuItems.forEach(item => {
          const itemCategory = item.getAttribute('data-cat');
  
          if (filterValue === 'all' || itemCategory === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
  
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
  });

// our team 
$(document).ready(function(){
  $('.team-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-right"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-left"></i></button>',
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });
});