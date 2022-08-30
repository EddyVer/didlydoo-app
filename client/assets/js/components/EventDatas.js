export class EventDatas {
    constructor() {

    }
    async getEvents(){
        try{
            const response = await fetch("http://localhost:3000/api/events/", {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json().then(data => {
                return data;
            })
            return await data;
        }
        catch (error){
            console.error(error)
        }
    }
    async getEventsById(id){
        try{
            const response = await fetch("http://localhost:3000/api/events/"+id, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json().then(data => {
                return data;
            })
            return await data;
        }
        catch (error){
            console.error(error)
        }
    }
    async deleteEventsById(id){
        try{
            const response = await fetch("http://localhost:3000/api/events/"+id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            response.json().then(data => {
                console.log(data);
            })
        }
        catch (error){
            console.error(error)
        }
    }
    async postEvents(dataToPost){
        try{
            const response = await fetch("http://localhost:3000/api/events/", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToPost),
            });
            const data = await response.json().then(data => {
                console.log(data)
                return data;
            })
            return await data
        }
        catch (error){
            console.error(error)
        }
    }
    ///api/events/[id]/add_dates
    async postEventsDate(id, dataToPost){
        try{
            const response = await fetch("http://localhost:3000/api/events/"+id+"/add_dates", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                //{ dates: [] }
                body: JSON.stringify(dataToPost),
            });
            response.json().then(data => {
                console.log(data);
                return data
            })
        }
        catch (error){
            console.error(error)
        }
    }
    async patchEvents(id, dataToPatch){
        try{
            const response = await fetch("http://localhost:3000/api/events/"+id, {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToPatch),
            });
            response.json().then(data => {
                console.log(data);
            })
        }
        catch (error){
            console.error(error)
        }
    }
    async postEventsAttend(id, dataToPost){
        try{
            const response = await fetch("http://localhost:3000/api/events/"+id+"/attend", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                //{ name: string, dates : [ { date: date 'YYYY-MM-DD', available: boolean (true/false) } ] }
                body: JSON.stringify(dataToPost),
            });
            const data = await response.json().then(data => {
                console.log(data);
                return data
            })
            return data;
        }
        catch (error){
            console.error(error)
        }
    }
    async patchEventAttend(id, dataToPatch){
        try{
            const response = await fetch("http://localhost:3000/api/events/"+id+"/attend", {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                //{ name: string, dates : [ { date: date 'YYYY-MM-DD', available: boolean (true/false) } ] }
                body: JSON.stringify(dataToPatch),
            });
            response.json().then(data => {
                console.log(data);
            })
        }
        catch (error){
            console.error(error)
        }
    }
    async getAttendees(){
        try{
            const response = await fetch("http://localhost:3000/api/attendees/", {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json().then(data => {
                return data;
            })
            return await data;
        }
        catch (error){
            console.error(error)
        }
    }
    async getAttendeesByName(name){
        try{
            const response = await fetch("http://localhost:3000/api/attendees/"+name, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json().then(data => {
                return data;
            })
            return await data;
        }
        catch (error){
            console.error(error)
        }
    }
}

//GET 	/api/events/ 		A list of all the events
//GET 	/api/events/[id] 		A single event
//POST 	/api/events/ 	{ name: string, dates: array of dates ['YYYY-MM-DD'], author: string, description: string } 	Creates an event with dates as possibilities. You must provide an author, a name and a description for the event
// PATCH 	/api/events/[id]/ 	{ name: string (optional), author: string (optional), description: string (optional) } 	Patches (edit) an event with the provided infos
//DELETE 	/api/events/[id]/ 		Deletes an event
//POST 	/api/events/[id]/add_dates 	{ dates: array of dates ['YYYY-MM-DD'] } 	Add some possible dates to an event
// POST 	/api/events/[id]/attend 	{ name: string, dates : [ { date: date 'YYYY-MM-DD', available: boolean (true/false) } ] } 	Add an attendance for the given event. You must provide the attendee's name and some availabilities, in the form of an array of object
// PATCH 	/api/events/[id]/attend 	{ name: string, dates : [ { date: date 'YYYY-MM-DD', available: boolean (true/false) } ] } 	Edit an attendance for the given event. You must provide the attendee's name and some availabilities, in the form of an array of object
//  GET 	/api/attendees/ 		Get a list of all the attendees, and the events they're attending
// GET 	/api/attendees/[name] 		Get all attendances for a given name