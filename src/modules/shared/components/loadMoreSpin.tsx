import React from 'react';
import { Spin } from 'antd';

interface LoadMoreSpinProps {
  isLoading: boolean;
}

export const LoadMoreSpin: React.SFC<LoadMoreSpinProps> = ({ isLoading }) => (
  <>
    {isLoading && (
      <div className="demo-loading-container">
        <Spin />
      </div>
    )}
  </>
);
