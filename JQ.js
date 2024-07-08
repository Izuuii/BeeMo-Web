document.addEventListener("DOMContentLoaded", function() {
    const togglePassword = document.querySelector('#togglePassword');
    const passwordField = document.querySelector('#floatingPassword');
    const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
    const confirmPasswordField = document.querySelector('#floatingConfirmPassword');
    
    togglePassword.addEventListener('click', function() {
        // Toggle the type attribute for the password field
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        
        // Toggle the eye icon
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });

    toggleConfirmPassword.addEventListener('click', function() {
        // Toggle the type attribute for the confirm password field
        const type = confirmPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPasswordField.setAttribute('type', type);
        
        // Toggle the eye icon
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });
});

// Timer script
let timer = document.getElementById('timer');
let timeLeft = 180; // 3 minutes in seconds
let timerInterval;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    // Format the time as MM:SS
    timer.innerHTML = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(timerInterval);
        timer.innerHTML = "Time's up!";
    }
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 180; // Reset the timer to 3 minutes
    timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call to display the timer immediately
}

function resetTimer() {
    startTimer();
}

// Start the timer when the page loads
startTimer();

