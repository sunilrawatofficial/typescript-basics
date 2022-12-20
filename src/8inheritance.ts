export{}

class Thor {
    weapon:string;
    setName(weapon:string) {
        this.weapon = weapon
    }
}

class Love extends Thor {    

    getName() {
        return this.weapon
    }
}

let l1= new Love();
l1.setName("Storm Breaker")
console.log(l1.getName())