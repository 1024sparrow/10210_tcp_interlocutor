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

state = 0; // interactive mode
kb.setIntercative(true);


kb.setLineCallback((p_line)=>{
	console.log(`line(${line})`);
});
kb.setCharCallback((p_char)=>{
	if ((key.ctrl && key.name === 'c') || key.name === 'q'){
		process.stdout.write('\n');
		process.exit();
	}
	if (key.name === 'h') {
		process.stdout.write(helpMessages.generalInstant);
	}
	else if (key.name === '1'){
		process.stdout.write('\n');
		kb.setIntercative(false);
	}
});

