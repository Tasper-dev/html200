window.onload = function () {
  menuOptions();
};
function menuOptions() {
  let input;
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
        prompt("Enter amount to withdraw:");
        break;
      case "D":
        prompt("Enter amount to deposit:");
        break;
      case "B":
        alert("Account Balance: $");
        break;
      default:
        alert("Not a valid menu option. Enter a valid menu option.");
    }
  } while (input?.toUpperCase() !== "Q");
}
