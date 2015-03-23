var adjective = prompt('Please type an adjective');
var verb = prompt('Please type a verb');
var noun = prompt('Please type a noun');
var sentence = "<h2>Lebron James is a " + adjective;
sentence += ' basketball player who moved back to Cleveland to ' + verb;
sentence += ' all over the ' + noun + '.</h2>';
alert('So that\'s it! Ready for the message? Click OK to read your fantastic sentence');
document.write(sentence);