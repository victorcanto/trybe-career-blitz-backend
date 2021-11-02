const { ObjectId } = require('mongodb');
const { connection } = require('./connection');

const create = async (data) => {
  try {
    const db = await connection();
    const res = await db
      .collection('users')
      .insertOne({ ...data, registeredAt: new Date() });
    return res;
  } catch (err) {
    console.error(err);
  }
};

const getAll = async () => {
  try {
    const db = await connection();
    const res = await db.collection('users').find({}).toArray();
    return res;
  } catch (err) {
    console.error(err);
  }
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  try {
    const db = await connection();
    const res = await db.collection('users').findOne({ _id: ObjectId(id) });
    return res;
  } catch (err) {
    console.error(err);
  }
};

const getByEmail = async (email) => {
  try {
    const db = await connection();
    const res = await db.collection('users').findOne({ email });
    return res;
  } catch (err) {
    console.error(err);
  }
};

const updateById = async (id, data) => {
  if (!ObjectId.isValid(id)) return null;

  try {
    const filter = { _id: ObjectId(id) };
    const updateDoc = { $set: { ...data, updatedAt: new Date() } };
    const db = await connection();
    return db.collection('users').updateOne(filter, updateDoc);
  } catch (err) {
    console.error(err);
  }
};

const deleteById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  try {
    const filter = { _id: ObjectId(id) };
    const db = await connection();
    return db.collection('users').deleteOne(filter);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  create,
  getAll,
  getById,
  getByEmail,
  updateById,
  deleteById,
};
