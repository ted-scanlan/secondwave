const router = require('express').Router();
let User = require('../models/user.model')

router.route('/').get((req, res) => {
  User.find()   //mongoose method. gets all users from mongodb database
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err))
});       // endpoint that handles incoming http get requests on the /users path     i.e. this will happen if you type in the address localhost:5000/users/


router.route('/add').post((req, res) => {   //handles incoming post requests. the new username is part of the request body
  const username = req.body.username;

  const newUser = new User({username});   // we create a new instance of User

  newUser.save()   // which is then saved to database using inbuilt mongoDB save method.
  .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
