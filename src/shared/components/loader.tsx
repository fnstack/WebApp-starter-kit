import * as React from 'react';
import classNames from 'classnames';
import './loader.less';

interface LoaderProps {
  spinning?: boolean;
  fullScreen?: boolean;
}

const Loader: React.SFC<LoaderProps> = props => {
  const { spinning, fullScreen } = props;
  return (
    <div
      className={classNames('loader', {
        hidden: !spinning,
        fullScreen
      })}
    >
      <div className={'warpper'}>
        <div className={'inner'} />
        <div className={'text'}>CHARGEMENT</div>
      </div>
    </div>
  );
};

export { Loader };
