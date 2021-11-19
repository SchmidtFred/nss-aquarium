export const mostHolyFish = (fish) => {
    const holyFish = [];

    for (const item of fish) {
        if (item.size % 3 === 0) {
            holyFish.push(item);
        }
    }

    return holyFish;
}

export const soldierFish = (fish) => {
    const soldiers = [];

    for (const item of fish) {
        if (item.size % 5 === 0 && item.size % 3 != 0) {
            soldiers.push(item);
        }
    }

    return soldiers;
}

export const nonHolyFish = (fish) => {
    const regularFish = [];

    for (const item of fish) {
        if (item.size % 3 != 0 && item.size % 5 != 0) {
            regularFish.push(item);
        }
    }

    return regularFish;
}