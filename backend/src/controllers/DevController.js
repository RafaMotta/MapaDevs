const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
     //async digo que a api pode demorar para responder
    async index(request, response) {
        const devs = await Dev.find();
        return response.json(devs);
    },
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev){
            // await digo que deve esperar a resposta para seguir com o codigo
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            
            let {name = login, avatar_url, bio } = apiResponse.data;
            
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });

            //Filtrar as conexões que estão há no maximo 10km de distância
            // e que o novo dev tenha pelo menos umas das tecnologias filtradas

            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
                techsArray
            );
            console.log(sendSocketMessageTo);
            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }


     
    
        return response.json(dev);
    }
}