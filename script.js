const form = document.getElementById('request-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', (e) => {
    alert('Form submitted!');
    e.preventDefault();

const nameValue = nameInput.value.trim()
const emailValue = emailInput.value.trim()
const phoneValue = phoneInput.value.trim()

if (nameValue === '') {
    alert('Please enter your email');
    return;
}

if (phoneValue === '') {
    alert('Please enter your phone number');
    return;
} 
// TODO: Send form data to server using PHP
console.log('JavaScript code is running!');
const form = document.getElementById('request-form');
form.addEventListener ('submit'),(e)=> {
    console.log('Form submitted!');
    e.preventDefault()};
});



// Home
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
slides[currentSlide].classList.remove('active');
currentSlide = (currentSlide + 1) % slides.length;
slides[currentSlide].classList.add('active');
}

function showPreviousSlide() {
slides[currentSlide].classList.remove('active');
currentSlide = (currentSlide - 1 + slides.length) % slides.length;
slides[currentSlide].classList.add('active');
}

document.getElementById('next-button').addEventListener('click', showNextSlide);
document.getElementById('previous-button').addEventListener('click', showPreviousSlide);

// Set initial slide
slides[0].classList.add('active');







// Payment Methods JavaScript

const paymentMethods = document.querySelectorAll('.payment-method');
const paymentDetails = document.querySelectorAll('.payment-details');

paymentMethods.forEach((method) => {
  method.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = method.getAttribute('href');
    const targetDetails = document.querySelector(targetId);
    paymentDetails.forEach((details) => {
      details.style.display = 'none';
    });
    targetDetails.style.display = 'block';
  });
});
