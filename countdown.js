// Function to start or reset the countdown
function startCountdown() {
  // Set the target date to 10 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 10);

  // Update the countdown every second
  const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculate the days, hours, minutes and seconds remaining
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((distance % (1000 * 60)) / 1000); 

    // Display the countdown on the webpage
    document.getElementById("days").innerHTML = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;

    const endDate = targetDate.toLocaleDateString('en-us',{weekday:"long", day:"numeric", month:"long", year:"numeric"});
    document.querySelector('.deadline').innerHTML = endDate;

    // If the countdown is over, clear the interval
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "Countdown over!";
      // Restart the countdown
      startCountdown();
    }
  }, 1000);
}

// Start the countdown when the page is loaded
startCountdown();