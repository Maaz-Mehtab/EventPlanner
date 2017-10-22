var database = firebase.database().ref('/');
var fname = document.getElementById("userName");
var email = document.getElementById('email');
var pass = document.getElementById('pass');
var lname = document.getElementById('Lname');
var number = document.getElementById('Phone');
var age = document.getElementById('age');
var gender = document.getElementById('gender');
// var auth=firebase.auth();

function submit() {
    var user = {
        name: userName.value,
        lname: Lname.value,
        email: email.value,
        password: pass.value,
        number: Phone.value,
        age: age.value,
        gender: gender.value

    }
    userName.value = "";
    email.value = "";
    pass.value = "";
    Lname.value = "";
    Phone.value = "";
    age.value = "";
    gender.value = "";
    // console.log(user);
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(function(res) {
            database.child('users/' + res.uid).set(user).then(function() {
                location = "login.html";
            })
            console.log(res)
            var aa = res.uid;
            console.log(aa);

        })


    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);

    });
}