document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.querySelector('#togglePassword');
    const passwordField = document.querySelector('#password');
    const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
    const confirmPasswordField = document.querySelector('#confirmPassword');
    const registerForm = document.getElementById('registerForm');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const mobileNumberInput = document.getElementById('mobileNumber');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const termsCheckbox = document.getElementById('termsCheckbox');
    const btn = document.getElementById('btn');

    const toggleVisibility = (field, toggle) => {
        const type = field.getAttribute('type') === 'password' ? 'text' : 'password';
        field.setAttribute('type', type);
        
        toggle.querySelector('i').classList.toggle('fa-eye');
        toggle.querySelector('i').classList.toggle('fa-eye-slash');
    };

    togglePassword.addEventListener('click', function() {
        toggleVisibility(passwordField, togglePassword);
    });

    toggleConfirmPassword.addEventListener('click', function() {
        toggleVisibility(confirmPasswordField, toggleConfirmPassword);
    });

    const validateFullName = () => {
        if (!fullNameInput.checkValidity()) {
            fullNameInput.classList.add('is-invalid');
        } else {
            fullNameInput.classList.remove('is-invalid');
        }
    };

    const validateEmail = () => {
        if (!emailInput.checkValidity()) {
            emailInput.classList.add('is-invalid');
        } else {
            emailInput.classList.remove('is-invalid');
        }
    };

    const validateMobileNumber = () => {
        const mobileNumberPattern = /^[0-9]{10,15}$/; // Adjust this pattern as needed
        if (!mobileNumberPattern.test(mobileNumberInput.value)) {
            mobileNumberInput.classList.add('is-invalid');
        } else {
            mobileNumberInput.classList.remove('is-invalid');
        }
    };

    const validatePassword = () => {
        const passwordValue = passwordInput.value.trim();
        if (passwordValue.length < 8 || passwordValue.length > 32) {
            passwordInput.classList.add('is-invalid');
        } else {
            passwordInput.classList.remove('is-invalid');
        }
    };

    const validateConfirmPassword = () => {
        if (passwordInput.value !== confirmPasswordInput.value || !confirmPasswordInput.checkValidity()) {
            confirmPasswordInput.classList.add('is-invalid');
        } else {
            confirmPasswordInput.classList.remove('is-invalid');
        }
    };

    const validateTermsCheckbox = () => {
        if (!termsCheckbox.checked) {
            termsCheckbox.classList.add('is-invalid');
        } else {
            termsCheckbox.classList.remove('is-invalid');
        }
    };

    const validateForm = () => {
        validateFullName();
        validateEmail();
        validateMobileNumber();
        validatePassword();
        validateConfirmPassword();
        validateTermsCheckbox();

        // Log validity check for debugging
        console.log('Form validity:', registerForm.checkValidity());
        
        // Enable or disable button based on form validity
      
    };

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        validateForm(); // Validate the form fields
    
        if (registerForm.checkValidity()) {
            console.log('Submitting form...');
            // Redirect to index.html upon successful submission
            window.location.href = 'verify.html';
        } else {
            console.log('Form not valid; cannot submit.');
        }
    });

    // Add input event listeners for individual validation functions
    fullNameInput.addEventListener('input', validateFullName);
    emailInput.addEventListener('input', validateEmail);
    mobileNumberInput.addEventListener('input', validateMobileNumber);
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
    termsCheckbox.addEventListener('change', validateTermsCheckbox);
});
