(function testCircleRadiusDefaultsTo10() {
  var circle = new Circle();
  check('Does a cicle have a radius of 10', () => {
  assert.isTrue(circle.radius === 10);
  })
})();

(function testArrayContents() {
  check('Does Chloe contain a T', () => {
    assert.include("Chloe", "T");
  })
})();
