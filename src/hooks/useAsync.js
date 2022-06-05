import { useCallback, useEffect, useState } from 'react';

export const useAsync = (asyncFunction, immediate = true, defaultParams) => {
  const [pending, setPending] = useState(false);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(
    (params) => {
      setPending(true);
      setValue(null);
      setError(null);
      return asyncFunction(params)
        .then((response) => {
          setValue(response);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setPending(false);
        });
    },
    [asyncFunction]
  );

  useEffect(() => {
    if (immediate) {
      execute(defaultParams);
    }
  }, [execute, immediate, defaultParams]);
  return { execute, pending, value, error };
};
