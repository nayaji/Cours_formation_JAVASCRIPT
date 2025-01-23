

class OrangeTree {
  constructor() {
    this.age = 0;
    this.height = 0;
    this.fruits = 0;
    this.alive = true;
  }

  // Vérifie si l'arbre est mort
  isDead() {
    if (this.age >= 100) {
      this.alive = false;
    } else if (this.age >= 50) {
      const chanceToDie = (this.age - 50) / 50;
      if (Math.random() < chanceToDie) {
        this.alive = false;
      }
    }
    return !this.alive;
  }

  // Retourne la hauteur de l'arbre
  measureHeight() {
    return this.height;
  }

  // Retourne le nombre de fruits restants
  fruitsLeft() {
    return this.fruits;
  }

  // Permet de cueillir un fruit si possible
  pickAFruit() {
    if (this.fruits > 0) {
      this.fruits--;
      console.log("Vous avez cueilli un fruit !");
      return true;
    } else {
      console.log("Il n'y a plus de fruits à cueillir.");
      return false;
    }
  }

  // Fait passer une année
  oneYearPasses() {
    if (!this.alive) {
      console.log("L'arbre est mort, plus rien ne se passe.");
      return;
    }

    // L'arbre vieillit
    this.age++;
    console.log(`L'arbre a maintenant ${this.age} ans.`);

    // Vérifie s'il est mort
    if (this.isDead()) {
      console.log("L'arbre est mort cette année.");
      return;
    }

    // L'arbre grandit
    if (this.age <= 10) {
      this.height++;
      console.log(`L'arbre a grandi et mesure maintenant ${this.height} mètre(s).`);
    }

    // L'arbre produit des fruits
    if (this.age > 5 && this.age < 15) {
      this.fruits = this.age >= 10 ? 200 : 100;
      console.log(`L'arbre a produit ${this.fruits} fruits cette année.`);
    } else {
      this.fruits = 0;
      console.log("L'arbre ne produit plus de fruits.");
    }
  }
}

// Exemple d'utilisation
const tree = new OrangeTree();

for (let year = 1; year <= 105; year++) {
  console.log(`--- Année ${year} ---`);
  tree.oneYearPasses();
  if (!tree.alive) {
    console.log(`L'arbre est mort à l'âge de ${tree.age} ans.`);
    break;
  }
  tree.pickAFruit();
  console.log(`Fruits restants : ${tree.fruitsLeft()}`);
}

module.exports = OrangeTree; // Export the class for testing
