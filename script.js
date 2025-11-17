/* ----------------------------------------
   SEARCH FUNCTION
----------------------------------------- */
function searchContent() {
    let text = document.body.innerText.toLowerCase();
    let query = document.getElementById("searchInput").value.toLowerCase();
    let result = document.getElementById("searchResult");

    if (query.trim() === "") {
        result.textContent = "";
        return;
    }

    if (text.includes(query)) {
        result.textContent = `✔ Found: "${query}"`;
    } else {
        result.textContent = `✘ Not found: "${query}"`;
    }
}


/* ----------------------------------------
   PAGE LOADED
----------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {

    /* Load saved theme */
    const savedTheme = localStorage.getItem("theme");
    const toggle = document.getElementById("themeToggle");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (toggle) toggle.innerText = "☀️";
    }


    /* Loader fade-out */
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.style.opacity = "0";
            setTimeout(() => loader.style.display = "none", 400);
        }
    }, 800);


    /* Dark Mode Toggle */
    if (toggle) {
        toggle.onclick = () => {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                toggle.innerText = "☀️";
            } else {
                localStorage.setItem("theme", "light");
                toggle.innerText = "🌙";
            }
        };
    }


    /* Scroll Animations */
    const elements = document.querySelectorAll(".scroll-animate");

    const observe = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    elements.forEach(el => observe.observe(el));
});
