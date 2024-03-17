/* Write a JS program to pretend to look like a hacker. Write an async function which will simply display the following output

Initializing Hack program...
Hacking Ashish username...
Username found ashish17...
Connecting to facebook...

Try to use HTML and styling if possible */

let a = [
    "Initializing Hack tool...",
    "Connecting to Facebook...",
    "Connecting to server 1...",
    "Connection failed. Retrying...",
    "Connecting to server 2...",
    "Connected successfully...",
    "Username iamAshish...",
    "Trying Brute Force...",
    "200k passwords tried...",
    "Match not found...",
    "Another 200k passwords tried...",
    "Match not found...",
    "Accessing account...",
    "Hack Successful..."
]

const sleep = async(seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(true) 
        }, seconds * 1000);
    })
}

const showHack = async(message) => {
    sleep(2)
    console.log(message)
    text.innerHTML = text.innerHTML + "<br>"+ message;
}

(async () => {
    for (let i = 0; i < a.length; i++) {
      await showHack(a[i])       
    }
})()