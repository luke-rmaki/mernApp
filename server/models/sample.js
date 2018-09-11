const mongoose = require('mongoose');

const { Schema } = mongoose;

// Schema
const TestSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Test = mongoose.model('test', TestSchema);

export default Test;
