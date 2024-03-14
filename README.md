# @v19/bitstring

A simple library for using a UInt8Array as a bitstring.

## Usage

```javascript
import Bitstring from '@v19/bitstring';

const arr = new Uint8Array(1);
const bitstring = new Bitstring(arr);
bitstring.set(0, 1);
bitstring.set(1, 0);
bitstring.set(2, 1);
bitstring.set(3, 0);
console.log(bitstring.get(0)); // 1
console.log(bitstring.get(1)); // 0
console.log(bitstring.range(0, 2)); // 2
console.log(bitstring.toString()); // '10100000'
```
