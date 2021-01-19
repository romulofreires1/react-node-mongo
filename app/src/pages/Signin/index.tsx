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
import SignupLink from './SignupLink';
import * as L from './styles';

export default function Signin(): ReactElement {
  const { formatMessage } = useIntl();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { addNotification } = useNotification();
  const { addLoading, removeLoading } = useLoading();

  const history = useHistory();

  function handlSubmit(e: FormEvent) {
    addLoading();
    e.preventDefault();
    api
      .post('/auth/signin', {
        username,
        password,
      })
      .then((res) => {
        localStorage.setItem('accessToken', res?.data?.accessToken);
        localStorage.setItem('username', res?.data?.username);
        localStorage.setItem('email', res?.data?.email);
        localStorage.setItem('roles', res?.data?.roles.join(';'));
        history.push('/');
      })
      .catch((error) => {
        const id = error?.response?.data?.message;
        addNotification(formatMessage({ id: id || 'NetworkError' }), 'error');
      })
      .finally(() => {
        removeLoading();
      });
  }

  return (
    <L.SigninContainer>
      <Paper>
        <L.PaperContent>
          <G.Title className="title">{formatMessage({ id: 'signin' })}</G.Title>
          <form onSubmit={handlSubmit}>
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
            <SignupLink message={formatMessage({ id: 'signupMessage' })} />
            <G.ButtonWrapper>
              <Button
                disabled={!username || !password}
                className="confirmButton"
                type="submit"
              >
                {formatMessage({ id: 'button.confirm' })}
              </Button>
            </G.ButtonWrapper>
          </form>
        </L.PaperContent>
      </Paper>
    </L.SigninContainer>
  );
}
