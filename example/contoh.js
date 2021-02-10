let crc = require("../lib/crc16-ccitt");
let buffData = new Buffer.from('ff7878', 'hex');

console.log("string hex : %s ", crc.getCrc16(buffData).toString(16));
// string hex : c1f4

console.log("decimal : %d ", crc.getCrc16(buffData));
// decimal : 49652