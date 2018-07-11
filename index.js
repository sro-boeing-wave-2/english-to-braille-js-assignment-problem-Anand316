/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */

import englishToBrailleLiteralSet from './english-to-braille.js';

const map1 = new Map(englishToBrailleLiteralSet);

function braille() {
  let out = '';
  const x = document.getElementById('sourceLangText').value;
  out += x.split('').map(z => map1.get(z)).join('');
  document.getElementById('targetLangText').innerHTML = out;
}

document.getElementById('btnConvertEnglishToBraille').addEventListener('click', braille);
