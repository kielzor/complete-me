const fs = require('fs');
const { expect } = require('chai');
const Trie = require('../lib/trie.js');


describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should exist', () => {
    expect(trie).to.exist;
  });

  it('2. trie should create an empty root node', () => {
    expect(trie.head.value).to.equal('')
  });
      
  describe('insert', () => {

    it('should be able to add a node to the Trie', () => {
      trie.insert('pizza');
      
      expect(trie.head.child.p.value).to.deep.equal('p');
      expect(trie.head.child.p.child.i.value).to.deep.equal('i');
    });

    it('Should be able the value is a word', () => {


      expect(trie.head.child).to.deep.equal({});

      trie.insert('taco');

      expect(
        trie.head
        .child.t
        .child.a
        .child.c
        .child.o
        .isWord
      ).to.equal('taco');
    })
  })

  describe('count', () => {
    it('Should keep track of the amount of words imported', () => {
      trie.insert('pizza');
      trie.insert('taco');

      expect(trie.count()).to.equal(2);

      trie.insert('burger');

      expect(trie.count()).to.equal(3);      
    })

    it('Should not create a new word if it is a duplicate', () => {
      trie.insert('pizza');
      trie.insert('pizza');

      expect(trie.count()).to.equal(1)
    });
  })

  describe('find and suggest', () => {
    it('Should suggest words', () =>{ 
      trie.insert('pizza');
      trie.insert('pineapple')

      expect(trie.find('pi')).to.deep.equal(['pizza', 'pineapple']);
    });

    it('Should not suggest if the prefix does not include letters', () => {
      trie.insert('pizza');
      trie.insert('juice')

      expect(trie.find('pi')).to.deep.equal(['pizza']);
    })
  })

  describe('populate', () => {
    const text = "/usr/share/dict/words";
    const dictionary = fs.readFileSync(text).toString().trim().split('\n');
    
    it('Should populate the dictionary', () => {
      trie.populate(dictionary);

      expect(trie.count()).to.equal(234371)
    })  
  })
});