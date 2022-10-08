const WORDS = [
    'model',
    'prime',
    'fifty',
    'plans',
    'yards',
    'prove',
    'tools',
    'price',
    'sheet',
    'smell',
    'boxes',
    'raise',
    'match',
    'truth',
    'roads',
    'threw',
    'enemy',
    'lunch',
    'chart',
    'scene',
    'graph',
    'doubt',
    'guide',
    'winds',
    'block',
    'grain',
    'smoke',
    'mixed',
    'games',
    'wagon',
    'sweet',
    'topic',
    'extra',
    'plate',
    'title',
    'knife',
    'fence',
    'falls',
    'cloud',
    'wheat',
    'plays',
    'enter',
    'broad',
    'steam',
    'atoms',
    'press',
    'lying',
    'basis',
    'clock',
    'taste',
    'grows',
    'thank',
    'storm',
    'agree',
    'brain',
    'track',
    'smile',
    'funny',
    'beach',
    'stock',
    'hurry',
    'saved',
    'sorry',
    'giant',
    'trail',
    'offer',
    'ought',
    'rough',
    'daily',
    'avoid',
    'keeps',
    'throw',
    'allow',
    'cream',
    'laugh',
    'edges',
    'teach',
    'frame',
    'bells',
    'dream',
    'magic',
    'occur',
    'ended',
    'chord',
    'false',
    'skill',
    'holes',
    'dozen',
    'brave',
    'apple',
    'climb',
    'outer',
    'pitch',
    'ruler',
    'holds',
    'fixed',
    'costs',
    'calls',
    'blank',
    'staff',
    'labor',
    'eaten',
    'youth',
    'tones',
    'honor',
    'globe',
    'gases',
    'doors',
    'poles',
    'loose',
    'apply',
    'tears',
    'exact',
    'brush',
    'chest',
    'layer',
    'whale',
    'minor',
    'faith',
    'tests',
    'judge',
    'items',
    'worry',
    'waste',
    'hoped',
    'strip',
    'begun',
    'aside',
    'lakes',
    'bound',
    'depth',
    'candy',
    'event',
    'worse',
    'aware',
    'shell',
    'rooms',
    'ranch',
    'image',
    'snake',
    'aloud',
    'dried',
    'likes',
    'motor',
    'pound',
    'knees',
    'refer',
    'fully',
    'chain',
    'shirt',
    'flour',
    'drops',
    'spite',
    'orbit',
    'banks',
    'shoot',
    'curve',
    'tribe',
    'tight',
    'blind',
    'slept',
    'shade',
    'claim',
    'flies',
    'theme',
    'queen',
    'fifth',
    'union',
    'hence',
    'straw',
    'entry',
    'issue',
    'birth',
    'feels',
    'anger',
    'brief',
    'rhyme',
    'glory',
    'guard',
    'flows',
    'flesh',
    'owned',
    'trick',
    'yours',
    'sizes',
    'noted',
    'width',
    'burst',
    'route',
    'lungs',
    'uncle',
    'bears',
    'royal',
    'kings',
    'forty',
    'trial',
    'cards',
    'brass',
    'opera',
    'chose',
    'owner',
    'vapor',
    'beats',
    'mouse',
    'tough',
    'wires',
    'meter',
    'tower',
    'finds',
    'inner',
    'stuck',
    'arrow',
    'poems',
    'label',
    'swing',
    'solar',
    'truly',
    'tense',
    'beans',
    'split',
    'rises',
    'weigh',
    'hotel',
    'stems',
    'pride',
    'swung',
    'grade',
    'digit',
    'badly',
    'boots',
    'pilot',
    'sales',
    'swept',
    'lucky',
    'prize',
    'stove',
    'tubes',
    'acres',
    'wound',
    'steep',
    'slide',
    'trunk',
    'error',
    'porch',
    'slave',
    'exist',
    'faced',
    'mines',
    'marry',
    'juice',
    'raced',
    'waved',
    'goose',
    'trust',
    'fewer',
    'favor',
    'mills',
    'views',
    'joint',
    'eager',
    'spots',
    'blend',
    'rings',
    'adult',
    'index',
    'nails',
    'horns',
    'balls',
    'flame',
    'rates',
    'drill',
    'trace',
    'skins',
    'waxed',
    'seats',
    'stuff',
    'ratio',
    'minds',
    'dirty',
    'silly',
    'coins',
    'hello',
    'trips',
    'leads',
    'rifle',
    'hopes',
    'bases',
    'shine',
    'bench',
    'moral',
    'fires',
    'meals',
    'shake',
    'shops',
    'cycle',
    'movie',
    'slope',
    'canoe',
    'teams',
    'folks',
    'fired',
    'bands',
    'thumb',
    'shout',
    'canal',
    'habit',
    'reply',
    'ruled',
    'fever',
    'crust',
    'shelf',
    'walks',
    'midst',
    'crack',
    'print',
    'tales',
    'coach',
    'stiff',
    'flood',
    'verse',
    'awake',
    'rocky',
    'march',
    'fault',
    'swift',
    'faint',
    'civil',
    'ghost',
    'feast',
    'blade',
    'limit',
    'germs',
    'reads',
    'ducks',
    'dairy',
    'worst',
    'gifts',
    'lists',
    'stops',
    'rapid',
    'brick',
    'claws',
    'beads',
    'beast',
    'skirt',
    'cakes',
    'lions',
    'frogs',
    'tries',
    'nerve',
    'grand',
    'armed',
    'treat',
    'honey',
    'moist',
    'legal',
    'penny',
    'crown',
    'shock',
    'taxes',
    'sixty',
    'altar',
    'pulls',
    'sport',
    'drums',
    'talks',
    'dying',
    'dates',
    'drank',
    'blows',
    'lever',
    'wages',
    'proof',
    'drugs',
    'tanks',
    'sings',
    'tails',
    'pause',
    'herds',
    'arose',
    'hated',
    'clues',
    'novel',
    'shame',
    'burnt',
    'races',
    'flash',
    'weary',
    'heels',
    'token',
    'coats',
    'spare',
    'shiny',
    'alarm',
    'dimes',
    'sixth',
    'clerk',
    'mercy',
    'sunny',
    'guest',
    'float',
    'shone',
    'pipes',
    'worms',
    'bills',
    'sweat',
    'suits',
    'smart',
    'upset',
    'rains',
    'sandy',
    'rainy',
    'parks',
    'sadly',
    'fancy',
    'rider',
    'unity',
    'bunch',
    'rolls',
    'crash',
    'craft',
    'newly',
    'gates',
    'hatch',
    'paths',
    'funds',
    'wider',
    'grace',
    'grave',
    'tides',
    'admit',
    'shift',
    'sails',
    'pupil',
    'tiger',
    'angel',
    'cruel',
    'agent',
    'drama',
    'urged',
    'patch',
    'nests',
    'vital',
    'sword',
    'blame',
    'weeds',
    'screw',
    'vocal',
    'bacon',
    'chalk',
    'cargo',
    'crazy',
    'acted',
    'goats',
    'arise',
    'witch',
    'loves',
    'queer',
    'dwell',
    'backs',
    'ropes',
    'shots',
    'merry',
    'phone',
    'cheek',
    'peaks',
    'ideal',
    'beard',
    'eagle',
    'creek',
    'cries',
    'ashes',
    'stall',
    'yield',
    'mayor',
    'opens',
    'input',
    'fleet',
    'tooth',
    'cubic',
    'wives',
    'burns',
    'poets',
    'apron',
    'spear',
    'organ',
    'cliff',
    'stamp',
    'paste',
    'rural',
    'baked',
    'chase',
    'slice',
    'slant',
    'knock',
    'noisy',
    'sorts',
    'stays',
    'wiped',
    'blown',
    'piled',
    'clubs',
    'cheer',
    'widow',
    'twist',
    'tenth',
    'hides',
    'comma',
    'sweep',
    'spoon',
    'stern',
    'crept',
    'maple',
    'deeds',
    'rides',
    'muddy',
    'crime',
    'jelly',
    'ridge',
    'drift',
    'dusty',
    'devil',
    'tempo',
    'humor',
    'sends',
    'steal',
    'tents',
    'waist',
    'roses',
    'reign',
    'noble',
    'cheap',
    'dense',
    'linen',
    'geese',
    'woven',
    'posts',
    'hired',
    'wrath',
    'salad',
    'bowed',
    'tires',
    'shark',
    'belts',
    'grasp',
    'blast',
    'polar',
    'fungi',
    'tends',
    'pearl',
    'loads',
    'jokes',
    'veins',
    'frost',
    'hears',
    'loses',
    'hosts',
    'diver',
    'phase',
    'toads',
    'alert',
    'tasks',
    'seams',
    'coral',
    'focus',
    'naked',
    'puppy',
    'jumps',
    'spoil',
    'quart',
    'macro',
    'fears',
    'flung',
    'spark',
    'vivid',
    'brook',
    'steer',
    'spray',
    'decay',
    'ports',
    'socks',
    'urban',
    'goals',
    'grant',
    'minus',
    'films',
    'tunes',
    'shaft',
    'firms',
    'skies',
    'bride',
    'wreck',
    'flock',
    'stare',
    'hobby',
    'bonds',
    'dared',
    'faded',
    'thief',
    'crude',
    'pants',
    'flute',
    'votes',
    'tonal',
    'radar',
    'wells',
    'skull',
    'hairs',
    'argue',
    'wears',
    'dolls',
    'voted',
    'caves',
    'cared',
    'broom',
    'scent',
    'panel',
    'fairy',
    'olive',
    'bends',
    'prism',
    'lamps',
    'cable',
    'peach',
    'ruins',
    'rally',
    'schwa',
    'lambs',
    'sells',
    'cools',
    'draft',
    'charm',
    'limbs',
    'brake',
    'gazed',
    'cubes',
    'delay',
    'beams',
    'fetch',
    'ranks',
    'array',
    'harsh',
    'camel',
    'vines',
    'picks',
    'naval',
    'purse',
    'rigid',
    'crawl',
    'toast',
    'soils',
    'sauce',
    'basin',
    'ponds',
    'twins',
    'wrist',
    'fluid',
    'pools',
    'brand',
    'stalk',
    'robot',
    'reeds',
    'hoofs',
    'buses',
    'sheer',
    'grief',
    'bloom',
    'dwelt',
    'melts',
    'risen',
    'flags',
    'knelt',
    'fiber',
    'roofs',
    'freed',
    'armor',
    'piles',
    'aimed',
    'algae',
    'twigs',
    'lemon',
    'ditch',
    'drunk',
    'rests',
    'chill',
    'slain',
    'panic',
    'cords',
    'tuned',
    'crisp',
    'ledge',
    'dived',
    'swamp',
    'clung',
    'stole',
    'molds',
    'yarns',
    'liver',
    'gauge',
    'breed',
    'stool',
    'gulls',
    'awoke',
    'gross',
    'diary',
    'rails',
    'belly',
    'trend',
    'flask',
    'stake',
    'fried',
    'draws',
    'actor',
    'handy',
    'bowls',
    'haste',
    'scope',
    'deals',
    'knots',
    'moons',
    'essay',
    'thump',
    'hangs',
    'bliss',
    'dealt',
    'gains',
    'bombs',
    'clown',
    'palms',
    'cones',
    'roast',
    'tidal',
    'bored',
    'chant',
    'acids',
    'dough',
    'camps',
    'swore',
    'lover',
    'hooks',
    'males',
    'cocoa',
    'punch',
    'award',
    'reins',
    'ninth',
    'noses',
    'links',
    'drain',
    'fills',
    'nylon',
    'lunar',
    'pulse',
    'flown',
    'elbow',
    'fatal',
    'sites',
    'moths',
    'meats',
    'foxes',
    'mined',
    'attic',
    'fiery',
    'mount',
    'usage',
    'swear',
    'snowy',
    'rusty',
    'scare',
    'traps',
    'relax',
    'react',
    'valid',
    'robin',
    'cease',
    'gills',
    'prior',
    'safer',
    'polio',
    'loyal',
    'swell',
    'salty',
    'marsh',
    'vague',
    'weave',
    'mound',
    'seals',
    'mules',
    'virus',
    'scout',
    'acute',
    'windy',
    'stout',
    'folds',
    'seize',
    'hilly',
    'joins',
    'pluck',
    'stack',
    'lords',
    'dunes',
    'burro',
    'hawks',
    'trout',
    'feeds',
    'scarf',
    'halls',
    'coals',
    'towel',
    'souls',
    'elect',
    'buggy',
    'pumps',
    'loans',
    'spins',
    'files',
    'oxide',
    'pains',
    'photo',
    'rival',
    'flats',
    'syrup',
    'rodeo',
    'sands',
    'moose',
    'pints',
    'curly',
    'comic',
    'cloak',
    'onion',
    'clams',
    'scrap',
    'didst',
    'couch',
    'codes',
    'fails',
    'ounce',
    'lodge',
    'greet',
    'gypsy',
    'utter',
    'paved',
    'zones',
    'fours',
    'alley',
    'tiles',
    'bless',
    'crest',
    'elder',
    'kills',
    'yeast',
    'erect',
    'bugle',
    'medal',
    'roles',
    'hound',
    'snail',
    'alter',
    'ankle',
    'relay',
    'loops',
    'zeros',
    'bites',
    'modes',
    'debts',
    'realm',
    'glove',
  ]

const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]

function initBoard() {
  let board = document.getElementById("game-board");

  for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
      let row = document.createElement("div")
      row.className = "letter-row"
      
      for (let j = 0; j < 5; j++) {
          let box = document.createElement("div")
          box.className = "letter-box"
          row.appendChild(box)
      }

      board.appendChild(row)
  }
}

initBoard()

document.addEventListener("keyup", (e) => {

  if (guessesRemaining === 0) {
      return
  }

  let pressedKey = String(e.key)
  if (pressedKey === "Backspace" && nextLetter !== 0) {
      deleteLetter()
      return
  }

  if (pressedKey === "Enter") {
      checkGuess()
      return
  }

  let found = pressedKey.match(/[a-z]/gi)
  if (!found || found.length > 1) {
      return
  } else {
      insertLetter(pressedKey)
  }
})

function insertLetter (pressedKey) {
  if (nextLetter === 5) {
      return
  }
  pressedKey = pressedKey.toLowerCase()

  let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
  let box = row.children[nextLetter]
  box.textContent = pressedKey
  box.classList.add("filled-box")
  currentGuess.push(pressedKey)
  nextLetter += 1
}

function deleteLetter () {
  let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
  let box = row.children[nextLetter - 1]
  box.textContent = ""
  box.classList.remove("filled-box")
  currentGuess.pop()
  nextLetter -= 1
}

function checkGuess () {
  let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
  let guessString = ''
  let rightGuess = Array.from(rightGuessString)

  for (const val of currentGuess) {
      guessString += val
  }

  if (guessString.length != 5) {
      alert("Not enough letters!")
      return
  }
  
  for (let i = 0; i < 5; i++) {
      let letterColor = ''
      let box = row.children[i]
      let letter = currentGuess[i]
      
      let letterPosition = rightGuess.indexOf(currentGuess[i])
      if (letterPosition === -1) {
          letterColor = 'grey'
      } else {
          
          if (currentGuess[i] === rightGuess[i]) {
              letterColor = 'green'
          } else {
              letterColor = 'red'
          }

          rightGuess[letterPosition] = "#"
      }

      let delay = 250 * i
      setTimeout(()=> {
          box.style.backgroundColor = letterColor
          shadeKeyBoard(letter, letterColor)
      }, delay)
  }

  if (guessString === rightGuessString) {
      alert("You are right!")
      guessesRemaining = 0
      location.reload();
      return
  } else {
      guessesRemaining -= 1;
      currentGuess = [];
      nextLetter = 0;

      if (guessesRemaining === 0) {
          alert("Game over!")
          alert(`The word was: "${rightGuessString}"`)
      }
  }
}

function shadeKeyBoard(letter, color) {
  for (const elem of document.getElementsByClassName("keyboard-button")) {
      if (elem.textContent === letter) {
          let oldColor = elem.style.backgroundColor
          if (oldColor === 'green') {
              return
          } 

          if (oldColor === 'yellow' && color !== 'green') {
              return
          }

          elem.style.backgroundColor = color
          break
      }
  }
}

document.getElementById("keyboard").addEventListener("click", (e) => {
  const target = e.target
  
  if (!target.classList.contains("keyboard-button")) {
      return
  }
  let key = target.textContent

  if (key === "Del") {
      key = "Backspace"
  } 

  document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}))
})