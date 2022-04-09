$(document).ready(onReady);

function onReady() {
  $('#submitButton').on('click', submitEmployee);
  $(document).on('click', '.employeeData', deleteEmployee);
}

let employees = [];

function submitEmployee() {
  // Create employee object with necessary properties
  let employeeObject = {
    firstName: $('#firstNameInput').val(),
    lastName: $('#lastNameInput').val(),
    idNumber: $('#idNumberInput').val(),
    jobTitle: $('#jobTitleInput').val(),
    annualSalary: $('#annualSalaryInput').val(),
  };

  // Push employee object into employees array

  employees.push(employeeObject);

  // Loop through each entered employee
  let table = $('#tableRows');
  let deleteEmployee = `<button class="employeeDeleteButton">Delete</button>`;

  for (let employee of employees) {
    // Give each <td> tag a class
    // Select the <td> class via jQuery
    table.append(`
  <tr class= "employeeData">
  <td>${employee.firstName}</td>
  <td>${employee.lastName}</td>
  <td>${employee.idNumber}</td>
  <td>${employee.jobTitle}</td>
  <td>$${employee.annualSalary}</td>
  <td>${deleteEmployee}</td>
  </tr>
  `);

    // Empty employees array
    employees = [];

    // Empty text inputs
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idNumberInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');

    // Give the annualSalary a special class and add each appended annualSalary class
    // together to get the total salary for all employees
  }
}

function deleteEmployee() {
  $(this).remove();
}
