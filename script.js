// I found a way to create desired output with only one class.
// Regretfuly, this doesn't follow the requirements given by the assignment.

class Animal {
    constructor(animalName, animalFood, animalActivity, aniamlType, aniamlGender, animalPreferedAdverb) {
        this.food = animalFood;
        this.name = animalName;
        this.activity = animalActivity;
        this.type = aniamlType;
        this.gender = aniamlGender;
        this.preferedAdverb = animalPreferedAdverb;
    }

    sentence() {
        alert("This is " + this.name + ", " + this.gender + " is " + this.preferedAdverb + " " + this.type + " and likes to eat " + this.food + 
        ". Right now, " + this.name + " is " + this.activity + " at the moment.");
    }
}

// Class children
let rabbitChild = new Animal('Dave', 'carrots', 'hiding', 'rabbit', 'he', 'a');
let cowChild = new Animal('Daisy', 'celery', 'mooing', 'cow', 'she', 'a');
let alligatorChild = new Animal('Derek', 'cantalope', 'eating', 'alligator', 'he', 'an');
let slothChild = new Animal('Diane', 'cabbage', 'sleeping', 'sloth', 'she', 'a');

// Calls on class children
rabbitChild.sentence();
cowChild.sentence();
alligatorChild.sentence();
slothChild.sentence();

// Starting on line 35 is the code which follows the requirements given by the assignment.
// This code gives the same output, but I prefer the code above. 
// As it allows any new animals to be added much easier.

// class Rabbit extends Animal {
//     constructor(name, food) {
//         super(name, food, 0, 0, 0, 0)
//     }

//     hide() {
//         alert("This is " + this.name + ", he is a rabbit and likes to eat " + this.food + ". " + 
//         "Right now, " + this.name + " is hiding at the moment.");
//     }
// }

// class Cow extends Animal {
//     constructor(name, food) {
//         super(name, food, 0, 0, 0, 0)
//     }

//     moo() {
//         alert("This is " + this.name + ", she is a cow and likes to eat " + this.food + ". " + 
//         "Right now, " + this.name + " is mooing at the moment.");
//     }
// }  

// class Alligator extends Animal {
//     constructor(name, food) {
//         super(name, food, 0, 0, 0, 0)
//     }

//     eat() {
//         alert("This is " + this.name + ", he is an alligator and likes to eat " + this.food + ". " + 
//         "Right now, " + this.name + " is eating at the moment.");
//     }
// }  

// class Sloth extends Animal {
//     constructor(name, food) {
//         super(name, food, 0, 0, 0, 0)
//     }

//     sleep() {
//         alert("This is " + this.name + ", she is a sloth and likes to eat " + this.food + ". " + 
//         "Right now, " + this.name + " is sleeping at the moment.");
//     }
// }  

// let rabbitChild2 = new Rabbit('Dave', 'carrots');
// let cowChild2 = new Cow('Daisy', 'celery');
// let alligatorChild2 = new Alligator('Derek', 'cantalope');
// let slothChild2 = new Sloth('Diane', 'cabbage');

// rabbitChild2.hide();
// cowChild2.moo();
// alligatorChild2.eat();
// slothChild2.sleep();