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
    
    const close = document.createElement("span");
    close.classList.add("closeModal");
    modal.append(close);
    const divUl = document.createElement("div");

    const paraModal = document.createElement("p");
    paraModal.innerText = "Choose your availability";
    divUl.append(paraModal);
    
    const fiel = document.createElement("fieldset");
    const list = document.createElement("ul");
    list.classList.add("modal__dates");
    fiel.append(list);
    
    data.dates.map(date => {
        const elementList = document.createElement("li");
        elementList.classList.add("modal__date");
        
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for",`${date.date}`);
        labelElement.innerText = `${date.date}`;
        elementList.append(labelElement);

        const inputElement = document.createElement("input");
        inputElement.type = "checkbox";
        inputElement.id = `${date.date}`;
        inputElement.name =`${date.date}`;

        elementList.append(inputElement);
        list.appendChild(elementList);
    })
    divUl.append(list);
    modal.append(divUl);

    modal.append(btn);
    /// api/events/[id]/attend
    //{ name: string, dates : [ { date: date 'YYYY-MM-DD', available: boolean (true/false) } ] }
    let buildData = data.dates.map(date => { return {date: date.date, available:false} })
    let finalData = { name: user.name , dates: buildData }
    db.postEventsAttend(data.id, finalData);

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
        articleCard.prepend(modalRegister(formData, user));
        
        const lebtn = document.querySelector(".modal__validate");
        const lenfant = document.querySelector(".add");
        console.log(lebtn);
        eventCloseModal({
            child:lenfant,
            parent:articleCard,
            btn:lebtn,
        }, user );


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
function eventCloseModal(object, user){
    const dates = document.querySelectorAll('.modal__date');
    let finalData = { name: user.name , dates: [] }
    const id = object.child.dataset.id;
    object.btn.addEventListener("click",() => {
        finalData.dates = [...dates].map(date => {
            let bool = false
            if(date.querySelector('input').checked) bool = true;
            return { date : date.querySelector('input').id , available: bool }
        })
        object.parent.removeChild(object.child)
        console.log(finalData)
    });
    db.patchEventAttend(id, finalData)
}




/*
[
    {
        "id": "7dcd841debeb",
        "name": "aze",
        "author": "aez",
        "description": "aze",
        "dates": [
            {
                "date": "2022-07-09",
                "attendees": []
            }
        ],
        "created_at": "2022-08-26T13:55:53.973Z",
        "num_modification": 0,
        "last_modification": "2022-08-26T13:55:53.973Z"
    },
    {
        "id": "aa0e69942bf6",
        "name": "aze",
        "author": "azef",
        "description": "fffff",
        "dates": [
            {
                "date": "2022-07-09",
                "attendees": []
            }
        ],
        "created_at": "2022-08-26T13:53:18.866Z",
        "num_modification": 0,
        "last_modification": "2022-08-26T13:53:18.866Z"
    },
    {
        "id": "54a2d5a42c4f",
        "name": "zzzz",
        "author": "zezzeze",
        "description": "zeze",
        "dates": [
            {
                "date": "2022-07-09",
                "attendees": []
            },
            {
                "date": "2022-07-09",
                "attendees": []
            },
            {
                "date": "2022-07-09",
                "attendees": []
            }
        ],
        "created_at": "2022-08-26T13:52:35.363Z",
        "num_modification": 0,
        "last_modification": "2022-08-26T13:52:35.363Z"
    },
    {
        "id": "e4a77c7ab44d",
        "name": "aaaaa",
        "author": "azeeza",
        "description": "zaeaz",
        "dates": [
            {
                "date": "2022-07-09",
                "attendees": []
            },
            {
                "date": "2022-07-09",
                "attendees": []
            },
            {
                "date": "2022-07-09",
                "attendees": []
            }
        ],
        "created_at": "2022-08-26T13:41:21.817Z",
        "num_modification": 0,
        "last_modification": "2022-08-26T13:41:21.817Z"
    },
    {
        "id": "c2f9a120adef",
        "name": "zerzer",
        "author": "erzzerzer",
        "description": "zererzzer",
        "dates": [
            {
                "date": "2022-07-09",
                "attendees": []
            }
        ],
        "created_at": "2022-08-26T13:40:39.840Z",
        "num_modification": 0,
        "last_modification": "2022-08-26T13:40:39.840Z"
    },
    {
        "id": "fe74e8632fe3",
        "name": "erzrze",
        "author": "fdsdfsdfsd",
        "description": "erzrzedf",
        "dates": [
            {
                "date": "2022-07-09",
                "attendees": []
            }
        ],
        "created_at": "2022-08-26T13:37:52.037Z",
        "num_modification": 0,
        "last_modification": "2022-08-26T13:37:52.037Z"
    },
    {
        "id": "4f68345fdd71",
        "name": "rezezr",
        "author": "ezrzerrez",
        "description": "erzrez",
        "dates": [
            {
                "date": "2022-07-28",
                "attendees": []
            }
        ],
        "created_at": "2022-08-26T13:36:38.139Z",
        "num_modification": 0,
        "last_modification": "2022-08-26T13:36:38.139Z"
    },
    {
        "id": "1c187cf90ca7",
        "name": "ezze",
        "author": "zeze",
        "description": "zeze",
        "dates": [
            {
                "date": "2022-08-03",
                "attendees": []
            }
        ],
        "created_at": "2022-08-26T08:08:13.876Z",
        "num_modification": 0,
        "last_modification": "2022-08-26T08:08:13.876Z"
    },
    {
        "id": "f5b6564b5dc4",
        "name": "My sweet 16",
        "description": "I am going to be 16, let us all party together! Help me pick a date so we can go together",
        "author": "John Doe",
        "dates": [
            {
                "date": "2022-03-17",
                "attendees": [
                    {
                        "name": "Michou",
                        "available": true
                    },
                    {
                        "name": "Jean-Daniel",
                        "available": false
                    }
                ]
            },
            {
                "date": "2022-03-18",
                "attendees": [
                    {
                        "name": "Michou",
                        "available": false
                    },
                    {
                        "name": "Jean-Daniel",
                        "available": null
                    }
                ]
            },
            {
                "date": "2022-03-21",
                "attendees": [
                    {
                        "name": "Michou",
                        "available": true
                    },
                    {
                        "name": "Jean-Daniel",
                        "available": true
                    }
                ]
            },
            {
                "date": "2022-03-22",
                "attendees": [
                    {
                        "name": "Michou",
                        "available": null
                    },
                    {
                        "name": "Jean-Daniel",
                        "available": null
                    }
                ]
            }
        ],
        "created_at": "2021-11-15T00:00",
        "num_modification": 3,
        "last_modification": "2021-11-15T02:15"
    },
    {
        "id": "38b643aeb883",
        "name": "The big sale @ The Mall",
        "description": "I want to buy stuff at the mall, but don't want to go alone who is up?",
        "author": "Jean D'eau",
        "dates": [
            {
                "date": "2022-01-10",
                "attendees": [
                    {
                        "name": "Michou",
                        "available": true
                    },
                    {
                        "name": "Jane Doe",
                        "available": true
                    }
                ]
            },
            {
                "date": "2022-02-10",
                "attendees": [
                    {
                        "name": "Michou",
                        "available": null
                    },
                    {
                        "name": "Jane Doe",
                        "available": true
                    }
                ]
            },
            {
                "date": "2022-03-10",
                "attendees": [
                    {
                        "name": "Michou",
                        "available": null
                    },
                    {
                        "name": "Jane Doe",
                        "available": true
                    }
                ]
            },
            {
                "date": "2022-03-11",
                "attendees": [
                    {
                        "name": "Michou",
                        "available": null
                    },
                    {
                        "name": "Jane Doe",
                        "available": true
                    }
                ]
            },
            {
                "date": "2022-03-12",
                "attendees": [
                    {
                        "name": "Michou",
                        "available": null
                    },
                    {
                        "name": "Jane Doe",
                        "available": false
                    }
                ]
            }
        ],
        "created_at": "2021-11-13T14:00",
        "num_modification": 0,
        "last_modification": "2021-11-13T14:00"
    }
]*/
