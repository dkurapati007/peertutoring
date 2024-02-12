const form = document.querySelector('form');
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        
        
        alert(`Thank you, ${name}! Your tutoring session has been scheduled for ${date} at ${time}. We will contact you at ${email} if there are any changes.`);
         location.reload(); 
      });