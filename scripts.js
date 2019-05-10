/**
 * 1. LISTEN for and HANDLE the 'submit' event.
 * 2. QUERY the DOCUMENT for the <form> fields and store those VALUES in variable(s).
 * 3. Be sure that both fields get concatenated into 1 'String.'
 * 4. Add those to an 'Array' that will hold all of the student names.
 * 5. Iterate over said 'Array', passing each of the names as arguments into console.log().
 */

// code from midterm project

// Initializing an array (reduce() and map() functions only relate to arrays)
const bloodSugarInfo = [];

// Initializing an array purely to retrieve averages of all applicants.
const bsAvgArr = [];

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
  bloodSugarInfo.push(new UserBloodSugar((bsLevel, comment)));

  //console.log(bloodSugarInfo);

  // the accumulator is concatinating strings instead of treating the data as a number

  // map the array of data collected to pull out our bslevel data
  let bsResults = bloodSugarInfo.map.Number(bsdata => bsdata.bsLevel);
  // reduce the total bs data into one collection of numbers
  const bloodSugarTotal = bsResults.reduce((total, curr) => (total += curr));
  // average our collection into a usable number
  const bloodSugarAverage = bloodSugarTotal / bsResults.length;
  console.log(bloodSugarTotal);
  console.log(bsResults.length);
  console.log(bloodSugarAverage);
});
