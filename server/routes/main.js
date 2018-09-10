import express from 'express';

// Test Model
import Test from '../models/sample';

const router = express.Router();

// GET: Sends result of database query
router.get('/', (req, res) => {
  Test.find({}, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

// POST: Adds new item to database
router.post('/', (req, res) => {
  const { data } = req.body;
  const newThing = new Test({
    name: data,
  });

  newThing
    .save()
    .then(status => res.json(status))
    .catch(err => console.log(err));
});

// DELETE: Deletes item from database
router.delete('/', (req, res) => {
  const { itemID } = req.body;
  Test.findOneAndDelete({ _id: itemID }, (err) => {
    if (err) {
      console.log(err);
    } else {
      Test.find({}, (error, result) => {
        if (err) {
          console.log(error);
        } else {
          res.send(result);
        }
      });
    }
  });
});

export default router;
