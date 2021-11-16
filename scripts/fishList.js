// Import the function that returns a copy of the fish array
import { getFish } from "./database.js";

export const FishList = () => {
  //store our database in this variable. Using the imported function to bring that array over here.
  const fishes = getFish();

  // this string is going to be what we build to add to our html. Setting up the variable to store it in
  let htmlString = '';

  //now create the other html representations within this for loop going through the array
  for (const fish of fishes) {
    htmlString += `<section class="fishCard">
        <img src="${fish.image}" alt="${fish.altText}" />
        <section class="fishDetails">
            <ul>
                <li>Name: ${fish.name}</li>
                <li>Species: ${fish.species}</li>
                <li>Size: ${fish.size}</li>
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

  //add to the htmlstring now the big ole string we made
  htmlString += ``;

  return htmlString;
};
