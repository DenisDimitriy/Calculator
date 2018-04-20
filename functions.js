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
    name.style.width = "400px";
    name.value = item.name;
    name.className = "name";
    name.onchange = function (e) {
      item.name = this.value;
    }

    var price = document.createElement("input");
    price.style.width = "50px";
    price.value = item.price;
    price.className = "price";
    price.onchange = function (e) {
      item.price = +this.value;
      item.result = item.quantity * item.price;
      result.value = item.result;
    }
    
    var quantity = document.createElement("input");
    quantity.style.width = "50px";
    quantity.value = item.quantity;
    quantity.className = "quantity";
    quantity.onchange = function (e) {
      item.quantity = +this.value;
      item.result = item.quantity * item.price;
      result.value = item.result;
    }
    
    var result = document.createElement("input");
    result.style.width = "50px";
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
    categories.style.width = "400px";
    categories.value = item.categories.join(", ");
    categories.className = "categories";
    categories.onchange = function (e) {
      item.categories = this.value.split(", ");
      categories.value = item.categories.join(", ");
    }

    itemElement.appendChild(name);
    itemElement.appendChild(price);
    itemElement.appendChild(quantity);
    itemElement.appendChild(result);
    itemElement.appendChild(remove);
    itemElement.appendChild(categories);

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
function matchingCategory (ruleCategory, itemCategory) {
    var matches = 0;
    for (var i=0; i<ruleCategory.length; i++){
        for(var j=0; j<itemCategory.length; j++){
            if (ruleCategory[i] == itemCategory[j]){
                matches++;
                break;
            }
        }
    }
    if (matches == ruleCategory.length) return true
}

/** Создать элемент базовой позиции */
function createBaseItemElement (baseItem, list, baseElement) {

    var baseItemElement = document.createElement("div");

    var nameElement = document.createElement("div");
    nameElement.style.display = "inline-block";
    nameElement.style.width = "600px";
    nameElement.style.margin = "0 20px";
    nameElement.innerHTML = baseItem.name;

    var priceElement = document.createElement("span");
    priceElement.innerHTML = baseItem.price;

    var addItemBtn = document.createElement("button");
    addItemBtn.innerHTML = "Добавить";
    addItemBtn.onclick = function () {
        var item = new Item(baseItem.name, baseItem.price, baseItem.categories);
        list.push(item);
        listElement.appendChild(createItemElement(item, list));
    }

    baseItemElement.appendChild(addItemBtn);
    baseItemElement.appendChild(nameElement);
    baseItemElement.appendChild(priceElement);

    baseElement.appendChild(baseItemElement);
}

function renderBaseElement (baseElement, base, list) {
    baseElement.innerHTML = "";
    for (var i=0; i<base.length; i++){
        var baseItem = base[i];
        createBaseItemElement (baseItem, list, baseElement);
    }
}


/** Создать селект базы */
function createSelectElement(optionArray, filter, baseOriginal, baseFiltered, baseElement, list, idSelect) {
    var selectElement = document.createElement("select");
    for (var i=0; i<optionArray.length; i++){
        var optionElement = document.createElement("option");
        optionElement.innerHTML = optionArray[i];
        selectElement.appendChild(optionElement);
    }
    
    console.log(baseOriginal);
    console.log(baseFiltered);
    filter[idSelect] = (selectElement.options[selectElement.selectedIndex].value);
    baseFiltered = filterBase (baseOriginal, filter);
    renderBaseElement(baseElement, baseFiltered, list)

    selectElement.onchange = function (e) {
        filter[idSelect] = (selectElement.options[selectElement.selectedIndex].value);
        baseFiltered = filterBase (baseOriginal, filter);
        renderBaseElement(baseElement, baseFiltered, list);
        console.log(baseOriginal);
        console.log(baseFiltered);
    }
    return selectElement;
}

function filterBase (baseOriginal, filter) {
    var baseFiltered = [];
    for (var i=0; i<baseOriginal.length; i++){
        if (matchingCategory(filter, baseOriginal[i].categories)){
            baseFiltered.push(baseOriginal[i]);
        }
    }
    return baseFiltered;
}