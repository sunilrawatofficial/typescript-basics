// different between unknown and any?
// when we dont know the value of variable whether it is string|number|boolean. Then we use unknown as a type to be defined.

let anyDataType:any;
anyDataType = 10;
anyDataType = "ad-hello"


let unknownDataType:unknown;
unknownDataType = 20;
unknownDataType = "ud-hello"
console.log("Any Data Type ", anyDataType);

console.log("Unknown Data Type ", unknownDataType);



let copiedData:string;
// the difference
copiedData = anyDataType;
// if(typeof unknownDataType === 'string'){
//     copiedData = unknownDataType; // here unknown stands out becuase ANY switches off the power of typescript however, unknown doesn't do it
// }


console.log("Unknown Data Type ", copiedData);



