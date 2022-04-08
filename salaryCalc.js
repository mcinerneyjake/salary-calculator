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

  table.append(`
  <tr>
  <td>${firstName}</td>
  <td>${lastName}</td>
  <td>${idNumber}</td>
  <td>${jobTitle}</td>
  <td>${annualSalary}</td>
  </tr>
  `);
}
