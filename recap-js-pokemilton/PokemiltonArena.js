const readlineSync = require("readline-sync"); // Importe readlineSync pour interagir avec l'utilisateur

/**

 * Classe représentant une arène de combat pour Pokemiltons™.

 */

class PokemiltonArena {

    constructor(master, wildPokemilton) {

      this.master = master; // Maître Pokemilton™

      this.wildPokemilton = wildPokemilton; // Pokemilton™ sauvage

    }

  

    /**

     * Calcule les dégâts infligés lors d'une attaque.

     * @param {number} attack - La valeur d'attaque de l'attaquant.

     * @param {number} defense - La valeur de défense du défenseur.

     * @returns {number} - Les dégâts infligés, minimum 0.

     */

    calculateDamage(attack, defense) {

      return Math.max(attack - defense, 0); // Les dégâts ne peuvent pas être négatifs

    }

  

    /**

     * Effectue une attaque entre deux Pokemiltons™.

     * @param {object} attacker - Le Pokemilton™ attaquant.

     * @param {object} defender - Le Pokemilton™ défenseur.

     */

    attack(attacker, defender) {

      const damage = this.calculateDamage(attacker.attackRange, defender.defenseRange);
// Appel de calculateDamage

      defender.healthPool = Math.max(defender.healthPool - damage, 0); // Mise à jour des PV du défenseur

      console.log("");  
      console.log(`${attacker.name} attacked ${defender.name} and dealt ${damage} damage!`);
      console.log(""); 

      console.log(`${defender.name}'s remaining health: ${defender.healthPool}`);
      console.log(""); 

    }

  

    /**

     * Lance un combat entre le Pokemilton™ du joueur et le Pokemilton™ sauvage.

     * @param {function} callback - Fonction de rappel à exécuter après le combat.

     */

    startBattle(callback) {
      console.clear();
      console.log(`The battle begins!`);
      console.log("");

      this.master.showCollection();

  
      console.log("");
      const chosenIndex = readlineSync.questionInt(

        "Choose a Pokemilton to fight (enter the number): "

      ) - 1;

  

      const playerPokemilton = this.master.pokemiltonCollection[chosenIndex];

      console.log(

        `You chose ${playerPokemilton.name} (Health: ${playerPokemilton.healthPool}) to fight!`

      );

  

      let running = true;

  

      while (running) {

        const action = readlineSync.questionInt(

          "What do you want to do?\n1. Attack\n2. Try to catch\n3. Run away\nEnter your choice: "

        );

  

        switch (action) {

          case 1:

            // Le joueur attaque le Pokemilton™ sauvage

            this.attack(playerPokemilton, this.wildPokemilton);

            if (this.wildPokemilton.healthPool <= 0) {

              console.log(`${this.wildPokemilton.name} has fainted!`);

              running = false;

            } else {

              // Le Pokemilton™ sauvage attaque le joueur

              this.attack(this.wildPokemilton, playerPokemilton);

              if (playerPokemilton.healthPool <= 0) {

                console.log(`${playerPokemilton.name} has fainted!`);

                running = false;

              }

            }

            break;

          case 2:

            this.tryToCapture(playerPokemilton);

            running = false;

            break;

          case 3:

            console.log(`You ran away from ${this.wildPokemilton.name}.`);

            running = false;

            break;

          default:

            console.log("Invalid choice. Try again.");

        }

  

        console.log(

          `${playerPokemilton.name} (Health: ${Math.max(

            playerPokemilton.healthPool,

            0

          )}) vs ${this.wildPokemilton.name} (Health: ${Math.max(

            this.wildPokemilton.healthPool,

            0

          )})`

        );
        console.log(""); 
      }

  

      callback();

    }

  

    /**

     * Tente de capturer un Pokemilton™ sauvage.

     * @param {object} playerPokemilton - Le Pokemilton™ du joueur.

     */

    tryToCapture(playerPokemilton) {

      const captureChance = Math.floor(

        ((this.wildPokemilton.healthPool / this.wildPokemilton.healthPool) * 100)

      );

      console.log(`Your capture chance is ${captureChance}%.`);

      const success = Math.random() * 100 < captureChance;

      if (success) {

        console.log(`You captured ${this.wildPokemilton.name}!`);

        this.master.pokemiltonCollection.push(this.wildPokemilton);

      } else {

        console.log(`${this.wildPokemilton.name} broke free!`);

      }

    }

  }

  

  module.exports = PokemiltonArena;