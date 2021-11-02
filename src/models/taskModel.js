const { ObjectId } = require('mongodb');
const { connection } = require('./connection');

const create = async (data) => {
  try {
    const db = await connection();
    const res = await db
      .collection('tasks')
      .insertOne({ ...data, createdAt: new Date() });
    return res;
  } catch (err) {
    console.error(err);
  }
};

const getAll = async () => {
  try {
    const db = await connection();
    const res = await db.collection('tasks').find({}).toArray();
    return res;
  } catch (err) {
    console.error(err);
  }
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  try {
    const db = await connection();
    const res = await db.collection('tasks').findOne({ _id: ObjectId(id) });
    return res;
  } catch (err) {
    console.error(err);
  }
};

const getByUserId = async (userId) => {
  if (!ObjectId.isValid(userId)) return null;
  try {
    const filter = { userId: ObjectId(userId) };
    const db = await connection();
    const res = await db.collection('tasks').find(filter).toArray();
    return res;
  } catch (err) {
    console.error(err);
  }
};

const getBySearchTerm = async (query) => {
  try {
    const db = await connection();
    const res = await db.collection('tasks').find(query).toArray();
    return res;
  } catch (err) {
    console.error(err);
  }
};

const updateById = async (taskId, data) => {
  if (!ObjectId.isValid(taskId)) return null;

  try {
    const filter = { _id: ObjectId(taskId) };
    const updateDoc = { $set: { ...data, updatedAt: new Date() } };
    const db = await connection();
    return db.collection('tasks').updateOne(filter, updateDoc);
  } catch (err) {
    console.error(err);
  }
};

const deleteById = async (taskId) => {
  if (!ObjectId.isValid(taskId)) return null;

  try {
    const filter = { _id: ObjectId(taskId) };
    const db = await connection();
    return db.collection('tasks').deleteOne(filter);
  } catch (err) {
    console.error(err);
  }
};

const deleteByUserId = async (userId) => {
  if (!ObjectId.isValid(userId)) return null;

  try {
    const filter = { userId: ObjectId(userId) };
    const db = await connection();
    return db.collection('tasks').deleteMany(filter);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  create,
  getAll,
  getById,
  getByUserId,
  getBySearchTerm,
  updateById,
  deleteById,
  deleteByUserId,
};
