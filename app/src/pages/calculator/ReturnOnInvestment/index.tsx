import React, { ReactElement, useState } from 'react';
import { useIntl } from 'react-intl';

import CalculatorTemplate from 'components/CalculatorTemplate';
import {
  LeftSide,
  RightSide,
  Img,
  ButtonWrapper,
  CalculatorForm,
  CalculationResult,
} from 'components/CalculatorTemplate/styles';
import TextField from 'components/_commons/TextField';
import Button from 'components/_commons/Button';
import NumberInputMask from 'components/_commons/NumberInputMask';
import useNotification from 'commons/hooks/useNotification';
import useLoading from 'commons/hooks/useLoading';
import api from 'services/api';
import * as G from 'assets/styledComponents/global';
import Result from 'components/Result';
import { APP_NAME } from 'consts/config';

function ReturnOnInvestment(): ReactElement {
  const { formatMessage } = useIntl();
  const { addNotification } = useNotification();
  const { addLoading, removeLoading } = useLoading();

  const [amount, setAmount] = useState<string>('');
  const [earnings, setEarnings] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleClick = () => {
    addLoading();
    api
      .post('/calculator/return-on-Investment', {
        amount: +amount,
        earnings: +earnings,
      })
      .then((res) => {
        setResult(res.data.toString());
      })
      .catch((error: any) => {
        const id = error?.response?.data?.message;
        addNotification(formatMessage({ id: id || 'NetworkError' }), 'error');
      })
      .finally(() => {
        removeLoading();
      });
  };

  const data = [
    { label: formatMessage({ id: 'field.result' }), value: result },
  ];

  document.title = `${APP_NAME} - ${formatMessage({
    id: 'returnOnInvestmentCalculator',
  })}`;

  return (
    <CalculatorTemplate>
      <>
        <LeftSide>
          <G.Title className="title">
            {formatMessage({ id: 'returnOnInvestment' })}
          </G.Title>
          <span>
            {formatMessage({ id: 'text.returnOnInvestment' })}
            <sup>
              <a href="http://www.investopedia.com/articles/basics/10/guide-to-calculating-roi.asp">
                1
              </a>
            </sup>
          </span>
          <Img width="80%" src="/images/devices_t.png" />
        </LeftSide>
        <RightSide>
          <CalculatorForm>
            <TextField
              name="initialAmount"
              label={formatMessage({ id: 'field.initialAmount' })}
              placeholder="0.00"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{ inputComponent: NumberInputMask as any }}
            />
            <TextField
              name="earnings"
              label={formatMessage({ id: 'field.earnings' })}
              placeholder="0.00"
              onChange={(e) => {
                setEarnings(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{ inputComponent: NumberInputMask as any }}
            />

            <ButtonWrapper>
              <Button
                disabled={!amount || !earnings}
                type="button"
                onClick={() => handleClick()}
              >
                {formatMessage({ id: 'button.calculate' })}
              </Button>
            </ButtonWrapper>
          </CalculatorForm>
          <CalculationResult>
            <Result data={data} />
            <Img src="/images/money.png" />
          </CalculationResult>{' '}
        </RightSide>
      </>
    </CalculatorTemplate>
  );
}

export default ReturnOnInvestment;
