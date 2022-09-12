import React from "react";
import { Container } from "../form/styles";
import * as C from "./styles";

const Grid = () => {
  return (
    <C.Table>
      <C.Thead>
        <C.Tr width={40}>Description</C.Tr>
        <C.Tr width={40}>Value</C.Tr>
        <C.Tr width={10} align="center">
          Type
        </C.Tr>
      </C.Thead>
    </C.Table>
  );
};

export default Grid;
