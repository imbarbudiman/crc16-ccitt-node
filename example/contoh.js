var crc = require('crc16-ccitt-node');
var buffData = new Buffer(3);

buffData.writeUInt8(0x78, 0);
buffData.writeUInt8(0x78, 1);
buffData.writeUInt8(0x78, 2);

console.log(crc.getCrc16(buffData));