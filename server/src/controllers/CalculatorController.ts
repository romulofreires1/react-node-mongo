import { Request, Response } from 'express';

const Finance = require('financejs');

const finance = new Finance();

const returnOnInvestment = (req: Request, res: Response) => {
  const { amount, earnings } = req.body;
  try {
    const result = finance.ROI(Number(amount), Number(earnings));
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const Calculator = {
  returnOnInvestment,
};
export default Calculator;
