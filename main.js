// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];



// Opdracht 1 - Array Methoden

// Opdracht 1a

const tvTypes = inventory.filter(() => {
  return inventory.type;
});


console.log(tvTypes)


// Opdracht 1b

// const soldOutType = inventory.map((inventory) => {
//   if (inventory.originalStock === inventory.sold) {
//     console.log(inventory);
//   }
// });


// Opdracht 1c

const tvsWithLight = inventory.map((inventory) => {
  if (inventory.ambiLight === true) {
  console.log(inventory)
}
});








// Opdracht 2 - Elementen in de DOM plaatsen

// Opdracht 2a

let soldTvs = 0;

for (let i = 0; i < inventory.length; i++) {
  soldTvs = inventory[i].sold + soldTvs;
}

console.log(soldTvs + " Verkochte televisies")



// Opdracht 2b
// Zie DOM.js bestand

// Hoe ik deze op de pagina weergeef, hierop loop ik vast.
// Ik probeerde al binnen het textcontent deel van de DOM, of in de getElementsById, de uitkomst van bovenstaande code te krijgen maar dan crasht ie.
// Ik krijg alleen voor 1 specifiek indexnumber uit de inventory lijst de uitkomst.



// Opdracht 2c

let originalStockTvs = 0;

for (let i = 0; i < inventory.length; i++) {
  originalStockTvs = inventory[i].originalStock + originalStockTvs;
}

console.log(originalStockTvs + " TV's Original Stock")



// Opdracht 2d
// Zie DOM.js bestand

// Hoe ik deze op de pagina weergeef, hierop loop ik vast.
// Ik probeerde al binnen het textcontent deel van de DOM, of in de getElementsById, de uitkomst van bovenstaande code te krijgen maar dan crasht ie.
// Ik krijg alleen voor 1 specifiek indexnumber uit de inventory lijst de uitkomst.



// Opdracht 2e
const availableTvs = originalStockTvs - soldTvs;

console.log(availableTvs + " tv's moeten nog verkocht worden.")








// Opdracht 3 Array Methodes en Functies
//
// Opdracht 3a
let showAllTvBrands = 0;

for (let i = 0; i < inventory.length; i++) {
  showAllTvBrands = inventory[i].brand + showAllTvBrands;
}

console.log("All TV Brands: " + showAllTvBrands)

// Hoe ik deze op de pagina weergeef, hierop loop ik vast.
// Ik probeerde al binnen het textcontent deel van de DOM, of in de getElementsById, de uitkomst van bovenstaande code te krijgen maar dan crasht ie.



// Opdracht 3b






// Opdracht 4 Functies
//
// Opdracht 4a

let television = inventory[1].brand + " - " + inventory[1].type + " - " + inventory[1].name;

console.log(television)


// Opdracht 4b

function televisionDetails(price) {
  return "€" + price;
}

const tvPrice = televisionDetails(379)

console.log(tvPrice)


// Opdracht 4c

let tvSizes = inventory[1].availableSizes;
let tvSizesInCm = inventory[1].availableSizes * 2.54;

let outcome = tvSizes + " inches " + "(" + tvSizesInCm + ")" + " cm.";

console.log(outcome)

//
// // function screenSizes() {
// //   // tvSizesInCm = inventory.availableSizes * 2.54
// //   // tvSizes = inventory[1].availableSizes + tvSizesInCm
// //   return tvSizes + tvSizesInCm;
// // }
//
// console.log(tvSizes + tvSizesInCm);


//
// function screenSizes() {
//   console.log(inventory[1].availableSizes);
//   console.log(inventory[1].availableSizes * 2.54);
// }
//
// screenSizes();


function screenSizes2(number){
  console.log(inventory[number].availableSizes + " inches " + "(" + inventory[number].availableSizes * 2.54 + ")" + " cm.")
}

screenSizes2(1)



let moreThanOne = inventory.map((inventory) => {
  return inventory.availableSizes;
})

console.log(moreThanOne[1])


