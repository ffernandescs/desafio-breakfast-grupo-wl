import { User } from "./user";

export interface Coffe {
  id: number
  item: string
  nome: string
  data: string
  usuario: User;
  dateCreate: string;
}

