console.log("sfadflas;df");
document.body.onload = addElement;

function addElement() {
    const newDiv = document.createElement("div");
    newDiv.id = "ChatGPT Google";
    newDiv.style.marginBottom = 20;
    newDiv.style.marginLeft = 30;
    newDiv.style.height = 30;
    const text = document.createTextNode(document.querySelector('input').value);
    newDiv.appendChild(text);
    document.getElementsByClassName("GyAeWb")[0].append(newDiv);

}


