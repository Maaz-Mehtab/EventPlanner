var userName = document.getElementById('userName');
var user = JSON.parse(localStorage.getItem('user'));

var a = user.name + ' ' + user.lname;

userName.innerHTML = user.name + ' ' + user.lname;


var database = firebase.database().ref('/');
var body = document.getElementById("body");

var userID = localStorage.getItem('uid');
database.child('allplans').on("child_added", function(snapshot) {

    var demo = snapshot.val();
    var demoid = snapshot.key
        // console.log(demo.name);
        // console.log(demo.place);
        // console.log(demoid);


    var div = document.createElement("div");
    div.setAttribute('class', 'container  p-3 text-dark bg-light mb-3 rounded card');
    div.setAttribute('style', 'box-shadow: 0 0 10px 5px #E0E0E0');
    var eve = document.createElement('h3');
    var evetext = document.createTextNode(demo.uname);
    eve.setAttribute('class', 'text-primary')

    var name = document.createElement("h6");
    var place = document.createElement("h6");
    var date = document.createElement("h6");
    var des = document.createElement("h6");
    var nametext = document.createTextNode("Event Name :" + demo.name);
    var placetext = document.createTextNode("Event Place: " + demo.place);
    var datetext = document.createTextNode("Event Date :" + demo.date);
    var destext = document.createTextNode("Event Description :" + demo.des);
    var btn = document.createElement("button");
    var btntext = document.createTextNode("Going")
    var divv = document.createElement("div");
    divv.setAttribute('class', 'row')
    btn.setAttribute('class', 'btn btn-outline-primary col-md-2 ml-2 mr-2 mb-2');
    var btn2 = document.createElement("button");
    btn2.setAttribute('class', 'btn btn-outline-success col-md-2 ml-2 mr-2 mb-2');
    var btn2text = document.createTextNode("Not Going");
    eve.appendChild(evetext);
    name.appendChild(nametext);
    place.appendChild(placetext);
    date.appendChild(datetext);
    des.appendChild(destext);


    var check = database.child('allplans/' + demoid + '/go').on('child_added', snap => {
        var snapkey = snap.key;
        var snapval = snap.val();
        console.log(snapval);
        if (userID == snapval) {
            demo.goin = true;
            // demo.ngoin = true;
            btn.disabled = true
            btn.setAttribute('class', 'btn btn-primary col-md-2 ml-2 mr-2 mb-2');
            // div.style = 'visibility: hidden;'
        } else if (false) {
            btn2.disabled = true;

            // demo.goin = true;
            demo.ngoin = true;
            btn2.setAttribute('class', 'btn btn-success col-md-2 ml-2 mr-2 mb-2');
            // div.style = 'visibility: hidden;'
        }
    });
    btn.appendChild(btntext);
    divv.appendChild(btn);
    divv.appendChild(btn);
    btn2.appendChild(btn2text);
    divv.appendChild(btn2);

    div.appendChild(eve)
    div.appendChild(name);
    div.appendChild(place);
    div.appendChild(date);
    div.appendChild(des);
    div.appendChild(divv)
    body.appendChild(div);
    btn.onclick = go;
    btn2.onclick = ngo;

    // console.log(demo)
    function go() {
        var a = demoid;
        // console.log(a + 'GO ID')

        //   var userID = localStorage.getItem('uid');
        database.child('users/' + userID + '/going').push(demo);
        // database.child("Event/" + a).remove();
        // btn.disabled = true;

        // demo.goin = true
        database.child('allplans/' + a + '/go').push(userID)
        btn.disabled = true
        btn.setAttribute('class', 'btn btn-primary col-md-2 ml-4 mr-2');


    }

    function ngo() {

        var a = demoid;
        console.log(a)



        demo.ngoin = true
        btn2.disabled = true
        btn2.setAttribute('class', 'btn btn-success col-md-2 ml-4 mr-2');

    }
})