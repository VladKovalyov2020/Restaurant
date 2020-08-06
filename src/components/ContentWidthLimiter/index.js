import React from 'react';

// Modules

import classnames from 'classnames';
import types from 'prop-types';

// Styles

import './styles.scss';

// ----------------

export const ContentWidthLimiter = props => {
  const { fullWidth, children, className } = props;

  const contentLiminterClass = classnames(
    {
      'content-limiter': true,
      'content-limiter--full-width': fullWidth,
    },
    className
  );

  return <div className={contentLiminterClass}>{children}</div>;
};

// Type of props

ContentWidthLimiter.propTypes = {
  className: types.string,
  fullWidth: types.bool,
  children: types.node.isRequired,
};
