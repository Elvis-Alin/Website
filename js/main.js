const menuBtn = document.querySelector('.menu-btn')
const menuItems = document.querySelector('.menu-items')
const menuItem = document.querySelectorAll('.menu-item')


// main toggle
menuBtn.addEventListener('click', () => {
  toggle()
})


// toggle on item ckilc if open
menuItem.forEach((item) => {
  item.addEventListener('click', () => {
    if (menuBtn.classList.contains('open')) {
      toggle()
    }
  })
})

function toggle() {
  menuBtn.classList.toggle('open')
  menuItems.classList.toggle('open')
}


const navbar = document.getElementById('navbar');
    let scrolled = false;

    window.onscroll = function () {
      if (window.pageYOffset > 100) {
        navbar.classList.remove('top');
        if (!scrolled) {
          navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(function () {
          navbar.style.transform = 'translateY(0)';
          scrolled = true;
        }, 200);
      } else {
        navbar.classList.add('top');
        scrolled = false;
      }
    };

    // Smooth Scrolling
    $('#navbar a, .btn').on('click', function (e) {
      if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top -100,
          },
          800
        );
      }
    });














    





