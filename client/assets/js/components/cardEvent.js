import {EventDatas} from "./EventDatas.js";
const db = new EventDatas();

function modalRegister(data, user) {
    const modal = document.createElement('div');
    modal.classList.add('add')
    modal.setAttribute('data-id', data.id);
    const btn = document.createElement('div');
    btn.classList.add('button');
    btn.classList.add('modal__validate');
    btn.innerText ="OK";
    const html = () => {
        return `
            <span class="closeModal">Close this shit</span>
            <div>
                <p>Choose your availability</p>
                <fieldset>
                <ul class="modal__dates">
                    ${data.dates.map(date => {
                        console.log(date.date);
                        return `<li class="modal__date"><label for="${date.date}">${date.date}</label><input type="checkbox" id="${date.date}" name="${date.date}" checked></li>`                   
                    }).join('')}
                </ul> 
                </fieldset>
            </div>
        `
    }
    modal.innerHTML= html();
    modal.append(btn);
    /// api/events/[id]/attend
    //{ name: string, dates : [ { date: date 'YYYY-MM-DD', available: boolean (true/false) } ] }
    let buildData = data.dates.map(date => { return {date: date.date, available:false} })
    let finalData = { name: user.name , dates: buildData }
    db.postEventsAttend(data.id, finalData);

    btn.addEventListener('click', (event) => {
        finalData.dates =
        db.patchEventAttend(data.id, )
    })

    return modal;

}

export function cardEvent(parent, formData, user) {

    

    const articleCard = document.createElement("article");
    articleCard.classList.add("card");

    const createH3 = document.createElement("h3");
    createH3.classList.add("card__h3");
    createH3.innerText = formData.name;
    articleCard.appendChild(createH3);

    const paraDescrip = document.createElement("p");
    paraDescrip.classList.add("card__name");
    paraDescrip.innerText = formData.description;
    articleCard.appendChild(paraDescrip);

    const paraAuthor = document.createElement("p");
    paraAuthor.classList.add("card__author");
    paraAuthor.innerText = formData.author;
    articleCard.appendChild(paraAuthor);

    const tableDate = document.createElement("table");
    tableDate.classList.add("card__table");
    const lineTitle = document.createElement("tr")
    lineTitle.classList.add("card__table__title");
    const paraticipName = document.createElement("td");
    paraticipName.innerText = "Participant";
    lineTitle.appendChild(paraticipName);
    
    formData.dates.map( date => {
        const dateEvent = document.createElement("td");
        if(date.date){
            dateEvent.innerText = date.date;
        }
        else{
            dateEvent.innerText = date;
        }
        lineTitle.appendChild(dateEvent);
    })


    tableDate.appendChild(lineTitle);

    // console.log(lineTitle.childNodes.length);
    articleCard.appendChild(tableDate);

    const butAddName = document.createElement("button");
    butAddName.classList.add("card__button");
    butAddName.classList.add('tempo');
    butAddName.innerText = "add participent";
    articleCard.appendChild(butAddName);

    butAddName.addEventListener('click', () => {
        articleCard.prepend(modalRegister(formData, user))


        // if (butAddName.classList.contains('tempo')) {
        //     createInput(articleCard);
        //     butAddName.innerText = "valid Participent"
        //     butAddName.classList.remove('tempo');
        // } else {
        //     const inputTempo = document.querySelector(".card__input");
        //     addlineTable(tableDate, inputTempo.value)
        //     removeInput(articleCard);
        //     butAddName.innerText = "add participent";
        //     butAddName.classList.add("tempo");
        // }
    })
    parent.appendChild(articleCard);
}
function createInput(parent) {
    const tempoInput = document.createElement("input");
    tempoInput.classList.add("card__input");
    parent.appendChild(tempoInput);
}
function removeInput(parent) {
    const inputRemove = document.querySelector(".card__input");
    parent.removeChild(inputRemove);
}
function addlineTable(parent, inputValue) {
    const first = parent.childNodes[0];
    const lineParticip = document.createElement("tr");
    lineParticip.classList.add("card__table__Particip");
    const nameParatic = document.createElement("th");
    nameParatic.innerText = inputValue;
    lineParticip.appendChild(nameParatic);
    for (let i = 0; i < first.childNodes.length - 1; i++) {
        const validDate = document.createElement("th");
        validDate.innerText = `test${i}`;
        lineParticip.appendChild(validDate);
    }

    db.postEventsAttend(inputValue);
    parent.appendChild(lineParticip);
}