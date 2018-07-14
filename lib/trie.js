require('locus');
const Node = require('../lib/node.js');

module.exports = class Trie {
  constructor() {
    // eval(locus)
    this.rootNode = null;
  }

  insert(val) {
    let node = new Node(val);
    
    if(!this.rootNode) {
      return this.rootNode = node;
    }
    
    
    
  }
}