
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('emailid');
const createBtn = document.getElementById('createBtn');

fullNameInput.addEventListener("input", toggleCreateButton);
emailInput.addEventListener("input", toggleCreateButton);

function toggleCreateButton() {
    if (fullNameInput.value && emailInput.value) {
        createBtn.removeAttribute("disabled");
    }
    else {
        createBtn.setAttribute("disabled", "true");
    }
}

function createAccount() {
    let fullName = fullNameInput.value;
    let email = emailInput.value;

    if (fullName === "" && email === "") {
        alert("Both field required");
        return;
    }
    else {
        alert("Account create successfully");
    }
}

// cross function

document.addEventListener('DOMContentLoaded',function(){
    const crossElement = document.querySelector(".cross");
    crossElement.addEventListener('click',function(){
        window.location.href="../index.html";
    });
});