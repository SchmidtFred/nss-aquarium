const database = {
  fish: [
    {
      id: 1,
      image: "images/fish.jpg",
      altText: "A dark purple fish with a red fin",
      name: "Bart",
      species: "Fishicus Maximus",
      food: "crustaceans",
      size: 3,
      location: "Mississippi River",
      careTip1: "Don't let it die.",
      careTip2: "It likes water",
    },

    {
      id: 2,
      image: "images/fish.jpg",
      altText: "A dark purple fish with a red fin",
      name: "McFishums",
      species: "Purplus Fishicus",
      food: "Lesser Fish",
      size: "Long Enough",
      location: "MS Paint",
      careTip1:
        "Do not let it get too close to other fish, as it will devour them whole.",
      careTip2: "Preferred Water Temp: Slightly Chilly.",
    },

    {
      id: 3,
      image: "images/joeFish.jpg",
      altText: "A green fish with a dorsal fin",
      name: "JoeFish",
      species: "Scalium Fishicus",
      food: "Warmed Up Popcorn",
      size: "Just Right",
      location: "My Other Island",
      careTip1: "Do Not Navigate With Your Mouse Near This Fish!",
      careTip2: "Allergic to Miro",
    },

    {
      id: 4,
      image: "images/pinkFish.jpg",
      altText: "A large pink fish with a brown newsboy cap",
      name: "Charlie",
      species: "Pink Fish",
      food: "TetraMin Tropical Flakes",
      size: "Chonk",
      location: "My Island",
      careTip1: "Prefers small enclosed spaces.",
      careTip2:
        "The hat must be cleaned regularly. Care should be taken when removing it as the fish is extremely territorial.",
    },
  ],
};

//allows us to export this database to other js files
export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};
