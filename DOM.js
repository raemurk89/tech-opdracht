const getName = document.getElementById("name-of-television");
const getBrand = document.getElementById("brand-of-television");
const getPrice = document.getElementById("price-of-television");
const getSold = document.getElementById("sold-televisions");
const getOriginalStock = document.getElementById("original-stock-tvs");
const getType = document.getElementById("type-of-television");
const getToBeSold = document.getElementById('to-be-sold')



const indexNumber = 0;


getName.textContent = `Name: ${inventory[indexNumber].name}`;
getBrand.textContent = `Brand: ${inventory[indexNumber].brand}`;
getPrice.textContent = `Price: € ${inventory[indexNumber].price}`;
getSold.textContent = `Already sold: ${inventory[indexNumber].sold}`;
getOriginalStock.textContent = `Original stock: ${inventory[indexNumber].originalStock}`;
getType.textContent = `Type: ${inventory[indexNumber].type}`;
getToBeSold.textContent = 'Still to be sold: '





// const televisionDetails2 = ( indexNumber ) => {
//     return `
//     <h3>${ indexNumber.name }</h3>
//
//     <h3 id="brand-of-television">${indexNumber.brand}</h3>
//
//     <h3 id="price-of-television">€ ${indexNumber.price}</h3>
//
//     <h3 id="type-of-television">${indexNumber.type}</h3>
//
//     <br/><br/>
//
//     <h3 id="original-stock-tvs">${indexNumber.originalStock}</h3>
//
//     <h3 id="sold-televisions">${indexNumber.sold}</h3>
//
//     <h3>[still to be sold - televisions]</h3>`;
// };
//
//
// const getAllTvTypes = inventory.filter((type) => {
//     return type.type;
// })
//
// // console.log(getAllTvTypes);
//
// const getAllTelevisionDetails = document.getElementById('loop-details')
//
//
// for (let i = 0; i < getAllTvTypes.length; i++) {
//     getAllTelevisionDetails.innerHTML += `${ televisionDetails2(getAllTvTypes[i])}`
// }




// const getAllDetails = document.getElementById('all-details-inner');
// getAllDetails.innerHTML = `
// <h3>${inventory[indexNumber].name}</h3>
//
// <h3 id="brand-of-television">${inventory[indexNumber].brand}</h3>
//
// <h3 id="price-of-television">€ ${inventory[indexNumber].price}</h3>
//
// <h3 id="type-of-television">${inventory[indexNumber].type}</h3>
//
// <br/><br/>
//
// <h3 id="original-stock-tvs">${inventory[indexNumber].originalStock}</h3>
//
// <h3 id="sold-televisions">${inventory[indexNumber].sold}</h3>
//
// <h3>[still to be sold - televisions]</h3>
// `