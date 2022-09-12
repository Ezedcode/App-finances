import React from "react";
import ResumeItems from "../resumeItems/index";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = ({ inCome, expense, total }) => {
  return (
    <C.Container>
      <ResumeItems
        title="Entrance"
        Icon={FaRegArrowAltCircleUp}
        value={inCome}
      />
      <ResumeItems
        title="Outlet"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumeItems title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  );
};

export default Resume;
