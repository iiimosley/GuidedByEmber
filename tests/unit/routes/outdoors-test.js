import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | outdoors', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:outdoors');
    assert.ok(route);
  });
});
