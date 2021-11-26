import { MutationTree } from 'vuex';
import { PersonStateInterface } from './state';

const mutation: MutationTree<PersonStateInterface> = {
  setLoadPerson (state: PersonStateInterface) {
    // const bank = state.persons
    state.fpersons = state.fpersons.concat(state.persons.splice(0, 10))
  }
};

export default mutation;
