function validate() {
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if (username == "Maleick" && password == "2111578") {
        alert("Login Success \nWelcome "+ username +".");
        window.open("http://127.0.0.1:3000/Website/Eco -friendly eatries app/eco- friendly eateries restaurants.html");
    }
    else{
        alert("Check the input.");
    }
}
function create() {
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if (username == "Maleick" && password == "2111578"){
        alert("Try signing in.");
        // window.open("");
    }
    else{
        alert("Registered. \nWelcome! "+ username +".");
        window.location.reload("");
    }
    // window.location.reload("");

}