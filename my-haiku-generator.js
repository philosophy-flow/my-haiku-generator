// Object comprised of 3 arrays, each representing 1 line of haiku
const haiku = {
  line1: ['Night godforsaken',
          'Arid wintertime',
          'Tedious fountain',
          'Chile eventide',
          'Shivering hillside'],
  
  line2: ['A steady, round boyfriend moos',
          'A colored, cold pencil stands',
          'A strong, nocturnal box stalks',
          'A ton, grumpy lorry squeals',
          'shall a hungry, cute ghost snort',],

  line3: ['because of the bowl',
          'at the perfect dog',
          'watching the chocolate',
          'enjoying the ant',
          'enjoying the lake',]
}

// Creates a haiku and logs to the console
function generateHaiku(line1, line2, line3) {
  console.log('A simple haiku ...');
  console.log(`\t${line1}\n\t${line2}\n\t${line3}\n`);
}

