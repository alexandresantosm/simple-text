const richTextField = document.querySelector('#richTextField');

function enableEditMode() {
  richTextField.contentDocument.designMode = 'on';
}

function init() {
  enableEditMode()
}

window.onload = init;
