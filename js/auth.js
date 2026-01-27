// Connexion simple (à remplacer par fetch vers backend Spring Boot)
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (email === "admin@pressing.com" && password === "admin123") {
        localStorage.setItem("role", "admin");
        window.location.href = "dashboard.html";
    } else if (email === "client@pressing.com" && password === "client123") {
        localStorage.setItem("role", "client");
        window.location.href = "dashboard.html";
    } else {
        error.textContent = "Email ou mot de passe incorrect";
    }
}

function handleRegister(event) {
    event.preventDefault();
    const error = document.getElementById("error-register");
    error.textContent = "Inscription temporaire simulée !";
}

// Dashboard navigation
function showSection(sectionId) {
    document.querySelectorAll(".content-section").forEach(sec => sec.style.display = "none");
    document.getElementById(sectionId + "-section").style.display = "block";
}

// Logout
function handleLogout() {
    localStorage.removeItem("role");
    window.location.href = "index.html";
}