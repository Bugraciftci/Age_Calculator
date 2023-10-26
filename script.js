// Initial date (past date)
const pastDate = new Date(2003, 4, 18); // Month index starts from 0, May is 4.

// Current date and time
const currentDate = new Date();

// Calculate the difference between two dates
const timeDifferenceInMilliseconds = currentDate - pastDate;

// Convert the difference to days, hours, minutes, and seconds
const seconds = Math.floor(timeDifferenceInMilliseconds / 1000);
const minutes = Math.floor(seconds / 60);
const hours = Math.floor(minutes / 60);
const days = Math.floor(hours / 24);

// Insert the date and elapsed time into the HTML
document.getElementById("currentDate").textContent = `Current Date: ${currentDate.toLocaleString()}`;
document.getElementById("elapsedTime").textContent = `Elapsed Time: ${days} days, ${hours % 24} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`;
