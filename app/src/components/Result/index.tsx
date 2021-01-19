import React, { ReactElement } from 'react';

import ResultContainer from './styles';

interface ComponentProps {
  data?: { label: string; value: string }[];
}
export default function Result({ data = [] }: ComponentProps): ReactElement {
  return (
    <ResultContainer>
      {data.map(
        (d) =>
          d.value && (
            <div>
              {d.label}: <span>{d.value}</span>{' '}
            </div>
          )
      )}
    </ResultContainer>
  );
}
