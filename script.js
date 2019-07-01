var selectedRow = null

var headingOne = document.getElementById('headingOne');
var headingTwo = document.getElementById('headingTwo');
var headingThree = document.getElementById('headingThree');
var headingFour = document.getElementById('headingFour');
var headingFive = document.getElementById('headingFive');

var ListHeadingOne = document.getElementById('ListHeadingOne');
var ListHeadingTwo = document.getElementById('ListHeadingTwo');
var ListHeadingThree = document.getElementById('ListHeadingThree');
var ListHeadingFour = document.getElementById('ListHeadingFour');
var ListHeadingFive = document.getElementById('ListHeadingFive');

headingOne.innerHTML = "Full Name";
headingTwo.innerHTML = "Staff Number";
headingThree.innerHTML = "Position";
headingFour.innerHTML = "Cell Number";
headingFive.innerHTML = "Email";

ListHeadingOne.innerHTML = headingOne.innerHTML;
ListHeadingTwo.innerHTML = headingTwo.innerHTML;
ListHeadingThree.innerHTML = headingThree.innerHTML;
ListHeadingFour.innerHTML = headingFour.innerHTML;
ListHeadingFive.innerHTML = headingFive.innerHTML;

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["fieldOne"] = document.getElementById("fieldOne").value;
    formData["fieldTwo"] = document.getElementById("fieldTwo").value;
    formData["fieldThree"] = document.getElementById("fieldThree").value;
    formData["fieldFour"] = document.getElementById("fieldFour").value;
    formData["fieldFive"] = document.getElementById("fieldFive").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("tableList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fieldOne;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fieldTwo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.fieldThree;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.fieldFour;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.fieldFive;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`
}

function resetForm() {
    document.getElementById("fieldOne").value = "";
    document.getElementById("fieldTwo").value = "";
    document.getElementById("fieldThree").value = "";
    document.getElementById("fieldFour").value = "";
    document.getElementById("fieldFive").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fieldOne").value = selectedRow.cells[0].innerHTML;
    document.getElementById("fieldTwo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("fieldThree").value = selectedRow.cells[2].innerHTML;
    document.getElementById("fieldFour").value = selectedRow.cells[3].innerHTML;
    document.getElementById("fieldFive").value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fieldOne;
    selectedRow.cells[1].innerHTML = formData.fieldTwo;
    selectedRow.cells[2].innerHTML = formData.fieldThree;
    selectedRow.cells[3].innerHTML = formData.fieldFour;
    selectedRow.cells[4].innerHTML = formData.fieldFive;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tableList").deleteRow(row.rowIndex);
        resetForm();
    }
}