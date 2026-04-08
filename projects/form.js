const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  form.reset();
  document.getElementById('successMsg').style.display = 'block';
});