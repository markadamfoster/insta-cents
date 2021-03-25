import React, { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
  const [cents, setCents] = useState(0);

  const addCents = (toAdd) => {
    const newVal = cents + toAdd;
    setCents(newVal);
  };

  useEffect(() => {
    document.title = `${cents}¢`;
  }, [cents]);

  return (
    <div className="App">
      <Cents>{cents.toFixed(0)}¢</Cents>

      <Buttons>
        <Button onClick={() => addCents(0.5)}>Like - 0.5¢</Button>
        <Button onClick={() => addCents(2)}>Comment - 2¢</Button>
        <Button onClick={() => addCents(5)}>Follow - 5¢</Button>
        <Button onClick={() => addCents(25)}>Post - 25¢</Button>
        <Clear onClick={() => setCents(0)}>Clear</Clear>
      </Buttons>
    </div>
  );
}

export default App;

const Cents = styled.div`
  margin-top: 30px;
  color: #44d7b6;
  font-weight: 900;
  font-size: 140px;
  text-align: center;
`;

const Buttons = styled.div`
  margin: 30px auto 0;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  font-weight: 900;
  font-size: 23px;
  color: #ffffff;
  text-align: left;
  background: #25413a;
  box-shadow: 0 2px 7px 0 #000000;
  border-radius: 30px;
  height: 58px;
  width: 320px;
  border: none;
  transition: background-color 200ms;

  &:hover {
    background-color: #37ac92;
  }

  &:focus {
    outline: none;
  }
`;

const Clear = styled(Button)`
  background: #262626;

  &:hover {
    background-color: #434343;
  }

  &:focus {
    outline: none;
  }
`;
