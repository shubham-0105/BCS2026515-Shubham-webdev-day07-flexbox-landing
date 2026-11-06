// Mobile Navigation
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close mobile menu after navigation
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Product filtering
const filterButtons = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.filter;

        filterButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        products.forEach(product => {
            const matches =
                category === "all" ||
                product.dataset.category === category;

            product.style.display = matches ? "block" : "none";
        });
    });
});

// Wishlist functionality
document.querySelectorAll(".wishlist").forEach(button => {
    button.addEventListener("click", () => {
        const saved = button.classList.toggle("saved");

        button.textContent = saved
            ? "♥ Saved"
            : "♡ Save item";
    });
});

// Membership subscription form
const subscriptionForm =
    document.getElementById("subscription-form");

subscriptionForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("full-name").value.trim();
    const email = document.getElementById("member-email").value.trim();
    const plan = document.getElementById("plan-choice").value;

    const message =
        document.getElementById("subscription-message");

    if (!name || !email || !plan) {
        message.textContent = "Please complete all required fields.";
        return;
    }

    message.textContent =
        `Thank you, ${name}! Your ${plan} demo selection is complete.`;

    subscriptionForm.reset();
});

// Newsletter form
const newsletterForm =
    document.getElementById("newsletter-form");

newsletterForm.addEventListener("submit", event => {
    event.preventDefault();

    const email =
        document.getElementById("newsletter-email").value.trim();

    const message =
        document.getElementById("newsletter-message");

    if (!email) {
        message.textContent = "Please enter your email address.";
        return;
    }

    message.textContent =
        "Thank you for your interest in Terra & Tales!";

    newsletterForm.reset();
});