function addButton() {
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "button");
    inputElement.setAttribute("value","New Button");
    // var buttonText = document.createTextNode("New Button");
    // inputElement.appendChild(buttonText);

    var parent = document.getElementById("memeParagraph");
    parent.appendChild(inputElement);

    var newParagraph = document.createElement("p");
    newParagraph.appendChild(paragraphText),

    parent.appendChild(newParagraph);
}