import { Datepicker } from "vanillajs-datepicker";
import { AddEvent } from "./assets/js/components/AddEvent.js";
import { cardEvent } from "./assets/js/components/cardEvent.js";
import { EventDatas } from "./assets/js/components/EventDatas.js";
import { addClass, removeClass, toggleClass } from "./assets/js/components/displayElements.js";
import { requiredCheck } from "./assets/js/components/requiredCheck.js";
import { formatDate } from "./assets/js/components/utilities";
import { buildLoginPage, getUserEvents } from "./assets/js/components/login.js";

// Variable to stock current users of the app.
let user = {
    name: '',
    events: [],
};

const app = document.querySelector(".app");
const cards = document.querySelector('.cards');
const btnAddEvent = document.querySelector('.action__add');
//const btnShowDate = document.querySelector('.form__showAddDate');
const formContainer = document.querySelector('.form');
const formDate = document.querySelector('.form__date');
const formDateInput = document.querySelector('.form__date__input');
//const btnAddDate = document.querySelector('.form__date__add');
const btnFormSend = document.querySelector('.form__send');
const btnCloseForm = document.querySelector('.closeForm');
const pageAction = document.querySelector('.action');
const inputAuthor = document.querySelector('.form__author');

const datepicker = new Datepicker(formDateInput, {
    maxNumberOfDates: 5,
    minDate: 'Today',
    format: "yyyy-mm-dd",
});
const formData = new AddEvent();

btnCloseForm.addEventListener('click', () => {
    addClass('isHidden', formContainer);
    removeClass('isHidden', btnAddEvent);
})
btnAddEvent.addEventListener('click', () => {
    toggleClass('isHidden', formContainer);
    toggleClass('isHidden', btnAddEvent);
    inputAuthor.value = user.name;
})


btnFormSend.addEventListener('click', async (evt) => {
    evt.preventDefault();
    if (requiredCheck() === false) return;
    formData.collectFormData();
    formData.clearFormFields();
    addClass('isHidden', formContainer);
    removeClass('isHidden', btnAddEvent);
    const newEvent = await formData.submitForm();
    console.log(newEvent.dates);
    cardEvent(cards, newEvent, user);
})



const events = new EventDatas();

async function init() {
    const data = await events.getEvents();

    for (let i = 0; i < data.length; i++) {
        cardEvent(cards, data[i], user);

    }
    const users = await events.getAttendees();
}
async function setLoginEvent() {
    await buildLoginPage();
    const btnLogin = document.querySelector('.login__form__btn');
    btnLogin.addEventListener('click', async (event) => {
        event.preventDefault()
        user.name = document.querySelector('#select__login').value;
        user.events = await getUserEvents(user.name);

        console.log(user.events)
        addClass('isHidden', document.querySelector(".login__form"))
        removeClass('isHidden', pageAction)

        init()
    })
}
setLoginEvent()