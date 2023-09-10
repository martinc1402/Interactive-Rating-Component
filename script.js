// Capture the Form Submission button in a variable
const btn = document.querySelector(".submit-button");

// Event Listener for the Form Submission Event
btn.addEventListener("click", formSubmission);


// Function for the Form Submission Event
function formSubmission() {
  // Capture radio buttons in variable
  let radioValue = document.getElementsByName('feedback');
    // Loop through all radio buttons
    for (i = 0; i < radioValue.length; i++) {
         // Check if a radio button is selected
         if (radioValue[i].checked) {
           formSuccess(radioValue[i]);
         }
    }
}


// Form Success function
function formSuccess(num) {
    console.log(num);
}





