let LOG = console.log;

const pizzaArray = [
    {
        name: "pep",
        number: 3,
        price: 5
    }, {
        name: "mushroom",
        number: 3,
        price: 5
    }, {
        name: "mango",
        number: 3,
        price: 5
    }, {
        name: "pineapple",
        number: 3,
        price: 5
    }
    // "pep", "mushroom", "mango", "pineapple"
];

// console.log(pizzaArray[0].name);

const [pep, mushroom, mango, pineapple] = pizzaArray;

// console.log(pizzaArray[0]);
// console.log(typeof pep);

/* 
OBJECT DECONSTRUCTING
*/

var pizzaObj = {
    pepp: "monday",
    array: [
        1,
        2,
        3
    ], funFunction: function(name) {
        LOG(`I am ${name}'s function`);
    },
};

// LOG(pizzaObj["array"]);

// pizzaObj.funFunction();

const {pepStr, arrayArr, funFunction} = pizzaObj;

// funFunction("Kale");

var dogType = "pug";
var dog = {
    [dogType + `Bark`] (){
        LOG("I'm a pug");
},
};

const {pugBark} = dog;
pugBark()