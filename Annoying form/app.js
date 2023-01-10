const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const helpText = document.getElementById("help__text");

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

submitBtn.onmouseover = () => {
    if(validateEmail(email.value) && password.value.length > 8) {
        helpText.innerText = "NOw you can submit";
    }
    else {
        if(submitBtn.style.alignSelf === "flex-end") {
            submitBtn.style.alignSelf = "flex-start";
            submitBtn.style.alignSelf = "flex-start";
        }
        else {
            submitBtn.style.alignSelf = "flex-end"
        }

        helpText.innerText = "You cannot submit until your email is validate and password contain minimum 8 character."
    }
}