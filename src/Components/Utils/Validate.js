export default function Validate(values){

    let errors = {};


    if(!values.first_name.trim()){
        errors.first_name = "First Name Required"
    }

    if(!values.last_name.trim()){
        errors.last_name = "Last Name Required"
    }


    var birthday = values.dob; // Don't get Date yet...
    var regexVar = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/; // add anchors; use literal
    var regexVarTest = regexVar.test(birthday); // pass the string, not the Date
    var userBirthDate = new Date(birthday.replace(regexVar, "$3-$2-$1")); // Use YYYY-MM-DD format
    var todayYear = (new Date()).getFullYear(); // Always use FullYear!!
    var cutOff17 = new Date(); // should be a Date
    cutOff17.setFullYear(todayYear - 17); // ...
    var cutOff60 = new Date();
    cutOff60.setFullYear(todayYear - 60);
    if (!regexVarTest) { // Test this before the other tests
        errors.dob = "Date of Birth Required";
    } else if (isNaN(userBirthDate)) {
        errors.dob = "Date of Birth is invalid";
    } else if (userBirthDate > cutOff17) {
        errors.dob = "Age should be Greater than 17";
    } else if (userBirthDate < cutOff60) {
        errors.dob = "Age should be Less than 60";
    }

    if(!values.personal_email.trim()){
        errors.personal_email = "Personal Email Required"
    }/*else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.personal_email.trim())){
        errors.personal_email = "Enter valid Email Address"
    }*/

    if(!values.mobile){
        errors.mobile = "Mobile Number Required"
    } else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(values.mobile)){
        errors.mobile = "Enter valid Mobile Number"
    }

    if(!values.gender){
        errors.gender = "Please Select your Gender"
    } else if(values.gender === "NA"){
        errors.gender = "Please Select your Gender"
    }

    if(!values.department){
        errors.department = "Please Select your Department"
    } else if(values.department === "NA"){
        errors.department = "Please Select your Department"
    }

    if(!values.roll_number.trim()){
        errors.roll_number = "Roll Number Required"
    } else if(values.roll_number.substring(0,2) !== "RA"){
        errors.roll_number = "Roll Number starts with RA"
    } else if(!/^[a-zA-Z0-9]+$/.test(values.roll_number.trim())){
        errors.roll_number = "Enter valid Roll Number"
    }


    if(!values.current_year){
        errors.current_year = "Current year Required"
    } else if(values.current_year < 1){
        errors.current_year = "Select between 1 - 4"
    } else if(values.current_year > 4){
        errors.current_year = "Select between 1 - 4"
    }

    if(!values.official_email.trim()){
        errors.official_email = "Official Email Required"
    }/*else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.official_email.trim())){
        errors.official_email = "Enter valid Email Address"
    }*/

    return errors;
}