import React from 'react';

import './App.css';
import './styles/index.scss';
import Button from './components/Button';

function App() {
  return (
    <>
      <br /><br />
      <Button btnType='default' disabled>默认样式 disabled</Button>
      <br /><br />
      <Button btnType='primary' size='lg'>primary lg</Button>
      <br /><br />
      <Button btnType='danger' size='sm'>danger sm</Button>
      <br /><br />
      <Button btnType='link'>link按钮</Button>
      <br /><br />
    </>
  );
}

export default App;
