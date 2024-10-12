let inputField = document.getElementById("input");
let container = document.getElementById("container");
let div = document.createElement("div");
container.append(div);

document.getElementById("button").addEventListener("click", function(){

    div.innerHTML = "";
    
    let inputText = inputField.value.replace(/\s+/g, "");

    let inputLength = inputText.length;

    div.append(`Length of Text: ${inputLength}`);
});