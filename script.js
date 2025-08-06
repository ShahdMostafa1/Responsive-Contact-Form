document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    
    // Get form elements (not just values)
    const fullNameEl = document.getElementById('fullName');
    const emailEl = document.getElementById('email');
    const subjectEl = document.getElementById('subject');
    const messageEl = document.getElementById('message');
    
    // Trim values
    const fullName = fullNameEl.value.trim();
    const email = emailEl.value.trim();
    const subject = subjectEl.value.trim();
    const message = messageEl.value.trim();
    
    let isValid = true;
    
    // Validate Full Name
    if (!fullName) {
        document.getElementById('nameError').textContent = 'Please enter your full name';
        fullNameEl.focus();
        isValid = false;
    }
    
    // Validate Email with detailed messages
    if (!email) {
        document.getElementById('emailError').textContent = 'Please enter your email address';
        if (isValid) emailEl.focus();
        isValid = false;
    } else if (!email.includes('@')) {
        document.getElementById('emailError').textContent = 'Your email is missing the @ symbol (e.g., example@domain.com)';
        if (isValid) emailEl.focus();
        isValid = false;
    } else if (email.indexOf('@') === 0) {
        document.getElementById('emailError').textContent = 'Your email is missing the part before @ (e.g., name@domain.com)';
        if (isValid) emailEl.focus();
        isValid = false;
    } else if (email.indexOf('@') === email.length - 1) {
        document.getElementById('emailError').textContent = 'Your email is missing the domain after @ (e.g., name@domain.com)';
        if (isValid) emailEl.focus();
        isValid = false;
    } else if (!email.includes('.')) {
        document.getElementById('emailError').textContent = 'Your email is missing a domain extension (e.g., name@domain.com)';
        if (isValid) emailEl.focus();
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address (e.g., name@domain.com)';
        if (isValid) emailEl.focus();
        isValid = false;
    }
    
    // Validate Subject
    if (!subject) {
        document.getElementById('subjectError').textContent = 'Please enter a subject for your message';
        if (isValid) subjectEl.focus();
        isValid = false;
    }
    
    // Validate Message
    if (!message) {
        document.getElementById('messageError').textContent = 'Please enter your message';
        if (isValid) messageEl.focus();
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Your message should be at least 10 characters long';
        if (isValid) messageEl.focus();
        isValid = false;
    }
    
    // If form is valid
    if (isValid) {
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    }
});

function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

// Add focusout event listeners for instant feedback
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('focusout', function() {
        const value = this.value.trim();
        const id = this.id;
        
        if (!value) {
            let message = '';
            switch(id) {
                case 'fullName': message = 'Please enter your full name'; break;
                case 'email': message = 'Please enter your email address'; break;
                case 'subject': message = 'Please enter a subject'; break;
                case 'message': message = 'Please enter your message'; break;
            }
            document.getElementById(`${id}Error`).textContent = message;
        }
    });
});