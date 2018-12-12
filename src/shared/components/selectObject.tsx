import * as React from 'react';
import { Select } from 'antd';
import { SelectProps } from 'antd/lib/select';

interface IconButtonActionProps extends SelectProps {
  item?: any;
  onChangedValue?: (value) => void;
}

/**
 * The IconButtonAction component
 *
 * @returns IconButtonAction as react stateless component
 */
const SelectObject: React.StatelessComponent<IconButtonActionProps> = props => {
  const { children, style, placeholder } = props;

  const handleClick = () => {
    const { onChangedValue, item } = props;
    onChangedValue(item);
  };

  return (
    <>
      <Select style={style} placeholder={placeholder} onChange={handleClick}>
        {children}
      </Select>
    </>
  );
};

export { SelectObject };
