import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export function defineNamespace(modelClass) {
  modelClass.reopenClass({
    namespace: 'IIS.Library',
  });
}

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BookE', 'i-i-s-library-book', {
    name: Projection.attr('Name', { index: 0 })
  });
  modelClass.defineProjection('BookL', 'i-i-s-library-book', {
    name: Projection.attr('Name', { index: 0 })
  });
};
