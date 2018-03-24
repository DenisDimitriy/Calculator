/** ПОЗИЦИЯ */
// Конструктор
function Item(name, price, categories) {
  this.name = name || "some item";
  this.price = price || 0;
  this.quantity = 0;
  this.result = 0;
  this.categories = categories || ["все", "материалы"];
}

/** КАЛЬКУЛЯТОР */
// Конструктор
function Сalculator(categories) {
  this.categories = categories || ["все", "материалы"];
  this.result = 0;
}

/** ПРИМЕР НАСЛЕДОВАНИЯ */
/*
// 1. Конструктор Animal
function Animal(name) {
  this.name = name;
  this.speed = 0;
}

// 1.1. Методы -- в прототип

Animal.prototype.stop = function() {
  this.speed = 0;
  alert( this.name + ' стоит' );
}

Animal.prototype.run = function(speed) {
  this.speed += speed;
  alert( this.name + ' бежит, скорость ' + this.speed );
};

// 2. Конструктор Rabbit
function Rabbit(name) {
  Animal.apply(this, arguments);
}

// 2.1. Наследование
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

// 2.2. Методы Rabbit
Rabbit.prototype.jump = function() {
  this.speed++;
  alert( this.name + ' прыгает, скорость ' + this.speed );
}

 Rabbit.prototype.run = function() {
   // вызвать метод родителя, передав ему текущие аргументы
   Animal.prototype.run.apply(this, arguments);
   this.jump();
 }
*/
