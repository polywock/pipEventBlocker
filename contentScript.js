
function handlePiP(e) {
  e.stopImmediatePropagation()
}

window.addEventListener("enterpictureinpicture", handlePiP, {capture: true, passive: true});
window.addEventListener("leavepictureinpicture", handlePiP, {capture: true, passive: true});