$(document).ready(onReady);

function onReady() {
  $('#submitButton').on('click', submitEmployee);
  $(document).on('click', '.employeeDeleteButton', deleteEmployee);
}

let employees = [];
let employeesToDelete = [];
let totalAnnualSalaryExpense = 0;

function submitEmployee() {
  let employeeObject = {
    firstName: $('#firstNameInput').val(),
    lastName: $('#lastNameInput').val(),
    idNumber: $('#idNumberInput').val(),
    jobTitle: $('#jobTitleInput').val(),
    annualSalary: $('#annualSalaryInput').val(),
  };

  employees.push(employeeObject);

  employeesToDelete.push(employeeObject);

  let table = $('#tableRows');
  let employeeDeleteButton = `<button class="employeeDeleteButton">Delete</button>`;

  for (let employee of employees) {
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
  <td class="salary">$${employee.annualSalary}</td>
  <td>${employeeDeleteButton}</td>
  </tr>
  `);

      let totalMonthlySalaryExpense = (totalAnnualSalaryExpense += parseInt(employee.annualSalary)) / 12;
      $('#monthlyCostAmount').empty();
      $('#monthlyCostAmount').append(totalMonthlySalaryExpense.toFixed(2));

      if (totalMonthlySalaryExpense >= 20000) {
        $('#monthlyCostAmount').css('color', 'red');
      }
    }
  }
  employees = [];

  $('.inputStyling').val('');
}

function deleteEmployee() {
  $(this).closest('tr').remove();
  $(this).closest('.salary').text('poopy butt hole');
}
