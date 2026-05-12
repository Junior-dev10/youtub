// Sélection de l'élément d'affichage (l'input)
let input = document.getElementById("affiche");
let bouton = document.querySelectorAll(".btn"); // Sélection de tous les éléments ayant la classe "btn"

// On parcourt la liste de tous les boutons pour leur ajouter un événement
bouton.forEach((btn) => {
  btn.addEventListener("click", () => {
    let valeur = btn.textContent; // Récupération du texte (chiffre ou opérateur) à l'intérieur du bouton
    // Le bouton "C" (Effacer)
    if (valeur === "C") {
      input.value = ""; // Efface tout le contenu de l'affichage
    }
    // Effacer le dernier caractère
    else if (valeur === "DEL") {
      input.value = input.value.slice(0, -1);
    }
    // Le bouton "=" (Calculer)
    else if (valeur === "=") {
      try {
        input.value = eval(input.value);
      } catch {
        // En cas d'erreur (ex: "5++2"), on affiche un message
        input.value = "Erreur";
      }
    } else {
      input.value += valeur;
    }
  });
});
