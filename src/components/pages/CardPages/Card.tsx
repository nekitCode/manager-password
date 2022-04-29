import React from "react";
import { useAppSelector } from "../../../hooks";

export const Card = () => {
  const title = useAppSelector(test => test.addCard.titleCard);
  return <div>{ title }</div>;
};
