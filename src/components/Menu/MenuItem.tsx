import React, { useContext } from 'react';
import classNames from 'classnames';
import { IMenuItem, MenuContext } from './Menu';

const MenuItem: React.FC<IMenuItem> = (props) => {
  const { index, disabled, className, children } = props;

  const context = useContext(MenuContext);

  const classes = classNames('menu-item', className, {
    'is-disable': disabled,
    'is-highlight': index === context.index,
  });

  const handleClick = () => {
    if (context.onSelected) context.onSelected(index);
  };

  return (
    <li className={classes} onClick={handleClick}>
      {children}
    </li>
  );
};

export default MenuItem;
