import { Request, Response } from 'express';

import db from '../models';

const Indicator = db.indicator;

const getIndicators = (req: Request, res: Response) => {
  Indicator.find({}, (err, indicators) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    const filtered = indicators.map(indicator => {
      return {
        _id: indicator._id,
        stock: indicator.stock,
        roe: indicator.roe,
      };
    });

    res.status(200).send(filtered);
  });
};

const IndicatorController = { getIndicators };
export default IndicatorController;
