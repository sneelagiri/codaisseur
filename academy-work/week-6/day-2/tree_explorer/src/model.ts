// src/model.ts
export interface TreeData {
  id: string;
  name: string;
  scientificName: string;
  numLikes: number;
}

export interface Trees {
  id: string;
  name: string;
  scientificName: string;
  numLikes: number;
  onLike: (name: string) => void;
}
