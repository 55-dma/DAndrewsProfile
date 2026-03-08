// ========== AUDIO TOGGLE ==========
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("welcomeAudio");
    const audioButton = document.getElementById("audioToggle");

    if (audio && audioButton) {
        audioButton.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();
                audioButton.textContent = "⏸ Pause Audio";
                audioButton.setAttribute("aria-label", "Pause welcome audio");
            } else {
                audio.pause();
                audioButton.textContent = "▶ Play Audio";
                audioButton.setAttribute("aria-label", "Play welcome audio");
            }
        });
    }

    // ========== MESSAGES PAGE: CARD BUTTON ==========
    const cardButton = document.getElementById("pull-card-btn");
    const cardMessage = document.getElementById("card-message");

    if (cardButton && cardMessage) {
        const messages = [
    "📝 Freedom is the essence of the soul ~ never let it Fade.",
    "📝 In every challenge lies the seed of opportunity ~ let it Grow.",
    "📝 You are a shining star that brights the world ~ just being in It.",
    "📝 Life is a journey ~ wander through it with an open Heart.",
    "📝 You have the power to achieve anything ~ just set your mind to Do It.",
    "📝 Life at times is a struggle...always remember ~ This too shall Pass.",
    "📝 Celebrate the beauty of your life ~ in every Moment.",
    "📝 Dance to the rhythm ~ of your own beating Heart.",
    "📝 The stars are your guide ~ follow their Light.",
    "📝 My FAVORITE ~ Bloom...Wherever You Are Planted!",
];

        cardButton.addEventListener("click", () => {
            const randomIndex = Math.floor(Math.random() * messages.length);
            cardMessage.textContent = messages[randomIndex];
        });
    }

    // ========== CONTACT FORM HANDLING ==========
    const form = document.getElementById("contact-form");
    const success = document.getElementById("form-success");

    if (form && success) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // prevent page reload

            success.textContent = "🌸 Your message has been sent successfully!";
            success.style.color = "var(--color-dark-pink)";

            form.reset();
        });
    }
});















