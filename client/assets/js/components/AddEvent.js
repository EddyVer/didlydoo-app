import {clearChilds, formatDate} from "./utilities.js";
import {EventDatas} from "./EventDatas.js";

export class AddEvent {
    constructor() {
        this.init();
        this.selectedDate = document.querySelector('.form__selectedDate');
        this.formName = document.querySelector('.form__name');
        this.formDescription = document.querySelector('.form__description');
        this.formAuthor = document.querySelector('.form__author')
        this.inputDate = document.querySelector('.form__date__input');
        this.datas = new EventDatas();
    }
    init(){
        this.data = {
            name: '',
            description: '',
            author: '',
            dates: []
        }
    }
    addListItem(){
        const date = formatDate(this.inputDate.value)
        this.data.dates.push(date);
        this.selectedDate.innerHTML += `<li>${this.inputDate.value}</li>`;
    }
    clearData(){
        this.init();
    }
    clearFormFields() {
        clearChilds(this.selectedDate);
        this.formName.value = '';
        this.formDescription.value = '';
        this.formAuthor.value = '';
        this.inputDate.value = '';
    }
    collectFormData(){
        this.data.name = this.formName.value;
        this.data.description = this.formDescription.value;
        this.data.author = this.formAuthor.value;
        this.data.dates = this.inputDate.value.split(',');
    }
    submitForm(){
        return this.datas.postEvents(this.data).then(
                this.clearData()
        )
    }
}


