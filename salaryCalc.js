$(document).ready(onReady);

function onReady() {
  $('#submitButton').on('click', submitEmployee);
  $('#removeButton').on('click', deleteEmployee);
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

  for (let employee of employees) {
    // Give each <td> tag a class
    // Select the <td> class via jQuery
    // Give the annualSalary a special class and add each appended annualSalary class
    // together to get the total salary for all employees
    table.append(`
  <tr>
  <td class="employeeFirstName">${employee.firstName}</td>
  <td class="employeeLastName">${employee.lastName}</td>
  <td class="employeeIdNumber">${employee.idNumber}</td>
  <td class="employeeJobTitle">${employee.jobTitle}</td>
  <td class="employeeAnnualSalary">$${employee.annualSalary}</td>
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
  }
}

function deleteEmployee() {}
