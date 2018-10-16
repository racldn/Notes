(function hasABody() {
  let note = new Notes('Test Body');
  check('Note has body as defined', () => {
  assert.isTrue(note.body === 'Test Body');
  })
})();
