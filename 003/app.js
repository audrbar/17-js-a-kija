console.log('-------- Reference or Copy---------');
const A = [
    'a',
    'b',
    'c'
];
// Reference
const B = A;
B.push('d');
console.log(A, B);

// Spread
const C = [...A];
C.push('e');
console.log(A, C);

// State keisti negalima - tik su kopija
// State dzniausiai yra masyvas
// Masyvas yra objektas, kuris turi tam tikru savybiu
// slice - kopijuoja tik objekto ne

console.log('-------- Prototype --------');

const addStars = word => console.log('* ' + word + ' *');

Array.prototype.go = function(fun) {
    for (let i = 0; i < this.length; i++) {
        fun(this[i]);
    }
}
C.go(addStars);
console.log(C);
console.log('-------- Map --------');
// foreach nieko negrazina
// map grazina kopija masyvo

const fr = C.forEach(l => console.log(l));
const mr = C.map(l => l + '------->');
const ml = C.map(l => l);

console.log(fr, mr, ml);

console.log('-------- React ale --------');
animals = [
    'cow',
    'bee',
    'fox'
]
// React programmer
const out = animals.map(a => '<i style="color: crimson; display: block;>' + a + '</i>');
// React inside (script defer ir h1 tagas)
// let html = '';
// out.forEach(a => html += a);
// document.querySelector('h1').innerHTML = html;

console.log('-------- Filter --------');
// Grazina masyvo kopija
animals.push('beaver', 'moose');
const filtered = animals.filter(l => l.length < 9);
const deleted = animals.filter(l => l != 'fox');
const added = animals.filter(l => l != 'fox').map(l => l + ' *');

console.log(filtered, deleted, added);
console.log('-------- Sort --------');
// Prideti ir isrusiuoti
// state.push('wolf'); negalima
// state.sort(); negalima

console.log([...animals, 'wolf'].sort());
const anim = [...animals];
// Sort turi callback - patenka du gretimi elemeentai, atsakyti teigiamu, neigiamu ar nuliu
// lyginam raidziu asc kodus
console.clear();
console.log(anim);
anim.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
});
// kelios kalbos svetaineje
anim.sort((a, b)=> b.localeCompare(a));
console.log(anim);
// Skaiciai
const dig = [88, 34, 10, 185, 1];
dig.sort((a, b) => a - b);
console.log(dig);

// uztenka sort filter map

console.log('-------- Objektas --------');
// prilyginimas veikia kaip reference, reikia daryti kopija
const man = {};
man.name = 'John';
man.surname = 'Smith';
//const man2 = man;
const man2 = { ...man };
man2.name = 'Petras';
const man3 = {
    name: 'Petras',
    surname: 'Petraitis'
};
const name = 'Lina';
const surname = 'Lioliove';
// const man4 = {
//     name: name,
//     surname: surname
// }
const man4 = {
    name,
    surname
}
// prop savybe irasyta kintamajame galime panaudoti
const prop = 'surname';
const man5 = {}
man5.name = 'Bronius';
man5[prop] = 'Levickis'; // ne masyvas, o savybe kintamajame
console.log(man, man2, man3, man4, man5);
// objektu masyvas
const house = [man, man2, man3, man4, man5];

house.sort((a, b) => {
    if (a.surname > b.surname) return 1 ;
    if (a.surname < b.surname) return -1;
    // pavardes vienodos
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    // ir vardai vienodi
    return 0;
});

console.log(house);
