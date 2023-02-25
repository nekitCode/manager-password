import React from "react";
import {
  ISetDataPassword,
  IValuesPassword,
} from "../../../../types/typePassword";
import { useParams } from "react-router-dom";

import styles from "./DataForm.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

interface IDataFormProps {
  valuesPassword: ISetDataPassword;
  colorText?: string;
}

//TODO:переделать этот компонент

const DataPasswordForm: React.FC<IDataFormProps> = (props) => {
  const { valuesPassword, colorText } = props;
  const { id } = useParams();
  const data = valuesPassword.data.find(
    (el: IValuesPassword) => el.id === Number(id)
  );
  return (
    <>
      <h4 style={{ color: colorText }}>name:</h4>
      <p className={cx("data-form")}>{data?.name || ""}</p>
      <h4 style={{ color: colorText }}>account:</h4>
      <p className={cx("data-form")}>{data?.account || ""}</p>
      <h4 style={{ color: colorText }}>password:</h4>
      <p className={cx("data-form")}>{data?.password || ""}</p>
      <h4 style={{ color: colorText }}>website link:</h4>
      <div className={cx("data-form link")}>
        <a className={cx("a")} href={data?.websiteLink}>
          {data?.websiteLink || ""}
        </a>
      </div>
    </>
  );
};

export const DataForm = React.memo(DataPasswordForm);
