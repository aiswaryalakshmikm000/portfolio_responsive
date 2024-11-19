document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      // Show loading message
      form.querySelector('.loading').style.display = 'block';
      form.querySelector('.error-message').style.display = 'none';
      form.querySelector('.sent-message').style.display = 'none';
  
      const formData = new FormData(form);
  
      fetch(form.action, {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Hide loading message
        form.querySelector('.loading').style.display = 'none';
        // Show success message
        form.querySelector('.sent-message').style.display = 'block';
        form.reset();
      })
      .catch(error => {
        console.error('Error:', error);
        // Hide loading message
        form.querySelector('.loading').style.display = 'none';
        // Show error message
        form.querySelector('.error-message').textContent = 'An error occurred. Please try again.';
        form.querySelector('.error-message').style.display = 'block';
      });
    });
  });