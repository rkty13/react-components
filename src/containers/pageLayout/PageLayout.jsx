// @flow

import * as React from 'react';
import classNames from 'classnames';

type PageLayoutPropsType = {
  children: React.Node,
  className?: string,
  noSides?: boolean,
  noTop?: boolean,
  noBottom?: boolean
};

const PageLayout = ({
  children,
  className,
  noSides,
  noTop,
  noBottom
}: PageLayoutPropsType) => (
  <div className={
    classNames('rc-page-layout', {
      'rc-page-layout--no-sides': noSides,
      'rc-page-layout--no-top': noTop,
      'rc-page-layout--no-bottom': noBottom
    }, className)
  }>
    {children}
  </div>
);

export default PageLayout;
