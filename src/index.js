const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

const MORSE_ITEM = {
  '10': '.',
  '11': '-',
  '00': ''
}

function decode(expr) {

  const arrChar = expr.match(/.{1,10}/g);
  let msg = '';

  for (let i = 0; i < arrChar.length; i++) {

    if (arrChar[i] === '**********') {
      msg += ' ';
      continue
    }

    const arrMorseChar = arrChar[i].match(/.{1,2}/g);

    let str = arrMorseChar.map(x => {
      return MORSE_ITEM[x]
    }).join('')

    msg += MORSE_TABLE[str];

  }

  return msg

}

module.exports = {
  decode
}