const router = require('express').Router();
let Board = require('../models/board.model')  // gets the model we created so we can use all the inbuilt mongoDB methods on the Board object to interact with the database.


// adding API endpoints

router.route('/').get((req, res) => {  //if user goes to address localhost:5000/boards/
  Board.find()
  .then(users => res.json(boards))
  .catch(err => res.status(400).json('Error: ' + err))
});


router.route('/add').post((req, res) => {   //handles incoming post requests. the new username is part of the request body
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newBoard = new Board({
    username,
    description,
    duration,
    date,
  });   // we create a new instance of User

  newBoard.save()   // which is then saved to database using inbuilt mongoDB save method.
  .then(() => res.json('Board added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
