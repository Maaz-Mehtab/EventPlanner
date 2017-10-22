var fname = document.getElementById("fname");
var bio = document.getElementById("bio");
var website = document.getElementById("website");
var birth = document.getElementById("birth");
var number = document.getElementById("number");
var nic = document.getElementById("nic");
var profile = document.getElementById("profile");
var link = document.getElementById("link");
var varify = document.getElementById("varify");
var but = document.getElementById("but");
var ext = document.getElementById("ext");
// var link2 = document.getElementById("link2");
// var link3 = document.getElementById("link3");







function adds() {



    var ad = document.createElement("input");
    var adtext = document.createTextNode("");
    ad.appendChild(adtext);
    ad.setAttribute('placeholder', 'Enter link')
    ad.setAttribute('class', 'form-control mt-3');
    ad.setAttribute('id', 'link2');

    ext.appendChild(ad);



}

function submit() {
    if (fname.value == "") {
        alert("Enter full name")
    } else if (bio.value == "") {
        alert("Enter bio data")
    } else if (website.value == "") {
        alert("Enter website")
    } else if (birth.value == "") {
        alert("Enter Bithdate")
    } else if (number.value == "") {
        alert("Enter a number")
    } else if (nic.value == "") {
        alert("Upload a nic image")
    } else if (profile.value = "") {
        alert("Upload a profile image")
    } else if (link.value == "") {
        alert("Enter a  social link")
    } else if (varify.value == "") {
        alert("Enter varify")
    } else {
        var obj = {
            fname: fname.value,
            bio: bio.value,
            website: website.value,
            birth: birth.value,
            number: number.value,
            nic: nic.value,
            profile: profile.value,
            link: link.value,
            varify: varify.value,
            link2: link2.value

        }

        fname.value = "";
        bio.value = "";
        website.value = "";
        birth.value = "";
        number.value = "";
        nic.value = "";
        profile.value = "";
        varify.value = "";
        link.value = "";
        link2.value = "";

        console.log(obj);
    }
}