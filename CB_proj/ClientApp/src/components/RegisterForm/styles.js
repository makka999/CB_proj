import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Form = styled.form`
  background: #2c456b;
  overflow: hidden;
  border: 1px solid #83aff0;
  box-shadow: 2px 0 2px 0 #0000;
  border-radius: 20px;
  color: #ffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const FormButton = styled.button`
  background: #36393e;
  border: none;
  border-radius: 8px;
  color: white;
`;
export const FormLegend = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  padding: 4px;
`;
export const FormArea = styled.div`
  width: 100%;
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;

  color: white;
  background: #4779c4;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
`;
