// 1. Algorithme : Somme de deux nombres
function calculerSomme() {
    let nombre1 = parseFloat(prompt("Entrez le premier nombre :"));
    let nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));
    let somme = nombre1 + nombre2;
    console.log("La somme de", nombre1, "et", nombre2, "est :", somme);
  }
  
  // 2. Algorithme : Division de deux nombres
  function calculerDivision() {
    let nombre1 = parseFloat(prompt("Entrez le premier nombre :"));
    let nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));
  
    if (nombre2 !== 0) {
      let resultat = nombre1 / nombre2;
      console.log("Le résultat de", nombre1, "divisé par", nombre2, "est :", resultat);
    } else {
      console.log("Erreur : division par zéro impossible.");
    }
  }
  
  // 3. Algorithme : Modulo de deux nombres
  function calculerModulo() {
    let nombre1 = parseFloat(prompt("Entrez le premier nombre :"));
    let nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));
  
    if (nombre2 !== 0) {
      let modulo = nombre1 % nombre2;
      console.log("Le reste de la division de", nombre1, "par", nombre2, "est :", modulo);
    } else {
      console.log("Erreur : le modulo par zéro est impossible.");
    }
  }
  
  // 4. Algorithme : Concaténation de deux phrases
  function concatenerPhrases() {
    let phrase1 = prompt("Entrez la première phrase :");
    let phrase2 = prompt("Entrez la deuxième phrase :");
    let phraseConcatenee = phrase1 + " " + phrase2;
    console.log("La phrase concaténée est :", phraseConcatenee);
  }
  
  // 5. Algorithme : Calcul du prix avec TVA (21%)
  function calculerPrixAvecTVA() {
    let prixHT = parseFloat(prompt("Entrez le prix hors taxes :"));
    const tauxTVA = 0.21;
    let prixTTC = prixHT + prixHT * tauxTVA;
    console.log("Le prix avec une TVA de 21% est :", prixTTC.toFixed(2));
  }
  
  // 6. Algorithme : Calcul de la surface d'un cercle
  function calculerSurfaceCercle() {
    let rayon = parseFloat(prompt("Entrez le rayon du cercle :"));
    const pi = Math.PI;
    let surface = pi * Math.pow(rayon, 2);
    console.log("La surface du cercle avec un rayon de", rayon, "est :", surface.toFixed(2));
  }
  
  // 7. Algorithme : Nombre de secondes depuis minuit
  function secondesDepuisMinuit() {
    let heures = parseInt(prompt("Entrez l'heure (en heures) :"));
    let minutes = parseInt(prompt("Entrez les minutes :"));
    let secondes = parseInt(prompt("Entrez les secondes :"));
  
    let totalSecondes = heures * 3600 + minutes * 60 + secondes;
    console.log("Le nombre de secondes depuis minuit est :", totalSecondes);
  }
  
  
  // Appeler les fonctions pour tester
  module.exports = {
  calculerSomme,
  calculerDivision,
  calculerModulo,
  concatenerPhrases,
  calculerPrixAvecTVA,
  calculerSurfaceCercle,
  secondesDepuisMinuit,
};
  