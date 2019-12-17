var isMouseTracking = false;

function updateMousePosition() {
  if(isMouseTracking) {
    document.getElementById("mousePositionX").innerText = event.clientX;
    document.getElementById("mousePositionY").innerText = event.clientY;
  }
}

function toggleTracking(){
  isMouseTracking = !isMouseTracking
  if (isMouseTracking) {
    document.getElementById("trackingStatus").innerText = "TRACKING";
  }
  else {
    document.getElementById("trackingStatus").innerText = "NOT TRACKING";
  }  
}
