const jwt = require('jsonwebtoken');
const userModal = require('./userm');
const secretKey = "ganeshbhai";

async function users(req, res) {
    const users = await userModal.find();
    return res.json(users);
}

async function user(req, res) {
    const { userName, password } = req.body;
    try {
        if (!userName || !password) {
            return res.status(500).send("All fields are required...");
        } else {
            let userData = await userModal.create({ userName, password });

          jwt.sign({userData}, secretKey, {expiresIn: '300s'}, (error, token)=>{
         if(!token){
             console.log(error);    
            }
            res.json(token);
          })          
        }
    } catch (error) {
        return res.status(404).json(error.message);
    }
}

async function upUser(req, res) {
    const { id } = req.params;
    try {
        let { userName, password } = req.body;
        console.log(userName, password);

        if (!userName && !password) {
            return res.status(500).json("Data not found to update");
        } else {
            const updateUser = await userModal.findByIdAndUpdate(id, req.body, { new: true });
            return res.status(200).json(updateUser);
        }
    } catch (error) {
        return res.status(404).send("Somthing went wrong")
    }
};

async function deUser(req, res) {
    const { id } = req.params;
    console.log(id);

    try {
        if (!id) {
            res.status(404).json("user not found for delete");
        }
        let deuser = await userModal.findByIdAndRemove(id)
        return res.json(deuser);
    } catch (error) {
        console.log(error.message);
        
        res.status(500).send("Somthing went wrong...");
    }
}

module.exports = { users, user, upUser, deUser };