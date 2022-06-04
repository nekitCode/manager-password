import React from "react";
import { ReactComponent as IconEdit } from "../../assets/mode_white_24dp.svg";
import { ReactComponent as IconTrash } from "../../assets/delete_white_24dp.svg";
import { deleteItem, selectedItem } from "../../redux/reducer/cardList";
import { deleteDataPassword } from "../../redux/reducer/passwordSlice";
import { useAppdispatch, useAppSelector } from "../../hooks";
import { IconComponent } from "../IconComponent/IconComponent";
import { Link } from "react-router-dom";
import classnames from "classnames/bind";

import styles from "./TypeCard.module.scss";

const cx = classnames.bind(styles);

export const TypeCard = () => {
  const card = useAppSelector((card) => card.addCard.cards);
  const dispatch = useAppdispatch();
  return (
    <div className={cx("TypeCard")}>
      {card?.map((card) => {
        return (
          <React.Fragment key={card.id}>
            <div
              style={{ borderRight: `10px solid ${card.color}` }}
              className={cx("card")}
            >
              <div className={cx("description")}>
                <div className={cx("description__card")}>
                  <div className={cx("description__circle-img")}>
                    <IconComponent
                      pathIcon={card.pathImg}
                      alt={card.typeName}
                    />
                  </div>
                  <div className={cx("name-card")}>
                    <p>{card.titleName}</p>
                    <p style={{ color: card.color }}>{card.typeName}</p>
                  </div>
                </div>
                <div className={cx("card-links")}>
                  <Link to={`${card.pathName}/${card.id}`}>
                    <IconEdit
                      onClick={() => dispatch(selectedItem(card.titleName))}
                    />
                  </Link>
                  <IconTrash
                    onClick={() => {
                      dispatch(deleteDataPassword(card.id));
                      dispatch(deleteItem(card.id));
                      dispatch(selectedItem(""));
                    }}
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
