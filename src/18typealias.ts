//declare a common type for all varibale
//in short- define type like a varibale and reuse it

//type alias with varibale
type varType =  string| number| boolean| undefined;
let age:varType = 19;



//type alias with function param
function votingEligibilityCheck(age: number): boolean {    
    console.log(`Age is ${age} `)
    return age > 18
}

console.log(votingEligibilityCheck(age))