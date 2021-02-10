#!/usr/bin/node

const path = require('path');

module.exports = {

	general: `Prerecorded messages player.
SINOPSYS:
	<PATH TO ...>${path.basename(process.argv[1])} [--config <PATH TO CONFIG>] [--help]

--config <PATH TO CONFIG>
	specify path to config file

After start
===========
press 'q' to quit,
press 'h' to instant help,
press '1' to add new record,
press Letter (from the set of prerecordedMessages) to post corresponding message to the server

CONFIG-file format (JSON)
=========================
{
	"serverHost": "192.168.1.123",
	"port": "1234",
	"prerecordedMessages": {
		"q": "SOME MESSAGE TO SERVER",
		"w": "SOME MESSAGE TO SERVER"
	}
}

Author: Boris Vasilyev.
`,

	generalInstant: `
************************
* q - quit
* h - instant help
* <1> - record new record
************************
`

};
