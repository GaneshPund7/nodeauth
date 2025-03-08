const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({

    companyName:{
        type: String,
        require: true
    },
    jobTitle:{
        type: String,
        require: true
    },
    jobDistcription:{
        type: String,
        require: true
    },
    batch: {
        type: String,
        require: true
    },
    salery: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('JobData', jobSchema);