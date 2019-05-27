const para = document.querySelector("p");
// constructor for bloodsugar data
function BloodSugarMgr() {
  this.readings = [];
}

function bsRender(str) {
  para.textContent = str;
}

// comments are optional
BloodSugarMgr.prototype.addReading = function(reading, comment) {
  this.readings.push({
    reading: Number(reading),
    comment
  });
};

BloodSugarMgr.prototype.getAvg = function() {
  const total = this.readings.reduce(
    (readingsTotal, reading) => readingsTotal + reading.reading,
    0
  );
  return total / this.readings.length;
};

const bsm = new BloodSugarMgr();


// TODO: Work with the createTR function to get more functionality
function createTR()
{
  const bsInput = document.querySelector("#blood-sugar-level").value;
  const comments = document.querySelector("#comments").value;
  // selects the table element
  const table = document.getElementsByTagName('table')[0];
  // creates new table row
  const newRow = table.insertRow(1);

  const cellOne = newRow.insertCell(0);
  const cellTwo = newRow.insertCell(1);


  cellOne.innerHTML = bsInput;
  cellTwo.innerHTML = comments;
};

document.querySelector("form").addEventListener("submit", ev => {
  // capture info entered into form
  ev.preventDefault();

  const bsLevel = document.querySelector("#blood-sugar-level").value;
  const comment = document.querySelector("#comments").value;

  bsm.addReading(bsLevel, comment);
  createTR();
});

document.querySelector("button").addEventListener("click", () => {
  const averageString = `The average blood sugar of all applicants is ${bsm.getAvg()} mg/dl.`;
  bsRender(averageString);
  // TODO: Work with this section to change when it crosses over a threshold and not just at the point when it is first loaded.
  if (bsm.getAvg() >= 70 && bsm.getAvg() <= 180) {
    para.classList.replace("colorText", "greenText");
  } else if (bsm.getAvg() == 0) {
    para.textContent = "Blood sugar has to be greater than 0.";
  } else {
    para.classList.replace("colorText", "redText");
  }
});
