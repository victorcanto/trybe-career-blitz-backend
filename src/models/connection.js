const { MongoClient } = require('mongodb');

require('dotenv').config();

const MONGO_DB_URL = process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017/BlitzTasks';
const DB_NAME = process.env.DB_NAME || 'BlitzTasks';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

exports.connection = () =>
  (db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
        .then((conn) => {
          db = conn.db(DB_NAME);
          return db;
        })
        .catch((err) => {
          console.error(err);
          process.exit(1);
        }));
