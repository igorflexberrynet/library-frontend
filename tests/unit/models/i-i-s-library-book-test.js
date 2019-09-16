import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-library-book', 'Unit | Model | i-i-s-library-book', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-library-book'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
