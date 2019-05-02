/**
 * 1. LISTEN for and HANDLE the 'submit' event.
 * 2. QUERY the DOCUMENT for the <form> fields and store those VALUES in variable(s).
 * 3. Be sure that both fields get concatenated into 1 'String.'
 * 4. Add those to an 'Array' that will hold all of the student names.
 * 5. Iterate over said 'Array', passing each of the names as arguments into console.log().
 */

//code from midterm project

document.querySelector("form").addEventListener("submit", ev => {
  // capture info entered into form
  ev.preventDefault();
  const bsLevel = document.querySelector("#blood-sugar-level").value;
  const comment = document.querySelector("#comments").value;

  // Write data to an Object
  const bsData = { sugarLevel: bsLevel, comments: comment };
  console.log(bsData);
});
