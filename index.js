const registrationForm = document.querySelector(".registration-form");
const button = document.querySelector(".btn");
const registrationPanel = document.querySelector(".registration-panel");
const inputs  = document.querySelectorAll(".input-data")
const heroMsg = document.querySelector(".hero-msg");
const logo = document.querySelector(".logo");
const visibilityIcons = document.querySelectorAll(".visibility-icon");
const passwordInputs= document.querySelectorAll(".password-input")

visibilityIcons.forEach(icon => { 
    icon.addEventListener("click", function(){
        let currentInput = this.parentNode.querySelector(".password-input");
        if (currentInput.type=="password") {
            currentInput.type="text";
            icon.style.color="var(--color-secondary)";
        } else if (currentInput.type=="text") {
            currentInput.type="password";
            icon.style.color="white";
        }
    })
})

button.addEventListener("click", function() {
    if (registrationForm.checkValidity()) {
        button.innerHTML="Success";
        setTimeout(() => {
            button.innerHTML="Register"
            window.location.reload();
        }, 3000);
    }
    else{
        invalidInputs();
    }
})

function invalidInputs() {
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.style.boxShadow = "inset 0px 0px 0px 2px var(--color-secondary)";
        }
    })
}
function loadingAnimation() {
    registrationPanel.style.transform = "translateX(0)"
    heroMsg.style.transform = "translateX(0)"
    logo.style.transform = "translateY(0)"
}

window.onload = loadingAnimation;