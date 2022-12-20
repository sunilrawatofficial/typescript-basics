//example of never type
//different between never and void 
//where it should be used

// when a function never returns anything it is of never type;
// By default is it always void, and it will always returns even if it is undefined
// where as never funciton always comes to play a part when due to execution error it return nothing.


function getName() {

}
console.log("called getName()", getName())//void but still print undefined
// //example
// function apiCall(message:string, code:number):never {
//     try {
//         throw {message, code}
//     } catch (error) {
//         throw error
//     }
// }

// console.log(apiCall("User not found", 500));
