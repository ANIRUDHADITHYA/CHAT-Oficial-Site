export default function ValidateTwo(values){

    let errorsTwo = {};

    if(!values.domain){
        errorsTwo.domain = "Please Select your Domain"
    } else if(values.domain === "NA"){
        errorsTwo.domain = "Please Select your Domain"
    }else if(values.domain === "other"){
        if(!values.other.trim()){
            errorsTwo.other = "Enter your Domain"
        }
    }

    if(!values.project.trim()){
        errorsTwo.project = "Enter your Project Details"
    }

    return errorsTwo;

}
