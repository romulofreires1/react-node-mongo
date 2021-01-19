import React, { FormEvent, ReactElement, useState } from 'react';
import { useHistory } from 'react-router';
import { useIntl } from 'react-intl';

import TextField from 'components/_commons/TextField';
import Button from 'components/_commons/Button';
import Paper from 'components/_commons/Paper';
import useNotification from 'commons/hooks/useNotification';
import useLoading from 'commons/hooks/useLoading';
import api from 'services/api';

import * as G from 'assets/styledComponents/global';
import color from 'assets/tokens/styledComponent/_colorsStyled';
import * as L from './styles';

export default function Signup(): ReactElement {
  const history = useHistory();
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { addNotification } = useNotification();
  const { addLoading, removeLoading } = useLoading();
  const { formatMessage } = useIntl();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addLoading();
    api
      .post('/auth/signup', {
        username,
        email,
        password,
        roles: ['user'],
      })
      .then(() => {
        const callback = () => history.push('/signin');
        removeLoading(callback);
      })
      .catch((error: any) => {
        const id = error?.response?.data?.message;
        addNotification(formatMessage({ id: id || 'NetworkError' }), 'error');
        removeLoading();
      });
  }

  return (
    <L.SignupContainer>
      <Paper>
        <L.PaperContent>
          <G.Title className="title">{formatMessage({ id: 'signup' })}</G.Title>
          <L.TextFieldWrapper>
            <TextField
              name="username"
              label={formatMessage({ id: 'field.username' })}
              labelColor={color.dark}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </L.TextFieldWrapper>
          <L.TextFieldWrapper>
            <TextField
              name="email"
              label={formatMessage({ id: 'field.email' })}
              labelColor={color.dark}
              type="email"
              placeholder={formatMessage({ id: 'field.email.placeholder' })}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </L.TextFieldWrapper>

          <L.TextFieldWrapper>
            <TextField
              name="password"
              label={formatMessage({ id: 'field.password' })}
              labelColor={color.dark}
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </L.TextFieldWrapper>

          <G.ButtonWrapper>
            <Button
              disabled={!username || !email || !password}
              className="confirmButton"
              onClick={handleSubmit}
              type="submit"
            >
              {formatMessage({ id: 'button.confirm' })}
            </Button>
          </G.ButtonWrapper>
        </L.PaperContent>
      </Paper>
    </L.SignupContainer>
  );
}
