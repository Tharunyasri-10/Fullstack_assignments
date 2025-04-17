function showDate() {
    let today = new Date();
    let formattedDate = today.getDate() + '/' + 
                        today.toLocaleString('default', { month: 'long' }) + '/' + 
                        today.getFullYear();
    document.getElementById('date').innerText = formattedDate;
}

function showTime() {
    let now = new Date();
    document.getElementById('time').innerText = now.toString();
}
