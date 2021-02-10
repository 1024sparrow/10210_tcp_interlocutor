#!/usr/bin/node

const readline = require('readline');
const helpMessages = require('./helpMessages.js');


let state = 0;
for (const arg of process.argv.slice(2)){
	if (arg === '--help'){
		process.stdout.write(helpMessages.general);
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
	const line = p_line.slice(falseSymbols);
	falseSymbols = 0;
	console.log(`line(${line})`);
	//rl.close();
	state = 0;
	process.stdin.setRawMode(true);
	//process.stdin.on('keypress', (str, key)=>{console.log('123456');});
});

process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key)=>{

	if (state === 1){
		//if (key.name.length === 1 && !key.ctrl && !key.meta){
		return;
	}
	if ((key.name.length === 1 || [].indexOf(key.name) >= 0) && !key.ctrl && !key.meta){
		++falseSymbols;
	}

	//console.log('Key pressed: ', str, key);
	if ((key.ctrl && key.name === 'c') || key.name === 'q'){
		process.stdout.write('\n');
		process.exit();
	}
	if (key.name === 'h') {
		process.stdout.write(helpMessages.generalInstant);
	}
	else if (key.name === '1'){
		process.stdout.write('\n');
		process.stdin.setRawMode(false);

		state = 1;
	}
});


//var command;
//while (command !== 'q'){
//	command = readline
//}

