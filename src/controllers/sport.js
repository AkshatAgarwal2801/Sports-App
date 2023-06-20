const Sport = require('../models/sport');

const getAllSportsToursAndMatches = async () => {
    const matches = await Sport.getAllSportsToursAndMatches();
    const res = {};
    matches.forEach(match => {
        const { sportName, tourName, matchName, matchId, matchFormat, matchStartTime} = match;
        if (!res[sportName]) {
            res[sportName] = [];
        }
        res[sportName].push({tourName,matchName, matchId, matchFormat,matchStartTime});
    });
    return res;
}

module.exports = {
    getAllSportsToursAndMatches: getAllSportsToursAndMatches
}