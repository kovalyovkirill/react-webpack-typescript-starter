import React from 'react';
import styles from './App.module.css';

interface IProps {
  some: string;
}

const App: React.FC<IProps> = ({ some }) => {
  console.log(some); //eslint-disable-line

  return (
    <div className={styles.test}>
      <h1>Hello, Reacst + TS + CSS Modules!</h1>
    </div>
  );
};

export default App;
