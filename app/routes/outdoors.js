import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Parthenon', 'Cheekwood', 'Percy Warner', 'Lake Radnor']
  }
});
