var database = firebase.database().ref('/');

var lemail = document.getElementById('lemail');
var lpass = document.getElementById('lpass');
document.getElementById("stop").addEventListener("submit", submit)

function submit(event) {
    event.preventDefault()
        // alert()
    var user = {
        lemail: lemail.value,
        lpass: lpass.value
    }

    firebase.auth().signInWithEmailAndPassword(user.lemail, user.lpass)
        .then(function(success) {
            var a = success.uid;
            console.log(a)
            database.child('users/' + success.uid).once('value', function(snapshot) {
                console.log(snapshot.val())
                localStorage.setItem('user', JSON.stringify(snapshot.val()))
                localStorage.setItem('uid', success.uid);
                location = "home.html";
            })
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });

}