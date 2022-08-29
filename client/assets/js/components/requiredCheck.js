import { addClass, removeClass } from "./displayElements.js";
import { AddEvent } from "./AddEvent.js";
const formFields = new AddEvent();

export function requiredCheck() {

    let validity = true;

    if (formFields.formName.value === "" && formFields.formName.value.length <= 255) {
        validity = false;
        addClass("errorfields", formFields.formName);
        removeClass("goodfields", formFields.formName);
    } else {
        addClass("goodfields", formFields.formName);
        removeClass("errorfields", formFields.formName);
    }

    if (formFields.formDescription.value === "" && formFields.formDescription.value.length <= 255) {
        addClass("errorfields", formFields.formDescription);
        removeClass("goodfields", formFields.formDescription);
        validity = false;
    } else {
        addClass("goodfields", formFields.formDescription);
        removeClass("errorfields", formFields.formDescription);
    }
    validity = requiredDate();
    return validity;
    // TO DO Date Verification 


}
function requiredDate() {
    let validity;

    const requiredDate = formFields.selectedDate.querySelectorAll('li')
    if (requiredDate.length <= 0) {
        document.querySelector('.form__selectedDate--feedback').innerText = "Please put a date valid coco ;)";
        validity = false;
    } else {
        document.querySelector('.form__selectedDate--feedback').innerText = "";
    }


    return validity;
}
