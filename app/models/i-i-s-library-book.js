import { Model as BookMixin, defineNamespace, defineProjections } from
  '../mixins/regenerated/models/i-i-s-library-book';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, BookMixin, {

});

defineNamespace(Model);
defineProjections(Model);
export default Model;
