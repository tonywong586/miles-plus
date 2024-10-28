export interface DepositPlan {
  id: string;
  months: number;
  apy: number;
  extraApy: number;
  maxAmount: number;
}

export const depositPlanData: DepositPlan[] = [
  {
    id: "1",
    months: 3,
    apy: 3,
    extraApy: 0.5,
    maxAmount: 10000,
  },
  {
    id: "2",
    months: 6,
    apy: 3.5,
    extraApy: 0.5,
    maxAmount: 50000,
  },
  {
    id: "3",
    months: 9,
    apy: 4,
    extraApy: 0.5,
    maxAmount: 30000,
  },
];
