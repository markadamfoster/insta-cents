import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const [cents, setCents] = useLocalStorage("cents", 0);

  const addCents = (toAdd) => {
    const newVal = cents + toAdd;
    setCents(newVal);
  };

  useEffect(() => {
    document.title = `${cents}¢`;
  }, [cents]);

  const wholecents = cents.toString().split(".")[0];
  const partialcents = cents.toString().split(".")[1];

  return (
    <div className="App">
      <Cents>
        {wholecents}
        {partialcents ? <PartialCents>.{partialcents}</PartialCents> : null}
        <CentsSign>¢</CentsSign>
      </Cents>

      <Buttons>
        <Button onClick={() => addCents(0.5)}>Like - 0.5¢</Button>
        <Button onClick={() => addCents(2)}>Comment - 2¢</Button>
        <Button onClick={() => addCents(5)}>Follow - 5¢</Button>
        <Button onClick={() => addCents(25)}>Post - 25¢</Button>
        <Clear onClick={() => setCents(0)}>Clear</Clear>
      </Buttons>

      <Links>
        <a
          href="https://www.instagram.com/explore/tags/realestatephotographer/"
          target="_blank"
          rel="noreferrer"
        >
          #realestatephotographer
        </a>
        <a
          href="https://www.instagram.com/explore/tags/realestatephotography/"
          target="_blank"
          rel="noreferrer"
        >
          #realestatephotography
        </a>
      </Links>
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PartialCents = styled.div`
  font-size: 60px;
  padding-top: 55px;
  opacity: 0.8;
  margin-right: 5px;
`;

const CentsSign = styled.div``;

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
  background: #44d7b6bd;
  box-shadow: 0 2px 7px 0 #000000;
  border-radius: 30px;
  height: 58px;
  width: 320px;
  border: none;
  transition: background-color 200ms, transform 200ms;

  &:hover {
    background-color: var(--accent);
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.97);
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

const Links = styled.div`
  text-align: center;
  margin-top: 60px;

  a {
    display: block;
    margin-bottom: 10px;
  }
`;
