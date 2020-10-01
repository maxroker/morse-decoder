const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let charArr = expr.match(/.{1,10}/g);
  let decodedArr = [];

  charArr.forEach((char) => {
    if (char === "**********") {
      decodedArr.push(" ");
    } else {
      let signArr = char.match(/.{1,2}/g);
      let morseLetter = "";
      signArr.forEach((sign) => {
        if (sign === "10") morseLetter += ".";
        if (sign === "11") morseLetter += "-";
      });
      decodedArr.push(MORSE_TABLE[morseLetter]);
    }
  });

  return decodedArr.join("");
}

module.exports = {
  decode,
};
