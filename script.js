/**Program
 * создать структуру данных (набор позиций с данными)
 * на ее основе создать DOM, описав необходимые обработчики событий для управления структурой данных
 */

// Инициализация DOM элементов
var baseListElement = document.getElementById("base-list");
var setListElement = document.getElementById("set-list");
var resultListElement = document.getElementById("result-list");
var addItemBtn = document.getElementById("add-item-btn");
var addCalculatorBtn = document.getElementById("add-calculator-btn");
var calculateBtn = document.getElementById("calculate-btn");


// Секция набора позиций
var list = [];

addItemBtn.onclick = function() {
    var item = new Item();
    list.push(item);
    setListElement.appendChild(createItemElement(item, list));
}

// Примеры
var item = new Item("кабель", 5, ["все", "материалы", "магистраль"]);
list.push(item);
setListElement.appendChild(createItemElement(item, list));


item = new Item("патчкорд", 10, ["все", "материалы", "шкаф"]);
list.push(item);
setListElement.appendChild(createItemElement(item, list));


item = new Item("сплиттер", 15, ["все", "оборудование", "шкаф"]);
list.push(item);
setListElement.appendChild(createItemElement(item, list));



// Секция базы шаблонов
for (var i=0; i<base.length; i++){
    var pattern = base[i];
    createPatternElement (pattern, list, baseListElement)
}


// Секция результатов расчета
var results = [];

addCalculatorBtn.onclick = function() {
    var calculator = new Сalculator ();
    results.push(calculator);
    resultListElement.appendChild(createCalculatorElement (calculator, list, calculateBtn, results))
}

// Пример
var calculator = new Сalculator (["все"])
results.push(calculator);
resultListElement.appendChild(createCalculatorElement (calculator, list, calculateBtn, results))

