import React from "react";
import { ISetDataPassword } from "../../../../types/typePassword";
import classnames from "classnames/bind";

import styles from "./DataForm.module.scss";
import { useParams } from "react-router-dom";

const cx = classnames.bind(styles);

interface IDataFormProps {
  valuesPassword: ISetDataPassword;
  colorText?: string;
}

//TODO:переделать этот компонент

const DataPasswordForm: React.FC<IDataFormProps> = (props) => {
  const {id} = useParams();
  const {valuesPassword, colorText} = props;
  const data = valuesPassword.data.find((el: any) => el.id === Number(id));
  return (
    <>
      <h4 style={{color: colorText}}>name:</h4>
      <p className={cx("data-form")}>{data?.name || ""}</p>
      <h4 style={{color: colorText}}>account:</h4>
      <p className={cx("data-form")}>{data?.account || ""}</p>
      <h4 style={{color: colorText}}>password:</h4>
      <p className={cx("data-form")}>{data?.password || ""}</p>
      <h4 style={{color: colorText}}>websiteLink:</h4>
      <div className={cx("data-form link")}>
        <a className={cx("a")} href={data?.websiteLink}>
          {data?.websiteLink || ""}
        </a>
      </div>
    </>
  );
};

export const DataForm = React.memo(DataPasswordForm);
