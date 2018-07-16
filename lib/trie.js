require('locus');
const Node = require('../lib/node.js');

module.exports = class Trie {
  constructor() {
    this.head = new Node();
    this.wordCount = 0;
  }
  
  insert(val) {
    val = val.toLowerCase();
    let arr =  [...val];
    let currNode = this.head;

    for (let i = 0; i < arr.length; i++) {
      if (!currNode.child[arr[i]]) {
        currNode.child[arr[i]] = new Node(arr[i]);
      }

      currNode = currNode.child[arr[i]];

      if (i === arr.length - 1 && !currNode.isWord) {
        currNode.isWord = val;
        this.wordCount++;
      }
    }
  }

  count() {
    return this.wordCount;
  }

  find(val) {
    val = val.toLowerCase()
    let currNode = this.head;
    let suggestedWord = [];

    for (let i = 0; i < val.length; i++) {
      if (currNode.child[val[i]]) {
        currNode = currNode.child[val[i]]
      }
    }
    
    this.suggest(currNode, suggestedWord);
    return suggestedWord;
  }

  suggest(val, arr) {
    if (val.isWord) {
      arr.push(val.isWord)
    }

    for (let children in val.child) {
      this.suggest(val.child[children], arr);
    }
  }

  populate(dictionary) {
    dictionary.forEach(word => {
      this.insert(word.toLowerCase())
    })
  }
}