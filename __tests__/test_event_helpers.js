jest
  .dontMock('../src/event-helpers')
  .dontMock('jquery');

describe('event-helpers', function() {
  beforeEach(function() {
    this.myMock = jest.genMockFunction();
  });

  it('ifFn', function() {
    let {ifFn} = require('../src/event-helpers'),
        equalsFoo = (arg1) => arg1 === 'foo',
        callIfFoo = ifFn(equalsFoo)(this.myMock);

    expect(this.myMock.mock.calls.length).toBe(0);

    callIfFoo('foo');
    expect(this.myMock.mock.calls.length).toBe(1);

    callIfFoo('not foo');
    expect(this.myMock.mock.calls.length).toBe(1);
  });

  it('ifFn works as a decorator', function() {
    let {ifFn} = require('../src/event-helpers'),
        equalsFoo = (arg1) => arg1 === 'foo',
        callIfFoo = ifFn(equalsFoo),
        myMock = this.myMock;

    class MyClass {
      @callIfFoo
      myMethod() {
        myMock('hello');
      }
    }

    let myClass = new MyClass();

    expect(myMock.mock.calls.length).toBe(0);

    myClass.myMethod('foo');
    expect(myMock.mock.calls.length).toBe(1);

    myClass.myMethod('not foo');
    expect(myMock.mock.calls.length).toBe(1);
  });

  it('ifLeftClick', function() {
    let $ = require('jquery'),
        {ifLeftClick} = require('../src/event-helpers'),
        button = $('<button />')
          .appendTo(document.body)
          .on('click', ifLeftClick(this.myMock));

    expect(this.myMock.mock.calls.length).toBe(0);

    button.trigger({
      type: 'click',
      button: 0,
    });
    expect(this.myMock.mock.calls.length).toBe(1);

    // middle click
    button.trigger({
      type: 'click',
      button: 1,
    });
    expect(this.myMock.mock.calls.length).toBe(1);

    // modified
    button.trigger({
      type: 'click',
      button: 0,
      altKey: true,
    });
    expect(this.myMock.mock.calls.length).toBe(1);
  });

  it('killLeftClickEvent', function() {
    let $ = require('jquery'),
        {killLeftClickEvent} = require('../src/event-helpers'),
        button = $('<button />')
          .appendTo(document.body)
          .on('click', killLeftClickEvent);

    $(document.body).on('click', this.myMock);

    expect(this.myMock.mock.calls.length).toBe(0);

    button.trigger({
      type: 'click',
      button: 0,
    });
    expect(this.myMock.mock.calls.length).toBe(0);

    button.trigger({
      type: 'click',
      button: 1,
    });
    expect(this.myMock.mock.calls.length).toBe(1);
  });

  it('ifKeyOf', function() {
    let $ = require('jquery'),
        {ifKeyOf} = require('../src/event-helpers'),
        textarea = $('<textarea />')
          .appendTo(document.body)
          .on('keypress', ifKeyOf(['a', 'b'])(this.myMock));

    expect(this.myMock.mock.calls.length).toBe(0);

    textarea.trigger({
      type: 'keypress',
      key: 'b',
    });
    expect(this.myMock.mock.calls.length).toBe(1);

    textarea.trigger({
      type: 'keypress',
      key: 'Escape',
    });
    expect(this.myMock.mock.calls.length).toBe(1);
  });
});
