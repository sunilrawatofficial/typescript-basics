var user = {
    name: "Peter",
    age: 25
};
user.name = "Peter Parker";
// user.name = 07; // diff type of value can not be reassigned
// // user.phone = 12345678;//// new value cannot be updated
//use type any to overcome these issues

console.log(user);

interface userType {
    name: string,
    age: number,
    address: any
}

let user2: userType = {
    name: "Clarke Kent",
    age: 28,
    address : 20 
}
console.warn(user2)
