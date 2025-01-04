import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import TransactionForm from "../components/contributions/TransactionForm";
import MonthlyOverview from "../components/contributions/MonthlyOverview";
import TransactionList from "../components/contributions/TransactionList";
import { Transaction, MonthlyBalance } from "../types/contributions";
import { useContributions } from "../hooks/useContributions";

const Contributions = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const {fetchContributions, contributions} = useContributions();

  useEffect(() => {
    fetchContributions().then(() => {setTransactions(contributions)});
  }, []);

  const monthlyBalance: MonthlyBalance = {
    month: currentMonth.toLocaleString("default", {
      month: "long",
      year: "numeric",
    }),
    income: transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0),
    expenses: transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0),
    balance: 0,
  };
  monthlyBalance.balance = monthlyBalance.income - monthlyBalance.expenses;

  // const handleNewTransaction = async (transaction: Omit<Transaction, "_id">) => {
  //   const newTransaction = {
  //     ...transaction,
  //     _id: Math.random().toString(36).substr(2, 9),
  //   };
  //   await createContributionHook(newTransaction).then((res) => {
  //     console.log(res);
  //   });
  //   setTransactions([...transactions, newTransaction]);
  // };

  const changeMonth = (offset: number) => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(currentMonth.getMonth() + offset);
    setCurrentMonth(newDate);
  };

  return (
    <div className="p-6 ml-64">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Financial Contributions</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => changeMonth(-1)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-lg font-medium">
            {currentMonth.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </span>
          <button
            onClick={() => changeMonth(1)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <MonthlyOverview balance={monthlyBalance} />
        {/* <TransactionForm onSubmit={handleNewTransaction} /> */}
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
};

export default Contributions;
