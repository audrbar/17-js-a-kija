console.log('Hello!');

// && ir ||
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

const D = 5;
const SD = '' + D;
console.log(typeof D, '=>', typeof SD);


// Funkcijos - kodas vykdomas atskirai - grizta nuo is iskvietimo
// deklaracija ir iskvietimas

function sayHello() {
    console.log('Labas');
}
sayHello();