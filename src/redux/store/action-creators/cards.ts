import { CardAction, CardActionType, ICard, ICardState } from "../../../types/cards";

export function addCards(payload: ICardState): CardAction {
  return { type: CardActionType.ADD_CARD, payload };
}

// export function setCards(): CardsAction {
//   return { type: CardsActionType.SET_CARDS };
// }
//
// export function setTitleName(payload: string): CardsAction {
//   return { type: CardsActionType.SET_TITLE_NAME, payload };
// }
