import React,{createContext,useState} from 'react';
import classNames from 'classnames';
import { Key } from '../../typings/typings';

type dir = 'horizontal' | 'vertical';
type MenuCallback = (key: Key) => void;

interface IMenu {
  key: Key;
  className: string;
  direction: dir;
  defaultHighlightKey: Key;
  onSelected: MenuCallback;
}

interface IMenuContext{
  highlightKey: Key;
  getSelected?: MenuCallback;
}

export const MenuContext = createContext<IMenuContext>({highlightKey:0});

const Menu: React.FC<Partial<IMenu>> = (props) => {
  const { children, className, direction, defaultHighlightKey } = props;

  const [currentKey, setCurrrentKey] = useState<Key>();

  const classes = classNames(className, `Menu-${direction}`);

  const currentKeyValue = { highlightKey: currentKey, getSelected:setCurrrentKey};

  return (
    // <MenuContext.Provider value={currentKeyValue}>
      <ul className={classes}>{children}</ul>
    // </MenuContext.Provider>
  );
  
};

Menu.defaultProps = {
  direction: 'horizontal',
};

export default Menu;
