/// <reference path = "./utils.ts" />
namespace UsersUtils {
    
   export class  Users  extends Parent {
        getName() {
            return this.name
        }
    }
}
let yA1 = new  UsersUtils.Users()

// yA1.setName("Captain America")
console.log(yA1.getName())