/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

// console.log("users: ", users);

// console.log("todos: ", todos);

/*
- Create an alert that lists all users, with their ids, names and what city they're from
- Prompt the user for a user id
- Display an alert with the username and all the todos titles that belong to that user
*/

//create a string for the alert message with ids, names and cities
idsNamesCities = "";

for (const user of users) {
  idsNamesCities += user.id + " " + user.name + " " + user.address.city + "\n";
}

console.log(idsNamesCities);

//create an alert
alert("Users: \n" + idsNamesCities);

//Prompt the user for a user id
const userInputID = Number(prompt("What is your id number? "));

//Display an alert with the username and all the todos titles that belong to that user
let found = false;
toDoAlertMessage = "";
for (const user of users) {
  if (user.id === userInputID) {
    found = true;
    toDoAlertMessage += user.name + "\n";
    break;
  }
}
for (const user of todos) {
  if (user.userId === userInputID) {
    if (user.completed === true) {
      toDoAlertMessage += "-" + " " + user.title + "\n";
    }
  }
}

if (found == true) {
  alert(toDoAlertMessage);
} else {
  alert("Sorry, I can't find matching id");
}
