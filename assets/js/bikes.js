/*
  Bike photos for the carousel (index.html) and the gallery (galerie.html).
  To add a bike: put a 1600px version in assets/img/ and a 640px version in
  assets/img/thumbs/ (same file name), then add one line below.
  The gallery shows every entry in this order; the carousel picks 6 at random.
*/
window.RADIUM_BIKES = [
  { file: 'trek-6000',          name: 'Trek 6000',          alt: 'Trek 6000, neongelb',                         w: 1600, h: 1066 },
  { file: 'scott-impuls',       name: 'Scott Impuls',       alt: 'Scott Impuls, pink',                          w: 1600, h: 1066 },
  { file: 'surly-instigator',   name: 'Surly Instigator',   alt: 'Surly Instigator, rot',                       w: 1600, h: 989 },
  { file: 'gt-zaskar',          name: 'GT Zaskar',          alt: 'GT Zaskar, custommade',                       w: 1600, h: 1066 },
  { file: 'detail-gt-cockpit',  name: 'GT · Cockpit',       alt: 'Cockpit eines GT mit Shimano Deore XT',       w: 1600, h: 1067 },
  { file: 'radium-cruiser',     name: 'Radium Cruiser, blau', alt: 'Beach-Cruiser in Blau mit Radium-Schriftzug', w: 1600, h: 1066 },
  { file: 'radium-cruiser-grau', name: 'Radium Cruiser, grau', alt: 'Grauer Beach-Cruiser mit gelben Felgen und Radium-Schriftzug', w: 1600, h: 1066 },
  { file: 'detail-radium-blau', name: 'Radium Bike · Detail', alt: 'Blauer Rahmen mit Radium-Bike-Logo',        w: 1600, h: 902 },
  { file: 'trek-8000',          name: 'Trek 8000',          alt: 'Trek 8000, lila mit weißen Reifen',           w: 1600, h: 1066 },
  { file: 'gt-blau',            name: 'GT, blau',           alt: 'Blaues GT-Mountainbike mit blauen Felgen',    w: 1600, h: 1066 },
  { file: 'gt-fully-orange',    name: 'GT Fully, orange',   alt: 'Oranges GT-Fully',                            w: 1600, h: 1066 },
  { file: 'trek-weiss',         name: 'Trek, weiß',         alt: 'Weißes Trek mit Rennlenker',                  w: 1600, h: 1066 },
  { file: 'stevens-gelb',       name: 'Stevens, gelb',      alt: 'Gelbes Stevens-Mountainbike mit Easton-Rohrsatz', w: 1600, h: 1066 },
  { file: 'specialized-rot',    name: 'Specialized, rot',   alt: 'Rotes Specialized-Mountainbike',              w: 1600, h: 1066 },
  { file: 'giant-rot',          name: 'Giant, rot',         alt: 'Rotes Giant-Mountainbike',                    w: 1600, h: 1066 },
  { file: 'scott-schwarz',      name: 'Scott, schwarz',     alt: 'Schwarzes Scott-Mountainbike',                w: 1600, h: 1066 },
  { file: 'hardtail-violett',   name: 'Hardtail, violett',  alt: 'Violettes Hardtail mit Federgabel',           w: 1600, h: 1066 },
  { file: 'gt-tequesta',        name: 'GT Tequesta',        alt: 'GT Tequesta, schwarz',                        w: 1600, h: 1067 },
  { file: 'dawes-kickback',     name: 'DAWES Kickback',     alt: 'DAWES Kickback, grün',                        w: 1600, h: 1067 },
  { file: 'muesing-mtb',        name: 'Müsing Speedtrail',  alt: 'Müsing MTB, grau',                            w: 1600, h: 1066 },
  { file: 'focus-fully',        name: 'Focus Fully',        alt: 'Focus Fully, schwarz-weiß',                   w: 1600, h: 1066 },
  { file: 'detail-focus-gabel', name: 'Focus Fully · Gabel', alt: 'Fox-Federgabel am Focus Fully',              w: 1066, h: 1600 },
  { file: 'stevens-cross',      name: 'Stevens Crossbike',  alt: 'Stevens Crossbike, weiß',                     w: 1600, h: 1066 },
  { file: 'hardtail-silber',    name: 'Hardtail, silber',   alt: 'Silbernes Hardtail mit Federgabel',           w: 1600, h: 1066 },
  { file: 'pink-mtb',           name: 'Radium MTB, pink',   alt: 'Pinkes Mountainbike mit weißen Reifen',       w: 1600, h: 902 },
  { file: 'detail-radium-pink', name: 'Radium MTB · Detail', alt: 'Radium-Schriftzug am pinken Rahmen',         w: 1600, h: 902 }
];
