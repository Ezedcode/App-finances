import React from "react";
import ResumeItems from "../resumeItems/index";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = () => {
  return (
    <C.Container>
      <ResumeItems title="Entrance" Icon={FaRegArrowAltCircleUp} value="1000" />
      <ResumeItems title="Outlet" Icon={FaRegArrowAltCircleDown} value="1000" />
      <ResumeItems title="Total" Icon={FaDollarSign} value="1000" />
    </C.Container>
  );
};

export default Resume;
