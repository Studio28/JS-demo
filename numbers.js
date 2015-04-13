var inputOne = prompt('Please enter a number between 1 and 10');
var topNumber = parseInt(inputOne);
var randNumber = Math.floor(Math.random() * topNumber) + 1;
var message = "<p>" + randNumber + " is a number between 1 and " + topNumber + " .</p>;"
document.write(message);