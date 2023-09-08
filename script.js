
function updateCurrentDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    currentDayElement.textContent = `Current day of the week: ${currentDay}`;
}
function updateCurrentUTCTime() {
    const currentDate = new Date();
    const currentUTCTimeMilliseconds = currentDate.getTime();
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    currentUTCTimeElement.textContent = `Current UTC Time: ${currentUTCTimeMilliseconds}`;
}
updateCurrentDay();
updateCurrentUTCTime();