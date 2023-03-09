import classnames from "classnames/bind";

import styles from "./SideBarLeft.module.scss";

const cx = classnames.bind(styles);

export const SideBarLeft = () => {
  return (
    <div className={cx("SideBarLeft")}>
      <div>SideBar</div>
      <div>new block</div>
      <div>new block2</div>
      <div>new block3</div>
      <div>new block4</div>
      <div>new block5</div>
      <div>new block6</div>
    </div>
  );
};
