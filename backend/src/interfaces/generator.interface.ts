export interface IGenerator {
  id: number;
  name: string;
  urlResepsi: string;
  urlUnduh: string;
  urlResepsiUnduh: string;
  copiedResepsi: boolean;
  copiedUnduh: boolean;
  copiedResepsiUnduh: boolean;
}

export enum InvitationType {
  Unduh = "unduh",
  Resepsi = "resepsi",
  ResepsiUnduh = "resepsiunduh",
}
