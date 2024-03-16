//Create a Digital seconds clock using setInterval and date object in Javascript. The date object  will be used to get the date, time, hours and seconds which can be updated using setInterval.

setInterval(() => {
    let date = new Date()
    
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    
    let d = date.toLocaleTimeString('en-US', options)
    time.innerHTML = d   
}, 1000);

/* Write a JS program to pretend to look like a hacker. Write an async function which will simply display the following output

Initializing Hack program...
Hacking Ashish username...
Username found ashish17...
Connecting to facebook...

Try to use HTML and styling if possible */


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
    let response = fetch('https://jsonplaceholder.typicode.com/posts/1')
    let r = await response.json()
        
  .then((json) => console.log(json));
}

const mainFunc = async () => {
    let todo = {
        title: 'Zeenat',
        body: 'Abedin',
        userId: 1,
        }
    let todoResponse = await createTodo(todo)
    console.log(todoResponse)
}

mainFunc()


  