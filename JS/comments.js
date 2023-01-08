//!        Comments  Page   JS

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

const commentsList = [
    {
        Id: 1,
        Name: "Ben",
        Comment: "CompanyName is outstanding.",
    },
    {
        Id: 2,
        Name: "Jay",
        Comment: "CompanyName was fast clean & cheaper.",
    },
    {
        Id: 3,
        Name: "Glen",
        Comment: "CompanyName was great!",
    },
    {
        Id: 4,
        Name: "Blue Davis",
        Comment: "I was in a jam, CompanyName helped me through it.",
    },
];

buildList(commentsList);

function buildList(data) {
    const list = document.getElementById("commentsContainer");

    for (var i = 0; i < data.length; i++) {
        let commentsCont = document.createElement("div");
        commentsCont.style.textAlign = "center";
        commentsCont.className = "divCont";

        let commentsName = document.createElement("p");
        commentsName.innerText = `${data[i].Name}`;
        commentsCont.appendChild(commentsName);
        commentsName.className = "commentsNameTitle";

        let comments = document.createElement("p");
        comments.innerText = `${data[i].Comment}`;
        commentsCont.appendChild(comments);
        comments.className = "commentsDetails";

        list.appendChild(commentsCont);
    }
}

let submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function () {
    let userName = document.getElementById("name").value;
    let userComment = document.getElementById("comment").value;

    const newCom = document.getElementById("commentsContainer");

    let commentsCont = document.createElement("div");
    commentsCont.style.textAlign = "center";
    commentsCont.className = "divCont";

    let commentsName = document.createElement("p");
    commentsName.innerText = `${userName}`;
    commentsCont.appendChild(commentsName);
    commentsName.className = "commentsNameTitle";

    let comments = document.createElement("p");
    comments.innerText = userComment;
    commentsCont.appendChild(comments);
    comments.className = "commentsDetails";

    newCom.appendChild(commentsCont);

    console.log(userName);
    console.log(userComment);
});

// let commentForm = document.form;

// const addComment = (e) => {
//     e.preventDefault();

//     document.getElementsByClassName("form");
//     let comNameTitle = commentForm.Name.value;
//     let comDetails = commentForm.Comment.value;

//     let data = {
//         name: comNameTitle,
//         Comment: comDetails,
//     };
// };

// document.getElementById("submit-btn").addEventListener("click");
// {
//     let userName = document.getElementById("name").value;
//     let userComment = document.getElementById("comment").value;

//     console.log(userName);
//     console.log(userComment);
// }
