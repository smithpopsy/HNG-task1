// Function to update the current day of the week
function updateCurrentDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    currentDayElement.textContent = `Current day of the week: ${currentDay}`;
}

// Function to update the current UTC time
function updateCurrentUTCTime() {
    const currentDate = new Date();
    const currentUTCTimeMilliseconds = currentDate.getTime(); // Get time in milliseconds since the Unix epoch
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    currentUTCTimeElement.textContent = `Current UTC Time: ${currentUTCTimeMilliseconds}`;
}

// Call the update functions on page load
updateCurrentDay();
updateCurrentUTCTime();