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
}

interface IActionAddCard {
  type: CardActionType.ADD_CARD;
  payload: ICardState;
}

export type CardAction = IActionAddCard;
