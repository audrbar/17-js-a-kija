console.log('------- Duomenu strukturos -------');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
console.log('------- Set -------');
// Tvarka egzistuoja, pasiimti pagal index negali, negali buti vienodu reiksmiu

const fancySet = new Set();
// galima prideti tik viena daiktas vienu metu
fancySet.add('racoon');
fancySet.add('fox');
fancySet.add('moose');
fancySet.add('wolf');
fancySet.add('fox');

console.log(fancySet);

console.log(fancySet.has('fox'));
console.log(fancySet.has('beaver'));
fancySet.delete('fox');
console.log(fancySet);
console.log(fancySet, fancySet.size);
console.log('------- Set Objects -------');
// lyginami pagal reference, ne pagal reiksme
fancySet.add( { animal: 'fox'} );
const randomSet = new Set();
do {
    const genDigit = parseInt(Math.random() * 10 + 1);
    randomSet.add(genDigit);
} while (randomSet.size < 10);
console.log('------- Set to Array and vs -------');
console.log([...randomSet]);
const arr = [2, 5, 8, 6, 7, 3, 6, 2, 2];
const arrSet = new Set(arr);
console.log(arrSet);
console.log('------- Sort -------');
console.log(new Set([...fancySet].sort()));
const fancyArr = [...fancySet].sort();
// turi forEeach
fancySet.forEach(e => fancySet.add(e));
console.log(fancySet);

console.clear();
console.log('------- Mapduomenis -------');

