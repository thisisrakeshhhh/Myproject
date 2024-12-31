// JavaScript to handle splash screen timeout
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".splash-screen").style.display = "none";
        document.querySelector(".login-container").style.display = "flex";
    }, 2000); // 2-second delay for splash animation
});
