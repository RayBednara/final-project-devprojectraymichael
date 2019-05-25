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
function createTR() {
  // const template = document.querySelector("#bsdata");
  const td = document.querySelectorAll("td");
  for (let i = 0; i < bsm.readings.length; i++)
    if (i === 0) {
      td[i].textContent = document.querySelector("#blood-sugar-level").value;
      td[i + 1].textContent = document.querySelector("#comments").value;
    } else if (i === 2) {
      td[i].textContent = document.querySelector("#blood-sugar-level").value;
      td[i + 1].textContent = document.querySelector("#comments").value;
    } else if (i === 4) {
      td[i].textContent = document.querySelector("#blood-sugar-level").value;
      td[i + 1].textContent = document.querySelector("#comments").value;
    } else if (i === 6) {
      td[i].textContent = document.querySelector("#blood-sugar-level").value;
      td[i + 1].textContent = document.querySelector("#comments").value;
    } else if (i === 8) {
      td[i].textContent = document.querySelector("#blood-sugar-level").value;
      td[i + 1].textContent = document.querySelector("#comments").value;
    } else if (i === 10) {
      td[i].textContent = document.querySelector("#blood-sugar-level").value;
      td[i + 1].textContent = document.querySelector("#comments").value;
    }
}

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
  if (bsm.getAvg() >= 70 && bsm.getAvg() <= 180) {
    para.classList.replace("colorText", "greenText");
  } else if (bsm.getAvg() == 0) {
    para.textContent = "Blood sugar has to be greater than 0.";
  } else {
    para.classList.replace("colorText", "redText");
  }
});
