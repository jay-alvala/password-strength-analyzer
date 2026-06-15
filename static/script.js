const passwordInput = document.getElementById('password-input');
const lengthReq = document.getElementById('length');
const uppercaseReq = document.getElementById("uppercase");
const lowercaseReq = document.getElementById('lowercase');
const numberReq = document.getElementById('number');
const specialReq = document.getElementById('special');
const strengthText = document.getElementById('strength-text');
const strengthFill = document.querySelector(".strength-fill");
const togglebtn = document.getElementById("toggle-password");
 
function updateRequirement(condition, element, label) {
    if (condition) {
        element.innerText = "✓ " + label;
        element.style.color = "#eaeaea";
    } else {
        element.innerText = "• " + label;
        element.style.color = "#94a3b8";
    }
}
passwordInput.addEventListener('input', function () {
const hasLength = passwordInput.value.length >= 8;
updateRequirement(hasLength, lengthReq, "At least 8 characters");

const hasUppercase = /[A-Z]/.test(passwordInput.value);
updateRequirement(hasUppercase, uppercaseReq, "Uppercase");

const hasLowercase = /[a-z]/.test(passwordInput.value);
updateRequirement(hasLowercase, lowercaseReq, "Lowercase");

const hasNumber = /[0-9]/.test(passwordInput.value);
updateRequirement(hasNumber, numberReq, "Number");

const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(passwordInput.value);
updateRequirement(hasSpecial, specialReq, "Special Character");

let score = hasUppercase + hasLowercase + hasNumber + hasSpecial + hasLength;
if (score === 5) {
    strengthText.innerText = "Strength: Strong";
    strengthFill.style.backgroundColor = "#39FF14";
} else if (score >= 3) {
    strengthText.innerText = "Strength: Medium";
    strengthFill.style.backgroundColor = "#FFBF00";
} else {
    strengthText.innerText = "Strength: Weak";
    strengthFill.style.backgroundColor = "#c50d0d";
}
const widthPercentage = (score * 20) + "%";
strengthFill.style.width = widthPercentage;
}
);
togglebtn.addEventListener("click", function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglebtn.innerText = "👁‍🗨";
    } else {
        passwordInput.type = "password";
        togglebtn.innerText = "👁";
    }
});