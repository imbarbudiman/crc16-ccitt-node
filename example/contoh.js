var crc = require('crc16-ccitt-node');
var buffData = new Buffer('ff7878', 'hex');


console.log("hex : %s ", crc.getCrc16(buffData).toString(16));
console.log("decimal : %d ", crc.getCrc16(buffData));