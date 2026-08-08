/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}


/* =========================
   CLOTHING RECOMMENDATION
========================= */

const conditionButtons = document.querySelectorAll(".condition-btn");
const recommendation = document.getElementById("recommendation");

conditionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const type = button.dataset.type;

        let title = "";
        let message = "";

        if (type === "wearable") {

            title = "✨ Give it another wear!";
            message =
                "Try styling it differently, exchange it with someone, or donate it if you no longer need it.";

        } else if (type === "damaged") {

            title = "🧵 Repair or upcycle it!";
            message =
                "Small tears, loose buttons and worn areas can often be repaired or transformed into something new.";

        } else if (type === "unusable") {

            title = "♻️ Think beyond the bin!";
            message =
                "Look for responsible textile recycling options instead of sending unusable fabric directly to landfill.";

        }

        recommendation.innerHTML = `
            <strong>${title}</strong>
            <p>${message}</p>
        `;

        recommendation.classList.add("show");

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        formMessage.textContent =
            "✓ Thanks! Your message has been received.";

        formMessage.style.color = "#556b4f";

        contactForm.reset();

    });

}


/* =========================
   FAQ ACCORDION
========================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const currentItem = question.parentElement;

        document.querySelectorAll(".faq-item").forEach(item => {

            if (item !== currentItem) {
                item.classList.remove("open");
                item.querySelector(".faq-question span").textContent = "+";
            }

        });

        currentItem.classList.toggle("open");

        const icon = question.querySelector("span");

        if (currentItem.classList.contains("open")) {
            icon.textContent = "−";
        } else {
            icon.textContent = "+";
        }

    });

});
// Close mobile menu after selecting a page
const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu) {
            navMenu.classList.remove("show");
        }
    });
});