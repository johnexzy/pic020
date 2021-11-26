import { MutationTree } from 'vuex';
import { PersonStateInterface } from './state';

const mutation: MutationTree<PersonStateInterface> = {
  setLoadPerson (state: PersonStateInterface) {
    // const bank = state.persons
    state.fpersons.push(...state.persons.splice(0, 10))
  },
  setPerson(state: PersonStateInterface, slug: string) {
    state.person = state.seeds.find(r => r.slug === slug) || {
      'Timestamp': '7/16/2021 22:18:39',
      'Email Address': 'beatriceagu50@gmail.com',
      'Full Name': 'Agukpo Beatrice Nneka ',
      'State of origin': 'ENUGU',
      'Phone number': '07050459080',
      'Nick name (optional)': 'Tricy',
      'Hobbies and passion': 'Love listen to music / dancing ',
      'Photo (passport)': 'https://drive.google.com/open?id=1JUFo3YjavQbdFCUk-6ODEXPvey3i8GSE',
      'image': 'https://drive.google.com/uc?id=1JUFo3YjavQbdFCUk-6ODEXPvey3i8GSE',
      id: 38,
      slug: 'agukpo-Beatrice-Nneka'
    }
  }
};

export default mutation;
