class polygon {
    constructor (sides) {
        this.sides = sides;
    }

    alertSides(){
        alert("this polygon has " + this.sides);
    }

    alertFormula(){
        alert("The area of this object is...");
    }
}

class square extends polygon{
    constructor (length){
        super(4);
        this.length = length;
    }

    area(){
        alert(this.length * this.length);
    }

    areaFormula(){
        super.alertFormula();
        alert("... length squared.");
    }
}

function charAtDemo() {
    var someText = fname.value;
    var lastLetter = someText.charAt(someText.length - 1);
    console.log(lastLetter);
    //document.getElementById("charAt").innerHTML = sum;
}

function validateInput(){
    event.preventDefault();
    let firstName = document.getElementById("fname").value;
    console.log(firstName);
    let lastName = document.getElementById("lname").value;
    console.log(lastName);
    let zip = document.getElementById("zip").value;
    console.log(zip);
    //Concatenate first and last name variables
    let firstLast = firstName + " " + lastName;
    console.log(firstLast);
    //Check if firstLast has fewer than 20 characters. Exit if thats the case.
    if(firstLast.length < 20){
        alert("Not enough characters. Your first and last name much have at least 20 characters.");
        return false;
    }
    //check if zip has 5 characters and is a number.
    if(zip.length != 5 || !(Number.isInteger(parseInt(zip)) && parseInt(zip) > 9999)) {
        alert("Invalid zip code. Zip must be a number of 5 digits.");
        console.log(typeof zip)
        return false;
    }
    console.log("validated!");
}

window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("myForm");
    if(form) {
        form.addEventListener("submit", validateInput);
    }

    var poly = new polygon(8);
    poly.alertFormula();
    poly.alertSides();

    var square = new square(3);
    square.alertFormula(); // polymorphism via method overriding
    square.area();
});