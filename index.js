const richTextField = document.querySelector('#richTextField');
const boldButton = document.querySelector('#bold');

// Enable edit mode for iframe
function enableEditMode() {
  richTextField.contentDocument.designMode = 'on';
}

function executeCommand(command) {
  richTextField.contentDocument.execCommand(command, false, null);
}

// Start editable mode
function init() {
  enableEditMode()
}

// Executes the init function when the HTML loads on the page
window.onload = init;
