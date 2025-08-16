let message = "Hello, Node.js!";

console.log(message);

document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body");
    const greeting = document.createElement("h6");
    greeting.textContent = message;
    body.appendChild(greeting);
});

let name = "Yaqeen Khazaleh";
let age = 25;
let hobbies = ["coding", "reading", "gaming"];
let job = {tile: "CTO", company: "Amazon", Salary: 100000};

alert(`Name: ${name}, Age: ${age}, Hobbies: ${hobbies.join(", ")}` 
+ `, Job: ${job.tile} at ${job.company} with a salary of ${job.Salary}`);

function calculateAdultYears(userAge) {
    return userAge - 18;
}

alert(`You have been an adult for ${calculateAdultYears(age)} years.`);

age = 27;
alert(`you have been an adult for ${calculateAdultYears(age)} years.`);


document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body");
    const adultInfo = document.createElement("p");
    adultInfo.textContent = `You have been an adult for ${adultYears} years.`;
    body.appendChild(adultInfo);
});


document.addEventListener("zDOMContentLoaded", function() {
    const body = document.querySelector("body");
    const info = document.createElement("p");
    info.textContent = `Name: ${name}, Age: ${age}, Hobbies: ${hobbies.join(", ")}`;
    body.appendChild(info);
});
