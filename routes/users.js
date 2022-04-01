const express = require('express');
const router = express.Router();
const axios = require('axios');

const users = {
   
}


// define the home page route
router.get('/', function (req, res) {
  res.send(users);
})

// define the about route
router.get('/:userId', function (req, res) {
    res.send(users[req.params.userId]);
})

router.post('/',(req,res)=>{
    const githubId = req.body.githubId;
    console.log(githubId);
    const usersInfo = axios(`https://api.github.com/users/${githubId}`)
    const reposinfo = axios(`https://api.github.com/users/${githubId}/repos`);
    Promise.all([usersInfo,reposinfo]).then((responses)=>{
        const [userInfo,repos] = responses;
        users[githubId] = {...userInfo.data,repos:repos.data};
        res.send();
    }); 
    
});





module.exports = router;