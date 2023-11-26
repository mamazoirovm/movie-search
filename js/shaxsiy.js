window.onload = function () {
    const location = window.location.href ;
    const username = location.substring(location.indexOf('user=') + 5)
    

 let data = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []


 if (data.length) {
    data.forEach(el => {
        if (el.email == username) {
            console.log(el);
        }
    });
 } else {
    window.location.href = 'login.html'
 }
}