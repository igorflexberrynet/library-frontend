import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-library-book-l');
  this.route('i-i-s-library-book-e',
  { path: 'i-i-s-library-book-e/:id' });
  this.route('i-i-s-library-book-e.new',
  { path: 'i-i-s-library-book-e/new' });
});

export default Router;
