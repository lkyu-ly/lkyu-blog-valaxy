const fs = require('fs');
const download = require('download');

let url =
	'https://raw.githubusercontent.com/massgravel/Microsoft-Activation-Scripts/master/MAS/All-In-One-Version/MAS_AIO.cmd';
(async () => {
	let data = await download(url);
	await fs.promises.writeFile('public/mas.cmd', data);
})();
