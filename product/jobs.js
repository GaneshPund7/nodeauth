const jobModal = require('./jobModal');

async function gJobs (req, res){

    let gJobs = jobModal.find();
    return res.status(200).send("Data has been got");

}