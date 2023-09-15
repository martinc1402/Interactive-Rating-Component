const btn = document.querySelector('#submit-button');
const output = document.querySelector('#output');
const radioButtons = document.querySelectorAll('input[name="feedback"]');
//Initiate a variable for the main div, to be used below
const mainContainer = document.getElementById('main-container');
// Initiate a variable for the alternate image and have it set as display none by default
let alternateImage = document.getElementById('icon-alternate');
alternateImage.style.display = 'none';
// Initiate a variable for the image container
let imageContainer = document.getElementById('img-container');

btn.addEventListener("click", () => {
  let selectedAmount;
  for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        selectedAmount = radioButton.value;
        break;
      }
  }

selectedAmount ? formSuccess(selectedAmount) : formFail();

//output.innerText = selectedAmount ? `You selected ${selectedAmount}` : `You haven't selected any size`;
});

function formSuccess(rating) {
  //In case the error message is still appearing we need to make it dissapear when the user does succesfully submit
  let errorRemove = document.getElementById('errorMessage');

  if(errorRemove) {
    errorRemove.style.display = 'none';
  }

//Remove elements that we no longer need
  let headingElement = document.getElementById('main-heading');
  headingElement.classList.remove("main-heading");
  let formElement = document.getElementsByClassName("rating-form");
  formElement[0].remove();
  let starImage = document.getElementById('icon');
  starImage.remove();
  // Change class for image container
  imageContainer.classList.remove('img-container');
  imageContainer.classList.add('img-container-alternate');

  //Add alternate image
  alternateImage.style.display = 'inline-block';

//Add a new heading in small orange text with the rating added dynamically
  headingElement.classList.add("main-heading-alternate");
  headingElement.innerHTML = `You selected ${rating} out of ${radioButtons.length}`;

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

function formFail() {
    //Create paragraph for error message
  let errorMessage = document.createElement("p");
   // Give it some content
   errorMessage.innerHTML = `Please input a rating before you submit`;
   // Give it some styling
   errorMessage.classList.add('error-message');
   //Give it an ID so we can target it with the set timeout function
   errorMessage.setAttribute("id", "errorMessage")
   // Add it to the div
   mainContainer.appendChild(errorMessage);
   //Remove the text after 10 seconds
   setTimeout(() => {
      let errorRemove = document.getElementById('errorMessage');
      //remove element from DOM
      errorRemove.style.display = 'none';
   }, 10000);
}

