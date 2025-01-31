// Select the dark mode button
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Check if user has a preferred mode
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Toggle dark mode on button click
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save user preference 
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
});

// Contact Form Validation

const form = document.getElementById("contact-form");
const emailInput = document.getElementById("email");
const messageBox = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
    if (!emailInput.ariaValueMax.includes("@")) {
        event.preventDefault();
        messageBox.textContent = "Please enter a valid email address!";
    } else {
        messageBox.textContent = "Message sent successfully!";
        messageBox.style.color ="green;"
    }
   
});