"use strict"
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
// turi forEeach, neturi map, sort
fancySet.clear();
fancyArr.forEach(e => fancySet.add(e));
console.log(fancySet);
console.clear();
console.log('------- Map -------');
// panasus i masyva, turi aukstus, indeksai gali buti bet kas (objektas, funkcijos, primityvai)
// kas pirmas atejo, pirmas ir yra

const fancyMap = new Map();
fancyMap.set('a1', 'racoon');
fancyMap.set('a2', 'fox');
fancyMap.set('a3', 'wolf');
console.log(fancyMap);
console.log(fancyMap.get('a2'));
console.log(fancyMap.has('a2'));
console.log(fancyMap.has('fox'));
// irasymas esanciu raktu pakeicia rakta
fancyMap.set({ a: 2}, 'rabit');
fancyMap.set({ a: 2}, 'chicken');
fancyMap.set(function(){return 'hello'}, 'beaver');
console.log(fancyMap);
fancyMap.forEach((a, i) => console.log(a, i));
// santykis su masyvu komplikuotas - indeksai ir reiksmes
const arrMap = [...fancyMap];
// fancyMap.clear();
arrMap.sort((a, b) => a[1].localeCompare(b[1]));
arrMap.forEach(e => fancyMap.set(e[0], e[1]));
console.log(arrMap);

for (const o in fancyMap) {
    console.log(o);
}
console.clear();
console.log('------- UseCase -------');

let shopArr = [
    {color: 'pink', dot: true, id:1},
    {color: 'skyblue', dot: true, id:5},
    {color: 'crimson', dot: false, id:3},
    {color: 'pink', dot: false, id:8},
];
console.log(shopArr);
console.log('3:', shopArr.filter(c => c.id == 3).shift()); // gauti
console.log('8:', !!shopArr.filter(c => c.id == 8).length); // ar yra
console.log('9:', !!shopArr.filter(c => c.id == 9).length);
shopArr.push({color: 'coral', dot: true, id:1}); // prideti
console.log(shopArr);
shopArr = shopArr.filter(c => c.id != 5); // istrinti
console.log(shopArr);

// refactoring to Map
const shopMapArr = new Map ([
    [1, {color: 'pink', dot: true, id:1}],
    [5, {color: 'skyblue', dot: true, id:5}],
    [3, {color: 'crimson', dot: false, id:3}],
    [8, {color: 'pink', dot: false, id:8}],
]);

console.log(shopMapArr);
console.log('3:', shopMapArr.get(3)); // gauti
console.log('8:', shopMapArr.has(8)); // ar yra
shopMapArr.delete(5); // istrinti
shopMapArr.set(17, { color: 'coral', dot: true, id: 17}); // prideti
console.log(shopMapArr);

console.clear();
console.log('------- JSON -------');
// java script object notation
// taisykliu rinkinys objektui ar masyvui paversti i stringa ir atgal

let shopArrJson = JSON.stringify(shopArr);
console.log(shopArrJson);
let shopArrJsonBack = JSON.parse(shopArrJson);
console.log(shopArrJsonBack);

let d = 42;
const djson = JSON.stringify(d);
console.log(typeof(djson));
const djsonBack = JSON.parse(djson);
console.log(typeof(djsonBack));