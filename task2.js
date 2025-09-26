//Task 3: Voting Eligibility Checker
function votingChecker() {
  let again = true;

  while (again) {
    let name = prompt("Enter your name:");
    let age = prompt("Enter your age:");

    if (age >= 18) {
      alert("Hello " + name + ", you are eligible to vote");
    } else {
      alert("Sorry " + name + ", you are not eligible to vote");
    }

    again = confirm("Do you want to check again?");
  }

  alert("Goodbye!");
}

//Task 4: Library Login & Book Borrow System
function librarySystem() {
  let username = prompt("Enter username:");
  let password = prompt("Enter password:");

  if (username === "library" && password === "book123") {
    let borrow = confirm("Do you want to borrow a book?");
    if (borrow) {
      let choice = prompt("Choose a category:\n1 = Fiction\n2 = Science\n3 = History");
      switch (choice) {
        case "1":
          alert("You selected Fiction");
          break;
        case "2":
          alert("You selected Science");
          break;
        case "3":
          alert("You selected History");
          break;
        default:
          alert("Invalid category");
      }
    } else {
      alert("Maybe next time! Goodbye!");
    }
  } else {
    alert("Invalid login!");
  }
}

votingChecker();
librarySystem();
