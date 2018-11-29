// insert delete update display without using any framework
var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["empname"] = document.getElementById("empname").value;
    formData["empid"] = document.getElementById("empid").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("empList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.empname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empid;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("empname").value = "";
    document.getElementById("empid").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("empname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empid").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.empname;
    selectedRow.cells[1].innerHTML = formData.empid;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("empList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("empname").value == "") {
        isValid = false;
        document.getElementById("empnameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("empnameValidationError").classList.contains("hide"))
            document.getElementById("empnameValidationError").classList.add("hide");
    }
    return isValid;
}
