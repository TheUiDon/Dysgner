let success = document.getElementById("success");
success.innerHTML = "";
let danger = document.getElementById("danger");
danger.innerHTML = "";

//Your message is successfully sent...
//Sorry something went wrong!

function sendForm() {
    Email.send({
        SecureToken : "accbcfa2-e166-4836-b4a9-b32dd960df7b",
        To : 'contact@idris.design, info@idris.design',
        From : document.getElementById("email").value,
        Subject : "New Message From Idris Design Website!",
        Body : "Name: " + document.getElementById("name").value +
        "<br> Email: " + document.getElementById("email").value +
        "<br> Category: " + document.getElementById("category").value +
        "<br> Budget: " + document.getElementById("budget").value +
        "<br> Message: " + document.getElementById("message").value 
    }).then(
    message => alert("Your message is successfully sent.")
    );
};
