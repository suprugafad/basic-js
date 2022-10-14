const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  str: '',

  getLength() {
    return this.str.split('~~').length;
  },
  addLink(value) {
    if (this.str.length) {
      this.str += `~~( ${value} )`;
      return this;
    } else {
      this.str += `( ${value} )`;
      return this;
    }
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position <= 0 || position > this.getLength()) {
      this.str = '';
      throw Error("You can't remove incorrect link!");
    }
    let arr = this.str.split('~~').filter((item, index) => {
      if (index !== position - 1) return item;
    });

    this.str = arr.join('~~');
    return this;
  },
  reverseChain() {
    let arr = this.str.split('~~').reverse();
    this.str = arr.join('~~');
    return this;
  },
  finishChain() {
    let end = this.str;
    this.str = '';
    return end;
  },
};

module.exports = {
  chainMaker
};
