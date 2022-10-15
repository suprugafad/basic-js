const { NotImplementedError } = require('../extensions/index.js');
const CODE_OF_A = 65;
const LETTERS_IN_ALPHABET = 26;
/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
    this.table = [];
    this.alphvt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.build(this.alphvt);
    console.log(this.table);
  }

  build(str) {
    for (let i = 0; i < str.length; i++) {
      this.table.push(str.slice(i, str.length) + str.slice(0, i));
    }
  }

  encrypt(str, code) {

    if (!str || !code) throw new Error('Incorrect arguments!');

    let res = "";
    let pivot = 0;

    for (let i = 0 ; i < str.length; i++) {
      if (this.alphvt.includes(str[i].toUpperCase())) {
        let x = this.alphvt.indexOf(str[i].toUpperCase());
        let y = this.alphvt.indexOf(code[pivot].toUpperCase());
        res += this.table[y][x];
        pivot++;
        if (pivot >= code.length) pivot = 0;
      } else {
        res += str[i];
      }
    }
    if (!this.reverse) {
      return res.split("").reverse().join("");
    }
    return res;
  }

  decrypt(str, code) {

    if (!str || !code) throw new Error('Incorrect arguments!');

    let res = "";
    let pivot = 0;

    for (let i = 0 ; i < str.length; i++) {
      if (this.alphvt.includes(str[i].toUpperCase())) {
        let y = this.alphvt.indexOf(code[pivot].toUpperCase());
        let x = this.table[y].indexOf(str[i].toUpperCase());
        res += this.alphvt[x];
        pivot++;
        if (pivot >= code.length) pivot = 0;
      } else {
        res += str[i];
      }
    }
    if (!this.reverse) {
      return res.split("").reverse().join("");
    }
    return res;
  }
}

module.exports = {
  VigenereCipheringMachine
};
