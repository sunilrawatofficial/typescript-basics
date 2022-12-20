//union types
//It allows us to have more than one type of value assigned to a variable;
let unionData:any = "Peter"
unionData = 20;
console.log(unionData);

//best solution
let unionData2:number|string|boolean = "Peter"
unionData2 = true;
console.log(unionData2);



