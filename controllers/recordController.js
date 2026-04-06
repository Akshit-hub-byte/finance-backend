import Record from "../models/Record.js";

export const createRecord = async (req,res) => {

  const record = await Record.create({
    ...req.body,
    createdBy:req.user.id
  });

  res.json(record);
};

export const getRecords = async (req, res) => {

  try {

    const { type, category, date } = req.body;

    const filter =  { isDeleted:false };;

    if (type) filter.type = type;
    if (category) filter.category = category;
    if (date) filter.date = date;

    const records = await Record.find(filter);

    res.json(records);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};
export const updateRecord = async (req, res) => {

  try {

    const { id } = req.params;

    const updatedRecord = await Record.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      { returnDocument: "after" }
    );

    if (!updatedRecord) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json({
      message: "Record updated successfully",
      record: updatedRecord
    });

  } catch (error) {

    res.status(500).json({ message: error.message });

  }
};
export const softDeleteRecord = async (req,res)=>{

  try{

    const {id} = req.params;

    const record = await Record.findByIdAndUpdate(
      id,
      { isDeleted:true },
      { returnDocument:"after" }
    );

    if(!record){
      return res.status(404).json({message:"Record not found"});
    }

    res.json({
      message:"Record soft deleted successfully",
      record
    });

  }catch(error){
    res.status(500).json({message:error.message});
  }

};