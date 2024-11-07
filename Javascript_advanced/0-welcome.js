function welcome(firstName, lastName) {
    firstName = 'Marie';
    lastName = 'Bienaimee';
    
    let fullName = `${firstName} ${lastName}`;
    function displayFullName() {
        alert ("Welcome " + fullName + "!");
    }
    displayFullName();
}
welcome();