let employee = {
    streetAddress: '',
    name: ''
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, { [key] : value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee);
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee;
}

    

