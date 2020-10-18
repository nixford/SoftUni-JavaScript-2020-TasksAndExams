function solve() {   
   let chatBox = document.getElementById("chat_messages");
   let button = document.getElementById("send");

   button.addEventListener("click", function (e) {
      e.preventDefault();
      let message = document.getElementById("chat_input").value;

      let messageBox = document.createElement("div");
      messageBox.classList.add("message");
      messageBox.classList.add("my-message");
      let messageText = document.createTextNode(message);

      messageBox.appendChild(messageText);
      chatBox.appendChild(messageBox);

      document.getElementById("chat_input").value = "";
   })
}


