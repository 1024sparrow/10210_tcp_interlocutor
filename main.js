#!/usr/bin/node

const readline = require('readline');
const helpMessages = require('./helpMessages.js');


let state = 0;
for (const arg of process.argv.slice(2)){
	if (arg === '--help'){
		console.log(`MpAsdc client. Test application.
Author: boris.
`);
		process.exit(0)
	}
	//else if (arg === '--')
}

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key)=>{
	if ((key.ctrl && key.name === 'c') || key.name === 'q'){
		process.stdout.write('\n');
		process.exit();
	}
	if (key.name === 'h') {
		process.stdout.write(helpMessages.general);
	}
	else if (key.name === '1'){
		process.stdout.write('1111\n');
	}
});


//var command;
//while (command !== 'q'){
//	command = readline
//}
//const rl = readline.createInterface({
//	input: process.stdin,
//	output: process.stdout
//});
//rl.on('line', (p_line)=>{
//	console.log(`line(${p_line})`);
//});
