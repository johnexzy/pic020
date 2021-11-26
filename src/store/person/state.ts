import p from '../../seed/person'
const { persons, seeds, fpersons } = p
export interface PersonStateInterface {
  loadImages: boolean;
  persons: Array<Person>;
  seeds: Array<Person>;
  fpersons: Array<Person>;
  person: Person;
}

export interface Person {
  'Timestamp': string;
  'Email Address': string
  'Full Name': string
  'State of origin': string
  'Phone number': string
  'Nick name (optional)': string
  'Hobbies and passion': string
  'Photo (passport)': string,
  'image': string,
  'id': number,
  slug: string
}

function state (): PersonStateInterface {
  return {
    loadImages: false,
    seeds: seeds,
    person: {
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
    },
    fpersons: fpersons,
    persons: persons
  };
}

export default state;
