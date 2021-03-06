/*  Fixture of buzz words to randomly pick from.
    We need at least 24 words to make a bingo board.
    Make changes directly to this file to add to the list of buzz words
*/

const Buzzwords = [
  'Progressive Web App',
  'TypeScript',
  'Service Workers',
  'Blockchain',
  'Compilers',
  'Composable',
  'Functional',
  'Glimmer',
  'Server-side rendering',
  'Machine learning',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25'
];

// Utility function for randomly splicing a word from Buzzwords
export function getBuzzword() {
  return Buzzwords.splice(Math.floor(Math.random()*Buzzwords.length), 1)[0];
}

export default Buzzwords;
