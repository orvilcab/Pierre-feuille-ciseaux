let wins = 0; let loses= 0;
const choices = ["feuille","pierre","ciseaux"];// choix de l'ordi
const gameStatus = document.getElementById("status");
const gameScore = document.getElementById("score");
const feuille = document.getElementById("feuille");
const pierre = document.getElementById("pierre");
const ciseaux = document.getElementById("ciseaux");

function runGame(userChoice) {
  const computerChoice = choices[Math.floor(Math.random()* choices.length)]; 
//   console.log(computerChoice);
  switch (userChoice + '_' + computerChoice) {
    case 'feuille_ciseaux':
        case 'pierre_feuille':
            case 'ciseaux_pierre':  
            loses +=1;
            gameStatus.innerHTML = `Moi: ${userChoice} | Ordi: ${computerChoice} -> Ordi Gagne`  
        break;
        case 'feuille_pierre':
            case 'pierre_ciseaux':
                case 'ciseaux_feuille':  
                wins +=1;
                gameStatus.innerHTML = `Moi: ${userChoice} | Ordi: ${computerChoice} -> Je Gagne`  
            break; 
            case 'feuille_feuille':
        case 'pierre_pierre':
            case 'ciseaux_ciseaux':  
            gameStatus.innerHTML = `Moi: ${userChoice} | Ordi: ${computerChoice} -> Egalité`  
        break;  
  }

  gameScore.innerHTML = `Moi: ${wins} | Ordi: ${loses}` 
}
feuille.addEventListener("click", () => runGame("feuille"));
pierre.addEventListener("click", () => runGame("pierre"));
ciseaux.addEventListener("click", () => runGame("ciseaux"));