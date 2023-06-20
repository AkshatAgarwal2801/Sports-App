const News = require('../models/news');

const postNewsForMatch = async params => {
    const { id,title,description } = params;

    if (!id) {
        throw new Error('Missing required parameter: id');
    }

    return await News.postNewsForMatch(params);
}

const postNewsForTour = async params => {
    const { id,title,description } = params;

    if (!id) {
        throw new Error('Missing required parameter: id');
    }

    return await News.postNewsForTour(params);
}

const getNewsForMatch = async params => {
    const { id } = params;

    if (!id) {
        throw new Error('Missing required parameter: id');
    }

    return await News.getNewsForMatch(params);
}

const getNewsForTour = async params => {
    const { id } = params;

    if (!id) {
        throw new Error('Missing required parameter: id');
    }

    return await News.getNewsForTour(params);
}

const getNewsForSport = async params => {
    const { id } = params;

    if (!id) {
        throw new Error('Missing required parameter: id');
    }

    return await News.getNewsForSport(params);
}


module.exports = {
    postNewsForMatch: postNewsForMatch,
    postNewsForTour: postNewsForTour,
    getNewsForMatch:getNewsForMatch,
    getNewsForTour:getNewsForTour,
    getNewsForSport:getNewsForSport
}