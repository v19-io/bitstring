export default class Bitstring {
  constructor(private bits: Uint8Array) {}

  get length() {
    return this.bits.length * 8;
  }

  get(index: number) {
    const byteIndex = Math.floor(index / 8);
    const bitIndex = 7 - (index % 8);
    return (this.bits[byteIndex] >> bitIndex) & 1;
  }

  set(index: number, value: number) {
    const byteIndex = Math.floor(index / 8);
    const bitIndex = 7 - (index % 8);
    if (value === 1) {
      this.bits[byteIndex] |= 1 << bitIndex;
    } else {
      this.bits[byteIndex] &= ~(1 << bitIndex);
    }
  }

  range(start: number, end: number) {
    let result = 0;
    for (let i = start; i < end; i++) {
      result = (result << 1) | this.get(i);
    }
    return result;
  }

  toString() {
    return this.bits.reduce(
      (acc, byte) => acc + byte.toString(2).padStart(8, "0"),
      ""
    );
  }

  rightPad(bytes: number) {
    const result = new Uint8Array(this.bits.length + bytes);
    result.set(this.bits);
    this.bits = result;
  }

  leftPad(bytes: number) {
    const result = new Uint8Array(this.bits.length + bytes);
    result.set(this.bits, bytes);
    this.bits = result;
  }

  toUint8Array() {
    return this.bits;
  }
}
