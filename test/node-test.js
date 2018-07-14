const { expect } = require('chai');
const Node = require('../lib/node.js');

describe('NODE', () => {
  let node;

  beforeEach(() => {
    node = new Node('pizza');
  })

  it('should exist', () => {
    expect(node).to.exist;
  })

  it('should default next node to an empty object', () => {
    expect(node.child).to.deep.equal({});
  })

  it('should take data and assign it to data prop', () => {
    expect(node.value).to.equal('pizza');
  })
})
