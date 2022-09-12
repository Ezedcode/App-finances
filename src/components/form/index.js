import { useState } from "react";
import React from "react";
import * as C from "./styles";
import Grid from "../grid";

const Form = ({ handleAdd, transactionList, setTransactionList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Inform the value's description!");
      return;
    } else if (amount < 1) {
      alert("The value must be positive!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Description</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Value</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setIsExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Entrance</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setIsExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Outlet</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADD</C.Button>
      </C.Container>
      <Grid items={transactionList} setItems={setTransactionList} />
    </>
  );
};

export default Form;
