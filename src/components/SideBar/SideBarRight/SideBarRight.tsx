import React, { useState } from "react";
import { Input } from "../../Input/Input";
import { options } from "../../../options/options";
import { DropDown } from "../../DropDown/DropDown";
import { ICard } from "../../../types/cards";
import { useAppdispatch, useAppSelector } from "../../../hooks";
import { Button } from "../../Button/Button";
import { addCardItem, selectedItem } from "../../../redux/reducer/cardList";
import { useLocation } from "react-router-dom";
import { ReactComponent as Plus } from "../../../assets/add_circle_white_24dp.svg";
import classnames from "classnames/bind";

import styles from "./SideBarRight.module.scss";

const cx = classnames.bind(styles);

export const SideBarRight: React.FC = () => {
  const currentPath = useLocation();
  const pathHome = currentPath.pathname === "/";
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState<ICard>({
    id: 0,
    typeName: "",
    titleName: "",
    pathImg: "",
    pathName: "",
    color: "",
  });

  const cards = useAppSelector((cards) => cards.addCard.cards);

  const dispatch = useAppdispatch();

  const handlerInput = (value: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value.target.value);
  };

  const getValueSelect = (valueSelect: string, data: ICard) => {
    setSelectValue(data);
  };

  const sendDataByClick = () => {
    const setData = { ...selectValue, titleName: inputValue, id: cards.length };
    dispatch(addCardItem(setData));
    dispatch(selectedItem(inputValue));
    setInputValue("");
  };

  return (
    <>
      {pathHome ? (
        <div className={cx("SideBardRight")}>
          <div className={cx("test")}>
            <Input value={inputValue} onChange={handlerInput} />
            <DropDown
              options={options}
              getValueSelect={getValueSelect}
              selectValue={selectValue}
            />
            <Button title="Add" onClick={sendDataByClick} leftIcon={<Plus />} />
          </div>
        </div>
      ) : null}
    </>
  );
};
