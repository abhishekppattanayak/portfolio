(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-bs-theme');
  const lightModeButton = document.querySelector('button[data-bs-toggle="button"]');

  // Toggle between 'light' and 'dark'
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  // Update the data-bs-theme attribute
  html.setAttribute('data-bs-theme', newTheme);

  // Toggle the class of the button
  if (lightModeButton) {
    lightModeButton.classList.toggle('btn-outline-light');
    lightModeButton.classList.toggle('btn-outline-dark');

    // Toggle the button text
    if (newTheme === 'dark') {
      lightModeButton.textContent = 'Light Mode';
    } else {
      lightModeButton.textContent = 'Dark Mode';
    }
  }
}

// Add a click event listener to the light mode button
const lightModeButton = document.querySelector('button[data-bs-toggle="button"]');
if (lightModeButton) {
  lightModeButton.addEventListener('click', toggleTheme);
}

// Get the user's preferred theme mode from the cookie (if set)
const preferredTheme = getCookie('preferredTheme');
if (preferredTheme) {
  // Set the initial theme based on the user's preference
  const html = document.documentElement;
  html.setAttribute('data-bs-theme', preferredTheme);

  // Update the button text based on the user's preference
  if (lightModeButton) {
    if (preferredTheme === 'dark') {
      lightModeButton.textContent = 'Light Mode';
    } else {
      lightModeButton.textContent = 'Dark Mode';
    }
  }
}
