
# csrf

  Automatically fill a form's CSRF field.

## Installation

    $ component install segmentio/csrf

## Example

```js
var csrf = require('csrf');
var form = document.querySelector('form');

csrf(form, 'token');
```

## API

### csrf(form, token)
  
  Automatically fill a `form`'s `_csrf` field with `token`.
  
## License

  MIT
