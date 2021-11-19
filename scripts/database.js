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
			location: "Mississippi River"
		},

		{
			id: 2,
			image: "images/fish.jpg",
			altText: "A dark purple fish with a red fin",
			name: "McFishums",
			species: "Purplus Fishicus",
			food: "Lesser Fish",
			size: 15,
			location: "MS Paint"
		},

		{
			id: 3,
			image: "images/joeFish.jpg",
			altText: "A green fish with a dorsal fin",
			name: "JoeFish",
			species: "Scalium Fishicus",
			food: "Warmed Up Popcorn",
			size: 7,
			location: "My Other Island"
		},

		{
			id: 4,
			image: "images/pinkFish.jpg",
			altText: "A large pink fish with a brown newsboy cap",
			name: "Charlie",
			species: "Pink Fish",
			food: "TetraMin Tropical Flakes",
			size: 40,
			location: "My Island"
		}
	],

	tips: [
		{
			id: 1,
			fishName: "Bart",
			careTips: ["Don't let it die.", "It likes water"]
		},
		{
			id: 2,
			fishName: "McFishums",
			careTips: [
				"Do not let it get too close to other fish, as it will devour them whole.",
				"Preferred Water Temp: Slightly Chilly."
			]
		},
		{
			id: 3,
			fishName: "JoeFish",
			careTips: [
				"Do Not Navigate With Your Mouse Near This Fish!",
				"Allergic to Miro"
			]
		},
		{
			id: 4,
			fishName: "Charlie",
			careTips: [
				"Prefers small enclosed spaces.",
				"The hat must be cleaned regularly. Care should be taken when removing it as the fish is extremely territorial."
			]
		}
	],
	locationQuotes: [
		"Never met a fish I didn't harvest",
		"The catfish here actually purred",
		"Hello, I'm Martin"
	],
	locations: [
		{
			id: 1,
			image: "images/location.jpg",
			altText:
				"A grassy island surounded by a beach. A boat sails just off the shore.",
			location: "My Island",
			coordinates: "<strong>REDACTED</strong>"
		},
		{
			id: 2,
			image: "images/otherIsland.jpg",
			altText: "A grassy island with a brick house and pink truck.",
			location: "My Other Island",
			coordinates: "<em>Nearby</em>"
		},
		{
			id: 3,
			image: "images/lake.jpg",
			altText: "A lake surrounded by woods.",
			location: "Lake Yikes",
			coordinates: "Somewhere In Alaska"
		}
	]
};

//allows us to export this database to other js files
export const getFish = () => {
	return database.fish.map((fish) => ({ ...fish }));
};

export const getTips = () => {
	return database.tips.map((tip) => ({ ...tip }));
};


//no map here because i am just returning an array of quotes
export const getLocQuotes = () => {
	return database.locationQuotes;
};

export const getLocations = () => {
	return database.locations.map((location) => ({ ...location }));
};
