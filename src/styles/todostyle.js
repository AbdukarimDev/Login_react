import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  background: #0f172a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 260px);
  gap: 20px;
`;

export const Card = styled.div`
  background: #020617;
  padding: 16px;
  border-radius: 12px;
  color: white;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px;
  background: #6366f1;
  color: white;
  border: none;
  cursor: pointer;
`;

export const List = styled.ul`
  margin-top: 10px;
`;

export const Item = styled.li`
  font-size: 14px;
  margin-bottom: 4px;
`;
