/*
 * Custom typrd to accomodate responses from the API
 */

export interface ICategory {
  categories: String[];
}

export interface IState {
  categories: Array<String>;
  randomjoke: String;
}

export interface IAction {
  type: String;
  payload: any;
}

export interface IJoke {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: number;
  updated_at: string;
  url: string;
  value: string;
}
