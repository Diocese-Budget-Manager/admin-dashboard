export interface Transaction {
  _id: string;
  date: string;
  type: "income" | "expense";
  description: string;
  amount: number;
  source: string;
  parish: string;
  diocese: string;
}

export interface MonthlyBalance {
  month: string;
  income: number;
  expenses: number;
  balance: number;
}
