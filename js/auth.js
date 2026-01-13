function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(`http://localhost:8083/rest/person/email/${email}`)
        .then(res => {
            if (!res.ok) throw new Error("Utilisateur introuvable");
            return res.json();
        })
        .then(user => {

            // Vérification du mot de passe
            if (user.passWord !== password) {
                document.getElementById("error").innerText = "Mot de passe incorrect";
                return;
            }

            // Login OK
            localStorage.setItem("user", JSON.stringify(user));
            window.location.href = "dashboard.html";
        })
        .catch(() => {
            document.getElementById("error").innerText = "Email introuvable";
        });
}
