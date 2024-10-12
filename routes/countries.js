const express = require(`express`);
const router = express.Router();
const data = require(`../data/countries.json`);

router.get(`/`, (req, res) =>{
    res.status(200).json(data);
    });

    router.get(`/:countryId`, (req, res) =>{

        const requestedCountryId = req.params.countryId; //"1"
        const country = data.countries.filter(countryData => { //1
        if(countryData.id.toString() === requestedCountryId ) {
            return countryData;
        }
    });
    
    res.status(200).json(country);
    });

    module.exports = router;