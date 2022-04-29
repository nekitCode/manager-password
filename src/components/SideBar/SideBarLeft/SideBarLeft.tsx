import React from "react";
import classnames from "classnames/bind";

import styles from './SideBarLeft.module.scss';

const cx = classnames.bind(styles);

export const SideBarLeft = () => {
  return (
    <div className={ cx('SideBarLeft') }>
      SideBar{ " " }
    </div>
  );
};
