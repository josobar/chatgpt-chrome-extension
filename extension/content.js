function addElement() {
  const bigDiv = document.createElement("div");
  bigDiv.id = "BigDiv";
  bigDiv.className = "big";
  document.getElementsByClassName("GyAeWb")[0].append(bigDiv);

  // Title Div: ChatGPT
  const titleDiv = document.createElement("span");
  titleDiv.id = "Title Div";
  titleDiv.className = "title";
  const titleText = document.createTextNode("ChatGPT");
  titleDiv.appendChild(titleText);
  bigDiv.appendChild(titleDiv);

  // Text Div
  const newDiv = document.createElement("span");
  newDiv.id = "ChatGPT Google";
  newDiv.className = "text";
  const text = document.createTextNode("loading...");
  newDiv.appendChild(text);
  bigDiv.appendChild(newDiv);

  const searchInput = document.querySelector("input").value;

  chrome.runtime.sendMessage({ prompt: searchInput }, (res) => {
    console.log(res.result);
    text.nodeValue = res.result;
    // text.nodeValue = res.result;
  });

  newDiv.appendChild(text);
}

console.log("poopoo");

var onscreen = false;

chrome.storage.sync.get(["desiredMethod"]).then((result) => {
  console.log(result);
  console.log(result.desiredMethod);
  if (result.desiredMethod === "always") {
    console.log("in always");
    addElement();
  } else {
    const testDiv = document.createElement("button");
    const testText = document.createTextNode("Toggle");
    testDiv.id = "epicbutton";
    testDiv.appendChild(testText);
    document.getElementsByClassName("IC1Ck")[0].append(testDiv);

    document
      .getElementById("epicbutton")
      .addEventListener("click", function () {
        if (!onscreen) {
          addElement();
          onscreen = true;
        } else {
          console.log("Not on screen");
          document.getElementById("BigDiv").remove();
          onscreen = false;
        }
      });
    console.log("already out");
  }
});
