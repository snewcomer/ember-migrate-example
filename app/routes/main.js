import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  i18n: inject('i18n'),
  i18n: inject(),
  i18n: service(),

  init() {
    this.i18n.t('wat');
    this.get('i18n').t('wat');
    get(this, 'i18n').t('wat');
  }
});