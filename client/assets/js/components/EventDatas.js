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
            response.json().then(data => {
                console.log(data);
            })
        }
        catch (error){
            console.error(error)
        }
    }
}