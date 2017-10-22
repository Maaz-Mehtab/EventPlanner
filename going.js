var userID = localStorage.getItem('uid');
var database = firebase.database().ref('/');
var userName = document.getElementById('userName');
var user = JSON.parse(localStorage.getItem('user'));

var a = user.name + ' ' + user.lname;

userName.innerHTML = user.name + ' ' + user.lname;


var body = document.getElementById("body");
database.child('users/' + userID + '/going').on("child_added", function(snapshot) {

    var demo = snapshot.val();
    var demoid = snapshot.key
    console.log(demo.name);
    console.log(demo.place);
    console.log(demoid);


    var div = document.createElement("div");
    div.setAttribute('class', 'container  p-3 text-dark bg-light mb-3 rounded card mb-4');
    div.setAttribute('style', 'box-shadow: 0 0 10px 5px #E0E0E0');
    var name = document.createElement("h6");
    var place = document.createElement("h6");
    var date = document.createElement("h6");
    var des = document.createElement("h6");
    var nametext = document.createTextNode("Event Name : " + demo.name);
    var placetext = document.createTextNode("Event Place : " + demo.place);
    var datetext = document.createTextNode("Event Name : " + demo.date);
    var destext = document.createTextNode("Event Description : " + demo.des);

    name.appendChild(nametext);
    place.appendChild(placetext);
    date.appendChild(datetext);
    des.appendChild(destext);

    div.appendChild(name)
    div.appendChild(place)
    div.appendChild(date)
    div.appendChild(des)

    body.appendChild(div)



})