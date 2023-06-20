const mysql = require('../lib/mysql');

const postNewsForMatch = async params => {
    const statement = 'insert ignore into matchNews (refrenceId, title, descr) values (?,?,?);';
    const parameters = [ params.id, params.title, params.description ];
    return await mysql.query(statement, parameters);
}

const postNewsForTour = async params => {
    const statement = 'insert ignore into tourNews (refrenceId, title, descr) values (?,?,?);';
    const parameters = [ params.id, params.title, params.description ];
    return await mysql.query(statement, parameters);
}

const getNewsForMatch = async params => {
    const statement = 'select title, descr from matchNews where matchNews.refrenceId = ?;';
    const parameters = [ params.id ];
    return await mysql.query(statement, parameters);
}

const getNewsForTour = async params => {
    const statement = 'select title, descr from tourNews where tourNews.refrenceId = ?' +
     ' UNION ' + 
     'select title, descr from matchNews where matchNews.refrenceId in ( select distinct matches.id from matches where matches.tourId = ?);';
    const parameters = [params.id,params.id];
    return await mysql.query(statement, parameters);
}

const getNewsForSport = async params => {
    const statement = 'select title, descr from tourNews where tourNews.refrenceId in ( select distinct tours.id from tours where tours.sportId = ?);';
    const parameters = [params.id];
    return await mysql.query(statement, parameters);
}

module.exports = {
    postNewsForMatch: postNewsForMatch,
    postNewsForTour: postNewsForTour,
    getNewsForMatch:getNewsForMatch,
    getNewsForTour:getNewsForTour,
    getNewsForSport:getNewsForSport
}