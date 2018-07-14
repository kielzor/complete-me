module.exports = class Node {
  constructor (val = '', child = {}) {
    this.value = val;
    this.child = child;
    this.isWord = null;
  }
}