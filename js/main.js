const h1DOM = document.getElementsByTagName('h1')[0];
console.log(h1DOM);

//const text = h1DOM.innerText; // grazina teksta isimant nereikalingus tarpus
//console.log(text);

const text = h1DOM.textContent; // grazina tiklsiai visus simbolius
console.log(`"${text}"`);

//teskto apvalymas nuo tarpu
const newText = text.trim().replace('rytas', 'diena');
h1DOM.innerText = newText;
