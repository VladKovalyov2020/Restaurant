import React from 'react';

// Modules

import classNames from 'classnames';
import types from 'prop-types';
import { ReactIcon } from '../../../components/ReactIcon';

// Styles

import './styles.scss';

// ------------------

export const Sidebar = (props) => {
  const { isOpen, list } = props;

  const sidebarClass = classNames({
    'landing-sidebar': true,
    'landing-sidebar--open': isOpen,
  });

  return (
    <aside className={sidebarClass}>
      <div className="landing-sidebar__list">
        {list.map((item, index) => {
          return (
            <div key={index} className="landing-sidebar__list-item">
              <a href={`#${item.to}`} key={index}>
                {item.name}
              </a>

              <ReactIcon size="lg">{item.icon()}</ReactIcon>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

// Type of props

Sidebar.propTypes = {
  isOpen: types.bool.isRequired,
  list: types.array.isRequired,
};

// Default value for props

Sidebar.defaultProps = {
  isOpen: false,
};
