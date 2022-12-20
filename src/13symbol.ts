//In Typescript symbol is a primitive data type. A primitive data type is not an object, 
//it possesses no properties or methods and they cannot be altered. The symbol type is similar to other types such as number, 
//string, boolean, etc. Symbol values are created using the Symbol constructor.
//Symbol()  // OR
//Symbol("string")

// Creating a symbol normally
let symbol1 = Symbol();
console.log(symbol1);

// Creating a symbol with an optional key
let symbol2 = Symbol("abc");
console.log(symbol2);


console.log(symbol1 == symbol2);
console.log(symbol1 === symbol2);

class symbolClass {

    symbol1() {
        return "SymbolClass";
    }

}

let obj = new symbolClass();
console.log(obj.symbol1())
