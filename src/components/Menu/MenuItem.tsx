import React, { useContext} from 'react';
import classNames from 'classnames';
import { IMenuItem,MenuContext} from './Menu'

const MenuItem: React.FC<IMenuItem> = (props) => {

  const { key, disabled, onSelected,className } = props;

  const context = useContext(MenuContext);

  const classes = classNames('menu-item', className, { 'is-disable': disabled, 'is-highlight': key === context.key})

  const handleClick = () => { 
    if(onSelected ) onSelected(key)
  }

  return (<li className={classes} onClick={handleClick}></li>);
}

export default MenuItem;