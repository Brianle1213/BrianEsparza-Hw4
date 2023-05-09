// homework4.js

//display when "review" is clicked
function displayData() {
    var name = document.getElementById("FirstName").value;
    var middle = document.getElementById("MiddleInitial").value;
    var last = document.getElementById("LastName").value;
    var DOB = document.getElementById("DOB").value;
    var ssn = document.getElementById("ssn").value;
    var Address1 = document.getElementById("Address1").value;
    var Address2 = document.getElementById("Address2").value;
    var City = document.getElementById("City").value;
    var Zip = document.getElementById("Zip").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var ReEnterPassword = document.getElementById("ReEnterPassword").value;



    if (FirstName === "" || MiddleInitial ==="" || LastName === "" || ssn === "" || Address1 === "" || City === "" || Zip === "" || DOB === "" ||
    email === "" || phone === "" || username === "" || password ==="" || ReEnterPassword === "" ) {
      alert("Form is incomplete, fill in any fields you left blank.");
    } else {
      alert("Form is complete and ready to submit! Review your info... Please make sure the following personal informaiton is correct\n" 
      + "\nName: " + name + " " + middle + ". " + last + "\nDate of Birth: " + DOB + "\nSSN: " + ssn + "\nAddress: " + Address1 
      + Address2 + ", " + City + ", " + Zip + "\nEmail: " + email + "\nPhaone Number: " + phone +
      "\nUser Name: " + username );
      document.getElementById("submit").disabled = false;
    }


}
//Provides current date
function reviewData() {
    alert(dataString); }

    var today = new Date();
    var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
    document.getElementById("date").innerHTML = "Today's date is " + date;

//First Name
    function validateFirstName() {
        const firstNameInput = document.getElementById("FirstName");
        const firstName = firstNameInput.value;
        const firstNameRegex = /^[a-zA-Z'-]{1,30}$/;

        if (!firstNameRegex.test(firstName)) {
            document.getElementById("FirstName-error").innerHTML = "Error: First name should not exceed 30 characters and cannot contain numbers, spaces, or special characters.".fontcolor("red");
            document.getElementById("FirstName-error2").innerHTML = "Invalid First Name".fontcolor("red");
        } else {
            document.getElementById("FirstName-error").innerHTML = "";
            document.getElementById("FirstName-error2").innerHTML = "";
        }
    }

//Middle Initial
function validateMiddleInitial() {
    const MiddleInitialInput = document.getElementById("MiddleInitial");
    const MiddleInitial = MiddleInitialInput.value;

    // Check if the key pressed is a letter
    if (/[^a-zA-Z]/.test(MiddleInitial)) {
        MiddleInitialInput.value = MiddleInitial.replace(/[^a-zA-Z]/g, '');
    }
}

//Last Name
function validateLastName() {
    const LastNameInput = document.getElementById("LastName");
    const LastName = LastNameInput.value;
    const LastNameRegex = /^[a-zA-Z'-]{1,30}$/;

    if (!LastNameRegex.test(LastName)) {
        document.getElementById("LastName-error").innerHTML = "Error: Last Name should not exceed 30 charactes and cannot contain spaces or special characters.".fontcolor("red");
        document.getElementById("LastName-error2").innerHTML = "Invalid Last Name".fontcolor("red");
    } else {
        document.getElementById("LastName-error").innerHTML = "";
        document.getElementById("LastName-error2").innerHTML = "";
    }
}

//DOB
    function validateBirthday() {
        var inputDate = new Date(document.getElementById("DOB").value);
        var minDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 120);
        if (isNaN(inputDate.getTime()) || inputDate > new Date() || inputDate < minDate) {
          document.getElementById("DOB-error").innerHTML = "Please enter a valid date";
          document.getElementById("DOB-error2").innerHTML = "Date of Birth cannot be in the future and must be within the last 120 years.".fontcolor("red");

        } else {
          document.getElementById("DOB-error").innerHTML = "";
          document.getElementById("DOB-error2").innerHTML = "";

        }
      }

//ZIP Code
      function validateZip() {
        var ZipInput = document.getElementById("Zip").value;
        var regex = /^\d{5}(-\d{4})?$/;
        if (!regex.test(ZipInput)) {
            document.getElementById("ZipError").innerHTML = "Invalid zip code";
            document.getElementById("Zip-error2").innerHTML = "Error: Zip code can only be 5 digits long".fontcolor("red");
        } else {
            document.getElementById("ZipError").innerHTML = "";
            document.getElementById("Zip-error2").innerHTML = "";

        }
    }

//Email
function validateEmail() {
    var email = document.getElementById("email").value;
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!pattern.test(email)) {
        document.getElementById("error").innerHTML = "Please enter a valid email address. example@domain.com";
        return false;
    }
    document.getElementById("error").innerHTML = "";
    return true;
}

document.getElementById("email").addEventListener("blur", function() {
    var email = document.getElementById("email").value.toLowerCase();
    document.getElementById("email").value = email;
});


//Address 
function validateAddress1() {
    const Address1Input = document.getElementById("Address1");
    const Address1 = Address1Input.value;
    const Address1Regex = /^[a-zA-Z0-9,\.\-' ]{2,30}$/;

    if (!Address1Regex.test(Address1)) {
        document.getElementById("Address1-error").innerHTML = "Invalid Address".fontcolor("red");
        document.getElementById("Address1-error2").innerHTML = "Address must contain only letters, numbers, dashes, commas, and periods and must be between 2-30 characters long".fontcolor("red");

        return false;
    } else {
        document.getElementById("Address1-error").innerHTML = "";
        document.getElementById("Address1-error2").innerHTML = "";
        return true;
    }
}
//Address 2
function validateAddress2() {
    const Address2Input = document.getElementById("Address2");
    const Address2 = Address2Input.value;
    const Address2Regex = /^[a-zA-Z0-9,\.\-' ]{0,30}$/;

    if (!Address2Regex.test(Address2)) {
        document.getElementById("Address2-error").innerHTML = "Invalid Address".fontcolor("red");
        document.getElementById("Address2-error2").innerHTML = "Address must contain only letters, numbers, dashes, commas, and periods and must be shorter than 30 characters long".fontcolor("red");

        return false;
    } else {
        document.getElementById("Address2-error").innerHTML = "";
        document.getElementById("Address2-error2").innerHTML = "";
        return true;
    }
}
//City
function validateCity() {
    const CityInput = document.getElementById("City");
    const City = CityInput.value;
    const CityRegex = /^[a-zA-Z,\.\-' ]{2,30}$/;

    if (!CityRegex.test(City)) {
        document.getElementById("City-error").innerHTML = "Invalid City".fontcolor("red");
        document.getElementById("City-error2").innerHTML = "Error: City must be 2-30 charactesr long and cannot contain numbers or special characters.".fontcolor("red");

        return false;
    } else {
        document.getElementById("City-error").innerHTML = "";
        document.getElementById("City-error2").innerHTML = "";
        return true;
    }
}



