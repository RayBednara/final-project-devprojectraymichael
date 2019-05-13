const para = document.querySelector("p");
// constructor for bloodsugar data
function BloodSugarMgr() {
  this.readings = [];
}

function bsRender(str) {
  para.classList.remove("is-hidden");

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

function createTR() {
  var template = document.querySelector("#bsdata");
  var td = document.querySelectorAll("td");
  let i = 0;

  td[i].textContent = document.querySelector("#blood-sugar-level").value;
  td[i + 1].textContent = document.querySelector("#comments").value;
  i++;
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
  bsm.getAvg();
  bsRender(`Average blood sugar is: ${bsm.getAvg()}`);
});

console.log(bsm.getAvg());
