
function addElement() {
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
        const text = document.createTextNode(document.querySelector('input').value);
        newDiv.appendChild(text);
        bigDiv.appendChild(newDiv);
        
        chrome.runtime.sendMessage({ prompt: searchInput }, (res) => {
          console.log(res.result);
          text = createTextNode(res.result);
          // text.nodeValue = res.result;
        });
        
        newDiv.appendChild(text);
}

console.log("poopoo");

chrome.storage.sync.get(["desiredMethod"]).then((result) => {
    console.log(result);
    console.log(result.desiredMethod);
    if (result.desiredMethod === "always") {
        console.log("in always");
        addElement();
    } else {
        const buttonDiv = document.createElement("button");
        buttonDiv.id = "epicbutton";
        buttonDiv.className = "pootton";
        const buttonText = document.createTextNode("Toggle");
        buttonDiv.appendChild(buttonText);
        document.getElementsByClassName("GyAeWb")[0].append(buttonDiv);

        document.getElementById("epicbutton").addEventListener("click", function() {
            buttonDiv.remove();
            addElement();
        })
        console.log("already out");
    }
});

