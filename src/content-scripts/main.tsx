import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom"
import Popup from "./Popup"
import "@/styles/main.css"

const MOUNT_EL_ID = "as-awesome-extension";

let mountEl = document.getElementById(MOUNT_EL_ID);
if (mountEl) {
  mountEl.innerHTML = "";
}
mountEl = document.createElement("div");
mountEl.setAttribute("id", MOUNT_EL_ID);
document.body.appendChild(mountEl);
renderPopup()
mountEl.hidden = true

chrome.runtime.onMessage.addListener(message => {
  if (message.toggleVisible) {
    renderPopup()

    if (mountEl) {
      mountEl.hidden = !mountEl.hidden
    }
  }
});


function renderPopup() {
  ReactDOM.render(<Popup />, mountEl)
}