import React from 'react';
import { useAppSelector } from "../../../hooks";
import { useParams } from "react-router-dom";

export function Bank() {
  const title = useAppSelector(title => title.addCard.titleCard);
  const params = useParams();
  console.log(params);
  return (
    <div>
      { title }
    </div>
  );
}
