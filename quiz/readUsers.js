const express = require('express')
const router = express.Router();

router.get('/usernames', (req, res) => {
  let usernames = req.users.map(function(user) {
    return {id: user.id, username: user.username};
  });
  res.send(usernames);
});

router.get('/username/:name', (req, res) => {
  try {
    let name = req.params.name;
    let matching = req.users.filter(function(user) {
      return user.username == name;
    }); 
    res.send(matching);
  } catch (error) {
    console.error(error);
  }

});

module.exports = router;