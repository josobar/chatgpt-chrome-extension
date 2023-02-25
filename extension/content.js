console.log("sfadflas;df");
document.body.onload = addElement;

function addElement() {
  // Encompassing Div
  const bigDiv = document.createElement("div");
  bigDiv.id = "BigDiv";
  bigDiv.className = "big";
  document.getElementsByClassName("GyAeWb")[0].append(bigDiv);

  // Title Div: ChatGPT
  const titleDiv = document.createElement("span");
  titleDiv.id = "Title Div";
  titleDiv.className = "title";
  const titleText = document.createTextNode("ChatGPT for Google");
  titleDiv.appendChild(titleText);
  bigDiv.appendChild(titleDiv);

  // Text Div
  const newDiv = document.createElement("span");
  newDiv.id = "ChatGPT Google";
  newDiv.className = "text";
  const text = document.createTextNode(document.querySelector("input").value);
  newDiv.appendChild(text);
  bigDiv.appendChild(newDiv);
}
