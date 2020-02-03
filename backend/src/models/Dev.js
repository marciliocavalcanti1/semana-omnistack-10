const mongoose      = require('mongoose');
const PointSchema   = require('../utils/PointSchema');

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere',
    }
});

// 1o parm: Nome do modelo que vai ser salvo no banco; 2o parm: Objeto do Schema no JS
module.exports = mongoose.model('Dev', DevSchema);