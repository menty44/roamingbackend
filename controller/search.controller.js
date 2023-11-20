const returns = require("./returns");
const axios = require('axios');

exports.welcome = async (req, res, next) => {
    try {
        console.log(req.body)


        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://www.omdbapi.com/?apikey=10fce5f8&s=${req.body.search}&plot=full&y=${req.body.year}`,
            headers: { }
        };

        axios.request(config)
            .then(async (response) => {
                console.log(JSON.stringify(response.data));
                await returns.successful_returns(req, res, response.data);
            })
            .catch(async (error) => {
                console.log(error);
                await returns.serverError(req, res, err);
            });



    } catch (err) {
        console.log(err);
        await returns.serverError(req, res, err);
    }
}