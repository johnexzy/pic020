import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { PersonStateInterface, Person } from './state';

const getters: GetterTree<PersonStateInterface, StateInterface> = {
  getPersons (state: PersonStateInterface) : Array<Person> {
    return state.persons
  }
};

export default getters;
