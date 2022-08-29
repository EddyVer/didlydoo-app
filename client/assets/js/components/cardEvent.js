export function cardEvent(main, formData) {

    

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
    for (let i = 0; i < formData.dates.length; i++) {
        const dateEvent = document.createElement("th");
        dateEvent.innerText = formData.dates[i].date;
        lineTitle.appendChild(dateEvent);
    }
    tableDate.appendChild(lineTitle);

    // console.log(lineTitle.childNodes.length);
    articleCard.appendChild(tableDate);

    const butAddName = document.createElement("button");
    butAddName.classList.add("card__button");
    butAddName.classList.add('tempo');
    butAddName.innerText = "add participent";
    articleCard.appendChild(butAddName);

    butAddName.addEventListener('click', () => {
        if (butAddName.classList.contains('tempo')) {
            createInput(articleCard);
            butAddName.innerText = "valid Participent"
            butAddName.classList.remove('tempo');
        } else {
            const inputTempo = document.querySelector(".card__input");
            addlineTable(tableDate, inputTempo.value)
            removeInput(articleCard);
            butAddName.innerText = "add participent";
            butAddName.classList.add("tempo");
        }
    })
    main.appendChild(articleCard);
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
    parent.appendChild(lineParticip);
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
