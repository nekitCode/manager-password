import React, { useState, MouseEvent } from "react";
import { ICard } from "../../types/cards";
import { IconComponent } from "../IconComponent/IconComponent";
import { ICON_MAP, EIconTypes } from "../IconComponent/IconFactory";

import "./DropDown.scss";

interface IInputSelect {
  options: ICard[];
  getValueSelect: (value: string, data: ICard) => void;
  selectValue: ICard;
}

export const DropDown: React.FC<IInputSelect> = (props) => {
  const {options, getValueSelect, selectValue} = props;
  const [isActive, setIsActive] = useState(false);

  const handlerDropDown = () => {
    setIsActive((active) => !active);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__btn" onClick={ handlerDropDown }>
        { selectValue.typeName || '...' }
        <IconComponent pathIcon={ ICON_MAP[EIconTypes.ARROW_DOWN] }/>
      </div>
      { isActive && (
        <div className="dropdown__content">
          { options.map((name: ICard) => (
            <div
              className="dropdown__item"
              key={ name.typeName }
              onClick={ (event: MouseEvent<HTMLDivElement>) => {
                const innerText = event.target as HTMLElement;
                getValueSelect(innerText.innerText, name);
                setIsActive((isActive) => !isActive);
              } }
            >
              <span
                style={ {background: name.color} }
                className="dropdown__circle"
              >
                { "" }
              </span>
              <div className="dropdown__type-name">{ name.typeName }</div>
            </div>
          )) }
        </div>
      ) }
    </div>
  );
};
