import React, { useState } from "react";
import { Input } from "../../Input/Input";
import { options } from "../../../options/options";
import { DropDown } from "../../DropDown/DropDown";
import { ICard } from "../../../types/cards";
import { useAppdispatch, useAppSelector } from "../../../hooks";
import { Button } from "../../Button/Button";
import { addCardItem, selectedItem } from "../../../redux/reducer/cardList";
import { useLocation } from "react-router-dom";
import classnames from 'classnames/bind';

import styles from './SideBarRight.module.scss';

const cx = classnames.bind(styles);

export const SideBarRight: React.FC = () => {
  const currentPath = useLocation();
  const [value, setValue] = useState('');
  const [selectValue, setSelectValue] = useState<ICard>({
    id: 0,
    typeName: '',
    titleName: '',
    pathImg: '',
    pathName: '',
    color: '',
  });

  const cards = useAppSelector(cards => cards.addCard.cards);

  const dispatch = useAppdispatch();

  const handlerInput = (value: React.ChangeEvent<HTMLInputElement>) => {
    setValue(value.target.value);
  }

  const getValueSelect = (valueSelect: string, data: ICard) => {
    setSelectValue(data);
  }

  const sendDataByClick = () => {
    const sendData = {...selectValue, titleName: value, id: cards.length};
    dispatch(addCardItem(sendData));
    dispatch(selectedItem(value));
  }

  return (
    <>
      { currentPath.pathname === '/' ?
        (
          <div className={ cx("SideBardRight") }>
            <Input value={ value } handlerInput={ handlerInput }/>
            <DropDown options={ options } getValueSelect={ getValueSelect } selectValue={ selectValue }/>
            <Button title="CLICK" onClick={ sendDataByClick }/>
          </div>
        )
        :
        null
      }
    </>

  );
};
