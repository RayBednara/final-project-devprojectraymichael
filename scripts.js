// Initializing an array (reduce() and map() functions only relate to arrays)
const bloodSugarReadings = [];

function bloodSugarAverage(arr) {
  const sum = arr.reduce((total, curr) => total + curr);
  return sum / arr.length;
}

// constructor for bloodsugar data
function UserBloodSugar(bsLevel, comment) {
  this.bsLevel = bsLevel;
  this.comment = comment;
}

document.querySelector("form").addEventListener("submit", ev => {
  // capture info entered into form
  ev.preventDefault();
  const bsLevel = document.querySelector("#blood-sugar-level").value;
  const comment = document.querySelector("#comments").value;

  // push data into array
  bloodSugarReadings.push(new UserBloodSugar((bsLevel, comment)));

  // map the array of data collected to pull out our bslevel data
  let bsResults = bloodSugarInfo.map(bsdata => bsdata.bsLevel);
  Number(bsResults);
  const bloodSugarTotal = bsResults.reduce((total, curr) => (total += curr));

  const bloodSugarAverage = bloodSugarTotal / bsResults.length;
});
