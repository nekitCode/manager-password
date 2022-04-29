import ArrowDown from "../../assets/arrowDown.svg";
export const enum EIconTypes {
  ARROW_DOWN = "ARROW_DOWN",
}

type TIconMap = {
  [key in EIconTypes]: string;
};

export const ICON_MAP: TIconMap = {
  [EIconTypes.ARROW_DOWN]: ArrowDown,
};
