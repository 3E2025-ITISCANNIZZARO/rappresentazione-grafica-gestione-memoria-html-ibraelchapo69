
const allocaButton = document.getElementById("allocaButton");
const heapSegment = document.getElementById("heap");
const statusText = document.getElementById("status");


allocaButton.addEventListener("click", () => {

  if (heapSegment.style.height === "50%") {
    statusText.textContent = "Stato: Memoria Heap già allocata!";
    statusText.style.color = "red";
  } else {

    heapSegment.style.height = "50%"; 
    statusText.textContent = "Stato: Memoria Heap allocata!";
    statusText.style.color = "green";
  }
});
