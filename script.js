//Create a Digital seconds clock using setInterval and date object in Javascript. The date object  will be used to get the date, time, hours and seconds which can be updated using setInterval.

setInterval(() => {
    let date = new Date()
    
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    
    let d = date.toLocaleTimeString('en-US', options)
    time.innerHTML = d   
}, 1000);

//Sending POST request with Fetch API

const createTodo = async(todo) => {
    let options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(todo),
    }
    let res = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let data = await res.json()
    return data;
}

const getTodo = async (id) => {
    let response = fetch('https://jsonplaceholder.typicode.com/posts/1'+ id)
    let r = await response.json()
    return r       
}

const mainFunc = async () => {
    let todo = {
        title: 'Zeenat',
        body: 'Abedin',
        userId: 1,
        }
    let todoResponse = await createTodo(todo)
    console.log(todoResponse)
    console.log(getTodo(567))
}

mainFunc()

//localStorage and related methods
  
let key = prompt("Enter key you want to set")
let value = prompt("Enter the value for this key")

localStorage.setItem(key,value);
console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if (key == "red" || key == "blue") {
   localStorage.removeItem(key) 
}

if (key == 0) {
    localStorage.clear()
}