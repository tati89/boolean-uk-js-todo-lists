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

/*
Challenge
After you select a user, add the option to either show the todos or add a new todo
to the list

Challenge 2
Now that you can add a todo, add the option to either delete or update a todo. Add also 
the option to repeatedly choose a different user, or to finish the program
*/

//create a string for the alert message with ids, names and cities
idsNamesCities = "";

for (const user of users) {
  idsNamesCities += user.id + " " + user.name + " " + user.address.city + "\n";
}

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
    if (user.completed === false) {
      toDoAlertMessage += "-" + " " + user.title + "\n";
    }
  }
}

if (found == true) {
  const userOption = Number(
    prompt("choose 1 to see currrent todo list or 2 to add a new task")
  );
  if (userOption === 1) {
    alert(toDoAlertMessage);
  } else {
    toAddTask = prompt("Add todo: ");
    todos.push({
      userId: userInputID,
      id: todos.length + 1,
      title: toAddTask,
      completed: false,
    });
  }
} else {
  alert("Sorry, I can't find matching id");
}

console.log(todos);
