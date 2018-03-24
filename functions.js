/** Глубокое копирование объектов */
function copyDeep(donor) {
    var recipient
    var typeString = {}.toString.call(donor);
    switch (typeString) {
        case "[object Object]":
            recipient = {};
            for (var key in donor) {
                recipient[key] = copyDeep(donor[key]);
            }
            break;

        case "[object Array]":
            recipient = []
            for (var i = 0; i < donor.length; i++) {
                recipient[i] = copyDeep(donor[i]);
            }
            break;

        default:
            recipient = donor
            break;
    }
    return recipient
}

/** Создать элемент позиции */
function createItemElement(item, list) {
    var itemElement = document.createElement("div");
    itemElement.className = "item";
    
    var name = document.createElement("input");
    name.value = item.name;
    name.className = "name";
    name.onchange = function (e) {
      item.name = this.value;
    }

    var price = document.createElement("input");
    price.value = item.price;
    price.className = "price";
    price.onchange = function (e) {
      item.price = +this.value;
      item.result = item.quantity * item.price;
      result.value = item.result;
    }
    
    var quantity = document.createElement("input");
    quantity.value = item.quantity;
    quantity.className = "quantity";
    quantity.onchange = function (e) {
      item.quantity = +this.value;
      item.result = item.quantity * item.price;
      result.value = item.result;
    }
    
    var result = document.createElement("input");
    result.value = item.result;
    result.className = "result";
    result.onchange = function (e) {
      item.result = +this.value;
      item.quantity = item.result / item.price;
      quantity.value = item.quantity;
    }

    var remove = document.createElement("button");
    remove.innerHTML = "удалить";
    remove.className = "remove-item-btn";
    remove.onclick = function (e) {
        var index = list.indexOf(item);
        list.splice(index, 1);
        itemElement.parentElement.removeChild(itemElement);
    }

    var categories = document.createElement("input");
    categories.value = item.categories.join(", ");
    categories.className = "categories";
    categories.onchange = function (e) {
      item.categories = this.value.split(", ");
      categories.value = item.categories.join(", ");
    }

    itemElement.appendChild(name);
    itemElement.appendChild(categories);
    itemElement.appendChild(price);
    itemElement.appendChild(quantity);
    itemElement.appendChild(result);
    itemElement.appendChild(remove);

    return itemElement;
}

/** Создать элемент калькулятора */
function createCalculatorElement (calculator, list, calculateBtn, results) {
    
    var calcElement = document.createElement("div");

    var categoriesElement = document.createElement("input");
    categoriesElement.value = calculator.categories.join(", ");
    categoriesElement.onchange = function (e) {
        calculator.categories = this.value.split(", ");
        categoriesElement.value = calculator.categories.join(", ");
    }

    var resultElement = document.createElement("span");

    var removeElement = document.createElement("button");
    removeElement.innerHTML = "удалить";
    removeElement.className = "remove-calculator-btn";
    removeElement.onclick = function (e) {
        var index = results.indexOf(calculator);
        results.splice(index, 1);
        calcElement.parentElement.removeChild(calcElement);
    }

    calcElement.appendChild(removeElement);
    calcElement.appendChild(categoriesElement);
    calcElement.appendChild(resultElement);

    calculateBtn.addEventListener("click", calculate);

    function calculate () {
        console.log("works");
        calculator.result = 0;
        list.forEach(item => {
            if (matchingCategory(calculator.categories, item.categories)){
                calculator.result += item.result;
            }
        });
        resultElement.innerHTML = calculator.result;
    }

    return calcElement;
}

/** Проверить соответствие массивов категорий */
function matchingCategory (ruleArray, itemArray) {
    var matches = 0;
    for (var i=0; i<ruleArray.length; i++){
        for(var j=0; j<itemArray.length; j++){
            if (ruleArray[i] == itemArray[j]){
                matches++;
                break;
            }
        }
    }
    if (matches == ruleArray.length) return true
}

/** Создать элемент шаблона */
function createPatternElement (pattern, list, baseListElement) {

    var patternElement = document.createElement("div");

    var nameElement = document.createElement("span");
    nameElement.innerHTML = pattern.name;

    var priceElement = document.createElement("span");
    priceElement.innerHTML = pattern.price;

    var addItemBtn = document.createElement("button");
    addItemBtn.innerHTML = "Добавить";
    addItemBtn.onclick = function () {
        var item = new Item(pattern.name, pattern.price, pattern.categories);
        list.push(item);
        setListElement.appendChild(createItemElement(item, list));
    }

    patternElement.appendChild(addItemBtn);
    patternElement.appendChild(nameElement);
    patternElement.appendChild(priceElement);

    baseListElement.appendChild(patternElement);
}