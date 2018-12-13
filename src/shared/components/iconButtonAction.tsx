import * as React from 'react';
import { Button, Tooltip } from 'antd';
import { ButtonSize, ButtonType } from 'antd/lib/button';

interface IconButtonActionProps {
  type?: ButtonType;
  className?: string;
  style?: React.CSSProperties;
  size?: ButtonSize;
  title: string;
  icon: string;
  item: any;
  onOpenModal?: (item: any) => void;
  ghost: boolean;
}

/**
 * The IconButtonAction component
 *
 * @returns IconButtonAction as react stateless component
 */
const IconButtonAction: React.StatelessComponent<IconButtonActionProps> = props => {
  const { className, style, title, icon, size, type, ghost } = props;

  const handleClick = () => {
    const { onOpenModal, item } = props;
    onOpenModal(item);
  };

  return (
    <>
      <Tooltip title={title}>
        <Button
          type={type}
          size={size ? size : 'default'}
          icon={icon}
          shape="circle"
          className={className}
          style={style}
          onClick={handleClick}
          ghost={ghost}
        />
      </Tooltip>
    </>
  );
};

export { IconButtonAction };
