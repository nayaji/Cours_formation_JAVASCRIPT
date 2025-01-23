const readlineSync = require("readline-sync"); // Importe readlineSync pour interagir avec l'utilisateur

const PokemiltonArena = require("./PokemiltonArena");

const Pokemilton = require("./Pokemilton");


/**

 * Classe représentant le monde Pokemilton™.

 */

class PokemiltonWorld {

  /**

   * Initialise un nouveau monde.

   */

  constructor() {

    this.day = 1; // Initialise le jour à 1

    this.logs = []; // Initialise un tableau pour enregistrer les événements

  }


  /**

   * Passe un jour dans le monde Pokemilton™.

   * @param {PokemiltonMaster} master - Le maître du jeu.

   * @param {function} callback - Fonction de rappel pour retourner au jeu principal.

   */

  oneDayPasses(master, callback) {
    
    console.clear();
    console.log("");
    console.log(`Day ${this.day}: A new day begins in Pokemilton™ World!`);
    console.log("");

    this.randomizeEvent(master, callback);

    this.day++; // Augmente le jour après l'événement

  }


  /**

   * Gère les événements aléatoires pour le jour en cours.

   * @param {PokemiltonMaster} master - Le maître du jeu.

   * @param {function} callback - Fonction de rappel pour retourner au jeu principal.

   */

  randomizeEvent(master, callback) {

    const events = [

      "Nothing happens today. The day passes peacefully.",

      "A wild Pokemilton™ appears!",

      "You found a healing item!",

      "You found a revive item!", // Ajout de l'événement pour trouver un revive item

      "YEAH! you found a pokeball!",

    ];


    const randomEvent = events[Math.floor(Math.random() * events.length)];



    if (randomEvent === "A wild Pokemilton™ appears!") {

      const wildPokemilton = new Pokemilton(); // Crée un Pokémon sauvage

      console.log(

        `A wild ${wildPokemilton.name} (Level: ${wildPokemilton.level}, Health: ${wildPokemilton.healthPool}, Attack: ${wildPokemilton.attackRange}, Defense: ${wildPokemilton.defenseRange}) appears!`

      );

      console.log(`${wildPokemilton.catchPhrase}`);

      console.log("");
      const choice = readlineSync.questionInt(

        "What do you want to do?\n1. Fight\n2. Capture\n3. Run\nEnter your choice: "

      ); // Récupère le choix du joueur


      switch (choice) {

        case 1:

          // Lancer un combat

          const arena = new PokemiltonArena(master, wildPokemilton);

          arena.startBattle(callback);

          break;

        case 2:

          // Tentative de capture

          const captureChance = Math.random() * 100;

          console.log(`Your capture chance is ${captureChance.toFixed(2)}%.`);

          if (captureChance > 50) {

            console.log(`${wildPokemilton.name} was captured!`);

            master.capturePokemilton(wildPokemilton);

          } else {

            console.log(`${wildPokemilton.name} broke free!`);

          }

          callback();

          break;

        case 3:

          // Fuite

          console.log(`You ran away from ${wildPokemilton.name}.`);

          callback();

          break;

        default:

          console.log("Invalid choice. The day ends uneventfully.");

          callback();

          break;

    }

        } else if (randomEvent === "You found a healing item!") {

        master.healingItems += 1; // Ajoute un objet de soin

        console.log(`You found a healing item! You now have ${master.healingItems} healing items.`);

        callback();

      } else if (randomEvent === "YEAH! you found a pokeball!") {

        master.POKEBALLS += 1; // Ajoute une Pokeball

        console.log(`YEAH! you found a pokeball! You now have ${master.POKEBALLS} Pokeballs.`);

        callback();

      } else if (randomEvent === "You found a revive item!") {

        master.reviveItems += 1; // Ajoute un revive item

        console.log(`You found a revive item! You now have ${master.reviveItems} revive items.`);

        callback();

      } else {

        // Aucun événement

        console.log(randomEvent);

        callback();

      }

    }

  

    /**

     * Ajoute un événement au journal du jeu.

     * @param {string} log - Le message à ajouter au journal.

     */

    addLog(log) {

      const logMessage = `Day ${this.day}: ${log}`;

      this.logs.push(logMessage); // Ajoute le message au tableau de logs

      console.log(logMessage); // Affiche le log dans la console

    }

  }

  

  module.exports = PokemiltonWorld; // Exporte la classe pour l'utiliser dans d'autres fichiers