
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll("header, footer, .navbar a, .search-button, section").forEach((element) => {
        element.classList.toggle("dark-mode");
    });
});

// Smooth scroll animation for elements
const scrollElements = document.querySelectorAll(".scroll-reveal");
window.addEventListener("scroll", () => {
    scrollElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

// Toggle dropdown menus
function toggleDropdown(event, dropdownId) {
    event.preventDefault();
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("show");
}

// Close dropdown if clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.navbar a')) {
        document.querySelectorAll('.dropdown').forEach(dropdown => dropdown.classList.remove('show'));
    }
};

// Smooth scroll to top
const backToTopButton = document.createElement("button");
backToTopButton.id = "backToTop";
backToTopButton.textContent = "⬆️";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.display = "none";
backToTopButton.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
document.body.appendChild(backToTopButton);

window.onscroll = () => {
    backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
};
// Search bar scroll effect
const searchContainer = document.getElementById("search-container");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // User is scrolling down
        searchContainer.classList.add("sticky-search-bar");
    } else if (window.scrollY < lastScrollY || window.scrollY <= 100) {
        // User is scrolling up or near top
        searchContainer.classList.remove("sticky-search-bar");
    }
    lastScrollY = window.scrollY;
});

// Add fade-out effect before page unload
document.querySelectorAll('.button a').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const targetUrl = event.currentTarget.href;

        // Add fade-out effect
        document.body.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = targetUrl;
        }, 500); // Adjust the timing to match the CSS transition duration
    });
});

// Add fade-in effect on page load
window.onload = () => {
    document.body.classList.add('fade-in');
};

