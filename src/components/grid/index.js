import React from "react";
import GridItem from "../gridItem";
import * as C from "./styles";

const Grid = ({ items, setItems }) => {
  const onDelete = (ID) => {
    const newArray = items.filter((transaction) => transaction.id !== ID);
    setItems(newArray);
    localStorage.removeItem.setItem("transaction", JSON.stringify(newArray));
  };

  return (
    <C.Table>
      <C.Thead>
        <C.Th width={40}>Description</C.Th>
        <C.Th width={40}>Value</C.Th>
        <C.Th width={10} alignCenter>
          Type
        </C.Th>
        <C.Th width={10}></C.Th>
      </C.Thead>
      <C.Tbody>
        {items?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;
