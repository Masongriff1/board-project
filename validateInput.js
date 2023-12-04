function validateInput(){
    event.preventDefault();
    let firstName = document.getElementById("fname").value;
    console.log(firstName);
    let lastName = document.getElementById("lname").value;
    console.log(lastName);
    let zip = document.getElementById("zip").value;
    console.log(zip);
}

window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("myForm");
    if(form) {
        form.addEventListener("submit", validateInput);
    }
});