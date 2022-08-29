import {EventDatas} from "./EventDatas.js";

const db = new EventDatas();
const html = (options) => {
return `
<div class="login">
    <form class="login__form">
        <label for="select__login">Select your username.</label>
        <select class="loging__form__select" name="select__login" id="select__login">
            ${options}
        </select>
        <button id="login__form__btn" class="login__form__btn">login</button>
    </form>
</div>
`;
}

async function getLogin(){
    return await db.getAttendees();
}

export async function getUserEvents(user){
    const events = await db.getEvents();
    return [...events].filter(event => event.author == user)
}

export async function buildLoginPage(){
    const users = await getLogin();
    let options; options += [...users].map(user =>  `<option value="${user.name}">${user.name}</option>`).join('')
    document.querySelector('.app').insertAdjacentHTML('afterbegin', html(options));
}