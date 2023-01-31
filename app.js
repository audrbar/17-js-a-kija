console.log('Labas, labas');
// The maximum is inclusive and the minimum is inclusive

// Pirmo lygio budas
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const arr1 = []; 
for (let i=0; i<10; i++) {
    const rand = getRandomIntInclusive(1, 10);
    arr1.push(rand);
};
console.log(arr1);

// Antras budas su parseInt kuris grazina sveika dali
const arr2 = [...Array(10)].map(_ => parseInt(Math.random() * 10 + 1));
console.log(arr2);

// Antras budas su Math.ceil kuris apvalina i virsu
const arr3 = [...Array(10)].map(_ => Math.ceil(Math.random() * 10 ));
console.log(arr3);

// Trecias pavyzdys

let a;
const genDigit = parseInt(Math.random() * 10 + 1);
if (genDigit > 5) {
    a = 'A';
} else {
    a = 'B';
}
console.log(a);
let b = genDigit > 5 ? 'A' : 'B';
console.log(b);

// Kaip veikia if - True arba False;
// 0 ir '' - False, masyvai, objektai - True;
// null - ojekto nera - False;
// undefined - yra bet nezinia kas - False;
// NaN - rodo klaida, nes JS geras - is stringo atima skaiciu - False
let racoons = NaN;
if (racoons) {
    console.log('Yes');
} else {
    console.log('Nop');
}

// Patikrinti is NaN
console.log(isNaN(NaN));
