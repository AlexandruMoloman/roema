import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppContainer>
      <h1>Welcome to My App</h1>
    </AppContainer>
  );
}

export default App;
