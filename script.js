/**Program
 * создать структуру данных (набор позиций с данными)
 * на ее основе создать DOM, описав необходимые обработчики событий для управления структурой данных
 */

// Инициализация DOM элементов
var baseNavElement = document.getElementById("base-nav-element");
var baseElement = document.getElementById("base-element");
var listElement = document.getElementById("list-element");
var resultElement = document.getElementById("result-element");
var addItemBtn = document.getElementById("add-item-btn");
var addCalculatorBtn = document.getElementById("add-calculator-btn");
var calculateBtn = document.getElementById("calculate-btn");



var list = [];

var result = [];

var categorySelected;

var baseFiltered = [];

// Секция базы позиций


baseNavElement.appendChild(createSelectElement(["всі", "тмц", "бмр"], categorySelected, base, baseFiltered, baseElement, list))


//renderBaseElement (baseElement, base, list)


// Секция набора позиций
addItemBtn.onclick = function() {
    var item = new Item();
    list.push(item);
    listElement.appendChild(createItemElement(item, list));
}

/*
// Примеры
var item = new Item("кабель", 5, ["все", "материалы", "магистраль"]);
list.push(item);
listElement.appendChild(createItemElement(item, list));

item = new Item("патчкорд", 10, ["все", "материалы", "шкаф"]);
list.push(item);
listElement.appendChild(createItemElement(item, list));

item = new Item("сплиттер", 15, ["все", "оборудование", "шкаф"]);
list.push(item);
listElement.appendChild(createItemElement(item, list));
*/

// Секция результатов расчета

addCalculatorBtn.onclick = function() {
    var calculator = new Сalculator ();
    result.push(calculator);
    resultElement.appendChild(createCalculatorElement (calculator, list, calculateBtn, result))
}

// Пример
var calculator = new Сalculator (["всі"])
result.push(calculator);
resultElement.appendChild(createCalculatorElement (calculator, list, calculateBtn, result))
