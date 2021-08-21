export interface Account {
  id: number;
  name: string;
  description: string;
  type: string;
  balance: number;
  currency: string;
  createdAt: Date;
  updatedAt: Date;
}
