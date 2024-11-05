
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
        }, index * 500); 
    });
});







document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const feedbackMessage = document.getElementById("feedbackMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (name && email && message) {
            feedbackMessage.style.color = "green";
            feedbackMessage.textContent = "Thank you for reaching out!";
            form.reset();
        } else {
            feedbackMessage.style.color = "red";
            feedbackMessage.textContent = "Please fill in all fields.";
        }
    });
});








const fadeElements = document.querySelectorAll(".fade-in");

function checkVisibility() {
    fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);









const fadeElements = document.querySelectorAll(".fade-in");

function revealCardsOnScroll() {
    fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", revealCardsOnScroll);
window.addEventListener("load", revealCardsOnScroll);











document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('flip');
    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('flip');
    });
});
