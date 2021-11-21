import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { PersonStateInterface } from './state';

const getters: GetterTree<PersonStateInterface, StateInterface> = {
  Persons (state) {
    return state.persons
  }
};

export default getters;
