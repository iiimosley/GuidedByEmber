import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Hattie B\'s', 'Prince\'s', 'Pepperfire', 'Slow Burn', 'Bolton\'s']
  }
});
