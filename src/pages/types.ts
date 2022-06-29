export interface Level {
  name: string;
  field: number;
}

export interface State {
  data: Level[];
  level: Level;
  hover: Hover[];
}

export interface Hover {
  row: number;
  col: number;
  hover: boolean;
}
