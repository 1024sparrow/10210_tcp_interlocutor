#!/usr/bin/node

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

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

var command;
//while (command !== 'q'){
//	command = readline
//}
rl.on('line', (p_line)=>{
	console.log(`(${p_line})`);
});
