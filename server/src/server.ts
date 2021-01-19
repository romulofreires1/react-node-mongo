import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './routes';
import db from './models';
import dbConfig from './config/db';

const app = express();

// TODO: 'improve cors'
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

// TODO: isolate this code snippet in a file
const Role = db.role;

function initial() {
  Role.estimatedDocumentCount((error: any, count: number) => {
    if (!error && count === 0) {
      new Role({
        name: 'user',
      }).save((err: any) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: 'moderator',
      }).save((err: any) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: 'admin',
      }).save((err: any) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

db.mongoose
  .connect(dbConfig.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connect to MongoDB.');
    initial();
  })
  .catch((err: any) => {
    console.error('Connection error', err);
    process.exit();
  });

app.listen(process.env.PORT || 3333);
