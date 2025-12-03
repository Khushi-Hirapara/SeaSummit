// Time

// Set the target date for the countdown
const targetDate = new Date("Feb 25, 2025 00:00:00").getTime();

// Function to update the countdown
function updateCountdown() {
    // Get the current date and time
    const now = new Date().getTime();
    
    // Calculate the time difference between the target date and now
    const timeLeft = targetDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the text content of the flip cards
    document.querySelector('.days .top-half').textContent = days < 10 ? '0' + days : days;
    document.querySelector('.days .bottom-half').textContent = days < 10 ? '0' + days : days;

    document.querySelector('.hours .top-half').textContent = hours < 10 ? '0' + hours : hours;
    document.querySelector('.hours .bottom-half').textContent = hours < 10 ? '0' + hours : hours;

    document.querySelector('.minutes .top-half').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.querySelector('.minutes .bottom-half').textContent = minutes < 10 ? '0' + minutes : minutes;

    document.querySelector('.seconds .top-half').textContent = seconds < 10 ? '0' + seconds : seconds;
    document.querySelector('.seconds .bottom-half').textContent = seconds < 10 ? '0' + seconds : seconds;

    // If the countdown is finished, display a message
    if (timeLeft <= 0) {
        clearInterval(interval); // Clear the interval
        document.querySelector('.titel').textContent = "The countdown has ended!";
    }
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);

// Call the function once to initialize
updateCountdown();

// Time End



