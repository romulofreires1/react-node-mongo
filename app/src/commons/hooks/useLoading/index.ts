import { useContext } from 'react';
import {
  LoadingContext,
  LoadingContextValueProps,
} from '../../providers/LoadingProvider';

function useLoading(): LoadingContextValueProps {
  const { loading, addLoading, removeLoading } = useContext(LoadingContext);
  return { loading, addLoading, removeLoading };
}

export default useLoading;
