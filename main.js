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

state = 0; // interactive mode
let falseSymbols = 0;
readline.emitKeypressEvents(process.stdin);
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.on('line', (p_line)=>{
	if (state === 0){
		return;
	}
	console.log(`line(${p_line})`);
	//rl.close();
	state = 0;
	process.stdin.setRawMode(true);
	//process.stdin.on('keypress', (str, key)=>{console.log('123456');});
});
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key)=>{
	if (state === 1){
		return;
	}
	if ((key.ctrl && key.name === 'c') || key.name === 'q'){
		process.stdout.write('\n');
		process.exit();
	}
	if (key.name === 'h') {
		process.stdout.write(helpMessages.general);
	}
	else if (key.name === '1'){
		process.stdin.setRawMode(false);

		state = 1;
	}
});


//var command;
//while (command !== 'q'){
//	command = readline
//}

