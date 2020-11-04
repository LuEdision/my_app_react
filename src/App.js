/*
 * @Description: App.js
 * @Version: 1.0
 * @Autor: Edison Lu
 * @Date: 2020-10-29 11:30:49
 * @LastEditors: Edison Lu
 * @LastEditTime: 2020-10-30 16:48:43
 */
import logo from './logo.svg';
import './App.css';

import { Button, Radio } from 'element-react';  //引入element-react
import 'element-theme-default'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary">element按钮</Button>
        <Radio name="small" value="1">備選項</Radio>
        <Radio name="small" value="2">備選項</Radio>
      </header>
    </div>
  );
}

export default App;
