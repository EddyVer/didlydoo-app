import {clearChilds} from "./utilities.js";

export class FormData{
    constructor() {
        this.init();
        this.selectedDate = document.querySelector('.form__selectedDate');
        this.formName = document.querySelector('.form__name');
        this.formDescription = document.querySelector('.form__description');
        this.formPlace = document.querySelector('.form__place')
        this.inputDate = document.querySelector('.form__date__input');
    }
    init(){
        this.data = {
            name: '',
            description: '',
            place: '',
            dates: []
        }
    }
    addListItem(){
        this.data.dates.push(this.inputDate.value);
        this.selectedDate.innerHTML += `<li>${this.inputDate.value}</li>`;
    }
    //TODO
    deleteListItem(){

    }
    clearData(){
        this.init();
    }
    clearFormFields() {
        clearChilds(this.selectedDate);
        this.formName.value = '';
        this.formDescription.value = '';
        this.formPlace.value = '';
    }
    collectFormData(){
        this.data.name = this.formName.value;
        this.data.description = this.formDescription.value;
        this.data.place = this.formPlace.value;
    }
    submitForm(){

    }
}
