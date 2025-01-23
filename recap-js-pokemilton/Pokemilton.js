const students = [

  'Ale', 'x', 'And', 'ré', 'And', 'rii', 'Bas', 'tien', 'Bry', 'an',

  'Céd', 'ric', 'Cha', 'rlotte', 'Den', 'is', 'Emi', 'lie', 'Emm',

  'anuel', 'Fré', 'déric', 'Gui', 'llaume', 'Hug', 'o', 'Jaâ', 'd',

  'Jam', 'aldinne', 'Jus', 'tine', 'Luc', 'as', 'Mar', 'ie', 'Mar',

  'tin', 'Meh', 'di', 'Meh', 'di', 'Naj', 'ib', 'Nic', 'olas', 'Pas',

  'cal', 'Pie', 'rre', 'Que', 'ntin', 'Rob', 'in', 'Sco', 'tt'

];



/**

 * Classe représentant un Pokemilton™.

 */

class Pokemilton {

  constructor() {

    this.name = this.generateRandomName(); // Nom unique généré en combinant deux noms d'étudiants

    this.level = 1; // Niveau de départ

    this.experienceMeter = 0; // Expérience initiale

    this.attackRange = this.getRandomNumber(1, 8); // Plage d'attaque

    this.defenseRange = this.getRandomNumber(1, 3); // Plage de défense

    this.healthPool = this.getRandomNumber(10, 30); // Points de vie

    this.maxHealthPool = this.healthPool; // Points de vie maximum

    this.catchPhrase = this.generateCatchPhrase(); // Phrase unique

  }



  /**

   * Génère un nom unique en combinant deux noms de la liste.

   * @returns {string} - Nom du Pokemilton™.

   */

  generateRandomName() {

    const randomStudent1 = students[Math.floor(Math.random() * students.length)];

    const randomStudent2 = students[Math.floor(Math.random() * students.length)];

    return `${randomStudent1}${randomStudent2}`;

  }



  /**

   * Génère un nombre aléatoire entre `min` et `max`.

   * @param {number} min - Valeur minimale.

   * @param {number} max - Valeur maximale.

   * @returns {number} - Nombre aléatoire généré.

   */

  getRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

  }



  /**

   * Génère une phrase unique pour le Pokemilton™.

   * @returns {string} - Phrase unique.

   */

  generateCatchPhrase() {

    return `${this.name}! ${this.name}! is ready to roll!`;

  }



  /**

   * Attaque un autre Pokemilton™ et réduit ses points de vie.

   * @param {Pokemilton} defender - Pokemilton™ qui subit l'attaque.

   */

  attack(defender) {

    const damage = Math.max(

      0,

      this.getRandomNumber(this.attackRange * this.level, 
this.attackRange) - defender.defenseRange

    );

    defender.healthPool -= damage; // Réduit la santé du défenseur

    console.log(`${this.name} attacked ${defender.name} and dealt ${damage} damage!`);

  }



  /**

   * Gagne de l'expérience après un combat.

   * @param {number} opponentLevel - Niveau de l'adversaire.

   */

  gainExperience(opponentLevel) {

    const experienceGain = this.getRandomNumber(1, 5) * opponentLevel;

    this.experienceMeter += experienceGain;

    console.log(`${this.name} gained ${experienceGain} experience points!`);

    if (this.experienceMeter >= this.level * 100) {

      this.evolve(); // Évolue si l'expérience atteint le seuil

    }

  }



  /**

   * Fait évoluer le Pokemilton™ en augmentant ses statistiques.

   */

  evolve() {

    this.level += 1; // Augmente le niveau

    const attackIncrease = this.getRandomNumber(1, 5);

    const defenseIncrease = this.getRandomNumber(1, 5);

    const healthIncrease = this.getRandomNumber(1, 5);



    // Mise à jour des statistiques

    this.attackRange += attackIncrease;

    this.defenseRange += defenseIncrease;

    this.healthPool += healthIncrease;



    console.log(`${this.name} evolved to level ${this.level}!`);

  }

}



module.exports = Pokemilton;