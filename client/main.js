import {Datepicker} from "vanillajs-datepicker";
import { AddEvent } from "./assets/js/components/AddEvent.js";
import { cardEvent } from "./assets/js/components/cardEvent.js";
import { EventDatas } from "./assets/js/components/EventDatas.js";
import { addClass, removeClass, toggleClass } from "./assets/js/components/displayElements.js";
import { requiredCheck } from "./assets/js/components/requiredCheck.js";
import {formatDate} from "./assets/js/components/utilities";
import {buildLoginPage} from "./assets/js/components/login.js";

// Variable to stock current users of the app.
let user;


const app = document.querySelector(".app");
const btnAddEvent = document.querySelector('.action__add');
//const btnShowDate = document.querySelector('.form__showAddDate');
const formContainer = document.querySelector('.form');
const formDate = document.querySelector('.form__date');
const formDateInput = document.querySelector('.form__date__input');
const btnAddDate = document.querySelector('.form__date__add');
const btnFormSend = document.querySelector('.form__send');
const btnCloseForm = document.querySelector('.closeForm');
const pageAction = document.querySelector('.action');
const inputAuthor = document.querySelector('.form__author');

const datepicker = new Datepicker(formDateInput, {
    maxNumberOfDates: 5,
    minDate: 'Today',
    format: "dd-mm-yyyy",
});
const formData = new AddEvent();

btnCloseForm.addEventListener('click', () => {
    addClass('isHidden', formContainer);
    removeClass('isHidden',btnAddEvent);
})
btnAddEvent.addEventListener('click', () => {
    toggleClass('isHidden', formContainer);
    toggleClass('isHidden', btnAddEvent);
    inputAuthor.value = user;
})
//btnShowDate.addEventListener('click', () => toggleClass('isHidden', formDate));
btnAddDate.addEventListener('click', () => {
    formData.addListItem();
})
btnFormSend.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (requiredCheck() === false) return;
    formData.collectFormData();
    formData.clearFormFields();
    addClass('isHidden', formContainer);
    removeClass('isHidden',btnAddEvent);
    cardEvent(app, formData.data);
    formData.submitForm();

})
// function getMinDate() {
//     const date = new Date();
//     return formatDate(date);
// }
//formDateInput.setAttribute('min', getMinDate());

const events = new EventDatas();

async function init() {
    const data = await events.getEvents();
    console.log(data)
    //cardEvent(app, data);
    const users = await events.getAttendees();
    console.log(users)
    console.log(user)
}
async function setLoginEvent(){
    await buildLoginPage();
    const btnLogin = document.querySelector('.login__form__btn');
    console.log(btnLogin)
    btnLogin.addEventListener('click', (event) => {
        event.preventDefault()
        user = document.querySelector('#select__login').value;
        addClass('isHidden',document.querySelector(".login__form"))
        removeClass('isHidden', pageAction )
        init()
    })
}
setLoginEvent()