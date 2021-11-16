const database = {
  fish: [
    {
      id: 1,
      name: "Bart",
      species: "Fishicus Maximus",
      food: "crustaceans",
      size: 3,
      location: "Mississippi River",
    },

    {
      id: 2,
      name: "McFishums",
      species: "Purplus Fishicus",
      food: "Lesser Fish",
      size: "Long Enough",
      location: "MS Paint"
    },

    {
        id: 3,
        name: "JoeFish",
        species: "Scalium Fishicus",
        food: "Warmed Up Popcorn",
        size: "Just Right",
        location: "My Other Island",
    },

    {
        id: 4,
        name: "Charlie",
        species: "Pink Fish",
        food: "TetraMin Tropical Flakes",
        size: "Chonk",
        location: "My Island"
    }
  ],
};

//allows us to export this database to other js files
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
};

