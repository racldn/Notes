(function hasABody() {
  let note = new Note('Test Body');
  check('Note has body as defined', () => {
  assert.isTrue(note.body === 'Test Body');
  })
})();
