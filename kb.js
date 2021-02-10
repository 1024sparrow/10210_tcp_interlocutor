// NodeJS-module. Helper to make interactive console interface.

const readline = require('readline');

function Kb(){
	this._state = 0; // 0 - interactive; 1 - input.
	this._falseSymbols = 0;
	this._fCharCallback = undefined;
	this._fLineCallback = undefined;

	readline.emitKeypressEvents(process.stdin);
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	var self = this; // boris e
	rl.on('line', (p_line)=>{
		if (self._state === 0)
	});
};

Kb.prototype.setIntercative = function(p_interactive){
	this._state = p_interactive ? 0 : 1;

	if (p_interactive){
		this._state = 0;
		process.stdin.setRawMode(true);
	}
	else{
		process.stdin.setRawMode(false);
		this._state = 1;
	}
};

Kb.prototype.setCharCallback = function(p_function, p_scope){
	if (p_scope) {
		this._fCharCallback = function(p2_char){
			p_function.call(p_function, p2_char);
		};
	}
	else {
		this._fCharCallback = p_function;
	}
};

Kb.prototype.setLineCallback = function(p_function, p_scope){
	if (p_scope) {
		this._fLineCallback = function(p2_line){
			p_function.call(p_function, p2_line);
		};
	}
	else {
		this._fCharCallback = p_function;
	}
};

module.exports = new Kb();
