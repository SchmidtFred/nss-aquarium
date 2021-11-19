//bring in the get fish function
import { getFish } from "./database.js";

//use the get fish function to store the array from the database into the const allFish here
const allFish = getFish();

for (const fish of allFish) {
  console.log(fish);
};

//bring in the fishlist function now
import { FishList } from "./fish/fishList.js";

const fishListHTMLElement = document.querySelector(".fishList");

fishListHTMLElement.innerHTML = FishList();

//same for quotes on locations
import { quoteList } from "./locations/locationList.js";

const locationContentHTMLElement = document.querySelector(".locationContent");

locationContentHTMLElement.innerHTML +=  quoteList();

//now the location cards to add to the locationcontent html
import { locationList } from "./locations/locationList.js";

locationContentHTMLElement.innerHTML += locationList();