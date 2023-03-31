//* Get the current visitor count from local storage
let count = localStorage.getItem("visitorCount");

//* If the count doesn't exist in local storage, set it to 0
if (!count) {
    count = 0;
}

//* Increment the count by 1
count++;

//* Save the new count to local storage
localStorage.setItem("visitorCount", count);

//* Update the visitor count in the HTML
document.getElementById("visits").textContent = count;





// function websiteVisits(response) {
//     document.querySelector("#visits").textContent = response.value;
// }


// //! Create KEY
// https://api.countapi.xyz/create?namespace={name of website}&enable_reset=1

//! Reset value Of Counter
// https://api.countapi.xyz/set/spiltwood/ce90a8cb-af83-4fdc-9f33-a037bee47b51?value=0

// //! HTML script TAG
// <script
//     async
//     src="https://api.countapi.xyz/hit/spiltwood/ce90a8cb-af83-4fdc-9f33-a037bee47b51?callback=websiteVisits"
// ></script>

// //!        URL INFO
// {

//     "namespace": "spiltwood",npm
//     "key": "ce90a8cb-af83-4fdc-9f33-a037bee47b51",
//     "value": 0

// }
