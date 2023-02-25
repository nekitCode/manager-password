import React from "react";
import classnames from 'classnames/bind';
import { useAppSelector } from "../../../hooks";

import styles from './Bank.module.scss';

const cx = classnames.bind(styles);

export const Bank = () => {
  const title = useAppSelector(test => test.addCard.titleCard);
  return (
    <div className={ cx('Bank') }>
      <div>
        <div>
          <img src="" alt=""/>
          <p></p>
        </div>
        <div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};
