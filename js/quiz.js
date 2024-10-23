document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            // Toggle the answer visibility
            const answer = item.querySelector("p");
            answer.classList.toggle("hidden");

            // Rotate the question icon or change style if needed
            item.classList.toggle("active");
        });
    });
});
