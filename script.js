var myset = copyDeep(base);

console.log(base[0].name + ", price: " + base[0].price);
console.log(myset[0].name + ", price: " + myset[0].price);

myset[0].name = "odf";
myset[0].price = 90;

console.log(base[0].name + ", price: " + base[0].price);
console.log(myset[0].name + ", price: " + myset[0].price);
