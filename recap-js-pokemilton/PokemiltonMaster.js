/**

 * Classe représentant un maître Pokemilton™.

 */

class PokemiltonMaster {

  constructor(name) {

    this.name = name; // Nom du joueur

    this.pokemiltonCollection = []; // Liste des Pokemilton™ capturés

    this.healingItems = 5; // Nombre initial d'objets de soin

    this.reviveItems = 3; // Nombre initial d'objets de résurrection

    this.POKEBALLS = 10; // Nombre initial de Pokeballs

  }



  /**

   * Soigne un Pokemilton™ en utilisant un objet de soin.

   * @param {Pokemilton} pokemilton - Pokemilton™ à soigner.

   */

  healPokemilton(pokemilton) {

      if (this.healingItems > 0) {

        pokemilton.healthPool = pokemilton.maxHealthPool; // Rétablit la vie à son maximum

        this.healingItems--; // Consomme un objet de soin

        console.log(`${pokemilton.name} has been fully healed!`);

      } else {

        console.log("You don't have any healing items left.");

      }

    }

     /**

   * Soigne un Pokemilton™ en utilisant un objet de soin.

   * @param {Pokemilton} pokemilton - Pokemilton™ à soigner.

   */

  healPokemilton(pokemilton) {

      if (this.healingItems > 0) {

        pokemilton.healthPool = pokemilton.maxHealthPool; // Rétablit la vie à son maximum

        this.healingItems--; // Consomme un objet de soin

        console.log(`${pokemilton.name} has been fully healed!`);

      } else {

        console.log("You don't have any healing items left.");

      }

  }



  /**

   * Capture un Pokemilton™ sauvage.

   * @param {Pokemilton} pokemilton - Pokemilton™ à capturer.

   */

  capturePokemilton(pokemilton) {

    if (this.POKEBALLS > 0) {

      this.pokemiltonCollection.push(pokemilton); // Ajoute le Pokemilton™ à la collection

      this.POKEBALLS -= 1; // Consomme une Pokeball

      console.log(`${pokemilton.name} was captured!`);

    } else {

      console.log("You have no Pokeballs left!");

    }

  }



  /**

   * Affiche la collection de Pokemilton™ du joueur.

   */

  showCollection() {

    console.log(`Pokemilton™ collection of ${this.name}:`);

    this.pokemiltonCollection.forEach((pokemilton, index) => {

      console.log(

        `${index + 1}. ${pokemilton.name} (Level: ${pokemilton.level}, Health: ${pokemilton.healthPool}, Attack: ${pokemilton.attackRange}, Defense: ${pokemilton.defenseRange}, Catch Phrase: "${pokemilton.catchPhrase}")`

      );

    });

  }

}






module.exports = PokemiltonMaster;
