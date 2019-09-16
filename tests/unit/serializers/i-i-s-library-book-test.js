import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-library-book', 'Unit | Serializer | i-i-s-library-book', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-library-book',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-library-book'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
