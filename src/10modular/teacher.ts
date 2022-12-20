export default class teacher {

    name:string;

    constructor(name:string){
        this.name = name
    }

    login() {
        console.log(`${this.name} teacher has logged in successfully`)
    }
}