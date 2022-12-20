class test {
    name;
    constructor(name:string){
        this.name = name
    }
    getName():void {
        console.log(this.name);
    }
}

let t1 = new test("Peter Ben Parker");
t1.getName();