export type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export interface EventType {
  reposeId: number;
  reposeTotalMinutes: number;
  todayEmotion: string;
  date: string;
}
