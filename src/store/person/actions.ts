import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { PersonStateInterface } from './state';

const actions: ActionTree<PersonStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
