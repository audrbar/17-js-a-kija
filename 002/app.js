console.log('Hello!');
// defer
// window.addEventListener('load', () => {
//     const r = document.querySelector('h1');
//     console.log(r);
// });

// Loginiai operatoriai and && ir Or ||
const A = 5;
const B = 7;

console.log('A && B', A && B);
console.log('B && A', B && A);

// Or ||

console.log('A || B', A || B);
console.log('B || A', B || A);

/*
T && T => T
T && F => F
 
shortcut
F && T => F
F && F => F
*/
 
/*
F || T => T
F || F => F
 
shortcut
T || T => T
T || F => T
*/

// Number to string
const D = 0;
const SD = '' + D;
console.log(typeof D, '->', typeof SD);

// String to number
const S = '88';
const DS = +D;
console.log(typeof S, '->', typeof DS);

// To logic
const L1 = !!D;
const L2 = !!S;
console.log(L1, '->', L2);

// Funkcijos - kodas vykdomas atskirai - grizta nuo is iskvietimo
// deklaracija ir iskvietimas

function sayHallo() {
    console.log('Labas');
}
sayHallo();

// Anonimine funkcija - priskirta kintamajam
const sayHello = function() {
    console.log('Labukas');
    return 'Va kaip viskas buvo...'
}
sayHello();

// Funkcija nepaleista ir paleista (iskviesta)
console.log(sayHello);
console.log(sayHello());

// parametras kintamasis kuris lygus paleistai funkcijai
const vaRun = sayHello();
const vaNotRun = sayHello;

// Paleidziam kada norim skliausteliais
console.log(vaRun);
console.log(vaNotRun());

// Funkcija kuri grazina funkcija
// Galima perduoti nepaleista funkcija
// Galima perduoti rezultata
// Rezultatas gali buti funkcija
const fun = function() {
    console.log('ONE');
    return function() {
        console.log('TWO');
        return function() {
            console.log('THREE');
        }
    }
}
const makeFun = fun();
makeFun()();

// Anonimine funkcija gali buti paversta i arrow funkcija
// Skiriasi tik zodeliu .this
const Hi1 = function() {
    return 'Va kaip viskas buvo 1...'
}
Hi1();

const Hi2 = () => {
    return 'Va kaip viskas buvo 2...'
}
Hi2();
const Hi3 = () => 'Va kaip viskas buvo 3...';
const Hi4 = _ => 'Va kaip viskas buvo 4...';

console.log(Hi1());
console.log(Hi2());
console.log(Hi3());
console.log(Hi4());

// perdaryta funkcija
const tooFun = () => () => () => 'THREE';

tooFun()()();
console.log(tooFun()()());

// Funkcijos parametras - gali buti daugiau nei argumentu
// parametras gali tureti default reiksme b = 100. Tuomet ji lieka jei neperduodama kita
const funFun = (a, b, c) => {
    console.log(a * b);
}
// Funkcijos agumentas - reiksme - gali buti kintamasis, masyvas, stringas, skaicius, funkcija
// Funkcija perduodama kaip argumentas vadinama call back
const _15 = 15;
funFun(8, _15);
console.clear();

console.log('--------- Foreach CallBack--------');

const animals = [
    'racoon',
    'beaver',
    'moose'
];

const colors = [
    'pink',
    'crimson',
    'skyblue'
];

console.log(animals);
console.log(colors);

const addStars = word => console.log('* ' + word + ' *');
const addPluses = word => console.log('+ ' + word + ' +');

// ka iteruoti ir ka su juo padaryti - call back
const iterator = (what, fun) => {
    for (let i = 0; i < what.length; i++) {
    fun(what[i]);
    }
}
iterator(animals, word => console.log('* ' + word + ' *'));
iterator(colors, addPluses);

animals.forEach(word => console.log('* ' + word + ' *'));
colors.forEach(addPluses);

colors.forEach((word, index) => console.log(word, index))
colors.forEach((_, index) => console.log(index))
colors.forEach((word, index, arr) => console.log(word, index, arr))

console.clear();

console.log('--------- Push --------');
// animals[15] = 'bird';
animals.push('serge');
animals.unshift('mouse', 'fox', 'wolf', 'rabbit');

animals.pop();
animals.shift();
console.log(animals);
console.table(animals);
console.table(animals[1]);

console.clear();

console.log('--------- Spread --------');

animals.unshift(...colors);
console.log(animals);
console.table(animals);
console.log({ ...colors });