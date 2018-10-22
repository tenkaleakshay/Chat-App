var expect = require('expect');

var{generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from  = 'Axay';
    var text = 'some text';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from,text});
  })
})
