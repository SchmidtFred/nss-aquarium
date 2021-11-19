import { getLocQuotes } from "../database.js";
import { getLocations } from "../database.js";

export const quoteList = () => {
    const quotes = getLocQuotes();

    let htmlString = '<section class="quoteList"><ul>';

    for (const quote of quotes) {
        htmlString += `<li>"${quote}"</li>`;
    }

    htmlString += `</section>`

    return htmlString;
}

export const locationList = () => {
    const locations = getLocations();

    let htmlString = '<section class="locationList">';

    for (const location of locations) {
        htmlString += `<section class="locationCard">
            <img src="${location.image}" alt="${location.altText}" />
            <ul>
                <li>Location: ${location.location}</li>
                <li>Coordinates: ${location.coordinates}</li>
            </ul>
        </section>`;
    }

    htmlString += "</section>";

    return htmlString;
}