const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value = "( )") {
    //this.chain.push(value);
    this.chain.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if (this.chain[position - 1] == undefined) {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = `( ${this.chain.join(" )~~( ")} )`;
    this.chain = [];
    return str;
  },
};

module.exports = {
  chainMaker,
};
