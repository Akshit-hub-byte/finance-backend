import Record from "../models/Record.js";

export const summary = async (req,res) => {
 try{
  const income = await Record.aggregate([
    {$match:{type:"income",isDeleted:false}},
    {$group:{_id:null,total:{$sum:"$amount"}}}
  ]);

  const expense = await Record.aggregate([
    {$match:{type:"expense",isDeleted:false}},
    {$group:{_id:null,total:{$sum:"$amount"}}}
  ]);

  const totalIncome = income[0]?.total || 0;
  const totalExpense = expense[0]?.total || 0;

  res.json({
    totalIncome,
    totalExpense,
    netBalance: totalIncome - totalExpense
  });
 }
 catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
export const getRecentActivity = async (req, res) => {

  try {

    const records = await Record.find({ isDeleted: false })
      .sort({ createdAt: -1 })
      .limit(5);

    res.json(records);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
export const getMonthlyTrends = async (req, res) => {

  try {

    const trends = await Record.aggregate([

      { $match: { isDeleted: false } },

      {
        $group: {
          _id: { $month: "$date" },
          totalIncome: {
            $sum: {
              $cond: [{ $eq: ["$type", "income"] }, "$amount", 0]
            }
          },
          totalExpense: {
            $sum: {
              $cond: [{ $eq: ["$type", "expense"] }, "$amount", 0]
            }
          }
        }
      },

      { $sort: { _id: 1 } }

    ]);

    res.json(trends);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};
export const getCategoryTotals = async (req, res) => {

  try {

    const categories = await Record.aggregate([

      { $match: { isDeleted: false } },

      {
        $group: {
          _id: "$category",
          totalAmount: { $sum: "$amount" }
        }
      }

    ]);

    res.json(categories);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};