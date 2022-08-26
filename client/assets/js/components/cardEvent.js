
export function cardEvent(main,formData){
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
    const paraticipName = document.createElement("th");
    paraticipName.innerText = "Participant";
    lineTitle.appendChild(paraticipName);
    for(let i = 0; i < formData.dates.length; i++){
        const dateEvent = document.createElement("th");
        dateEvent.innerText = formData.dates[i];
        lineTitle.appendChild(dateEvent);
    }
    tableDate.appendChild(lineTitle);

   // console.log(lineTitle.childNodes.length);
    articleCard.appendChild(tableDate);

    const butAddName = document.createElement("button");
    butAddName.classList.add("card__button");
    butAddName.setAttribute("id","tempo");
    butAddName.innerText = "add participent";
    articleCard.appendChild(butAddName);
    
    main.appendChild(articleCard);
    eventButAdd();
}

function eventButAdd(){
    const card = document.querySelector(".card");
    const butadd = document.querySelector(".card__button");
    const tables = document.querySelector(".card__table");
    addParticipent(butadd,card,tables);
}
 function addParticipent(button,card,table){
    button.addEventListener("click",() => {
        if(button.id === "tempo"){ 
            createInput(card);
            button.innerText = "valid Participent"
            button.id = "";
        }
         else{
            const inputTempo = document.querySelector(".card__input");
            addlineTable(table,inputTempo.value)
            removeInput(card);
            button.innerText= "add participent";
            button.id = "tempo";
        }
    });
}

function createInput(parent){
    const tempoInput = document.createElement("input");
    tempoInput.classList.add("card__input");
    parent.appendChild(tempoInput);
}
function removeInput(parent){
    const inputRemove = document.querySelector(".card__input");
    parent.removeChild(inputRemove);
}

function addlineTable(parent,inputValue){
    const first = parent.childNodes[0];
    const lineParticip = document.createElement("tr");
    lineParticip.classList.add("card__table__Particip");
    const nameParatic = document.createElement("th");
    nameParatic.innerText = inputValue;
    lineParticip.appendChild(nameParatic);
    for(let i = 0; i < first.childNodes.length -1; i++){
        const validDate = document.createElement("th");
        validDate.innerText = `test${i}`;
        lineParticip.appendChild(validDate);
    }
    parent.appendChild(lineParticip);

}