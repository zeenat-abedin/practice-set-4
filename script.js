//Create a Digital seconds clock using setInterval and date object in Javascript. The date object  will be used to get the date, time, hours and seconds which can be updated using setInterval.

setInterval(() => {
    let date = new Date()
    
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    
    let d = date.toLocaleTimeString('en-US', options)
    time.innerHTML = d   
}, 1000);