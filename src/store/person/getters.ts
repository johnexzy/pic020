import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { PersonStateInterface, Person } from './state';

const getters: GetterTree<PersonStateInterface, StateInterface> = {
  getPersons (state: PersonStateInterface): Array<Person> {
    return state.fpersons
  },
  getPerson (state: PersonStateInterface): Person {
    return state.person
  },
  getLoadImages (state: PersonStateInterface): boolean {
    return state.loadImages
  }
};

export default getters;
