const body = document.querySelector('body');
const richTextField = document.querySelector('#richTextField');
const buttons = document.querySelectorAll('button');
const boldButton = document.querySelector('#bold');
let showingSourceCode = false;
let isEditMode = true;

// Enable edit mode for iframe
function enableEditMode() {
  richTextField.contentDocument.designMode = 'on';
}

// Remove active class from button
function removeClassActive(target) {
  target.className = target.className.replace(" active", "");
}

// Selects the clicked button
function selectButton(event) {
  const target = event.target;
  const isActive = target.className.includes(" active")

  if (isActive) {
    removeClassActive(target);
  } else {
    target.className += " active";
  }
}

// Add click event to button
function listenForClick() {
  [...buttons].forEach(button => {
    button.addEventListener('click', selectButton);
  })
}

function executeCommand(command) {
  richTextField.contentDocument.execCommand(command, false, null);
}

function executeCommandWithArgument(command, argument) {
  richTextField.contentDocument.execCommand(command, false, argument);
}

function toggleSource() {
  if (showingSourceCode) {
    body.innerHTML = body.innerHTML.textContent;
    showingSourceCode = false;
  } else {
    body.innerHTML = body.innerHTML;
    showingSourceCode = true;
  }
}

function toggleEdit() {
  if (isEditMode) {
    richTextField.contentDocument.designMode = 'on';
    isEditMode = true;
  } else {
    richTextField.contentDocument.designMode = 'off';
    isEditMode = false;
  }
}

// Start editable mode
function init() {
  enableEditMode(),
  listenForClick()
}

// Executes the init function when the HTML loads on the page
window.onload = init;
