#!/usr/bin/node

const kb = require('./kb.js');
const helpMessages = require('./helpMessages.js');


let state = 0;
for (const arg of process.argv.slice(2)){
	if (arg === '--help'){
		process.stdout.write(helpMessages.general);
		process.exit(0)
	}
	//else if (arg === '--')
}
kb.setLineCallback((p_line)=>{
	console.log(`line(${p_line})`);
});
kb.setCharCallback((p_str, p_key)=>{
	if ((p_key.ctrl && p_key.name === 'c') || p_key.name === 'q'){
		process.stdout.write('\n');
		process.exit();
	}
	if (p_key.name === 'h') {
		process.stdout.write(helpMessages.generalInstant);
	}
	else if (p_key.name === '1'){
		process.stdout.write('\n');
		kb.setIntercative(false);
	}
});
kb.setIntercative(true);

