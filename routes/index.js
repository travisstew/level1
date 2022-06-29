const express = require('express');
const router = express.Router();
const axios = require('axios');



router.get('/', (req,res)=>{
  const axios = require("axios");

        const options = {
          method: 'GET',
          url: 'https://realtor.p.rapidapi.com/properties/list-for-sale',
          params: {
            state_code: 'va',
            city: 'chester ',
            offset: '0',
            limit: '50',
            sort: 'relevance'
          },
          headers: {
            'X-RapidAPI-Key': process.env.RapidAPI_KEY_realtor ,
            'X-RapidAPI-Host': 'realtor.p.rapidapi.com'
          }
        };


        axios.request(options).then(function (response) {
            var listings = response.data.listings;
            console.log(listings[0].photo);

          res.render('home',{data:listings});

        }).catch(function (error) {
          console.error(error);
        });

});







module.exports = router;