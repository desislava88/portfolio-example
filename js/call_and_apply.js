console.log("1");
var animal1 = {
    name:"Karaman",
    type: "Hamster"
}

var animal2 = {
    name: "Jerry",
    type: "Mouse"
}
var animal = {
    printData:function(){
        return this.name + " is a " + this.type;
    }
}




document.getElementById("showResult").innerHTML = (animal.printData.call(animal1));
document.getElementById("showResult1").innerHTML = (animal.printData.call(animal2));

document.getElementById("ShowWithApply").innerHTML = (animal.printData.apply(animal1));
document.getElementById("ShowWithApply1").innerHTML = (animal.printData.apply(animal2));

//Add food, size,habittat
var animalDiscription = {
    printData:function(food, size, habitat){
        return this.name + " is a " + this.type + ". It's eat with " + food +  ". And it's a " + size + ". " + "It's live in  " + habitat + "."
    }
}

document.getElementById("showDiscription").innerHTML = (animalDiscription.printData.call(animal1, "carrot", "50 sm", " an aquarium"));
document.getElementById("showDiscription2").innerHTML = (animalDiscription.printData.call(animal2, "chease", "20 sm", " the field"));

//Sound animal
/* function animalSound() {
    alert(animal1.type + " sound: 'Cyk,cyr,cyk'");
    alert(animal2.type + " sound: 'Cyr, Cyr, Cyr'");
  } */

function animalSound(sound){
    alert(this.name + " is making " + sound + " sound.")
}

animalSound.call(animal1, "Cyk,cyr,cyk");
animalSound.call(animal2, "Cyk,cyr,cyk");


var update = function(food,size,habitat, /* color */){
    this.food = food;
    this.size = size;
    this.habitat = habitat;
   /*  this.color = color; */
}
console.log("Before");
console.log(animal1);
console.log(animal2);


update.call(animal1,"vegetarian", "20 cm", "forest");
update.call(animal2,"meet", "60 cm", "yard");

console.log("After:");
console.log(animal1);
console.log(animal2);


//Function without arguments
var dispatch = function(animalType, method, args){
    method.apply(animalType,args);
}

console.log("Before update: ");
console.log(animal2);

dispatch(animal2, update, ["grass", "66 cm", "yard",/*  "black" */]);

console.log("After update");
console.log(animal2);
