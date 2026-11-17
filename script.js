function switchCampus(type) {
    var textBox = document.getElementById("campus-desc");
    var banner = document.getElementById("banner-pic");

    if (type == "fcit") {
        textBox.innerHTML = "<b>FCIT Building (31):</b> Computer labs, lecture halls, and IS/CS department offices.";
        banner.src = "campus2.png";
    } else {
        textBox.innerHTML = "<b>Main Portal:</b> General student services, advising schedules, and registration info.";
        banner.src = "campus1.png";
    }
}

function showNotices() {
    var notices = [
        "Assignment 2 submission is due this week on Blackboard.",
        "Make sure to check your academic advisor hours before adding/dropping courses.",
        "FCIT Lab 3 is open for student project practice from 9 AM to 2 PM."
    ];

    var list = document.getElementById("notice-ul");
    list.innerHTML = "";

    for (var i = 0; i < notices.length; i++) {
        var item = document.createElement("li");
        item.innerHTML = notices[i];
        list.appendChild(item);
    }
}

function checkLogin() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var msg = document.getElementById("login-msg");

    if (email == "" || pass == "") {
        msg.style.color = "red";
        msg.innerHTML = "Error: Please enter both email and password.";
        return false;
    }

    if (email.indexOf("@") == -1) {
        msg.style.color = "red";
        msg.innerHTML = "Error: Enter a valid email address.";
        return false;
    }

    msg.style.color = "green";
    msg.innerHTML = "Login successful!";
    return false;
}

function checkSignup() {
    var fname = document.getElementById("fname").value;
    var semail = document.getElementById("semail").value;
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;
    var smsg = document.getElementById("signup-msg");

    if (fname == "" || semail == "" || p1 == "" || p2 == "") {
        smsg.style.color = "red";
        smsg.innerHTML = "All fields are required.";
        return false;
    }

    if (p1 != p2) {
        smsg.style.color = "red";
        smsg.innerHTML = "Passwords do not match.";
        return false;
    }

    smsg.style.color = "green";
    smsg.innerHTML = "Account created successfully!";
    return false;
}
