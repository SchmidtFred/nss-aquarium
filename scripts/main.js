//bring in the get fish function
import { getFish } from './database.js';

//use the get fish function to store the array from the database into the const allFish here
const allFish = getFish();

for (const fish of allFish) {
    console.log(fish)
};
