import Record from "../models/Record.js";

export const createRecord = async (req,res) => {

  const record = await Record.create({
    ...req.body,
    createdBy:req.user.id
  });

  res.json(record);
};

export const getRecords = async (req,res) => {

  const records = await Record.find();

  res.json(records);
};