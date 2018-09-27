// defining a class
class Animals {

    constructor(public limbs: number, public typeOfAnimal: string, public diet: string) {
        this.limbs = limbs;
        this.typeOfAnimal = typeOfAnimal;
        this.diet = diet;

    }// end constructor

    getDietType = () => {
        return this.diet
    }

}// end class 


let lion = new Animals(4, "mammal", "carnivore")
let python = new Animals(0, "reptile", "carnivore")
console.log(lion.getDietType())