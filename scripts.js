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
  bloodSugarInfo.push(new UserBloodSugar(bsLevel, comment));

  console.log(bloodSugarInfo);

  // bloodSugarInfo.push(bsData);
  // bsAvgArr.push(bsData.sugarLevel);

  /* I think for this function to work we would need to pass the data from our objects inside
   * the array of numbers that we collected from our form. then we would count the objects inside  * *the array to build the average blood sugars.
   */
  const bloodSugarAverage = arr => {
    return arr.reduce((total, curr) => (total += curr)) / arr.length;
  };
  // To be honest, I'm not 100% certain this works, so this may need to be
  // checked out in some sort of capacity, considering we're dealing with a
  // function meant to take an average of blood sugar applicants.
  //console.log(bloodSugarAverage);
});
