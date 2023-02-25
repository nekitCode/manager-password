export interface ICard {
  titleName: string;
  typeName: string;
  color: string;
  pathImg: string;
  pathName: string;
  id: number;
}

export interface ICardState {
  cards: ICard[];
  titleCard: string;
}

export enum CardActionType {
  ADD_CARD = "ADD_CARD",
  ADD_DATA_PASSWORD = "ADD_DATA_PASSWORD",
}

interface IActionAddCard {
  type: CardActionType.ADD_CARD;
  payload: ICardState;
}

export type CardAction = IActionAddCard;
