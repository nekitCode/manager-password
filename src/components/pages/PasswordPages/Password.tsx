import React, { ChangeEvent, useMemo, useState } from "react";
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
import {
  addDataPassword,
  editDataPassword,
} from "../../../redux/reducer/passwordSlice";

import styles from "./Password.module.scss";

const cx = classnames.bind(styles);

type EventInput = ChangeEvent<HTMLInputElement>;

export const Password: React.FC = () => {
  const { id } = useParams();
  const [value, setValue] = useState<IValuesPassword>({
    id: null,
    name: "",
    account: "",
    password: "",
    websiteLink: "",
  });

  const card = useAppSelector((title) => title.addCard);
  const valuesPassword = useAppSelector((data) => data.addDataPassword);
  const dispatch = useAppdispatch();

  const indexCard = useMemo(() => {
    return card.cards.find((card) => card?.id === Number(id));
  }, [card, id]);

  const currentPropertyPassword = useMemo(() => {
    return valuesPassword.data.find((password) => password.id === Number(id));
  }, [valuesPassword, id]);

  const getName = (value: EventInput) => {
    setValue((name: IValuesPassword): IValuesPassword => {
      return { ...name, name: value.target.value };
    });
  };

  const getAccount = (value: EventInput) => {
    setValue((account: IValuesPassword): IValuesPassword => {
      return { ...account, account: value.target.value };
    });
  };

  const getPassword = (value: EventInput) => {
    setValue((password: IValuesPassword): IValuesPassword => {
      return { ...password, password: value.target.value };
    });
  };

  const getWebsiteLink = (value: EventInput) => {
    setValue((websiteLink: IValuesPassword): IValuesPassword => {
      return { ...websiteLink, websiteLink: value.target.value };
    });
  };

  const addPassword = () => {
    const payload = { ...value, id: Number(id) };
    dispatch(addDataPassword(payload));
    setValue(() => ({
      id: null,
      name: "",
      account: "",
      password: "",
      websiteLink: "",
    }));
  };

  const editPassword = () => {
    const payload = { ...value, id: Number(id) };
    dispatch(editDataPassword(payload));
    setValue(() => ({
      id: null,
      name: "",
      account: "",
      password: "",
      websiteLink: "",
    }));
  };

  return (
    <div className={cx("Password")}>
      <div className={cx("password-main")}>
        <div className={cx("password-main__title")}>
          <Link to="/">
            <ArrowBackIcon />
          </Link>
          <div className={cx("password-main__icon-border")}>
            <PasswordIcon className={cx("password-main__icon")} />
          </div>
          <h4 style={{ color: indexCard?.color }}>{card.titleCard}</h4>
        </div>
        <div className={cx("password-main__description")}>
          <DataForm
            colorText={indexCard?.color}
            valuesPassword={valuesPassword}
          />
        </div>
      </div>
      <div className={cx("password-sidebar")}>
        <Input
          className={cx("password-sidebar__input")}
          placeholder="name"
          value={value.name}
          onChange={getName}
        />

        <Input
          className={cx("password-sidebar__input")}
          placeholder="account"
          value={value.account}
          onChange={getAccount}
        />
        <Input
          className={cx("password-sidebar__input")}
          placeholder="password"
          value={value.password}
          onChange={getPassword}
        />
        <Input
          className={cx("password-sidebar__input")}
          placeholder="insert link"
          value={value.websiteLink}
          onChange={getWebsiteLink}
        />
        {!valuesPassword.data[Number(id)] && (
          <Button title="Add" leftIcon={<Edit />} onClick={addPassword} />
        )}
        {indexCard?.id === Number(id) && (
          <Button title="Edit" leftIcon={<Edit />} onClick={editPassword} />
        )}
      </div>
    </div>
  );
};
