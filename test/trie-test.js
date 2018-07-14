const { expect } = require('chai');
const Trie = require('../lib/trie.js');


describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should exist', () => {
    expect(trie).to.exist;
  })
    
  it('should have a rootNode node defaulted to null', () => {
    expect(trie.rootNode).to.equal(null);
  });

 it('should take in an word and split it into an array of letters', () =>  {
  console.log(new Trie('pizza'))
 });
    
  describe('insert', () => {
    it('should be able to add a node to the Trie', () => {
      trie.insert('pizza');
      
      expect(trie.rootNode.value).to.equal('pizza');
    });
  })
});
    