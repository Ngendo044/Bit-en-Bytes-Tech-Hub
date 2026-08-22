const contactForm = document.getElementById("contactForm");
if (contactForm) {
    function validateForm(event) {
        event.preventDefault();

        const name = document.getElementById("nameInput").value;
        const email = document.getElementById("emailInput").value;
        const phone = document.getElementById("phoneInput").value;
        const message = document.getElementById("messageInput").value;

        if (name === "" || email === "" || phone === "" || message === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }
        if (name.length < 2) {
            alert("Please enter a valid name (at least 2 characters).");
            return;
        }
        if (/\d/.test(name)) {
            alert("Name should not contain numbers.");
            return;
        }
        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }
        if (phone.length !== 10) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        fetch(contactForm.action, {
            method: "POST",
            body: new FormData(contactForm),
            headers: { "Accept": "application/json" }
        })
        .then(function(response) {
            if (response.ok) {
                alert("Thank you! Your message has been received.");
                contactForm.reset();
            } else {
                alert("Something went wrong. Please try again.");
            }
        })
        .catch(function() {
            alert("Something went wrong. Please check your connection and try again.");
        });
    }

    contactForm.addEventListener("submit", validateForm);
}

const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

if (hamburgerBtn && navLinks) {
    function toggleMenu() {
        navLinks.classList.toggle("active");
    }
    hamburgerBtn.addEventListener("click", toggleMenu);

    const navLinkItems = document.querySelectorAll(".nav-links a");
    navLinkItems.forEach(function(link) {
        link.addEventListener("click", function() {
            navLinks.classList.remove("active");
        });
    });
}

const orderButtons = document.querySelectorAll(".order-btn");
if (orderButtons.length > 0) {
    orderButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const service = button.getAttribute("data-service");
            const message = `Hello Bit & Bytes Tech Hub, I'm interested in your ${service} service.`;
            const url = `https://wa.me/254115626279?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        });
    });
}

const currentPage = window.location.pathname.split("/").pop();
const navLinksAll = document.querySelectorAll(".nav-links a");

navLinksAll.forEach(function(link) {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});
