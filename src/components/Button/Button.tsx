import React from 'react';
import classNames from 'classnames';
import { Type, Size } from '../../typings/typings';

// 按钮类型的枚举

// 传入参数类型
export interface IButtonProps {
  className?: string;
  btnType?: Omit<Type, 'link'>;
  size?: Size;
  href?: string;
  disabled?: boolean;
  children: React.ReactNode;
}
// button本身具备的attributes
type NativeButtonAttributes = React.ButtonHTMLAttributes<HTMLElement>;
type NativeAnchorAttributes = React.AnchorHTMLAttributes<HTMLElement>;
type MixinButtonProps = Partial<
  IButtonProps & NativeButtonAttributes & NativeAnchorAttributes
>;
const Button: React.FC<MixinButtonProps> = (props) => {
  // 对象解构获取传入参数
  const {
    className,
    btnType = 'default',
    size,
    href,
    disabled = false,
    children,
    ...restProps
  } = props;
  // 动态类名，初始化默认携带‘btn’这个类名
  const classnames = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  });
  // 根据btnType，确认要渲染的按钮类型，从而选择时button元素还是a元素
  if (btnType === 'link' && href)
    return (
      <a className={classnames} href={href} {...restProps}>
        {children}
      </a>
    );
  return (
    <button className={classnames} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};

export default React.memo(Button);
