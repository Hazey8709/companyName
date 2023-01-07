//!        Comments  Page   JS

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

let commentForm = document.form;

const addComment = (e) => {
    e.preventDefault()

    document.getElementsByClassName('form')
    let comNameTitle = commentForm.Name.value
    let comDetails = commentForm.Comment.value

    let data = {
        name: comNameTitle,
        Comment: comDetails,
    };

}

commentForm.addEventListener("submit", addComment());



// document.getElementById( 'submit-btn' )
