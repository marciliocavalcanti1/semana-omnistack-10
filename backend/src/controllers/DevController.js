const axios              = require('axios');
const Dev                = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray')

// index, show, store, update, destroy

module.exports = {
    async index(request, response) {
        const devs = await Dev.find()
        
        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, bio, avatar_url } = apiResponse.data;

            const arrayTechs = parseStringAsArray(techs);

            //primeiro longitude e depois latitude (padrao mongodb)
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: arrayTechs,
                location,
            });
        }

        return response.json(dev);
    },

    async update(request, response) {
        const { github_username } = request.params;
        const { name, techs, avatar_url, bio, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (dev) {
            const arrayTechs = parseStringAsArray(techs);

            //primeiro longitude e depois latitude (padrao mongodb)
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
            
            dev = await Dev.update(
            {   
              'github_username': github_username,
            },
            {
                $set: {
                    'name': name,
                    'techs': arrayTechs,
                    'bio': bio,
                    'avatar_url': avatar_url,
                    'location': location,
                }
            });
        }
        
        return response.json(dev);
    },

    async destroy(request, response) {
        const { github_username } = request.params; 
        const dev = await Dev.findOne({ github_username })
        
        let dcRetorno = 'Dev não encontrado na base de dados';
        
        if(dev) {
            await Dev.remove(dev);
            dcRetorno = `Dev ${github_username} deletado com sucesso`;
        }
    
        return response.json({ message: dcRetorno });
    }
};