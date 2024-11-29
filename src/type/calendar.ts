export type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export interface EventType {
  reposeId: number;
  reposeTotalMinutes: number;
  todayEmotion: string;
  date: string;
}

export interface EventDetailType {
  date: string;
  done: boolean;
  recipeDefinition: string;
  recipeSatisfaction: number;
  reposeId: number;
  reposeTotalMinutes: number;
  todayDefinition: string;
  todayEmotion: string;
}
