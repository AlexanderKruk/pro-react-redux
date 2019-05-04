function Animal(name, voice) {
  this.name = name;
  this.voice = voice;
}

Animal.prototype.say = function() {
    console.log(this.name, 'goes', this.voice);
};

const dog = new Animal('Dog', 'woof');
const cat = new Animal('Cat', 'meow');

dog.say();
cat.say();

// 1. Object.setPrototypeOf
// 2. Object.create
// 3. using new

// Object without prototype
const obj = Object.create(null);
