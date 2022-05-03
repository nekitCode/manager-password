export interface IValuesPassword {
  id: number | null;
  name: string;
  account: string;
  password: string;
  websiteLink: string;
}

export interface ISetDataPassword {
  data: IValuesPassword[];
}
