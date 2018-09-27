// defining a class
var Animals = /** @class */ (function () {
    function Animals(limbs, typeOfAnimal, diet) {
        var _this = this;
        this.limbs = limbs;
        this.typeOfAnimal = typeOfAnimal;
        this.diet = diet;
        this.getDietType = function () {
            return _this.diet;
        };
        this.limbs = limbs;
        this.typeOfAnimal = typeOfAnimal;
        this.diet = diet;
    } // end constructor
    return Animals;
}()); // end class 
var lion = new Animals(4, "mammal", "carnivore");
var python = new Animals(0, "reptile", "carnivore");
console.log(lion.getDietType());
