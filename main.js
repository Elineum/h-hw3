const hours = +prompt("Enter number of hours", "");
let seconds;

if (hours) {
  seconds = hours * 60;
  alert(`Your hours in seconds looks like this: ${seconds}sec`);
} else {
  alert(`You enter uncorrect value :( \nTry again!`);
}
