$(document).ready(onReady);

function onReady() {
  $('#submitButton').on('click', submitEmployee);
}

function submitEmployee() {
  console.log('button works');
}
