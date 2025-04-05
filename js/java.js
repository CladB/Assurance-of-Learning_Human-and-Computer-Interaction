function showAlert(message) {
    var alertBox = document.getElementById("custom-alert");
    var alertMessage = document.getElementById("custom-alert-message");
    
    alertMessage.innerHTML = message;
    alertBox.style.display = "block";
    
    setTimeout(function() {
        alertBox.style.display = "none";
    }, 3000);
}

function validateData(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var address = document.getElementById("address");
    var gender = document.getElementById("gender");
    var birthdate = document.getElementById("birthdate");
    var terms = document.getElementById("terms");
    var errorMessage = '';

    if(name.value.length < 1){
        showAlert("Name must be filled!");
    }

    else if(!email.value.endsWith("@gmail.com")){
        showAlert("Email must ends with @gmail.com")
    }

    else if(address.value.length < 10){
        alert("Address length must be at least 5 chars!");
    }

    else if (gender.value === '') {
        showAlert("Please select your gender!");
    }
    
    else if (birthdate.value === '') {
        showAlert("Please enter your birth date!");
    }

    else if (!terms.checked) {
        showAlert("You must agree to our Terms and Conditions and Privacy Policy to proceed.");
    }

    else {
        showAlert("Success Submit Data!");
    }
}