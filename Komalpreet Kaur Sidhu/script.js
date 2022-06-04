var firstname = prompt("What is your first name?");
document.getElementById("name").innerHTML = firstname;

var contact = prompt("What is your emergency contact number?");
document.getElementById("number").innerHTML = contact;

var profession = prompt("What is  your Profession ?");
document.getElementById("work").innerHTML = profession;

var qualification = prompt("What is your highest qualification?");
document.getElementById("study").innerHTML = qualification;

var payment = prompt("What is the total payment received today?");

function totalpayment(payment,tax){
    var total = payment + tax;
    document.getElementById("let").innerHTML = total;
}

totalpayment(payment,10);


