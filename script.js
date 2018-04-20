
/** Инициализация DOM элементов */
var baseNavElement = document.getElementById("base-nav-element");
var baseElement = document.getElementById("base-element");
var listElement = document.getElementById("list-element");
var resultElement = document.getElementById("result-element");
var addItemBtn = document.getElementById("add-item-btn");
var addCalculatorBtn = document.getElementById("add-calculator-btn");
var calculateBtn = document.getElementById("calculate-btn");


/** Глобальные данные */

var list = [];

var result = [];

var filter = [];

var baseFiltered = [];


/** Секция базы позиций */

// Первый селект
var selectElement1 = createSelectElement(
    ["всі", "тмц", "бмр"],
    filter,
    base,
    baseFiltered,
    baseElement,
    list,
    0
);
baseNavElement.appendChild(selectElement1);

// Второй селект
var selectElement2 = createSelectElement(
    ["всі", "магістрально-розподільчий сегмент", "абонентський сегмент"],
    filter,
    base,
    baseFiltered,
    baseElement,
    list,
    1
)
baseNavElement.appendChild(selectElement2);


/** Секция набора позиций */

// Кнопка "Добавить пустую позицию"
addItemBtn.onclick = function() {
    var item = new Item();
    list.push(item);
    listElement.appendChild(createItemElement(item, list));
}


/** Секция результатов расчета */

// Кнопка "Добавить расчет"
addCalculatorBtn.onclick = function() {
    var calculator = new Сalculator ();
    result.push(calculator);
    resultElement.appendChild(createCalculatorElement (calculator, list, calculateBtn, result))
}

// Пример: расчет всех позиций (сумма всех позиций с категорией "все")
var calculator = new Сalculator (["всі"])
result.push(calculator);
resultElement.appendChild(createCalculatorElement (calculator, list, calculateBtn, result))



//Функция экспорта в эксель
function exportData() {
    var dataToExcele = list.concat(result);
    alasql("SELECT * INTO XLSX('calculator.xlsx',{headers:true}) FROM ? ",[dataToExcele]);
}
