import React, { useMemo } from 'react';
import { Type, Size } from '../../typings/typings';
import classNames from 'classnames';

export interface IAlert {
  title: string;
  type: Omit<Type, 'primary'>;
  size: Size;
  content: string;
  closeable: boolean;
}

type disappear = undefined | boolean;

const Alert: React.FC<Partial<IAlert>> = (props) => {
  const {
    title,
    type = 'default',
    size = 'sm',
    content,
    closeable = true,
  } = props;

  const alertTitle = useMemo(() => title, [title]);

  const alertContent = useMemo(() => content, [content]);

  const alertType = useMemo(() => type, [type]);

  const alertSize = useMemo(() => size, [size]);

  let disappear: disappear = undefined;

  const styles = classNames(
    'alert',
    { [`alert-${alertType}`]: alertType },
    { [`alert-${alertSize}`]: alertSize },
    { 'alert-disappear': disappear },
    { closeable: closeable }
  );

  return (
    <div className={styles}>
      <div className='alert-header'>
        <span>{alertTitle}</span>
        <span
          className='alert-close'
          onClick={() => {
            console.log('关闭按钮的onclick事件');
            disappear = true;
            console.log(disappear);
          }}>
          x
        </span>
      </div>
      <div className='alert-body'>{alertContent}</div>
    </div>
  );
};

export default Alert;
