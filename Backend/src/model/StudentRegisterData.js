const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://userone:userone@ictakfiles.at4m7.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/StudentEnrollment');
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    username : String,
    email : String,
    password : String,
});

var StudentRegisterData = mongoose.model('studentregisterdata', RegisterSchema);

module.exports = StudentRegisterData;