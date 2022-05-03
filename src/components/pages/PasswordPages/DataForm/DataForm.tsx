import React from 'react';
import { ISetDataPassword } from "../../../../types/typePassword";
import { ICardState } from "../../../../types/cards";
import classnames from 'classnames/bind';

import styles from './DataForm.module.scss';
import { useParams } from "react-router-dom";

const cx = classnames.bind(styles);

interface IDataFormProps {
  valuesPassword: ISetDataPassword;
}

//TODO:переделать этот компонент

const DataPasswordForm: React.FC<IDataFormProps> = (props) => {
  const {id} = useParams();
  const {valuesPassword} = props;
  const data = valuesPassword.data.find((el: any) => el.id === Number(id));
  return (
    <>
      <h4>name:</h4>
      <p className={cx('data-form')}>{data?.name || ''}</p>
      <h4>account:</h4>
      <p className={cx('data-form')}>{data?.account || ''}</p>
      <h4>password:</h4>
      <p className={cx('data-form')}>{data?.password || ''}</p>
      <h4>websiteLink:</h4>
      <div className={cx('data-form link')}>
        <a className={cx('a')} href={data?.websiteLink}>{data?.websiteLink || ''}</a>
      </div>
    </>
  )
}

export const DataForm = React.memo(DataPasswordForm);