import classnames from "classnames/bind";
import { TypeCard } from "../TypeCard/TypeCard";

import styles from "./Content.module.scss";

const cx = classnames.bind(styles);

export const Content = () => {
  return (
    <div className={cx("Content")}>
      <TypeCard />
    </div>
  );
};
