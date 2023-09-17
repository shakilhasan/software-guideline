"use strict";
// https://refactoring.guru/design-patterns/factory-method/typescript/example#example-0--index-ts
class Creator {
    someOperation() {
        const product = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}
class Product1 {
    operation() {
        return '{Result of the ConcreteProduct1}';
    }
}
class Creator1 extends Creator {
    factoryMethod() {
        return new Product1();
    }
}
class Product2 {
    operation() {
        return '{Result of the ConcreteProduct2}';
    }
}
class Creator2 extends Creator {
    factoryMethod() {
        return new Product2();
    }
}
function builderClientCode(creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}
console.log('App: Launched with the ConcreteCreator1.');
builderClientCode(new Creator1());
console.log('');
console.log('App: Launched with the ConcreteCreator2.');
builderClientCode(new Creator2());