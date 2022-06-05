import { useFormikContext } from 'formik';
import { useCallback, useEffect } from 'react';

export const useReset = (value) => {
  const formikContext = useFormikContext();
  const { setErrors, setValues, setTouched, initialValues } = formikContext;

  const handleReset = useCallback(() => {
    if (value === 'On-Hold') {
      setValues({ ...initialValues, debtor: value, admission: '', refund: '' });
    } else {
      setValues({ ...initialValues, debtor: value });
    }

    setErrors({});
    setTouched({});
  }, [value, initialValues, setValues, setErrors, setTouched]);

  useEffect(() => {
    if (value) {
      handleReset();
    }
  }, [value, handleReset]);
};
