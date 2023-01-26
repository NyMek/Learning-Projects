const lettersPattern = /[a-z]/;
let currentGuessCount = 1;
let currentGuess = document.querySelector('#guess' + currentGuessCount);
// let currentLetters = currentGuess.dataset.letters;

let words = [
   'baker','store','horse','speak','clone','apple','bread'];
   let solutionWord = '';

const chooseWord = () => {
    let randomItem = (Math.floor(Math.random() * (words.length))) + 1;
    console.log(randomItem);
    solutionWord = words[randomItem];
    console.log(solutionWord);
}
chooseWord();

document.addEventListener('keydown', (e) => {
    console.log('keypress ' + e.key);
    console.log (currentGuess);
 let keypress = e.key;
 if(keypress.length == 1 && lettersPattern.test(e.key) && currentGuess.dataset.letters.length <5) {

    console.log('is letter ');
    updateLetter(keypress);
 } else if(e.key == 'Backspace' && currentGuess.dataset.letters != '' ) {
    console.log('backspace');
    deleteFromLetters();
 } else if (e.key == 'Enter' && currentGuess.dataset.letters.length == 5) {
    console.log('submit guess');
    for(let i = 0; i<5; i++) {

        setTimeout(() => {
           // checkLetter(i);
            revealTile(i, checkLetter(i)); 
        }, i * 200);

    }

 }
});

const updateLetter = (letter) => {
    let oldletters = currentGuess.dataset.letters;
   // let tileNumber = 
    let newLetters = oldletters + letter;
    let currentTile = newLetters.length;
    currentGuess.dataset.letters = newLetters;
    updateTiles(currentTile, letter);
};

const updateTiles = (tileNumber, letter) => {
    let currentTile = document.querySelector('#guessTile' + tileNumber);

    currentTile.innerHTML = letter;
    
};

//backspace delete last letter

const deleteFromLetters = () => {
    let oldLetters = currentGuess.dataset.letters;

    let newLetters = oldLetters.slice(0, -1);
    currentGuess.dataset.letters = newLetters;
    deleteFromTiles(oldLetters.length);
};


const deleteFromTiles = (tileNumber) => {
    document.querySelector('#guessTile' + tileNumber).innerText ='';
};


//check letter to solution

const checkLetter = (position) => {
    let guessedLetter = currentGuess.dataset.letters.charAt(position);
    let solutionLetter = solutionWord.charAt(position);

   //console.log( guessedLetter, solutionLetter);

    if(guessedLetter == solutionLetter) {
        return 'correct';
    } else {
        return checkLetterExists(guessedLetter) ? 'present' : 'absent';


    }
};

const checkLetterExists = (letter) => {
   return solutionWord.includes(letter);
};

const revealTile = (i, status) => {
    console.log(`i = ${i} status = ${status}`);
    let tileNumber = i + 1;
    let tile = document.querySelector('#guessTile' + tileNumber);
    let state = ''; 
    switch(status) {
        case 'correct': tile.classList.add('correct');
        break; 

        case 'present': tile.classList.add('present');
        break;

        case 'absent': tile.classList.add('absent');
        break;
    }
    flipTile(tileNumber, status);
};

const flipTile = (tileNumber, state) => {
    let tile = document.querySelector('#guessTile' + tileNumber);
    tile.classList.add('flip-in');

    setTimeout(() => {
        tile.classList.add(state);
    }, 200);
    setTimeout(() => {
        tile.classList.remove('flip-in');
        tile.classList.add('flip-out');
    }, 200);

}