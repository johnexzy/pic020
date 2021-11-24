import { MutationTree } from 'vuex';
import { PersonStateInterface } from './state';

const mutation: MutationTree<PersonStateInterface> = {
  someMutation (/* state: ExampleStateInterface */) {
    // your code
  }
};

export default mutation;
