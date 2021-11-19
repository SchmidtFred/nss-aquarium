import { getTips } from "../database.js";

//will input the id and name of the fish to make sure we are returning the correctly matched tips
export const tipList = (id, name) => {
	const tips = getTips();
	let tipsHtmlString = "";
	let matchedTipObject;
	//find the right tip object for the fish
	for (const tip of tips) {
		if (tip.fishName === name && tip.id === id) {
			matchedTipObject = tip;
		}
	}
	//with the correct tips create our html
	tipsHtmlString += `<section class="careTips">`;
	//add in a tip for each care tip listed.
	for (let i = 0; i < matchedTipObject.careTips.length; i++) {
		tipsHtmlString += `<p>${matchedTipObject.careTips[i]}</p>`;
	}
	//now close off the tip list section
	tipsHtmlString += `</section>`;
    
    return tipsHtmlString;
};
