export interface Diocese {
  id: string;
  name: string;
  location: string;
  bishop: string;
  totalParishes: number;
  monthlyContribution: number;
  yearlyBudget: number;
  lastUpdated: string;
}

export interface Dioceses {
  id: string;
  _id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  description: string;
  budgetAllocation: number;
  budgetYear: number;
  budgetMonth?: number;
  budgetQuarter: number;
  parish: Parish[];
}

export interface Parish {
  id: string;
  _id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  description: string;
  diocese: Dioceses;
  budgetAllocation: number;
  budgetYear: number;
  budgetMonth?: number;
  budgetQuarter: number;
  status?: string;
}

export interface ContributionData {
  month: string;
  amount: number;
  target: number;
}
