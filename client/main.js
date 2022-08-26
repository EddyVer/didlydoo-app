import { addClass, removeClass, toggleClass } from "./assets/js/components/displayElements.js";
import { FormData } from "./assets/js/components/FormData.js";
import { requiredCheck } from "./assets/js/components/requiredCheck.js";

const btnAddEvent = document.querySelector('.action__add');
const btnShowDate = document.querySelector('.form__showAddDate');
const formContainer = document.querySelector('.form');
const formDate = document.querySelector('.form__date');
const formDateInput = document.querySelector('.form__date__input');
const btnAddDate = document.querySelector('.form__date__add');
const btnFormSend = document.querySelector('.form__send');

const formData = new FormData();

btnAddEvent.addEventListener('click', () => toggleClass('isHidden', formContainer));
btnShowDate.addEventListener('click', () => toggleClass('isHidden', formDate));
btnAddDate.addEventListener('click', () => {
    formData.addListItem();
    toggleClass('isHidden', formDate);
})
btnFormSend.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (requiredCheck() == false) return;
    formData.collectFormData();
    formData.clearFormFields();
    //console.log(formData.data);
    addClass('isHidden', formContainer);
})
function getMinDate() {
    const date = new Date();
    return date.toLocaleString();
}
formDateInput.setAttribute('min', getMinDate());
