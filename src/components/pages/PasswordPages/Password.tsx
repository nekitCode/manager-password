import React, { ChangeEvent, useState } from 'react';
import classnames from "classnames/bind";
import { useAppdispatch, useAppSelector } from "../../../hooks";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as PasswordIcon } from "../../../assets/contact_mail_black_24dp.svg";
import { ReactComponent as Edit } from "../../../assets/mode_white_24dp.svg";
import { ReactComponent as ArrowBackIcon } from "../../../assets/arrow_back_white_24dp.svg";
import { DataForm } from "./DataForm/DataForm";
import { Input } from "../../Input/Input";
import { Button } from "../../Button/Button";
import { IValuesPassword } from "../../../types/typePassword";
import { addDataPassword } from "../../../redux/reducer/passwordSlice";

import styles from './Password.module.scss';

const cx = classnames.bind(styles);

export const Password: React.FC = () => {
  const {id} = useParams();
  const card = useAppSelector(title => title.addCard);
  const valuesPassword = useAppSelector(data => data.addDataPassword);
  const indexCard = card.cards.findIndex(card => card?.id === Number(id));
  const dispatch = useAppdispatch();

  const [value, setValue] = useState<IValuesPassword>({
    id: null,
    name: '',
    account: '',
    password: '',
    websiteLink: '',
  });

  const getName = (value: ChangeEvent<HTMLInputElement>) => {
    setValue((name: IValuesPassword): IValuesPassword => {
      return {...name, name: value.target.value}
    });
  }

  const getaCount = (value: ChangeEvent<HTMLInputElement>) => {
    setValue((account: IValuesPassword): IValuesPassword => {
      return {...account, account: value.target.value}
    });
  }

  const getPassword = (value: ChangeEvent<HTMLInputElement>) => {
    setValue((password: IValuesPassword): IValuesPassword => {
      return {...password, password: value.target.value}
    });
  }

  const getWebsiteLink = (value: ChangeEvent<HTMLInputElement>) => {
    setValue((websiteLink: IValuesPassword): IValuesPassword => {
      return {...websiteLink, websiteLink: value.target.value}
    });
  }

  const setDataPassword = () => {
    if (indexCard === Number(id)) {
      const payload = {...value, id: Number(id)};
      dispatch(addDataPassword(payload));
    }
  }

  return (
    <div className={cx('Password')}>
      <div className={cx('password-main')}>
        <div className={cx('password-main__title')}>
          <Link to='/'>
            <ArrowBackIcon/>
          </Link>
          <div className={cx('password-main__icon-border')}>
            <PasswordIcon className={cx('password-main__icon')}/>
          </div>
          <h4>{card.titleCard}</h4>
        </div>
        <div className={cx('password-main__description')}>
          <DataForm valuesPassword={valuesPassword}/>
        </div>
      </div>
      <div className={cx('password-sidebar')}>
        <Input
          className={cx('password-sidebar__input')}
          placeholder='name'
          value={value.name}
          onChange={getName}
        />

        <Input
          className={cx('password-sidebar__input')}
          placeholder='account'
          value={value.account}
          onChange={getaCount}
        />
        <Input
          className={cx('password-sidebar__input')}
          placeholder='password'
          value={value.password}
          onChange={getPassword}
        />
        <Input
          className={cx('password-sidebar__input')}
          placeholder='insert link'
          value={value.websiteLink}
          onChange={getWebsiteLink}
        />
        <Button title='Edit' leftIcon={<Edit/>} onClick={setDataPassword}/>
      </div>
    </div>
  )
}