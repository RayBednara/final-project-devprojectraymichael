// Initializing an array (reduce() and map() functions only relate to arrays)
// const bloodSugarReadings = [];

// function bloodSugarAverage(arr) {
//   const sum = arr.reduce((total, curr) => total + curr);
//   return sum / arr.length;
// }

// constructor for bloodsugar data
function BloodSugarMgr() {
  this.readings = [];
}

// comments are optional
BloodSugarMgr.prototype.addReading = function(reading, comment) {
  this.readings.push({
    reading: Number(reading),
    comment: comment
  });
};

BloodSugarMgr.prototype.getAvg = function() {
  const total = this.readings.reduce((readingsTotal, reading) => {
    return readingsTotal + reading.reading;
  }, 0);
  return total / this.readings.length;
};

const bsm = new BloodSugarMgr();

document.querySelector("form").addEventListener("submit", ev => {
  // capture info entered into form
  ev.preventDefault();

  const bsLevel = document.querySelector("#blood-sugar-level").value;
  const comment = document.querySelector("#comments").value;

  bsm.addReading(bsLevel, comment);

  // // push data into array
  // bloodSugarReadings.push(new UserBloodSugar((bsLevel, comment)));

  // // map the array of data collected to pull out our bslevel data
  // let bsResults = bloodSugarInfo.map(bsdata => bsdata.bsLevel);
  // Number(bsResults);
  // const bloodSugarTotal = bsResults.reduce((total, curr) => (total += curr));

  // const bloodSugarAverage = bloodSugarTotal / bsResults.length;
});

document.querySelector("button").addEventListener("click", () => {
  bsm.getAvg();
  console.log(bsm.getAvg());
});
