// onmessage listener
// fetch

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  var bod = { prompt: request.prompt };
  console.log(request.prompt);
  console.log(bod);
  fetch("http://localhost:3000/generate", {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bod),
  })
    .then((res) => {
      res.json().then((res) => sendResponse(res));
    })
    .catch((err) => {
      throw err;
    });

  return true;
});
