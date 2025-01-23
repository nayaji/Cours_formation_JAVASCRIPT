const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function pickBankScore(){
  return Math.floor(Math.random() * (21 - 16 + 1)) + 16;
}

function pickPlayerCard(){
  return Math.floor(Math.random() * (11 - 1 + 1)) + 1;
}


function stateOfTheGame(player_score, bank_score){
  return `Bank's score is: ${bank_score}\nScore is: ${player_score}`;
}


function endGameMessage(player_score, bank_score){
  if (isNaN(player_score) || isNaN(bank_score)) {
    return "Erreur : Les scores ne sont pas valides.";
  }

  if (player_score > 21) {
    return `Vous **lose** ! (Votre score: ${player_score}, Score de la banque: ${bank_score})`;
  }

  if (bank_score > 21) {
    return `La banque est éliminée, vous **win** ! (Votre score: ${player_score}, Score de la banque: ${bank_score})`;
  }

  if (player_score === 21) {
    return `Vous avez un **blackjack** ! Félicitations, vous **win** ! (Votre score: ${player_score}, Score de la banque: ${bank_score})`;
  }

  if (player_score > bank_score) {
    return `Félicitations, vous **win** ! (Votre score: ${player_score}, Score de la banque: ${bank_score})`;
  } else if (player_score < bank_score) {
    return `Dommage, vous **lose** ! (Votre score: ${player_score}, Score de la banque: ${bank_score})`;
  } else {
    return `C'est un **push** ! (Votre score: ${player_score}, Score de la banque: ${bank_score})`;
  }
}


rl.close();

module.exports = {
  pickBankScore,
  pickPlayerCard,
  stateOfTheGame,
  endGameMessage
};