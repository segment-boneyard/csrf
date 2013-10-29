
describe('csrf', function () {

  var assert = require('assert');
  var csrf = require('csrf');
  var domify = require('domify');

  it('should work', function () {
    var form = domify('<form>');
    csrf(form, 'token');
    var input = form.querySelector('input');
    assert('token' == input.value);
  });

});