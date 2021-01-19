import React, { ReactElement } from 'react';
import CircularProgress from '../_commons/CircularProgress';
import useLoading from '../../commons/hooks/useLoading';

import LoadingContainer from './styles';

interface ComponentProps {
  forceLoading?: boolean;
}

export default function Loading({
  forceLoading,
}: ComponentProps): ReactElement {
  const { loading: globalLoading } = useLoading();
  const loading = globalLoading || forceLoading;
  return (
    /* TODO: - componente não aceita boolean, por isso o if ternário 
             - pesquesisar alternativas
    */
    <LoadingContainer loading={loading ? 1 : 0}>
      <CircularProgress isOpen={!!loading} />
    </LoadingContainer>
  );
}
