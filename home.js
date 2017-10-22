var userName = document.getElementById('userName');
var user = JSON.parse(localStorage.getItem('user'));

var a = user.name + ' ' + user.lname;

userName.innerHTML = user.name + ' ' + user.lname;







var database = firebase.database().ref('/');
var ename = document.getElementById('ename');
var eplace = document.getElementById('eplace');
var edate = document.getElementById('edate');
var edes = document.getElementById('edes');

function submit() {

    var sub = {
        uname: a,
        name: ename.value,
        place: eplace.value,
        date: edate.value,
        des: edes.value
    }

    var userID = localStorage.getItem('uid');

    database.child('users/' + userID + '/plans').push(sub)
    database.child('allplans').push(sub)
    console.log(sub);
    location: "render.html"
    ename.value = "";
    eplace.value = "";
    edate.value = "";
    edes.value = "";

}