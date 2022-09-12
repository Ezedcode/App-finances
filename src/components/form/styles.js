import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 90%;
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;
  @media (max-width: 817px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 817px) {
    width: 70%;
  }
`;

export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  margin-right: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  input {
    margin-left: 20px;
    accent-color: black;
    margin-top: 0;
    @media (max-width: 817px) {
      margin: 5px;
    }
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: teal;
  @media (max-width: 817px) {
    width: 70%;
  }
`;
