const News = require('../controllers/news');

module.exports = function(app) {
    app.route('/news/match').post(async (req, res, next) => {
        try {
            let param = req.query;
            let newsContent = req.body;
            let params = {
                ...param,
                ...newsContent
            };
            let result = await News.postNewsForMatch(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/tour').post(async (req, res, next) => {
        try {
            let param = req.query;
            let newsContent = req.body;
            let params = {
                ...param,
                ...newsContent
            };
            let result = await News.postNewsForTour(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });


    app.route('/news/match').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsForMatch(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/tour').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsForTour(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/sport').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsForSport(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

}