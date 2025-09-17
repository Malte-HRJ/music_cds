const form = document.querySelector("form");
const outputTable = document.querySelector("#cdOutput");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = getFormData(form);
  const tableRow = makeRow(data);
  outputTable.appendChild(tableRow);
  form.reset();
  ifTool(data);
});

function getFormData(form) {
  // @ gets our form at makes the data into a format that's easier to handle
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  return data;
}

function makeRow(data) {
  // @ gets our table row tamplate from the document, clones it at creates an array of all the cells
  const template = document.querySelector("#cdRow");
  const clone = template.content.querySelector("tr").cloneNode(true);
  const cloneCells = clone.querySelectorAll("td");
  // @ adding data to our row
  cloneCells[0].textContent = data.cdAuthor;
  cloneCells[1].textContent = data.cdTitle;
  cloneCells[2].textContent = data.cdYear;
  // @ adding delete functionality to button
  cloneCells[3].querySelector("button").addEventListener("click", () => {
    outputTable.removeChild(clone);
  });

  return clone;
}

// Disregard this code and don't ask; one of those ideas that happened before my adderall kicks in
// i'm an artist and the web is my medium

function ifTool(data) {
  if (data.cdAuthor.toLowerCase() != "tool") {
    return;
  } else {
    const audio = new Audio('assets/average_tool_fan.mp3');
    audio.play();
    audio.loop = true
    const threat = document.createElement("img");
    threat.classList.add("threat");
    threat.src = "assets/hands-up.jpg";
    threat.style.position = "fixed";
    threat.style.inset = "0px";
    threat.style.objectFit = "fill";
    threat.width = window.innerWidth;
    threat.height = window.innerHeight;

    const threatText = threat.cloneNode(true)
    threatText.src = "assets/trap-activated.gif"
    threatText.style.inset = "unset";
    threatText.style.top = "0"
    threatText.style.left = "0"
    threatText.style.right = "0"
    threatText.width = window.innerWidth;
    threatText.height = window.innerHeight / 8;
  
    document.body.appendChild(threat);
    document.body.appendChild(threatText)
  }
}
