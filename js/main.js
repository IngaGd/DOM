const h1DOM = document.getElementsByTagName('h1')[0];

//const text = h1DOM.innerText; // grazina teksta isimant nereikalingus tarpus
//console.log(text);

const text = h1DOM.textContent; // grazina tiklsiai visus simbolius
//console.log(`"${text}"`);

//teskto apvalymas nuo tarpu
const newText = text.trim().replace('rytas', 'diena').replace('Labas', 'Laba');
h1DOM.innerText = newText;

//const person = {
//    name: 'Petras',
//    age: '44',
//}

//console.log(person); //internet console spausdina 
//console.log(h1DOM);
//console.log([h1DOM]);//gaunam masyva
//console.log(h1DOM.classList); //kvieciam visas klases, musu atv "vienas du trys klases"
//console.log(h1DOM.classList.value); //kvieciam sio ypatingo masyvo value reiksmes

//klasiu pridejimo pvz:
// h1DOM.classList.add('green', 'red');

const colors = ['green', 'yellow', 'blue'];

for (const color of colors) {
    h1DOM.classList.add(color);
}

h1DOM.classList.remove('blue');
h1DOM.classList.toggle('blue');//prideda
h1DOM.classList.toggle('blue');//isima

const doContain = h1DOM.classList.contains('braske');
console.log(doContain); //internet console spausdina false

const doContain2 = h1DOM.classList.contains('green');
console.log(doContain2); //internet console spausdina true

const paragr = document.getElementsByTagName('p');
console.log(paragr);
const text2 = paragr.innerText;
console.log(text2);

//kitas elementu ieskojimo variantas:
//const buttonDOM = document.querySelector('button');//suranda tik pirmaji elementa pagal taga kitas su All
//console.log(buttonDOM);

//function labas() {
//    console.log('Labas:)');
//}

//buttonDOM.addEventListener('click', labas); //eventas 'click', paskui logika
//surisa ivyki su elementu ir tam ivykiui ivykus, kokia
//funkcija igyventdinti (siuo atveju funkcija labas)

//dar variantas, kuris groja, kaip eventlisteneris:
//buttonDOM.onclick = labas;

//const buttonDOM = document.querySelectorAll('button');
//const minusDOM = buttonDOM[0];
//const plusDOM = buttonDOM[1];
//console.log(minusDOM);
//console.log(plusDOM);
//ta pati galima uzrasyti destrukturizuojant:

let score = 0;

const scoreDOM = document.querySelector('.score');
const [minusDOM, plusDOM] = document.querySelectorAll('button');

minusDOM.addEventListener('click', () => {
    scoreDOM.innerText = --score;
})

plusDOM.addEventListener('click', () => {
    scoreDOM.innerText = ++score;
}) 