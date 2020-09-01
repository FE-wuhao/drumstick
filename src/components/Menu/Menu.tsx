import React, { useState } from 'react';
import classNames from 'classnames';

type Key = number;

type dir = 'horizontal' | 'vertical';
type MenuCallback = (key: Key) => void;

interface IOnSelect {
  (key: Key): void;
}

interface IMenu {
  className: string;
  direction?: dir;
  defaultHighlightKey: Key;
  onSelected: IOnSelect;
}

export interface IMenuItem {
  index: Key;
  className?: React.CSSProperties;
  disabled?: boolean;
  onSelected?: IOnSelect;
}

export const MenuContext = React.createContext<IMenuItem>({
  index: 0,
});

const Menu: React.FC<Partial<IMenu>> = (props) => {
  const {
    children,
    className,
    direction,
    defaultHighlightKey,
    onSelected,
  } = props;

  const [key, setKey] = useState<Key>(
    defaultHighlightKey ? defaultHighlightKey : 0
  );

  const classes = classNames('menu', className, `menu-${direction}`);

  const handleSelect = (key: Key) => {
    setKey(key);
    if (onSelected) onSelected(key);
  };

  const MenuItemContextProp = {
    index: key,
    onSelected: handleSelect,
  };

  return (
    <MenuContext.Provider value={MenuItemContextProp}>
      <ul className={classes}>{children}</ul>
    </MenuContext.Provider>
  );
};

Menu.defaultProps = {
  direction: 'horizontal',
};

export default Menu;
