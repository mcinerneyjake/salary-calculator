$(document).ready(onReady);

function onReady() {
  $('#submitButton').on('click', submitEmployee);
  $(document).on('click', '.employeeDeleteButton', deleteEmployee);
}

let employees = [];
let totalAnnualSalaryExpense = 0;

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
  let employeeDeleteButton = `<button class="employeeDeleteButton">Delete</button>`;

  for (let employee of employees) {
    // Give each <td> tag a class
    // Select the <td> class via jQuery
    // Prevent user error with inputs
    if (
      employee.firstName === '' ||
      employee.lastName === '' ||
      employee.idNumber === '' ||
      employee.jobTitle === '' ||
      employee.annualSalary === ''
    ) {
      alert('Please fill all inputs.');
    } else {
      table.append(`
  <tr class= "employeeData">
  <td>${employee.firstName}</td>
  <td>${employee.lastName}</td>
  <td>${employee.idNumber}</td>
  <td>${employee.jobTitle}</td>
  <td>$${employee.annualSalary}</td>
  <td>${employeeDeleteButton}</td>
  </tr>
  `);

      // Give the annualSalary a special class and add each appended annualSalary class
      // together to get the total salary for all employees

      // If totalMonthlySalaryExpense > $20,000, turn backgroud color of #monthlyCostAmount to red.

      let totalMonthlySalaryExpense = (totalAnnualSalaryExpense += parseInt(employee.annualSalary)) / 12;
      $('#monthlyCostAmount').empty();
      $('#monthlyCostAmount').append(totalMonthlySalaryExpense.toFixed(2));

      if (totalMonthlySalaryExpense >= 20000) {
        $('#monthlyCostAmount').css('color', 'red');
      }
    }

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

function deleteEmployee() {
  $(this).closest('tr').remove();
  //   $('#monthlyCostAmount');
}
