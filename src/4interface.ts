interface superHero{
    name:string;
    rank: number
    getDetails: ()=> void

}

let interUser : superHero = {
    name: "Peter",
    rank: 20,
    getDetails: function() {
        console.log(`${this.name} has rank ${this.rank}`)
    }
}
interUser.getDetails()