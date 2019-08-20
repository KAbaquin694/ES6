"use-strict"

var a = "Test1";
let b = "Test2";

() => consolo.log();

const testVar = (params) => {
    const a = 30;
    if(true) {
        let a = 50;
        console.log(a);
    }
    console.log(`other A: ${a}`);
}

console.log(`_Logged: ${a}`);

testVar();

// const _list = [0,1,2,3];
// const _items = [4,5,6];
// _list.push(_items);
// console.log(`_Logged ${_list}`);