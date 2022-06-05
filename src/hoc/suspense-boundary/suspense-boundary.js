import React, { Suspense } from 'react';
import { ErrorBoundary } from '../errorBoundary/errorBoundary';
import PropTypes from 'prop-types';

const SuspenseBoundary = ({ fallback, backup, children }) => {
  return (
    <ErrorBoundary backup={backup}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

SuspenseBoundary.propTypes = {
  children: PropTypes.node,
  fallback: PropTypes.node,
  backup: PropTypes.node,
};

export default SuspenseBoundary;
