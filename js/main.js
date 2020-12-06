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











// CONTACT FORM

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDI6WAIn4p7-Z1yAhz4Jfup6tHGiehBKfY",
  authDomain: "contactform-c16ce.firebaseapp.com",
  projectId: "contactform-c16ce",
  storageBucket: "contactform-c16ce.appspot.com",
  messagingSenderId: "4243560699",
  appId: "1:4243560699:web:faf50007ee15e6cc68385e",
  measurementId: "G-RZT448J3QB"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics()

// Reference messages collection
const messagesRef = firebase.database().ref('messages')





// listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm)

// Submit form
function submitForm(e){
  e.preventDefault()

  // Get values 
  const name = getInputValue('name')
  const tel = getInputValue('tel')
  const email = getInputValue('email')
  const message = getInputValue('message')

  // Save message
  saveMessage(name, tel, email, message)

}


// Function to get form values
function getInputValue(id){
  return document.getElementById(id).value
}


// Save message to firebase
function saveMessage(name, tel, email, message){
  const newMessageRef = messagesRef.push()
  newMessageRef.set({
    name: name,
    tel: tel,
    email: email,
    message: message
  })
}


















    





