console.log('--------- Local Storage ---------');
// narsykles savybe
let color = 'skyblue';
console.log(color);
localStorage.setItem('mayFavoriteColor', color);
console.log(localStorage.getItem('mayFavoriteColor'));


console.log('--------- Klases Objektai ---------');
// 1 sukuriamas objekto planas - klase
// kuriam katino objekto plana - construktorius, kiti metodai

class sayName {
    static voice = 'big';
    static whatIsYourVoice() {
        return this.voice;
    }
    constructor() {
        this.papers = 'yes';
    }
    whatIsYourName() {
        return this.name;
    }
}

class Cat extends sayName {
    constructor(name, color) {
        super();
        this.name = name;
        this.color = color;
        this.age = parseInt(Math.random() * 10 + 1);
    }
    miauMethod() {
        return 'miau';
    }
}

class Dog extends sayName {
    constructor(name) {
        super();
        this.name = name;
        this.age = parseInt(Math.random() * 15 + 1);
    }
}
const murka = new Cat('murka', 'brown');
const pilkis = new Cat('pilkis', 'gray');
const reksas = new Dog('reksas');
// kas yra murka?
// murka.name = 'Murka';
console.log(murka.whatIsYourName());
console.log(pilkis.whatIsYourName());
console.log(murka);
console.log(reksas);
console.log(Cat);
console.log(sayName.voice);