import React, { ReactElement } from 'react';

import * as L from './styles';

const SignupLink = ({ message }: { message: string }): ReactElement => {
  return <L.SignupLink href="/signup">{message}</L.SignupLink>;
};

export default SignupLink;
