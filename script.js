console.log("Welcome to Mixed Messages Project");

const minYear = 2021;
const maxYear = 2030;

const person = ['you', 'your dad', 'your mum', 'tekashi 6ix9ine', 'the pope', 'some actor', 'the cousinf of your imaginary friend', 'Mr. Donald Trump'];
const action = ['learn to code', 'start doing sport', 'plant something', 'start thinking', 'quit his job', 'make new friends', 'travel around the world'];
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const year = [];

function getRandomYear(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

function mixedMessages (){
    let randomPerson = person[Math.floor(Math.random()*person.length)];
    let randomAction = action[Math.floor(Math.random()*action.length)]
    let randomMonth = month[Math.floor(Math.random()*month.length)];  
    console.log(randomPerson+' will '+randomAction+' on '+randomMonth+' '+getRandomYear(minYear, maxYear));
};

mixedMessages();



