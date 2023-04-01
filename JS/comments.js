//!        Comments  Page   JS

const commentsList = [
    {
        id: 1,
        name: "Ben",
        comment: "CompanyName is outstanding.",
    },
    {
        id: 2,
        name: "Jay",
        comment: "CompanyName was fast clean & cheaper.",
    },
    {
        id: 3,
        name: "Glen",
        comment: "CompanyName was great!",
    },
    {
        id: 4,
        name: "Blue Davis",
        comment: "I was in a jam, CompanyName helped me through it.",
    },
];

//* Get the form and the comments container
const form = document.querySelector("form");
const commentsContainer = document.querySelector("#commentsContainer");

//* Load existing comments from local storage, or use an empty array if there are no existing comments
const comments = JSON.parse(localStorage.getItem("comments")) || commentsList;

//* Display existing comments on page load
displayComments();

//* Listen for form submission
form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent the form from submitting normally

    //* Get the values of the name and comment fields
    const name = form.elements.name.value;
    const comment = form.elements.comment.value;

    //* Add the new comment to the array
    comments.push({ name, comment });

    //* Save the updated comments array to local storage
    localStorage.setItem("comments", JSON.stringify(comments));

    //* Display the new comment on the page
    displayComments();

    //* Reset the form
    form.reset();
});

function displayComments() {
    //* Clear the comments container
    commentsContainer.innerHTML = "";

    //* Loop through the comments and create a new div for each one
    comments.forEach((comment) => {
        const div = document.createElement("div");
        div.textContent = `${comment.name}: ${comment.comment}`;
        commentsContainer.appendChild(div);
    });
}

//! Form Spree Reset Form
// window.onbeforeunload = () => {
//     for (const form of document.getElementsByTagName("form")) {
//         form.reset();
//     }
// };

//! HTML FORM Tag for above
// action="https://formspree.io/f/xayzypaj"
//                 method="POST"

// const commentsList = [
//     {
//         Id: 1,
//         Name: "Ben",
//         Comment: "CompanyName is outstanding.",
//     },
//     {
//         Id: 2,
//         Name: "Jay",
//         Comment: "CompanyName was fast clean & cheaper.",
//     },
//     {
//         Id: 3,
//         Name: "Glen",
//         Comment: "CompanyName was great!",
//     },
//     {
//         Id: 4,
//         Name: "Blue Davis",
//         Comment: "I was in a jam, CompanyName helped me through it.",
//     },
// ];
