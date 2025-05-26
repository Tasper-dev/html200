window.onload = function () {
  menuOptions();
};
function menuOptions() {
  let input;
  let balance = 0;
  do {
    input = prompt(
      `Enter Q to quit program.
        Enter W to withdraw funds.
        Enter D to deposit funds.
        Enter B to view account balance.`
    );
    switch (input?.toUpperCase()) {
      case "Q":
        alert("Quitting program.");
        break;
      case "W":
        const withdrawAmount = Number(prompt("Enter amount to withdraw:"));
        if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
          alert("Invalid withdrawal amount.");
        } else if (withdrawAmount > balance) {
          alert("Insufficient funds.");
        } else {
          balance -= withdrawAmount;
          alert(`New Account Balance: $${balance.toFixed(2)}`);
        }
        break;
      case "D":
        const depositAmount = Number(prompt("Enter amount to deposit:"));
        if (isNaN(depositAmount) || depositAmount <= 0) {
          alert("Invalid deposit amount.");
        } else if (depositAmount > 50000) {
          alert("Cannot deposit more than $50,000");
        } else {
          balance += depositAmount;
          alert(`New Account Balance: $${balance.toFixed(2)}`);
        }
        break;
      case "B":
        alert(`Account Balance: $${balance.toFixed(2)}`);
        break;
      default:
        alert("Not a valid menu option. Enter a valid menu option.");
    }
  } while (input?.toUpperCase() !== "Q");
}
