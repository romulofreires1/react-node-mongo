const Finance = require('financejs');

const finance = new Finance();

const returnOnInvestment = (amount: number, earnings: number): number => {
  try {
    const result = finance.ROI(amount, earnings);
    return result;
  } catch (err) {
    return NaN;
  }
};

const Calculator = {
  returnOnInvestment,
};
export default Calculator;
