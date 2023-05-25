const hours = +prompt("Enter number of hours", "");

if (hours) {
  const seconds = hours * 60 * 60;
  alert(`Your hours in seconds looks like this: ${seconds}sec`);
} else {
  alert(`You enter uncorrect value :( \nTry again!`);
}
