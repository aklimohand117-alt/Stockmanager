
const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const emailMessage = document.getElementById("email-message");
const passwordInput = document.getElementById("password");
const passwordMessage = document.getElementById("password-message");
const strengthFill = document.getElementById("strength-fill");
const toggleButton = document.getElementById("toggle-password");


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function afficher(input, message, texte, type) {
    message.textContent = texte;
    message.className = "message " + type;
    input.className = type === "success" ? "valid" : "invalid";
}


function niveauMotDePasse(mdp) {
    if (mdp.length < 8) return "faible";

    let score = 0;
    if (/[A-Z]/.test(mdp) && /[a-z]/.test(mdp)) score++;
    if (/[0-9]/.test(mdp)) score++;
    if (/[^A-Za-z0-9]/.test(mdp)) score++;

    if (score <= 1) return "faible";
    if (score === 2) return "moyen";
    return "fort";
}


emailInput.addEventListener("input", function () {
    const valeur = emailInput.value.trim();

    if (valeur === "") {
        emailMessage.textContent = "";
        emailInput.className = "";
    } else if (emailRegex.test(valeur)) {
        afficher(emailInput, emailMessage, "Adresse e-mail valide", "success");
    } else {
        afficher(emailInput, emailMessage, "Format invalide (ex : nom@entreprise.com)", "error");
    }
});


passwordInput.addEventListener("input", function () {
    const mdp = passwordInput.value;

    if (mdp === "") {
        strengthFill.className = "";
        passwordMessage.textContent = "";
        return;
    }

    const niveau = niveauMotDePasse(mdp);
    strengthFill.className = niveau;

    const textes = {
        faible: "Mot de passe faible : 8 caractères min., majuscule, chiffre, symbole",
        moyen: "Mot de passe moyen : ajoutez encore un élément",
        fort: "Mot de passe fort"
    };

    passwordMessage.textContent = textes[niveau];
    passwordMessage.className = "message " + (niveau === "fort" ? "success" : "error");
});


toggleButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Masquer";
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "Afficher";
    }
});

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    if (!emailRegex.test(emailInput.value.trim())) {
        afficher(emailInput, emailMessage, "Entrez une adresse e-mail valide", "error");
        return;
    }

    if (passwordInput.value === "") {
        afficher(passwordInput, passwordMessage, "Entrez votre mot de passe", "error");
        return;
    }

    window.location.href = "dashboard.html";
});