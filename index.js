
/**
 * Expose `csrf`.
 */

module.exports = csrf;


/**
 * Automatically fill a `form`'s CSRF field.
 *
 * @param {Element} form
 */

function csrf (form, value) {
  var input = document.createElement('input');
  input.type = 'hidden';
  input.name = '_csrf';
  input.value = value;
  form.appendChild(input);
}