let success = document.getElementById("success");
success.innerHTML = "";
let danger = document.getElementById("danger");
danger.innerHTML = "";

//Your message is successfully sent...
//Sorry something went wrong!

function sendForm() {
    Email.send({
        SecureToken : "accbcfa2-e166-4836-b4a9-b32dd960df7b",
        To : 'contact@idris.design',
        From : document.getElementById("email").value,
        Subject : "New Message From Idris Design Website!",
        Body : "name: " + document.getElementById('name').value +
        "<br> email: " + document.getElementById("email").value +
        "<br> category: " + document.getElementById("category").value +
        "<br> budget: " + document.getElementById("budget").value +
        "<br> message: " + document.getElementById("message").value 
    }).then(
    message => success.innerHTML = "Your message is successfully sent..."
    );
};
