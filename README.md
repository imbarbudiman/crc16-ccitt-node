# crc16-ccitt-node

Fungsi untuk mendapatkan nilai Error Check atau Checksum dengan algoritma crc-16 atau crc-ccitt atau crc-itu

#### Contoh
```javascript
var crc = require('crc16-ccitt-node');
var buffData = new Buffer(3);

buffData.writeUInt8(0x78, 0);
buffData.writeUInt8(0x78, 1);
buffData.writeUInt8(0x78, 2);

console.log(crc.getCrc16(buffData));
```