
const form = document.getElementById("oubli-form");
const emailInput = document.getElementById("email");
const emailMessage = document.getElementById("email-message");
const confirmation = document.getElementById("confirmation");


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


emailInput.addEventListener("input", function () {
    const valeur = emailInput.value.trim();

    if (valeur === "") {
        emailMessage.textContent = "";
        emailInput.className = "";
    } else if (emailRegex.test(valeur)) {
        emailMessage.textContent = "Adresse e-mail valide";
        emailMessage.className = "message success";
        emailInput.className = "valid";
    } else {
        emailMessage.textContent = "Format invalide (ex : nom@entreprise.com)";
        emailMessage.className = "message error";
        emailInput.className = "invalid";
    }
});


form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const email = emailInput.value.trim();

    if (!emailRegex.test(email)) {
        emailMessage.textContent = "Entrez une adresse e-mail valide";
        emailMessage.className = "message error";
        emailInput.className = "invalid";
        return;
    }

   
    confirmation.textContent =
        "Si un compte existe pour " + email +
        ", un lien de réinitialisation vient d'être envoyé.";
    confirmation.className = "confirmation visible";
});