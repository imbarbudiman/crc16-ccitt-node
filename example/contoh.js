var crc = require('crc16-ccitt-node');
var buffData = new Buffer('ff7878', 'hex');

console.log("string hex : %s ", crc.getCrc16(buffData).toString(16));
// string hex : c1f4

console.log("decimal : %d ", crc.getCrc16(buffData));
// decimal : 49652