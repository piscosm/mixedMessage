console.log("Welcome to Mixed Messages Project");

const minYear = 2021;
const maxYear = 2030;
const message = [];

const data ={
person: ['your dad', 'your mum', 'tekashi 6ix9ine', 'the pope', 'some actor', 'the cousinf of your imaginary friend', 'Mr. Donald Trump'],
action: ['learn to code', 'start doing sport', 'plant something', 'start thinking', 'quit his job', 'make new friends', 'travel around the world'],
month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
}

function getRandomYear(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

function mixedMessages (){
    for (item in data){
        randomIndex = Math.floor(Math.random()*data[item].length);
        switch(item){
            case 'person':
                message.push(data[item][randomIndex]);
                break;
            case 'action':
                message.push(' will ' + data[item][randomIndex]);
                break;
            case 'month':
                message.push(' on '+data[item][randomIndex]);
                break;
        };
    };
    message.push(' '+getRandomYear(minYear,maxYear));
    return message.join('');
};

console.log(mixedMessages());



