import Animal from './animal';
import Dog from './dog';
import Person from './person';

let osoba = new Person('Jana', 'Nováková');

osoba.fullName = 'Jára Cimrman';

console.log( osoba.fullName );
osoba.greet();

let zvire = new Animal('Bob', 20);

zvire.run();

let alík = new Dog('Alík', 10, 'Haf, haf, haf');
alík.run();
alík.bark();

let baryk = new Dog('Baryk', 15, 'woof');
baryk.run();
baryk.bark();
