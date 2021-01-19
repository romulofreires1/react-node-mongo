import CalculatorController from '../controllers/CalculatorController';

const routes = app => {
  app.post(
    '/calculator/return-on-Investment',
    CalculatorController.returnOnInvestment
  );
};

export default routes;
