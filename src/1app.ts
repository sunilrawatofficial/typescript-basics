// export{}

class Father {
    
    getChildrenCount() {
        let count:number = 7
        console.log(`The father has ${count} kids`)
    }

    getFirstChildName() {
        console.log("Adam")
    }
}

let  f = new Father()

f.getChildrenCount();
