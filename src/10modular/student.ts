export default class Student {

    name:string;

    constructor(name:string){
        this.name = name
    }

    login() {
        console.log(`${this.name} student has logged in successfully`)
    }
}