var item1 = new Item();
var item2 = new Item();







































/*
//Подключить main
var mainElement = document.getElementById("main");

//Объект одной позиции
var item = {};

//Свойства
item.name = "cabel";
item.price = 30;
item.quantity = 0;
item.result = 0;
item.element = {};

//Инициализация DOM элемента
item.element.container = document.createElement("div");
item.element.container.className = "container";

item.element.name = document.createElement("input");
item.element.name.value = item.name;
item.element.name.className = "name";

item.element.quantity = document.createElement("input");
item.element.quantity.value = item.quantity;
item.element.quantity.className = "quantity";

item.element.result = document.createElement("input");
item.element.result.value = item.result;
item.element.result.className = "result";

item.element.container.appendChild(item.element.name);
item.element.container.appendChild(item.element.quantity);
item.element.container.appendChild(item.element.result);

//Добавить элемент в DOM
mainElement.appendChild(item.element.container);

//Обновить DOM элемент
item.render = function () {
    item.element.result.value = item.result;
    item.element.quantity.value = item.quantity;
    item.element.name.value = item.name;
};

//Ввод данных
item.element.quantity.onchange = function (e) {
    item.quantity = +item.element.quantity.value
    item.result = item.quantity * item.price;
    item.render();
}

item.element.result.onchange = function (e) {
    item.result = +item.element.result.value
    item.quantity = item.result / item.price;
    item.render();
}
*/