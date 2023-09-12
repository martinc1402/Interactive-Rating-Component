// Capture the Form Submission button in a variable
const btn = document.querySelector(".submit-button");


// Event Listener for the Form Submission Event
btn.addEventListener("click", formSubmission);

//Initiate a variable for the main div, to be used below
const mainContainer = document.getElementById('main-container');

// Initiate variable for feedback rating value
let feedbackRating = 0;

// Function for the Form Submission Event
function formSubmission() {
  // see if a radio button is checked
feedbackRating = document.querySelector('input[name="feedback"]:checked').value;
//if a button is checked the value will be above 0
if (feedbackRating > 0) {
  formSuccess(feedbackRating);
} else {
  formFail();
}
}

// Form success function - i.e. an actual rating has been selected and submitted
function formSuccess(rating) {
  // Variable to count number of Radio Buttons
  const radioButtons = document.querySelectorAll('input[name="feedback"]').length;
  
  //Remove elements that we no longer need
  let headingElement = document.getElementById('main-heading');
  headingElement.classList.remove("main-heading");
  let formElement = document.getElementsByClassName("rating-form");
  formElement[0].remove();

 

     



  //Add a new heading in small orange text with the rating added dynamically
  headingElement.classList.add("main-heading-alternate");
  headingElement.innerHTML = `You selected ${rating} out of ${radioButtons}`;

// Add a larger 'thank you' subheading
const newHeading = document.createElement("h2");
 // Give it some content
 newHeading.innerHTML = `Thank you!`;
// Give it the right class
newHeading.classList.add("sub-heading-alternate");
// Add it to the div
 mainContainer.appendChild(newHeading);

//Add a paragraph with a message of appreciation
const newPara = document.createElement("p");
// Give it some content
newPara.innerHTML = `We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`;
// Give it a class
newPara.classList.add('rating-description-alternate');
//Add it to the div
mainContainer.appendChild(newPara);
}


