const router = require('express').Router();
let Board = require('../models/board.model')  // gets the model we created so we can use all the inbuilt mongoDB methods on the Board object to interact with the database.


// adding API endpoints

router.route('/').get((req, res) => {  //if user goes to address localhost:5000/boards/
  Board.find()
  .then(boards => res.json(boards))
  .catch(err => res.status(400).json('Error: ' + err))
});


router.route('/add').post((req, res) => {   //handles incoming post requests. the new username is part of the request body
  const headline = req.body.headline;
  const description = req.body.description;
  const location = req.body.location;
  const price = Number(req.body.price);
  const contact = req.body.location;


  const newBoard = new Board({        // this is similar in rails when we add a user under the route in controller
    headline,
    description,
    location,
    price,
    contact

  });   // we create a new instance of User

  newBoard.save()   // which is then saved to database using inbuilt mongoDB save method.
  .then(() => res.json('Board added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Board.findById(req.params.id)  // built in mongoose method.
  .then(board => res.json(board))
  .catch(err => res.status(400).json('Error: ' + err));
})


// you can test that this backend api works correctly by using insomnia to simulate interactions with the databse. then you should see the changes made on the google cloud mongoDB account.

module.exports = router;
