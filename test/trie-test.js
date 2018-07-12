const { expect } = require('chai');
const Trie = require('../lib/node.js');

describe('Trie', () => {
  let trie = new Trie('pizza');
  
    it('should exist', () => {
      expect(trie).to.exist;
    })
  });
