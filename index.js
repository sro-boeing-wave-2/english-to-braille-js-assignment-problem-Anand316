/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */

import englishToBrailleLiteralSet from './english-to-braille.js';

const map = new Map(englishToBrailleLiteralSet);

function braille() {
  let out = '';
  const x = document.getElementById('sourceLangText').value;
  for (let i = 0; i < x.length; i += 1) {
    out += map.get(x[i]);
  }
  document.getElementById('targetLangText').innerHTML = out;
}

document.getElementById('btnConvertEnglishToBraille').addEventListener('click', braille);
