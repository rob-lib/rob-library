export interface Character {
  readonly char_id: number;
  name: string;
  birthday: Date;
  occupation: string[];
  img: URL;
  nickname: string;
  portrayed: string;
  status: string;
  category: string;
  appearance: string;
}
