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

/** ЭЛЕМЕНТ */
// Конструктор
function Element(item) {
  this.container = document.createElement("div");
  this.container.className = "container";
  
  this.name = document.createElement("input");
  this.name.value = item.name;
  this.name.className = "name";
  this.name.onchange = function (e) {
    item.name = this.value;
  }
   
  this.price = document.createElement("input");
  this.price.value = item.price;
  this.price.className = "price";
  this.price.onchange = function (e) {
    item.price = +this.value;
    item.result = item.quantity * item.price;
    item.render();
    console.log(item);
  }
  
  this.quantity = document.createElement("input");
  this.quantity.value = item.quantity;
  this.quantity.className = "quantity";
  this.quantity.onchange = function (e) {
    item.quantity = +this.value;
    item.result = item.quantity * item.price;
    item.render();
    console.log(item);
  }
  
  this.result = document.createElement("input");
  this.result.value = item.result;
  this.result.className = "result";
  this.result.onchange = function (e) {
    item.result = +this.value;
    item.quantity = item.result / item.price;
    item.render();
    console.log(item);
  }
  
  this.container.appendChild(this.name);
  this.container.appendChild(this.price);
  this.container.appendChild(this.quantity);
  this.container.appendChild(this.result);

  document.getElementById("main").appendChild(this.container)
}

/** ПОЗИЦИЯ */
// Конструктор
function Item() {
  this.name = "unknown";
  this.price = 0;
  this.quantity = 0;
  this.result = "0.00";
  this.element = new Element(this);
}

// Прототип с методами
Item.prototype.render = function() {
  this.element.result.value = this.result;
  this.element.quantity.value = this.quantity;
  this.element.price.value = this.price;
  this.element.name.value = this.name;
}
