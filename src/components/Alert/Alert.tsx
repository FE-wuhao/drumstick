import React, { useMemo, useState } from 'react';
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

type IProps = Partial<IAlert>;

const Alert: React.FC<IProps> = (props) => {
  const { title, type, size, content, closeable } = props;

  const alertTitle = useMemo(() => title, [title]);

  const alertContent = useMemo(() => content, [content]);

  const alertType = useMemo(() => type, [type]);

  const alertSize = useMemo(() => size, [size]);

  const [disappear, setDisappear] = useState<disappear>(false);

  const styles = classNames(
    'alert',
    { [`alert-${alertType}`]: alertType },
    { [`alert-${alertSize}`]: alertSize },
    { 'alert-disappear': disappear }
  );

  const close = classNames('alert-close', { uncloseable: !closeable });

  return (
    <div className={styles}>
      <div className='alert-header'>
        <span>{alertTitle}</span>
        <span
          className={close}
          onClick={() => {
            setDisappear(true);
          }}>
          x
        </span>
      </div>
      <div className='alert-body'>{alertContent}</div>
    </div>
  );
};

Alert.defaultProps = {
  type: 'default',
  size: 'sm',
  closeable: true,
};

export default Alert;
