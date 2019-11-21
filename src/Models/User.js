const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    ID: String,
    email: String,
    nome: String,
    senha: String,
    telefone: String,
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);