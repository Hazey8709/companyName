//* Get the current visitor count from local storage
let count = localStorage.getItem("visitorCount");

//* If the count doesn't exist in local storage, set it to 3583
if (!count) {
    count = 3583;
}

//* Update the visitor count in the HTML
document.getElementById("visits").innerText = count;

//* Add an event listener to the button to increment the count when clicked
document
    .getElementById("increment-visit-count")
    .addEventListener("click", function () {
        //* Increment the count by 1
        count++;

        //* Save the new count to local storage
        localStorage.setItem("visitorCount", count);

        //* Update the visitor count in the HTML
        document.getElementById("visitor-count").innerText = count;
    });
