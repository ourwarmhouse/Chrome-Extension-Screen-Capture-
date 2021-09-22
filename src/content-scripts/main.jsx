import React from 'react'
import ReactDOM from "react-dom"
import Popup from "./Popup"
import "@/styles/main.css"
console.log("HI FROM MAIN.jsx")
const MOUNT_EL_ID = "as-awesome-extension";

let mountEl = document.getElementById(MOUNT_EL_ID);
if (mountEl) {
  mountEl.innerHTML = "";
}
mountEl = document.createElement("div");
mountEl.setAttribute("id", MOUNT_EL_ID);
document.body.appendChild(mountEl);

ReactDOM.render(<Popup />, mountEl)

chrome.runtime.onMessage.addListener(message => {
  if (message.toggleVisible) {
    console.log("toggle visible")
  }
});
