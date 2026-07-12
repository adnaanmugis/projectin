const user = JSON.parse(localStorage.getItem("user"));

document.getElementById("name").innerHTML = user.name;

document.getElementById("email").innerHTML = user.email;

function logout() {

    localStorage.clear();

    window.location = "login.html";

}