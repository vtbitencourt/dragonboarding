var usernameInput = document.getElementById("username")
var sendButton = document.getElementById("send")
var cirlcleMatcherURL = "https://charles-prod.continuousplatform.com/charlescd-circle-matcher/identify"

sendButton.addEventListener("click", function() {
  var value = usernameInput.value
  var payload = {
    workspaceId: "4a7b9ec7-82f9-4b87-abd0-f4d6334dd1e3",
    requestData: {
      username: value
    }
  }

  fetch(cirlcleMatcherURL, {
    method: "POST",
    body: JSON.stringify(payload)
  })
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => alert("Nao foi possivel solicitar o circle matcher: " + err))
})
