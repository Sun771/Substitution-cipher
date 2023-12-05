let textArea = document.querySelector('#text-area');
const encryption = document.querySelector('.encryption');
const decryption = document.querySelector('.decryption');
const keyGeneration = document.querySelector('.key');
let consoleArea = document.querySelector('.console');
let keyGenerationFlag = false;

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,.?!@#$%&_() '.split('');
const key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,.?!@#$%&_() '.split('');

let encryptedMessage = '';
let decryptedMessage = '';

// Processing a key
function keyProcessing() {
  return Math.random() - 0.5;
}

// Turning all input text to upper case
textArea.addEventListener('input', function (event) {
  event.target.value = event.target.value.toUpperCase();
});

// Generating a key
keyGeneration.addEventListener('click', function () {
  key.sort(keyProcessing);
  consoleArea.innerHTML += `<b>Alphabet is:</b> ${alphabet.join(' ')}<br>`;
  consoleArea.innerHTML += `<b>Key is:</b> ${key.join(' ')}<br>`;
  keyGenerationFlag = true;
});

// Encryption process
encryption.addEventListener('click', function () {
  if (!keyGenerationFlag) {
    consoleArea.innerHTML += "<b>Sadly</b>, currently you don't have\
     a key. Firstly, generate your key.<br>"
    return;
  }

  if (textArea.value.length == 0) {
    consoleArea.innerHTML += `Your text's length is 0. Fix, then \
    try again.<br>`
    return;
  }

  encryptedMessage = '';
  let str = textArea.value.split('');

  for (let i = 0; i < str.length; i++) {
    let position;
    for (let j = 0; j < alphabet.length; j++) {
      if (str[i] === alphabet[j]) {
        position = j;
      }
    }

    encryptedMessage += key[position];
  }

  consoleArea.innerHTML += `<b>Encrypted message is:</b> ${encryptedMessage}<br>`;
});

// Decryption process
decryption.addEventListener('click', function () {
  if (!keyGenerationFlag) {
    consoleArea.innerHTML += "<b>Sadly</b>, currently you don't have\
     a key. Firstly, generate your key.<br>"
    return;
  }

  if (textArea.value.length == 0) {
    consoleArea.innerHTML += `Your text's length is 0. Fix, then \
    try again.<br>`
    return;
  }
  
  incomingData = textArea.value;
  decryptedMessage = '';

  for (let i = 0; i < incomingData.length; i++) {
    let position;
    for (let j = 0; j < key.length; j++) {
      if (incomingData[i] === key[j]) {
        position = j;
      }
    }

    decryptedMessage += alphabet[position];
  }

  consoleArea.innerHTML += `<b>Decrypted message is:</b> ${decryptedMessage}<br>`;
});

// Clear all
const btnClearAll = document.getElementById('btn-clear-all');

btnClearAll.addEventListener('click', () => {
  textArea.value = '';
  consoleArea.innerHTML = '';
});