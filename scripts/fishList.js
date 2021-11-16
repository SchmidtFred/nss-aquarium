// Import the function that returns a copy of the fish array
import { getFish } from "./database.js";
import { mostHolyFish } from "./database.js";
import { soldierFish } from "./database.js";
import { nonHolyFish } from "./database.js";

export const FishList = () => {
  //store our database in this variable. Using the imported function to bring that array over here.
  const fish = getFish();
  const fishes = [mostHolyFish(fish), soldierFish(fish), nonHolyFish(fish)];
  // this string is going to be what we build to add to our html. Setting up the variable to store it in
  let htmlString = "";

  //now create the other html representations within this for loop going through the array
  for (const fishArray of fishes) {
    for (const fish of fishArray) {
      htmlString += `<section class="fishCard">
        <img src="${fish.image}" alt="${fish.altText}" />
        <section class="fishDetails">
            <ul>
                <li>Name: ${fish.name}</li>
                <li>Species: ${fish.species}</li>
                <li>Size: ${fish.size} in.</li>
                <li>Harvest Location: ${fish.location}</li>
                <li>Food: ${fish.food}</li>
            </ul>
        </section>
        <section class="careTips">
            <p>${fish.careTip1}</p>
            <p>${fish.careTip2}</p>
        </section>
        </section>
        `;
    }
  }

  //add to the htmlstring now the big ole string we made
  htmlString += ``;

  return htmlString;
};
