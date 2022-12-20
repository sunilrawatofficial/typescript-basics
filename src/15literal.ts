//In practice string literal types combine nicely with union types, type guards, and type aliases. You can use these features together to get enum-like behavior with strings.

//type Easing = "ease-in" | "ease-out" | "ease-in-out";

//when we assign a VALUE to a to a value instead a type it becomes a literal
//applying actual value to a variable it becomes a literal type

function combine(a:number|string, b:Number|string, type:"as-number" | "as-string") {
    
    if(type === "as-number") {
        return (+a)+(+b);
    }else{
        return a.toString() + b.toString();
    }
}

console.log(combine(3, 7, "as-number"))