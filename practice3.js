function validate() {
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;
    if (p1.length < 8 || p2.length < 8) {
        alert("The length of both passwords needs to be 8 or more letters");
    } else if (p1 != p2) {
        alert("The two passwords don't match");
    } else {
        alert("Passwords validated");
    }
}