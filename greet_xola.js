import chalk from 'chalk';
//import the greet module that is in the current folder
import greet from './greet.js';

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)


import figlet from 'figlet'

figlet('greet_xola.js',function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    const styledMessage = chalk.bgRed.black(greet(data));
    console.log(styledMessage)
});



figlet.text('Boo!', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    const styledMessage = chalk.bgYellow.black(greet(data));
    console.log(styledMessage)
})