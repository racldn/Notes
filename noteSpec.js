(function testCircleRadiusDefaultsTo10() {
  var circle = new Circle();
  assert.isTrue(circle.radius === 10);
})();



(function testArrayContents() {
  assert.include("Chloe", "T");
})();

(function noteCheck() {
  let note1 = new Note("Birthday");
  assert.isTrue(note1.title === "Birthday");
})();

// testCircleRadiusDefaultsTo10();
//
// testArrayContents();
