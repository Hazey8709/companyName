function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
}

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
