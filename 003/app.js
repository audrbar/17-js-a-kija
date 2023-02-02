console.log('-------- Objektai ---------');
const A = [
    'a',
    'b',
    'c'
];
const B = [...A];
const addStars = word => console.log('* ' + word + ' *');
// Array.prototype.go = function(fun) {
//     for (let = 0; i<this.length; i++) {
//         fun(this[i]);
//     }
// }
B.push('d');

// B.go(addStars);
console.log(A, B);
console.log(addStars(viso));



console.log('-------- Prototype --------');