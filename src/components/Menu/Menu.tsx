import React from 'react';
import classNames from 'classnames';
import { Key } from '../../typings/typings';

type dir = 'horizontal' | 'vertical';

interface IMenu {
  key: Key;
  className: string;
  direction: dir;
  defaultHighlightKey: Key;
  onSelected: (key: Key) => void;
}

const Menu: React.FC<Partial<IMenu>> = (props) => {
  const { children, className, direction, defaultHighlightKey } = props;

  const classes = classNames(className, `Menu-${direction}`);

  return <ul className={classes}>{children}</ul>;
};

Menu.defaultProps = {
  direction: 'horizontal',
};

export default Menu;
