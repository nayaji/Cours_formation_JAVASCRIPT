const readline = require('readline');
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data = fs.readFileSync('./tasks.json', 'utf8');
data = JSON.parse(data);


//////////////////////////////////////////////////////////////////////////////////////////
function askReturnToMenu() {
  rl.question('Voulez-vous retourner au menu principal ? (Y/N): ', (answer) => {
    if (answer.toUpperCase() === 'Y') {
      run();  // Retourner au menu principal si la réponse est 'Y'
    } else if (answer.toUpperCase() === 'N') {
      console.log('Au revoir !');  // Quitter si la réponse est 'N'
      rl.close();
    } else {
      console.log('Réponse invalide, veuillez entrer Y ou N.');
      askReturnToMenu();  // Redemander si la réponse est invalide
    }
  });
}

////////////////////////////////////////////////////////////////////////////////////////

function displayTasks() {
  if (Array.isArray(data.taches) && data.taches.length > 0) {
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('===========================================');
    console.log('             📋 Liste des tâches           ');
    console.log('===========================================');

    data.taches.forEach((task, index) => {
      console.log(`ID: ${index + 1} | Tâche: ${task}`);
    });

    console.log('===========================================');
  } else {
    console.log('Aucune tâche trouvée !');
  }
  askReturnToMenu()
}
  

///////////////////////////////////////////////////////////////////////////////////////////

function addTask() {
  console.log('');
  console.log('');
  console.log('');
  rl.question(' Ajouter une tâche 👉 ', (newTask) => {
    try {
      let data;
      if (fs.existsSync('./tasks.json')) {
        data = fs.readFileSync('./tasks.json', 'utf8');
        data = JSON.parse(data);
      } else {
        data = { taches: [] };
      }

      if (!Array.isArray(data.taches)) {
        data.taches = [];
      }

      data.taches.push(newTask);

      fs.writeFileSync('./tasks.json', JSON.stringify(data, null, 2), 'utf8');

      console.log('\n')
      console.log('--------------------------')
      console.log(`Tâche ajoutée avec succès : "${newTask}"`);
      console.log('--------------------------')
      console.log('\n')
    } catch (err) {
      console.error('Erreur :', err.message);
    } finally {
      run();
    }
  });
}

////////////////////////////////////////////////////////////////////////////////////////////////


  function deleteTask() {
  
    if (Array.isArray(data.taches) && data.taches.length > 0) {
      console.log('');
      console.log('');
      console.log('');
      console.log('');
      console.log('');
      console.log('');
      console.log('');
      console.log('');
      console.log('');
      console.log('===========================================');
      console.log('             📋 Liste des tâches           ');
      console.log('===========================================');
  
      data.taches.forEach((task, index) => {
        console.log(`ID: ${index + 1} | Tâche: ${task}`);
      });
      
      console.log('===========================================');
    } else {
      console.log('Aucune tâche trouvée !');
      askReturnToMenu()
    }

    rl.question('Entrez le numéro de la tâche à supprimer ou tapez "M" pour retourner au MENU : ', (input) => {
      if (input.toUpperCase() === 'M') { 
        
        run();
        return;
      }      
      const index = parseInt(input) - 1;
      
      if (isNaN(index) || index < 0 || index >= data.taches.length) {
        console.log('Numéro invalide. Veuillez entrer un numéro valide.');
        deleteTask();
        return;
      }
  
      rl.question(`Confirmez-vous la suppression de la tâche : "${data.taches[index]}" ? (Y/N) : `, (confirmation) => {
        if (confirmation.toUpperCase() === 'Y') {
      const deletedTask = data.taches.splice(index, 1);
      console.log('');
      console.log('');
      console.log('');
      console.log('');
      console.log('');
      console.log('');
      console.log('-----------------------------------------------------------');
      console.log(`         👉 Tâche supprimée : "${deletedTask[0]}"`);
      console.log('-----------------------------------------------------------');
      console.log("");
      console.log("");
      console.log("");

  //Sauvegarder les modif dans JSON
      try {
        fs.writeFileSync('./tasks.json', JSON.stringify(data, null, 2), 'utf8');

      } catch (err) {
        console.error('Erreur lors de la sauvegarde des tâches :', err.message);
      }
  
      run();
    } else {
      // Si l'utilisateur refuse de supprimer la tâche
      console.log('--------------------');
      console.log('Suppression annulée.');
      console.log('--------------------');
      run();
    }
    });
  });
  }

/////////////////////////////////////////////////////////////////////////////////////////////////

function MarkAsDone() {
  if (Array.isArray(data.taches) && data.taches.length > 0) {
    console.log('===========================================');
    console.log('             📋 Liste des tâches           ');
    console.log('===========================================');

    data.taches.forEach((task, index) => {
      console.log(`ID: ${index + 1} | Tâche: ${task}`);
    });

    console.log('===========================================');

    rl.question('Entrez le numéro de la tâche à supprimer ou tapez "M" pour retourner au MENU : ', (input) => {
      if (input.toUpperCase() === 'M') { 
        
        run();
        return;
      }      
      const index = parseInt(input) - 1;

      if (isNaN(index) || index < 0 || index >= data.taches.length) {
        console.log('Numéro invalide. Veuillez entrer un numéro valide.');
        markTaskAsDone();
        return;
      }

        if (data.taches[index].startsWith('✔️')) {
          console.log("");
          console.log("");
          console.log("");
          console.log("");
          console.log("");
          console.log("");
          console.log("");
          console.log("");
          console.log(`La tâche "${data.taches[index]}" est déjà marquée comme terminée.`);
          console.log("");
          console.log("");
          console.log("");
          run();
          return;
        }
     
      data.taches[index] = `✔️  ${data.taches[index]}`;
      console.log(`Tâche marquée comme terminée : "${data.taches[index]}"`);
      try {
        fs.writeFileSync('./tasks.json', JSON.stringify(data, null, 2), 'utf8');
      } catch (err) {
        console.error('Erreur lors de la sauvegarde des tâches :', err.message);
      }

      run();
    });
  } else {
    console.log('Aucune tâche trouvée !');
  }
  askReturnToMenu()
  }


 const menu = () => {
  return `
===================================================
 Bienvenue dans le gestionnaire de tâches de Najib
===================================================
1️⃣  Voir toutes vos tâches
2️⃣  Ajouter une tâche
3️⃣  Supprimer une tâche
4️⃣  Marquer une tâche comme terminée
5️⃣  Quitter le gestionnaire de tâches
===================================================
👉 Faites votre choix : `;
};

function run() {
  rl.question(menu(), (answer) => {
    switch (answer) { 
    case '1':
      displayTasks();
        break;
    case '2':
      addTask();
        break;
    case '3':
      deleteTask();
        break;
    case '4':
      MarkAsDone();
        break;
    case '5':
        console.log ("3...2...1...");
        setTimeout(() => {
          rl.close();
          console.log("<< Déconnecté >>");
        }, 3000);
        break;
    default:
        console.log("Invalid choice");
        console.clear();
        run();
  }});
}

run();
