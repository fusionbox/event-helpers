# event-helpers

A collection of utils and ES7 decorators to help you handle events.

## Installation

    npm install --save event-helpers

## Examples

Here are a couple of examples using some of the utility functions provided by
event-helpers.

### Stopping propagation

Before:

```javascript
$('#mybutton').on('click', function(event) {
  event.preventDefault();
  event.stopPropagation();

  // do stuff...
});
```

After:

```javascript
import {killEvent} from 'event-helpers';

$('#mybutton').on('click', function(event) {
  killEvent(event);

  // do stuff...
});
```

### Limiting event handlers to left click

Before:

```javascript
$('#mybutton').on('click', function(event) {
  if (event.button !== 0) {
    return;
  }

  // do stuff...
});
```

After:

```javascript
import {killEvent, ifLeftClick} from 'event-helpers';

$('#mybutton').on('click', ifLeftClick(function(event) {
  // do stuff...
}));
```

### With React

```javascript
import React from 'react';
import {ifLeftClick} from 'event-helpers';

class MyButton extends React.Component {
  render() {
    return <button onClick={this.onClick.bind(this)}>click me</button>;
  }

  @ifLeftClick
  onClick() {
    // do stuff...
  }
}
```


### Limit based on which key was pressed

```javascript
import React from 'react';
import {ifKeyOf, isUnmodified} from 'event-helpers';

class ChatEditor extends React.Component {
  render() {
    return (
      <div>
        <ChatMessages />
        <textarea onKeyPress={this.sendMessage} />
      </div>
    );
  }

  @ifKeyOf(['Enter'])
  sendMessage(event) {
    if (isUnmodified(event)) {
      // send message
    } else if (event.shiftKey) {
      // add new line
    }
  }
}
```


### Write your own!

You can write your own decorators using `ifFn`. `ifFn` is a function that takes
a predicate and returns a decorator that will only run if the predicate passes.

```javascript
import {ifFn} from 'event-helpers';

function isRightClick(event) {
  return event.button === 2;
}

var ifRightClick = ifFn(isRightClick);

$('#mybutton').on('click', ifRightClick(function(event) {
  // do stuff...
});
```

## List of helpers

- `ifFn`
- `isUnmodified` - Returns true if there were no modifiers (_ctrl_, _alt_,
  _shift_, _meta_)
- `isLeftClick`
- `isLeftClick2` - Like `isLeftClick`, but operates on the second argument.
- `killEvent`
- `killLeftClickEvent`
- `isKeyOf` - Returns true if the key pressed was any of the array passed in.
  **Note:** This only works on browsers that implement the
  [KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
  property.
- `ifKeyOf`
