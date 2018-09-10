import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';

// Custom imports
import dbInfo from './config/db'; // database info
import routes from './routes/main'; // router routes

// App initialisation
const app = express();

// ------------------------------------MIDDLEWARE--------------------------------------
// Bodyparser
app.use(bodyParser.json());

// Cors config
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

// Router
app.use('/api', routes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
  });
}

// -----------------------------------DATABASE CONFIG----------------------------------
mongoose
  .connect(
    dbInfo.mongoURI,
    { useNewUrlParser: true },
  )
  .then(() => console.log('Database connection successful...'))
  .catch(err => console.log(err));

// -----------------------------------RUN SERVER---------------------------------------
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
