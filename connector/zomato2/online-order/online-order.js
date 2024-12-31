// // carousel

const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function showSlide(index) {
    
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 30}%)`;
    });
}

document.querySelector('.forward').addEventListener('click', () => {
    currentIndex = (currentIndex + 1 ) % slides.length;
    showSlide(currentIndex);
});

document.querySelector('.backward').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

showSlide(currentIndex);


// read more button




const readMoreButtons = document.querySelectorAll(".read-more");

        readMoreButtons.forEach(button => {
            button.addEventListener("click", function () {
                const hiddenText = this.parentElement.querySelector(".hidden-text");
                if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
                    hiddenText.style.display = "inline";
                    this.textContent = "read less";
                } else {
                    hiddenText.style.display = "none";
                    this.textContent = "read more";
                }
            });
        });


        
        