import { useEffect, useState } from "react";
import React from "react";
import Form from "./components/form";
import Header from "./components/header";
import Resume from "./components/resume";
import GlobalStyle from "./styles/global";

const App = () => {
  const data = localStorage.getItem("transitions");
  const [transactionList, setTransactionList] = useState(
    data ? JSON.parse(data) : []
  );

  const [inCome, setInCome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountInCome = transactionList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const inCome = amountInCome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(inCome - expense).toFixed(2);

    setInCome(`$ ${inCome}`);
    setExpense(`$ ${expense}`);
    setTotal(`${Number(inCome) < Number(expense) ? "-" : ""}$ ${total}`);
  }, [transactionList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionList, transaction];
    setTransactionList(newArrayTransactions);
    localStorage.setItem("transaction", JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Header />
      <Resume inCome={inCome} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionList={transactionList}
        setTransactionList={setTransactionList}
      />
      <GlobalStyle />
    </>
  );
};

export default App;
