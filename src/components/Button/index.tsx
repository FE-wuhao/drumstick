import React from 'react';
import classNames from 'classnames';

// 按钮大小的枚举
export enum ButtonSize {
  Large = 'lg',
  Middle = 'md',
  Small = 'sm',
}
// 按钮类型的枚举
export enum ButtonType {
  Primary = 'primary',
  Danger = 'danger',
  Link = 'link',
  Default = 'default',
}
// 传入参数类型
export interface IButtonProps {
  className?: string;
  btnType?: string;
  size?: string;
  href?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = (props) => {
  // 对象解构获取传入参数
  const {
    className,
    btnType = 'default',
    size,
    href,
    disabled = false,
    children,
  } = props;
  // 动态类名，初始化默认携带‘btn’这个类名
  const classnames = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });
  // 根据btnType，确认要渲染的按钮类型，从而选择时button元素还是a元素
  if (btnType === ButtonType.Link && href)
    return (
      <a className={classnames} href={href}>
        {children}
      </a>
    );
  return (
    <button className={classnames} disabled={disabled}>
      {children}
    </button>
  );
};

export default React.memo(Button);
