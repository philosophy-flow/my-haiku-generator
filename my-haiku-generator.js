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

// Line selector
function randomLine(lineArr) {
  const randIndex = Math.floor(Math.random() * 5);
  return lineArr[randIndex];
}

// Creates a haiku and logs to the console
function generateHaiku() {
  const rLine1 = randomLine(haiku.line1);
  const rLine2 = randomLine(haiku.line2);
  const rLine3 = randomLine(haiku.line3);

  console.log('A simple haiku ...');
  console.log(`\t${rLine1}\n\t${rLine2}\n\t${rLine3}\n`);
}

// Function call
generateHaiku();