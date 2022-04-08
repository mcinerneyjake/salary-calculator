$(document).ready(onReady);

function onReady() {
  $('#submitButton').on('click', submitEmployee);
}

function submitEmployee() {
  let firstName = $('#firstNameInput').val();
  let lastName = $('#lastNameInput').val();
  let idNumber = $('#idNumberInput').val();
  let jobTitle = $('#jobTitleInput').val();
  let annualSalary = $('#annualSalaryInput').val();
  let table = $('#tableRows');

  console.log(firstName, lastName, idNumber, jobTitle, annualSalary);

  table.append(`
  <td>${firstName}</td>
  <td>${lastName}</td>
  <td>${idNumber}</td>
  <td>${jobTitle}</td>
  <td>${annualSalary}</td>
  `);
}
