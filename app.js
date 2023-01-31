console.log('labas, labas');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
const arr1 = []; 
for (let i=0; i<10; i++) {
    const rand = getRandomInt(1, 10);
    arr1.push(rand);
};
console.log(arr1);

